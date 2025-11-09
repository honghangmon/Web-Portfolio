import { Home } from './pages/Home.js'
import { About } from './pages/About.js'
import { Work } from './pages/Work.js'
import { Guestbook } from './pages/Guestbook.js'
import { Contact } from './pages/Contact.js'

export class Router {
  constructor() {
    this.routes = {
      '': Home,
      '#/': Home,
      '#/about': About,
      '#/work': Work,
      '#/guestbook': Guestbook,
      '#/contact': Contact
    }
    this.currentPage = null
    this.loadedStyles = new Set()
  }

  init() {
    // 해시 변경 이벤트 리스너
    window.addEventListener('hashchange', () => this.handleRoute())
    
    // 브라우저 뒤로가기/앞으로가기 처리
    window.addEventListener('popstate', () => this.handleRoute())
  }

  handleRoute() {
    const hash = window.location.hash || '#/'
    const PageComponent = this.routes[hash]
    
    if (PageComponent) {
      // 이전 페이지 정리
      if (this.currentPage && this.currentPage.cleanup) {
        this.currentPage.cleanup()
      }
      
      // 새 페이지 렌더링
      this.currentPage = new PageComponent()
      this.loadPageStyles(hash)
      this.render()
    } else {
      // 404 처리
      this.render404()
    }
  }

  loadPageStyles(hash) {
    const pageName = hash.replace('#/', '') || 'home'
    const styleId = `page-${pageName}-style`
    
    // 이미 로드된 스타일이면 스킵
    if (this.loadedStyles.has(styleId)) return
    
    // CSS 파일 동적 로드
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `/src/styles/pages/${pageName}.css`
    link.id = styleId
    
    document.head.appendChild(link)
    this.loadedStyles.add(styleId)
  }

  render() {
    const app = document.getElementById('app')
    if (this.currentPage) {
      app.innerHTML = this.currentPage.render()
      
      // 페이지별 초기화
      if (this.currentPage.init) {
        this.currentPage.init()
      }
    }
  }

  render404() {
    const app = document.getElementById('app')
    app.innerHTML = `
      <div class="error-page">
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <a href="#/">홈으로 돌아가기</a>
      </div>
    `
  }

  // 프로그래밍 방식으로 라우트 변경
  navigate(hash) {
    window.location.hash = hash
  }
}
