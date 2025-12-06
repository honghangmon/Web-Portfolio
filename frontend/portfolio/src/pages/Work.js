import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export class Work {

  render() {
    return `
      <main class="page work-page">
        <section class="work-hero">
          <div class="work-hero-content">
            <h1 class="work-title">PROJECT</h1>
            </div>
            <div class="line"></div>
        </section>
        
        <section class="work-list">
          <section class="project-section triverse-section">
            <div class="project-container">
              <div class="project-left">
                <h2 class="project-title">TRIVERSE</h2>
                <h3 class="project-subtitle">AI 기반 버추얼 컴패니언 서비스</h3>
                <div class="project-divider"></div>
                
                <div class="project-info">
                  <div class="info-row">
                    <span class="info-label">기간</span>
                    <span class="info-value">2024.07 – 2024.10</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">인원</span>
                    <span class="info-value">5명</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">역할</span>
                    <span class="info-value">프론트엔드 100%</span>
                  </div>
                </div>

                <div class="project-tech-stack">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Zustand</span>
                  <span class="tech-tag">WebSocket</span>
                  <span class="tech-tag">WebRTC</span>
                  <span class="tech-tag">GSAP</span>
                </div>

                <p class="project-description">
                  실시간 음성 대화·모션 연동 AI 버튜버 서비스
                </p>




              </div>
              
              <div class="project-right">
                <div class="project-image-wrapper">
                  <img src="/src/assets/Triverse_thumbnail.jpeg" alt="Triverse Thumbnail" class="project-thumbnail" />
                </div>
              </div>
              
            </div>
            
            <div class="project-contribution-area">
              <button class="view-contribution-btn">
                View Contribution
                <span class="chevron">▼</span>
              </button>

              <!-- Contribution Toggle Section -->
              <div class="contribution-container">
                <div class="contribution-track">
                  <!-- Card 1: Problem & Goal -->
                  <div class="contribution-card">
                    <h4>Problem & Goal</h4>
                    <p>버추얼 유튜버 시장의 성장과 함께, 사용자와 실시간으로 상호작용하는 AI 캐릭터에 대한 니즈가 증가했습니다. 기존 서비스의 단방향 소통 한계를 넘어, 음성과 모션이 동기화된 몰입감 있는 경험을 제공하는 것을 목표로 했습니다.</p>
                  </div>
                  <!-- Card 2: My Role -->
                  <div class="contribution-card">
                    <h4>My Role</h4>
                    <p>프론트엔드 리드로서 전체 UI/UX 구현을 총괄했습니다. 특히 WebRTC 기반의 실시간 음성 통신 구현과 WebSocket을 이용한 모션 데이터 동기화 로직을 설계하고 개발했습니다.</p>
                  </div>
                  <!-- Card 3: Core Features -->
                  <div class="contribution-card">
                    <h4>Core Features</h4>
                    <p>1. 실시간 음성 대화 (STT/TTS)<br>2. AI 답변에 맞춘 립싱크 및 표정 변화<br>3. 사용자 반응형 모션 인터랙션<br>4. 저지연 스트리밍 환경 구축</p>
                  </div>
                  <!-- Card 4: Architecture Diagram -->
                  <div class="contribution-card">
                    <h4>Architecture Diagram</h4>
                    <p>React + Zustand로 상태 관리, Socket.io로 실시간 이벤트 처리. Live2D 모델 렌더링을 위해 PIXI.js를 활용하였으며, 백엔드와는 REST API 및 WebSocket으로 통신합니다.</p>
                  </div>
                  <!-- Card 5: Tech Challenges & Solutions -->
                  <div class="contribution-card">
                    <h4>Tech Challenges & Solutions</h4>
                    <p>음성 데이터와 캐릭터 입모양의 싱크를 맞추는 것이 가장 큰 과제였습니다. 오디오 버퍼를 분석하여 실시간으로 립싱크 가중치를 계산하는 알고리즘을 도입해 자연스러운 발화 모션을 구현했습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    `
  }

  init() {
    // GSAP Animation
    this.heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-hero',
        start: 'top top',
        end: '+=200',
        scrub: 1,
      }
    });

    // Animate hero height
    this.heroTl.fromTo('.work-hero',
      { height: '100vh' },
      { height: '200px', ease: "power2.out" },
    );

    this.heroTl.fromTo('.work-hero-content',
      { height: '100vh' },
      { height: '200px', ease: "power2.out" },
      '<'
    );

    // Animate the title scale
    this.heroTl.fromTo('.work-title',
      {
        scale: 1,
        y: 0,
        transformOrigin: 'center center'
      },
      {
        scale: 0.1,
        y: -180,
        ease: 'power2.out',
      },
      '<'
    );

    // Animate the line to move up and sit under the title
    this.heroTl.fromTo('.line',
      { width: '100%', opacity: 1, y: 0 },
      {
        y: -300,
        ease: 'power2.out'
      },
      '<'
    );



    this.bindEvents();
  }

  bindEvents() {
    const toggleBtn = document.querySelector('.view-contribution-btn');
    const container = document.querySelector('.contribution-container');
    const track = document.querySelector('.contribution-track');

    if (toggleBtn && container) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = container.classList.contains('expanded');

        if (isExpanded) {
          container.classList.remove('expanded');
          toggleBtn.classList.remove('active');
        } else {
          container.classList.add('expanded');
          toggleBtn.classList.add('active');
        }
      });
    }

    if (track) {
      track.addEventListener('wheel', (e) => {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      });
    }
  }

  cleanup() {
    if (this.heroTl) this.heroTl.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
