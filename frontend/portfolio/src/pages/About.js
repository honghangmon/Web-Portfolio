import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class About {
  render() {
    return `
      <main class="page about-page">
      <div class="page-title">WHO AM I</div>
        <div class="about-container">
          <!-- Center Section: Profile & Slogan -->
          <section class="center-section">
            <div class="slogan-container">
              <h2 class="slogan">도전과 실행력이<br>저의 강점 입니다.</h2>
            </div>
            <div class="profile-image-container">
              <img src="/src/assets/yoonjun.jpg" alt="Yoon Jun" class="profile-image" />
            </div>
          </section>

          <!-- Top Left: Degree -->
          <section class="quadrant top-left">
            <div class="section-header">
              <h3>Degree</h3>
            </div>
            <div class="content-list">
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">광운대학교</span>
                  <span class="subtitle">(동북아 문화산업 학부)</span>
                </div>
                <div class="date">2016.03 ~ 2024.08</div>
              </div>
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">청원고등학교</span>
                </div>
                <div class="date">2011.03 ~ 2014.02</div>
              </div>
            </div>
          </section>

          <!-- Top Right: Education -->
          <section class="quadrant top-right">
            <div class="section-header">
              <h3>Education</h3>
            </div>
            <div class="content-list">
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">삼성SW·AI아카데미</span>
                  <span class="subtitle highlight">(1620시간 교육)</span>
                </div>
                <div class="date">2024.07 ~ 2025.06</div>
                <div class="sub-list">
                  <div class="sub-item">교육</div>
                  <ul class="detail-list">
                    <li>Java, Spring, MVC 아키텍쳐, MySQL</li>
                    <li>Vue.js, HTML, CSS, JavaScript</li>
                    <li>기초 알고리즘 등 웹 프로그래밍 지식</li>
                    <li>프로젝트형 실습 교육</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Bottom Left: Work -->
          <section class="quadrant bottom-left">
            <div class="section-header">
              <h3>work</h3>
            </div>
            <div class="content-list">
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">인플루엔셜</span>
                  <span class="subtitle highlight">(디지털 컨텐츠 출판)</span>
                </div>
                <div class="date">2024.03 ~ 2024.06</div>
                <div class="sub-list">
                  <div class="sub-item">디지털 콘텐츠 관리</div>
                  <ul class="detail-list square-bullets">
                    <li>E-BOOK 데이터 가공 후 대시 보드에 등록</li>
                    <li>근무자 전체에게 할당 된 업무를 구글 시트를 활용하여 분담</li>
                    <li>오디오 북 파일을 전달 받아 인코딩 후 등록</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Bottom Right: Project -->
          <section class="quadrant bottom-right">
            <div class="section-header">
              <h3>Project</h3>
            </div>
            <div class="content-list">
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">트리버스</span>
                  <span class="subtitle highlight">(엔터테인먼트 서비스)</span>
                </div>
                <div class="date">2024.04 ~ 2024.05</div>
              </div>
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">굿독</span>
                  <span class="subtitle highlight">(구독 요금제 관리 서비스)</span>
                </div>
                <div class="date">2024.03 ~ 2024.04</div>
              </div>
              <div class="item">
                <div class="item-header">
                  <span class="bullet">•</span>
                  <span class="title">랑데뷰</span>
                  <span class="subtitle highlight">(모임 장소 추천 서비스)</span>
                </div>
                <div class="date">2025.01 ~ 2024.02</div>
              </div>
            </div>
          </section>
        </div>

        <!-- What I Like Section -->
        <section class="like-section">
          <div class="like-sticky-wrapper">
            <div class="like-grid">
              <!-- Grid Items (Hobby Images & Center Text) -->
              <!-- Row 1 -->
              <div class="grid-item hobby-img"><img src="/src/assets/hobby1.jpg" alt="Hobby 1" /></div>
              <div class="grid-item hobby-img"><img src="/src/assets/hobby2.jpg" alt="Hobby 2" /></div>
              <div class="grid-item hobby-img"><img src="/src/assets/hobby3.jpg" alt="Hobby 3" /></div>
              
              <!-- Row 2 -->
              <div class="grid-item hobby-img"><img src="/src/assets/hobby4.jpg" alt="Hobby 4" /></div>
              <div class="grid-item center-box">
                <span class="like-text">Like</span>
              </div>
              <div class="grid-item hobby-img"><img src="/src/assets/hobby5.png" alt="Hobby 5" /></div>
              
              <!-- Row 3 -->
              <div class="grid-item hobby-img"><img src="/src/assets/hobby6.png" alt="Hobby 6" /></div>
              <div class="grid-item hobby-img"><img src="/src/assets/hobby7.png" alt="Hobby 7" /></div>
              <div class="grid-item hobby-img"><img src="/src/assets/hobby8.jpg" alt="Hobby 8" /></div>
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
                <div class="card-front"><img src="/src/assets/skills1.png" alt="HTML" /></div>
                <div class="card-back"><h3>HTML</h3><p>95%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills2.png" alt="CSS" /></div>
                <div class="card-back"><h3>CSS</h3><p>95%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills3.png" alt="JS" /></div>
                <div class="card-back"><h3>JS</h3><p>90%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills4.png" alt="React" /></div>
                <div class="card-back"><h3>React</h3><p>85%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills5.png" alt="Next.js" /></div>
                <div class="card-back"><h3>Next.js</h3><p>80%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills6.png" alt="TypeScript" /></div>
                <div class="card-back"><h3>TS</h3><p>80%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills7.png" alt="Node.js" /></div>
                <div class="card-back"><h3>Node.js</h3><p>75%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills8.png" alt="Python" /></div>
                <div class="card-back"><h3>Python</h3><p>70%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills9.png" alt="Java" /></div>
                <div class="card-back"><h3>Java</h3><p>70%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills10.png" alt="Spring" /></div>
                <div class="card-back"><h3>Spring</h3><p>65%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills11.png" alt="MySQL" /></div>
                <div class="card-back"><h3>MySQL</h3><p>75%</p></div>
              </div>
            </div>
            <div class="skill-card">
              <div class="card-inner">
                <div class="card-front"><img src="/src/assets/skills12.png" alt="AWS" /></div>
                <div class="card-back"><h3>AWS</h3><p>60%</p></div>
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
                <div class="strength-box">
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
                <div class="strength-box">
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
                <div class="strength-box">
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
                <div class="strength-box">
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
                <div class="strength-box">
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
                <div class="strength-box">
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
        start: 'top 80%',
        end: 'center center',
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
    if (this.likeTl) this.likeTl.kill();
    if (this.skillsTl) this.skillsTl.kill();

    // Clear ScrollTriggers to be safe
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
