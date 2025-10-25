export class Home {
  render() {
    return `
      <main class="page home-page">
        <section class="hero">
          <div class="hero-content">
            <h1 class="hero-title">안녕하세요, 개발자입니다</h1>
            <p class="hero-subtitle">창의적이고 사용자 중심의 웹 솔루션을 만듭니다</p>
            <div class="hero-actions">
              <a href="#/about" class="btn btn-primary">더 알아보기</a>
              <a href="#/work" class="btn btn-secondary">포트폴리오 보기</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-card">
              <div class="profile-avatar">👨‍💻</div>
              <h3>Frontend Developer</h3>
              <p>React, Vue, JavaScript</p>
            </div>
          </div>
        </section>
        
        <section class="skills-preview">
          <h2>주요 기술</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <span class="skill-icon">⚛️</span>
              <h3>Frontend</h3>
              <p>React, Vue, JavaScript, TypeScript</p>
            </div>
            <div class="skill-item">
              <span class="skill-icon">🎨</span>
              <h3>Design</h3>
              <p>UI/UX, CSS, Figma</p>
            </div>
            <div class="skill-item">
              <span class="skill-icon">⚙️</span>
              <h3>Tools</h3>
              <p>Git, Vite, Node.js</p>
            </div>
          </div>
        </section>
      </main>
    `
  }

  init() {
    // 페이지별 초기화 로직
    console.log('Home 페이지 로드됨')
  }
}
