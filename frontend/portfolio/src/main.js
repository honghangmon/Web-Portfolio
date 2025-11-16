import { Router } from './router.js'
import { Navbar } from './components/Navbar.js'

// 앱 초기화
class App {
  constructor() {
    this.router = new Router()
    this.navbar = new Navbar()
    this.init()
  }

  init() {
    // 네비게이션 바 렌더링
    this.navbar.render()
    
    // 라우터 시작
    this.router.init()
    
    // 초기 라우트 처리
    this.router.handleRoute()
  }
}

// 앱 시작
new App()
