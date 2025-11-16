export class About {
  render() {
    return `
      <main class="page about-page">
        <section class="about-hero">
          <h1>About Me</h1>
          <p class="about-intro">사용자 경험을 중시하는 프론트엔드 개발자입니다</p>
        </section>

        <section class="about-content">
          <div class="about-section">
            <h2>경력</h2>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-date">2023 - 현재</div>
                <div class="timeline-content">
                  <h3>프론트엔드 개발자</h3>
                  <p>사용자 중심의 웹 애플리케이션 개발</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-date">2022 - 2023</div>
                <div class="timeline-content">
                  <h3>웹 개발 인턴</h3>
                  <p>React 기반 웹 애플리케이션 개발</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2>기술 스택</h2>
            <div class="skills-detailed">
              <div class="skill-category">
                <h3>Frontend</h3>
                <div class="skill-tags">
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div class="skill-category">
                <h3>Tools & Others</h3>
                <div class="skill-tags">
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">Figma</span>
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">Vite</span>
                </div>
              </div>
            </div>
          </div>

          <div class="about-section">
            <h2>개발 철학</h2>
            <div class="philosophy">
              <div class="philosophy-item">
                <h3>사용자 중심</h3>
                <p>사용자의 니즈를 이해하고 직관적인 인터페이스를 만듭니다</p>
              </div>
              <div class="philosophy-item">
                <h3>성능 최적화</h3>
                <p>빠르고 효율적인 웹 애플리케이션을 구현합니다</p>
              </div>
              <div class="philosophy-item">
                <h3>지속적 학습</h3>
                <p>새로운 기술을 배우고 적용하는 것을 즐깁니다</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  }

  init() {
    console.log('About 페이지 로드됨')
  }
}
