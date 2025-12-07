import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class About {
  render() {
    return `
      <main class="page about-page">
        <div class="page-title">WHO AM I</div>
        
        <div class="about-container">
          
          <!-- Degree Section -->
          <section class="about-section section-degree">
            <div class="section-label">Degree</div>
            <ul class="about-list">
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">광운대학교</span>
                  <span class="item-period">2016.03 ~ 2024.08</span>
                </div>
                <div class="item-sub">동북아 문화산업 학부</div>
              </li>
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">청원고등학교</span>
                  <span class="item-period">2011.03 ~ 2014.02</span>
                </div>
              </li>
            </ul>
          </section>

          <!-- Work Section -->
          <section class="about-section section-work">
            <div class="section-label">Work</div>
            <ul class="about-list">
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">인플루엔셜</span>
                  <span class="item-period">2024.03 ~ 2024.06</span>
                </div>
                <div class="item-sub">디지털 컨텐츠 출판 (인턴)</div>
                <ul class="item-bullets">
                  <li>E-BOOK 데이터 가공 및 대시보드 등록</li>
                  <li>구글 시트 활용 업무 분담 및 관리</li>
                  <li>오디오북 파일 인코딩 및 등록</li>
                </ul>
              </li>
            </ul>
          </section>

          <!-- Center Column: Slogan & Photo -->
          <div class="col-center">
            <div class="slogan-block">
              <h2 class="main-slogan">도전과 실행력이<br>저의 강점입니다.</h2>
            </div>
            <div class="profile-block">
              <div class="profile-card">
                <img src="/src/assets/yoonjun.jpg" alt="Yoonjun Hong" class="profile-img" />
              </div>
              <span class="profile-caption">Frontend Developer</span>
            </div>
          </div>

          <!-- Education Section -->
          <section class="about-section section-education">
            <div class="section-label">Education</div>
            <ul class="about-list">
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">삼성SW·AI아카데미</span>
                  <span class="item-period">2024.07 ~ 2025.06</span>
                </div>
                <div class="item-sub">1620시간 교육과정</div>
                <ul class="item-bullets">
                  <li>Java, Spring, MVC, MySQL</li>
                  <li>Vue.js, HTML, CSS, JS</li>
                  <li>알고리즘 및 웹 심화 과정</li>
                  <li>팀 프로젝트 기반 실습</li>
                </ul>
              </li>
            </ul>
          </section>

          <!-- Project Section -->
          <section class="about-section section-project">
            <div class="section-label">Project</div>
            <ul class="about-list">
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">트리버스</span>
                  <span class="item-period">2024.04 ~ 2024.05</span>
                </div>
                <div class="item-sub">엔터테인먼트 서비스</div>
              </li>
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">굿독</span>
                  <span class="item-period">2024.03 ~ 2024.04</span>
                </div>
                <div class="item-sub">구독 요금제 관리 서비스</div>
              </li>
              <li class="about-item">
                <div class="item-main">
                  <span class="item-title">랑데뷰</span>
                  <span class="item-period">2025.01 ~ 2025.02</span>
                </div>
                <div class="item-sub">모임 장소 추천 서비스</div>
              </li>
            </ul>
          </section>
          
        </div>

        <!-- What I Like Section -->
        <section class="like-section">
          <div class="like-sticky-wrapper">
            <div class="like-grid">
              <!-- Grid Items (Hobby Images & Center Text) -->
              <!-- Row 1 -->
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby1.jpg" alt="Hobby 1" />
                <div class="hobby-overlay">Movie</div>
              </div>
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby2.jpg" alt="Hobby 2" />
                <div class="hobby-overlay">Talking</div>
              </div>
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby3.jpg" alt="Hobby 3" />
                <div class="hobby-overlay">Food</div>
              </div>
              
              <!-- Row 2 -->
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby4.jpg" alt="Hobby 4" />
                <div class="hobby-overlay">Game</div>
              </div>
              <div class="grid-item center-box">
                <span class="like-text">Like</span>
              </div>
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby5.png" alt="Hobby 5" />
                <div class="hobby-overlay">Drawing</div>
              </div>
              
              <!-- Row 3 -->
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby6.png" alt="Hobby 6" />
                <div class="hobby-overlay">Cartoon</div>
              </div>
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby7.png" alt="Hobby 7" />
                 <div class="hobby-overlay">Running</div>
              </div>
              <div class="grid-item hobby-img">
                <img src="/src/assets/hobby8.jpg" alt="Hobby 8" />
                 <div class="hobby-overlay">Book</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="skills-section">
          <span class="skills-mask">
            <span class="skills-text">
              <span class="skills-line-1">SKILLS</span>
            </span>
          </span>
          
          <div class="skills-container">
            <!-- Skill Cards -->
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills1.png" alt="Javascript" /></div>
                <div class="card-back">
                  <h3>Javascript</h3>
                  <p class="skill-desc">웹 개발의 기본 문법과 DOM 조작, 비동기 처리 등 필수 기능을 활용해 인터랙티브한 UI를 구현할 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills2.png" alt="Typescript" /></div>
                <div class="card-back">
                  <h3>Typescript</h3>
                  <p class="skill-desc">TS의 타입 시스템을 활용해 안정적인 코드 작성이 가능하며, 프로젝트 규모가 커져도 유지보수성과 안정성을 확보할 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills3.png" alt="React" /></div>
                <div class="card-back">
                  <h3>React</h3>
                  <p class="skill-desc">컴포넌트 기반 개발과 훅(Hooks)을 이해하고 있으며, 상태 관리 및 재사용 가능한 UI 구조를 구현할 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills4.png" alt="Vue" /></div>
                <div class="card-back">
                  <h3>Vue</h3>
                  <p class="skill-desc">컴포넌트 구조와 반응형 시스템을 이해하며, 기본적인 Vue 생태계를 활용한 SPA 개발이 가능합니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills5.png" alt="Next.js" /></div>
                <div class="card-back">
                  <h3>Next.js</h3>
                  <p class="skill-desc">라우팅, 서버 사이드 렌더링(SSR), 정적 생성(SSG)을 활용해 SEO 친화적이고 빠른 웹페이지를 만들 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills6.png" alt="Java" /></div>
                <div class="card-back">
                  <h3>Java</h3>
                  <p class="skill-desc">객체지향 개념과 기본 문법을 활용해 안정적인 로직 구현이 가능하며, 백엔드 개발의 기초를 다졌습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills7.png" alt="Spring Boot" /></div>
                <div class="card-back">
                  <h3>Spring Boot</h3>
                  <p class="skill-desc">Rest API 구축, MVC 구조 이해, 기본적인 스프링 의존성 주입(DI) 구조를 활용해 서버 애플리케이션 개발이 가능합니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills8.png" alt="MySQL" /></div>
                <div class="card-back">
                  <h3>MySQL</h3>
                  <p class="skill-desc">데이터베이스 스키마 설계, 기본적인 CRUD 및 JOIN 쿼리를 작성해 필요한 데이터를 효율적으로 다룰 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills9.png" alt="Figma" /></div>
                <div class="card-back">
                  <h3>Figma</h3>
                  <p class="skill-desc">UI 컴포넌트 제작, 프로토타이핑, 오토 레이아웃을 활용해 실제 개발과 연계된 UI 설계를 수행할 수 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills10.png" alt="Git / GitHub" /></div>
                <div class="card-back">
                  <h3>Git / GitHub</h3>
                  <p class="skill-desc">브랜치 전략을 기반으로 버전 관리와 협업이 가능하며, GitHub를 통한 코드 리뷰 및 CI/CD 연동 경험이 있습니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills11.png" alt="Jira" /></div>
                <div class="card-back">
                  <h3>Jira</h3>
                  <p class="skill-desc">태스크 관리, 스프린트 운영, 이슈 트래킹 등 협업 기반 개발 프로세스에 익숙합니다.</p>
                </div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills12.png" alt="Photoshop" /></div>
                <div class="card-back">
                  <h3>Photoshop</h3>
                  <p class="skill-desc">이미지 편집, 보정, 간단한 UI 리소스 제작이 가능하며 웹 디자인에 필요한 기본 툴 활용 능력을 갖추고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Strength Section -->
        <section class="strength-section">
          <div class="strength-layout">
            <div class="strength-left">
              <h2>STRENGTH</h2>
            </div>
            <div class="strength-right">
              <div class="strength-row">
                <div class="strength-box strength-1">
                  <div class="sb-content sb-default">
                    <h3>Execution</h3>
  
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>Execution</h3>
                    <p>문제가 보이면 바로 시도하고, 빠르게 프로토타이핑해 결과물을 만드는 것을 중요하게 생각합니다.
완벽함보다 작동하는 첫 버전을 먼저 만드는 방식으로 프로젝트 속도를 높여왔습니다.
실행 후 개선을 반복하며 품질을 완성하는 스타일입니다.</p>
                  </div>
                </div>
                <div class="strength-box strength-2">
                  <div class="sb-content sb-default">
                    <h3>Communication</h3>
                 
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>Communication</h3>
                    <p>팀이 같은 목표를 바라보도록 맥락과 의도를 명확히 전달하는 데 강점이 있습니다.
필요한 내용을 빠르게 공유하고, 상대의 관점을 이해하려는 태도로 협업 효율을 높였습니다.
충돌보다는 조율을 우선하며 프로젝트 흐름을 안정적으로 유지합니다.</p>
                  </div>
                </div>
                <div class="strength-box strength-3">
                  <div class="sb-content sb-default">
                    <h3>Responsibility</h3>
                    
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>Responsibility</h3>
                    <p>맡은 업무는 끝까지 완수해야 한다는 원칙을 가지고 일합니다.
문제가 발생하면 남의 탓보다 해결 방법을 먼저 고민하며 대응합니다.
결과물의 품질을 제 이름으로 보증할 수 있도록 항상 최선을 다합니다.</p>
                  </div>
                </div>
              </div>
              <div class="strength-row">
                <div class="strength-box strength-4">
                  <div class="sb-content sb-default">
                    <h3>Note-Taking Habit</h3>
                    
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>Note-Taking Habit</h3>
                    <p>학습 과정과 발견한 인사이트를 체계적으로 기록하는 습관이 있습니다.
이 습관 덕분에 문제 해결 속도와 프로젝트 복기 능력이 크게 향상되었습니다.
필요한 정보를 빠르게 찾아 활용할 수 있는 개인 지식 베이스를 유지합니다.</p>
                  </div>
                </div>
                <div class="strength-box strength-5">
                  <div class="sb-content sb-default">
                    <h3>Positivity</h3>
                    
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>Positivity</h3>
                    <p>예상치 못한 문제나 일정 압박 상황에서도 침착하게 해결책을 찾는 스타일입니다.
문제를 성장의 기회로 보는 시각 덕분에 팀 분위기를 안정적으로 유지하는 데 기여합니다.
긍정적인 태도는 협업 속도를 높이고, 새로운 시도를 두려워하지 않게 해줍니다.</p>
                  </div>
                </div>
                <div class="strength-box strength-6">
                  <div class="sb-content sb-default">
                    <h3>User-Centered Perspective</h3>
                    
                  </div>
                  <div class="sb-content sb-hover">
                    <h3>User-Centered Perspective</h3>
                    <p>기능 구현보다 사용자가 느끼는 경험을 우선순위로 두고 개발합니다.
직관적이고 매끄러운 인터페이스를 위해 세부 상호작용까지 신경 씁니다.
“내가 사용한다면 어떤 느낌일까?”를 기준으로 의사결정을 내립니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  }

  init() {
    console.log('About 페이지 로드됨')

    // Navbar 색상 변경 (검정색)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('navbar-dark');
    }

    // Like Section Animation
    const likeSection = document.querySelector('.like-section');
    const likeGrid = document.querySelector('.like-grid');
    const centerBox = document.querySelector('.center-box');
    const hobbyImages = document.querySelectorAll('.hobby-img');

    if (likeSection && likeGrid && centerBox) {
      // Initial State: Center Box is huge, covering everything. Images hidden.
      // We'll use a timeline to orchestrate this.

      this.likeTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.like-section',
          start: 'top top',
          end: '+=2000', // Scroll distance for the animation
          pin: true,
          scrub: 1,
          markers: false
        }
      });

      // 1. Start with Center Box scaled up massively
      // We need to set initial CSS or use .from()
      // Let's assume CSS sets the grid layout normally, and we scale FROM a large size.

      // Actually, the request is: "Initially large box saying Like... shrinks to center... grid fits."
      // So we want the center box to start covering the screen.

      // Strategy:
      // 1. Set grid gap to 0 initially? Or just scale the center box?
      // If we scale the center box, it might overlap others.
      // Better approach: 
      // Start with the center box at scale: 10 (or enough to fill screen)
      // Start with hobby images at opacity: 0 and maybe scale: 0.5

      this.likeTl.fromTo(centerBox,
        { scale: 10, borderRadius: 0 },
        { scale: 1, borderRadius: '20px', duration: 1, ease: 'power2.inOut' }
      )
        .fromTo(hobbyImages,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out' },
          '-=0.5' // Overlap slightly with box shrinking
        );
    }

    // Skills Section Animation
    this.skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 99%',
        end: 'top 30%',
        scrub: 1,
        markers: false
      }
    });

    this.skillsTl.fromTo('.skills-text span',
      {
        'background-size': '0% 100%',
        x: -100,
        opacity: 0,
      },
      {
        'background-size': '100% 100%',
        x: 0,
        opacity: 1,
        stagger: 0.5,
        ease: 'none'
      }
    );
  }

  cleanup() {
    // Navbar 색상 복구
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.remove('navbar-dark');
    }

    if (this.likeTl) this.likeTl.kill();
    if (this.skillsTl) this.skillsTl.kill();

    // Clear ScrollTriggers to be safe
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
