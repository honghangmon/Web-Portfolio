export class Home {
  render() {
    return `
      <main class="page home-page">
        <!-- Ask Why 섹션 -->
        <section class="ask-why">
          <div class="ask-why-content">
            <h1 class="ask-why-title">Ask Why</h1>
            <p class="ask-why-subtitle">이유를 질문하는 개발자</p>
            <div class="ask-why-description">
              <p>"왜 이 기술을 사용해야 할까?"</p>
              <p>"왜 이 기능이 있어야할까?"</p>
              <p>"왜 이렇게 구현하는 것이 최선일까?"</p>
              <p class="highlight">끊임없는 질문을 통해 더 나은 솔루션을 찾아갑니다.</p>
            </div>
          </div>
        </section>

        <!-- Who Am I 섹션 -->
        <section class="who-am-i">
          <div class="who-am-i-content">
            <h2>Who Am I</h2>
            <div class="profile-card">
              <div class="profile-avatar">👨‍💻</div>
              <div class="profile-info">
                <h3>프론트엔드 개발자</h3>
                <p class="profile-name">이윤준</p>
                <p class="profile-intro">
                  사용자 경험을 최우선으로 생각하며, 
                  직관적이고 아름다운 웹 애플리케이션을 만드는 것을 즐깁니다.
                </p>
                <div class="profile-stats">
                  <div class="stat">
                    <span class="stat-number">신입</span>
                    <span class="stat-label">경력</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">20+</span>
                    <span class="stat-label">프로젝트</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">열정</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills 섹션 -->
        <section class="skills">
          <div class="skills-content">
            <h2>Skills</h2>
            <div class="skills-categories">
              <div class="skill-category">
                <h3>Frontend</h3>
                <div class="skill-items">
                  <div class="skill-item">
                    <span class="skill-name">React</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 90%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">Vue.js</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">JavaScript</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 95%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">TypeScript</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 80%"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="skill-category">
                <h3>Design & Tools</h3>
                <div class="skill-items">
                  <div class="skill-item">
                    <span class="skill-name">CSS/SCSS</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 90%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">Figma</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 75%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">Git</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="skill-item">
                    <span class="skill-name">Vite</span>
                    <div class="skill-level">
                      <div class="skill-bar" style="width: 88%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects 섹션 -->
        <section class="projects-preview">
          <div class="projects-content">
            <h2>Projects</h2>
            <div class="projects-grid">
              <div class="project-card">
                <div class="project-icon">🛒</div>
                <h3>Trivese</h3>
                <p>1:1 버츄얼 유튜버 채팅 서비스</p>
                <div class="project-tech">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">MongoDB</span>
                </div>
              </div>
              <div class="project-card">
                <div class="project-icon">📋</div>
                <h3>Good Dog</h3>
                <p>구독 요금 관리 프로젝트</p>
                <div class="project-tech">
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">Firebase</span>
                  <span class="tech-tag">CSS3</span>
                </div>
              </div>
              <div class="project-card">
                <div class="project-icon">🌤️</div>
                <h3>Randesviews</h3>
                <p>약속장소 추천 서비스</p>
                <div class="project-tech">
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">API</span>
                  <span class="tech-tag">Chart.js</span>
                </div>
              </div>
            </div>
            <div class="projects-cta">
              <a href="#/work" class="btn btn-primary">모든 프로젝트 보기</a>
            </div>
          </div>
        </section>

        <!-- Hobbies & Interests 섹션 -->
        <section class="hobbies">
          <div class="hobbies-content">
            <h2>Hobbies & Interests</h2>
            <div class="hobbies-grid">
              <div class="hobby-item">
                <div class="hobby-icon">📚</div>
                <h3>만화</h3>
                <p>기술 서적과 소설을 즐겨 읽습니다</p>
              </div>
              <div class="hobby-item">
                <div class="hobby-icon">🎵</div>
                <h3>음악</h3>
                <p>개발할 때는 항상 음악과 함께합니다</p>
              </div>
              <div class="hobby-item">
                <div class="hobby-icon">☕</div>
                <h3>커피</h3>
                <p>새로운 카페를 찾아다니는 것을 좋아합니다</p>
              </div>
              <div class="hobby-item">
                <div class="hobby-icon">🏃‍♂️</div>
                <h3>운동</h3>
                <p>러닝과 헬스로 몸과 마음을 관리합니다</p>
              </div>
              <div class="hobby-item">
                <div class="hobby-icon">🎮</div>
                <h3>게임</h3>
                <p>인디 게임과 퍼즐 게임을 즐깁니다</p>
              </div>
              <div class="hobby-item">
                <div class="hobby-icon">✈️</div>
                <h3>여행</h3>
                <p>새로운 곳을 탐험하는 것을 좋아합니다</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA 섹션 -->
        <section class="cta">
          <div class="cta-content">
            <h2>함께 일하고 싶으시다면</h2>
            <p>새로운 프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요</p>
            <div class="cta-actions">
              <a href="#/contact" class="btn btn-primary">연락하기</a>
              <a href="#/about" class="btn btn-secondary">더 알아보기</a>
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
