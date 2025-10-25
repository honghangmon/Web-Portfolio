export class Navbar {
  constructor() {
    this.navItems = [
      { href: '#/', label: 'Home', icon: '🏠' },
      { href: '#/about', label: 'About', icon: '👨‍💻' },
      { href: '#/work', label: 'Work', icon: '💼' },
      { href: '#/guestbook', label: 'Guestbook', icon: '📝' },
      { href: '#/contact', label: 'Contact', icon: '📧' }
    ]
  }

  render() {
    const navbar = document.createElement('nav')
    navbar.className = 'navbar'
    navbar.innerHTML = `
      <div class="navbar-container">
        <div class="navbar-brand">
          <a href="#/">Portfolio</a>
        </div>
        <ul class="navbar-menu">
          ${this.navItems.map(item => `
            <li class="navbar-item">
              <a href="${item.href}" class="navbar-link" data-route="${item.href}">
                <span class="navbar-icon">${item.icon}</span>
                <span class="navbar-label">${item.label}</span>
              </a>
            </li>
          `).join('')}
        </ul>
        <button class="navbar-toggle" aria-label="메뉴 열기">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    `
    
    // 기존 네비게이션 바 제거 후 새로 추가
    const existingNav = document.querySelector('.navbar')
    if (existingNav) {
      existingNav.remove()
    }
    
    document.body.insertBefore(navbar, document.body.firstChild)
    this.bindEvents()
  }

  bindEvents() {
    // 모바일 메뉴 토글
    const toggle = document.querySelector('.navbar-toggle')
    const menu = document.querySelector('.navbar-menu')
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('active')
        toggle.classList.toggle('active')
      })
    }

    // 활성 링크 표시
    this.updateActiveLink()
    
    // 해시 변경 시 활성 링크 업데이트
    window.addEventListener('hashchange', () => this.updateActiveLink())
  }

  updateActiveLink() {
    const currentHash = window.location.hash || '#/'
    const links = document.querySelectorAll('.navbar-link')
    
    links.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('data-route') === currentHash) {
        link.classList.add('active')
      }
    })
  }
}
