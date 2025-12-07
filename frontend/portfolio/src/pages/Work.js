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

        <div class="empty-space"></div>
        
        <section class="work-list">
          <!-- TRIVERSE SECTION -->
          <section class="project-section triverse-section">
            <div class="project-container">
              <div class="project-left">
                <h2 class="project-title">TRIVERSE</h2>
                <h3 class="project-subtitle">기업 연계 AI 버추얼 휴먼 서비스</h3>
                <div class="project-divider"></div>
                
                <div class="project-info">
                  <div class="info-row">
                    <span class="info-label">기간</span>
                    <span class="info-value">2025.04 – 2025.11 (8개월)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">인원</span>
                    <span class="info-value">6명 (Frontend 2, Backend 3 등)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">역할</span>
                    <span class="info-value">프론트엔드 리더, 프롬프트 엔지니어링</span>
                  </div>
                </div>

                <div class="project-tech-stack">
                  <span class="tech-tag">React 19</span>
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Zustand</span>
                  <span class="tech-tag">Tailwind CSS</span>
                  <span class="tech-tag">SuperTone API</span>
                </div>

                <p class="project-description">
                  대형 스트리밍 환경의 소통 한계를 극복하기 위해 기획된 1:1 몰입형 AI 버튜버 영상 대화 서비스입니다. 기업(트리니들) 연계 프로젝트로 진행되었습니다.
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
                상세 내용 보기
                <span class="chevron">▼</span>
              </button>

              <div class="contribution-container">
                <div class="contribution-track">
                  <div class="contribution-card">
                    <h4>AI VTuber 파이프라인 구축</h4>
                    <p>[입력 → LLM(두뇌) → TTS(목소리/SuperTone) → 출력]으로 이어지는 실시간 대화형 AI 서비스의 전체 데이터 흐름을 설계했습니다.</p>
                  </div>
                  <div class="contribution-card">
                    <h4>프롬프트 엔지니어링 및 페르소나 구현</h4>
                    <p>LLM 모델을 서비스 목적에 맞게 제어하기 위해 파인 튜닝 및 RAG 방식을 테스트하고, 시스템 규칙(System Rule)과 롤플레이 정보(Roleplay Info)를 정의하여 캐릭터의 일관된 답변 품질을 확보했습니다.</p>
                  </div>
                  <div class="contribution-card">
                    <h4>일관성 있는 데이터 출력</h4>
                    <p>LLM 모델의 아웃풋 양식을 지정하여 일관된 양식의 아웃풋을 출력하여, 데이터화 후 각각 필요한 요소에 전달할 수 있도록 가공하였습니다.</p>
                  </div>
                  <div class="contribution-card">
                    <h4>UI/UX 디자인 및 설계</h4>
                    <p>UI/UX 전체 디자인을 설계하고 구현하여 사용자가 몰입할 수 있는 환경을 조성했습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- GOOD DOG SECTION -->
          <section class="project-section gooddog-section">
            <div class="project-container reversed-layout">
              <div class="project-left">
                 <div class="project-image-wrapper">
                  <img src="/src/assets/GoodDog_thumbnail.jpeg" alt="Good Dog Thumbnail" class="project-thumbnail gooddog-thumbnail" />
                </div>
              </div>
              
              <div class="project-right">
                <div class="text-content-wrapper">
                    <h2 class="project-title gooddog-title">GoodDog</h2>
                    <h3 class="project-subtitle gooddog-subtitle">경제적인 구독 관리 플랫폼</h3>
                    <div class="project-divider gooddog-divider"></div>
                    
                    <div class="project-info gooddog-info">
                      <div class="info-row">
                          <span class="info-label">기간</span>
                          <span class="info-value">2025.03 – 2025.04 (2개월)</span>
                      </div>
                      <div class="info-row">
                          <span class="info-label">인원</span>
                          <span class="info-value">6명 (Frontend 4, Backend 2)</span>
                      </div>
                      <div class="info-row">
                          <span class="info-label">역할</span>
                          <span class="info-value">프론트엔드 개발</span>
                      </div>
                    </div>

                    <div class="project-tech-stack gooddog-tech">
                      <span class="tech-tag">React 19</span>
                      <span class="tech-tag">Next.js</span>
                      <span class="tech-tag">TypeScript</span>
                      <span class="tech-tag">Zustand</span>
                      <span class="tech-tag">Tailwind CSS</span>
                      <span class="tech-tag">Shadcn</span>
                    </div>

                    <p class="project-description gooddog-desc">
                      숨은 구독료 지출을 방지하고, '구독 메이트' 기능을 통해 공동 구독을 효율적으로 관리할 수 있는 서비스입니다.
                    </p>
                 </div>
              </div>
            </div>
            
            <div class="project-contribution-area">
              <button class="view-contribution-btn gooddog-btn">
                  상세 내용 보기
                  <span class="chevron">▼</span>
              </button>

              <div class="contribution-container">
                <div class="contribution-track">
                   <div class="contribution-card">
                    <h4>복잡한 프로세스 단순화</h4>
                    <p>사용자가 서비스에 처음 진입할 때 겪는 혼란을 줄이기 위해 캐러셀(Carousel) UI를 활용한 직관적인 온보딩 페이지를 제작했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>조건부 라우팅 구현</h4>
                    <p>'로그인 여부', '계좌 등록 여부', '약관 동의 여부' 등 사용자의 상태(Status)를 파악하여, 각 단계에 맞는 페이지로 자동 분기 처리(Redirect)하는 로직을 설계했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>Zustand 활용</h4>
                    <p>백엔드 API 개발이 지연되는 상황에서, 프로젝트 진행에 차질이 없도록 클라이언트 전역 상태 관리 라이브러리인 Zustand를 활용해 임시 데이터 흐름을 구축했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>데이터 시각화 (Charting)</h4>
                    <p>Shadcn과 차트 라이브러리를 활용하여 백엔드에서 넘어오는 구독료 데이터를 직관적인 파이 차트(Donut Chart) 형태로 매핑하고 시각화했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>낙관적 업데이트(Optimistic Update)</h4>
                    <p>알림 설정 토글(Switch) 버튼에서 서버 응답을 기다리지 않고 UI를 먼저 변경함으로써, 사용자가 느끼는 지연 시간을 없애고 빠른 반응성을 제공했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>비동기 데이터 동기화</h4>
                    <p>useEffect와 fetch를 조합하여 초기 데이터 로드 및 서버 상태 동기화 로직을 효율적으로 작성했습니다.</p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          <!-- RENDEZVOUS SECTION -->
          <section class="project-section rendezview-section">
            <div class="project-container">
              <div class="project-left">
                <h2 class="project-title rendezview-title">Rendezvous</h2>
                <h3 class="project-subtitle rendezview-subtitle">가장 합리적인 약속 장소 추천 서비스</h3>
                <div class="project-divider rendezview-divider"></div>
                
                <div class="project-info rendezview-info">
                  <div class="info-row">
                    <span class="info-label">기간</span>
                    <span class="info-value">2025.01 – 2025.02 (2개월)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">인원</span>
                    <span class="info-value">6명 (Frontend 3, Backend 3)</span>
                  </div>
                  <div class="info-row">
                    <span class="info-label">역할</span>
                    <span class="info-value">프론트엔드 리더</span>
                  </div>
                </div>

                <div class="project-tech-stack rendezview-tech">
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">Pinia</span>
                  <span class="tech-tag">Vuetify</span>
                  <span class="tech-tag">Kakao Map API</span>
                </div>

                <p class="project-description rendezview-desc">
                  참여자들의 출발 위치를 기반으로 중간 지점을 계산하여 가장 합리적인 약속 장소를 추천해주는 서비스입니다.
                </p>
              </div>
              
              <div class="project-right">
                <div class="project-image-wrapper">
                  <img src="/src/assets/RendezView_thumbnail.jpeg" alt="RendezView Thumbnail" class="project-thumbnail rendezview-thumbnail" />
                </div>
              </div>
            </div>
            
            <div class="project-contribution-area">
              <button class="view-contribution-btn rendezview-btn">
                상세 내용 보기
                <span class="chevron">▼</span>
              </button>

              <div class="contribution-container">
                <div class="contribution-track">
                   <div class="contribution-card">
                    <h4>전역 상태 관리</h4>
                    <p>Pinia를 도입하여 '팀 정보', '주소록' 등 여러 컴포넌트에서 공통으로 쓰이는 데이터를 중앙에서 효율적으로 관리했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>컴포넌트 모듈화</h4>
                    <p>주소 카드, 리스트 등 UI 요소를 재사용 가능한 컴포넌트로 분리하고, Props를 통해 데이터를 주입하는 방식으로 유지보수성을 높였습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>카카오 주소 API 활용</h4>
                    <p>복잡한 주소 데이터를 사용자가 쉽게 입력할 수 있도록 카카오 우편번호 서비스를 연동하고, 검색 결과를 인풋 창에 바인딩했습니다.</p>
                   </div>
                   <div class="contribution-card">
                    <h4>Pain Point 해결 (미니게임)</h4>
                    <p>중간 지점 계산 알고리즘으로 인해 발생하는 긴 로딩 시간 동안 사용자가 이탈하지 않도록 미니 게임을 개발하여 체류 시간을 확보했습니다.</p>
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
    // 새로운 ScrollTrigger를 생성하기 전에 기존의 모든 트리거를 제거하여 충돌을 방지합니다 (안전 장치)
    ScrollTrigger.getAll().forEach(t => t.kill());

    // --- 히어로 섹션 애니메이션 (고정 및 축소 효과) ---
    // 스크롤 시 히어로 섹션이 상단에 고정되면서 타이틀과 라인이 작아지는 효과를 구현합니다.
    this.heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-hero',
        start: 'top top',
        end: '+=900',
        scrub: 1,
      }
    });

    this.heroTl.fromTo('.work-hero',
      { height: '100vh' },
      { height: '100px', ease: "power2.out" },
    );

    this.heroTl.fromTo('.work-hero-content',
      { height: '100vh' },
      { height: '100px', ease: "power2.out" },
      '<'
    );

    // 타이틀 애니메이션: 스크롤에 따라 크기가 줄어들고(0.4배) 네비게이션 바 쪽으로 위로(-40px) 이동합니다.
    this.heroTl.fromTo('.work-title',
      { scale: 1, y: 0, transformOrigin: 'center top' }, // 상단 중앙을 기준으로 축소
      {
        scale: 0.3, y: 45,
        ease: 'none'
      },
      '<'
    );

    // 라인 애니메이션: 타이틀과 함께 위로 이동하여 레이아웃의 균형을 유지합니다.
    this.heroTl.fromTo('.line',
      { y: 0 },
      { y: -20, ease: 'none' },
      '<'
    );

    // --- 이벤트 바인딩 ---
    // 상세 기여 내용(Contribution) 토글 버튼과 가로 스크롤 이벤트를 연결합니다.
    this.bindEvents();
  }

  bindEvents() {
    const toggleBtns = document.querySelectorAll('.view-contribution-btn');
    const tracks = document.querySelectorAll('.contribution-track');

    toggleBtns.forEach(btn => {
      // 현재 클릭된 버튼과 연관된 가장 가까운 contribution 컨테이너를 탐색합니다.
      const parentArea = btn.closest('.project-contribution-area');
      const container = parentArea ? parentArea.querySelector('.contribution-container') : null;

      if (btn && container) {
        btn.onclick = () => {
          const isExpanded = container.classList.contains('expanded');
          if (isExpanded) {
            container.classList.remove('expanded');
            btn.classList.remove('active');
          } else {
            container.classList.add('expanded');
            btn.classList.add('active');
          }
        };
      }
    });


  }

  cleanup() {
    if (this.heroTl) {
      this.heroTl.kill();
      this.heroTl = null;
    }
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
