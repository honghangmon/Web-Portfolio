(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();class v{render(){return`
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
    `}init(){console.log("Home 페이지 로드됨")}}class p{render(){return`
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
    `}init(){console.log("About 페이지 로드됨")}}class h{constructor(){this.projects=[{id:1,title:"Trivese",description:"React와 Node.js를 활용한 온라인 쇼핑몰 플랫폼",image:"🛒",tech:["React","Node.js","MongoDB","Stripe"],github:"#",demo:"#",featured:!0},{id:2,title:"Good Dog",description:"팀 협업을 위한 프로젝트 관리 도구",image:"📋",tech:["Vue.js","Firebase","CSS3"],github:"#",demo:"#",featured:!0},{id:3,title:"Rensdeveiws",description:"실시간 날씨 정보를 제공하는 대시보드",image:"🌤️",tech:["Vue.js","API","Chart.js"],github:"#",demo:"#",featured:!1}]}render(){return`
      <main class="page work-page">
        <section class="work-hero">
          <h1>Projects</h1>
        </section>

        <section class="projects">
          <div class="projects-filter">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="featured">Featured</button>
            <button class="filter-btn" data-filter="web">Web</button>
            <button class="filter-btn" data-filter="mobile">Mobile</button>
          </div>

          <div class="projects-grid">
            ${this.projects.map(e=>`
              <div class="project-card ${e.featured?"featured":""}" data-category="web">
                <div class="project-image">
                  <div class="project-icon">${e.image}</div>
                </div>
                <div class="project-content">
                  <h3 class="project-title">${e.title}</h3>
                  <p class="project-description">${e.description}</p>
                  <div class="project-tech">
                    ${e.tech.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
                  </div>
                  <div class="project-links">
                    <a href="${e.github}" class="project-link" target="_blank">
                      <span>GitHub</span>
                    </a>
                    <a href="${e.demo}" class="project-link" target="_blank">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="cta">
          <h2>함께 일하고 싶으시다면</h2>
          <p>새로운 프로젝트에 대한 아이디어가 있으시다면 언제든 연락주세요</p>
          <a href="#/contact" class="btn btn-primary">연락하기</a>
        </section>
      </main>
    `}init(){this.bindFilterEvents(),console.log("Work 페이지 로드됨")}bindFilterEvents(){const e=document.querySelectorAll(".filter-btn"),s=document.querySelectorAll(".project-card");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),t.classList.add("active");const a=t.getAttribute("data-filter");s.forEach(i=>{a==="all"||i.getAttribute("data-category")===a?i.style.display="block":i.style.display="none"})})})}}class u{constructor(){this.entries=[],this.loadFromStorage()}loadFromStorage(){const e=localStorage.getItem("guestbookEntries");e&&(this.entries=JSON.parse(e))}saveToStorage(){localStorage.setItem("guestbookEntries",JSON.stringify(this.entries))}addEntry(e,s){const t=this.getRandomPalette(),a=this.getRandomRotationDeg(),i={id:Date.now(),name:e,message:s,date:new Date().toLocaleString("ko-KR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),palette:t,rot:a};return this.entries.unshift(i),this.saveToStorage(),i}deleteEntry(e){this.entries=this.entries.filter(s=>s.id!==e),this.saveToStorage()}getEntries(){return this.entries}getRandomPalette(){const e=[{bg:"#FFE3EC",border:"#FBC4D8",tape:"#FFD6D6"},{bg:"#E3F2FF",border:"#BBDFFF",tape:"#D6E8FF"},{bg:"#E9FFE3",border:"#C9F7BB",tape:"#E1FFD6"},{bg:"#FFF4E3",border:"#FFE0B3",tape:"#FFE7C6"},{bg:"#F1E3FF",border:"#D7BBFF",tape:"#E6D6FF"},{bg:"#FFFDE3",border:"#F7F1BB",tape:"#FFF4C6"}];return e[Math.floor(Math.random()*e.length)]}getRandomRotationDeg(){return`${(Math.random()*4-2).toFixed(2)}deg`}}const m=new u;class b{constructor(){this.store=m,this.isModalOpen=!1,this.lastFocusedElement=null}render(){return`
      <main class="page guestbook-page">
        <!-- 배경 포스트잇 월 -->
        <div id="guestbookEntries" class="entries-wall" aria-hidden="false"></div>

        <div class="container">
          <header>
            <div class="header-bar">
              <h1>방명록</h1>
              <button type="button" id="openGuestbookModal" class="submit-btn header-add-btn">방명록 쓰기</button>
            </div>
            <p>소중한 인연들이 남긴 따뜻한 메시지</p>
          </header>
        </div>

        <!-- 모달 오버레이 & 대화상자 -->
        <div id="guestbookOverlay" class="modal-overlay" aria-hidden="true">
          <div class="modal" role="dialog" aria-modal="true" aria-labelledby="guestbookModalTitle">
            <div class="modal-header">
              <h3 id="guestbookModalTitle">방명록 작성</h3>
              <button type="button" class="modal-close" id="closeGuestbookModal" aria-label="닫기">×</button>
            </div>
            <form id="guestbookForm" class="modal-body">
              <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" name="name" required placeholder="이름을 입력해주세요">
              </div>
              <div class="form-group">
                <label for="message">메시지</label>
                <textarea id="message" name="message" required placeholder="소중한 메시지를 남겨주세요" rows="4"></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-secondary" id="cancelGuestbookModal">취소</button>
                <button type="submit" class="submit-btn">확인</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    `}init(){this.displayEntries(),this.bindEvents(),this.syncWallTopPadding(),console.log("Guestbook 페이지 로드됨")}bindEvents(){const e=document.getElementById("openGuestbookModal"),s=document.getElementById("closeGuestbookModal"),t=document.getElementById("cancelGuestbookModal"),a=document.getElementById("guestbookOverlay"),i=document.getElementById("guestbookForm");e&&e.addEventListener("click",()=>this.openModal()),s&&s.addEventListener("click",()=>this.closeModal()),t&&t.addEventListener("click",()=>this.closeModal()),a&&a.addEventListener("click",l=>{l.target===a&&this.closeModal()}),document.addEventListener("keydown",l=>{this.isModalOpen&&l.key==="Escape"&&this.closeModal()}),i&&i.addEventListener("submit",l=>{l.preventDefault(),this.handleFormSubmit(i)});const o=document.getElementById("name"),c=document.getElementById("message");o&&o.addEventListener("input",function(){this.value=this.value.replace(/[<>]/g,"")}),c&&c.addEventListener("input",function(){this.value=this.value.replace(/[<>]/g,"")}),window.addEventListener("resize",()=>this.syncWallTopPadding()),window.addEventListener("load",()=>this.syncWallTopPadding()),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>this.syncWallTopPadding()).catch(()=>{})}openModal(){this.lastFocusedElement=document.activeElement;const e=document.getElementById("guestbookOverlay");if(e){e.classList.add("active"),e.setAttribute("aria-hidden","false"),this.isModalOpen=!0;const s=document.getElementById("name");s&&s.focus()}}closeModal(){const e=document.getElementById("guestbookOverlay"),s=document.getElementById("guestbookForm");e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),this.isModalOpen=!1),this.lastFocusedElement&&this.lastFocusedElement.focus(),s&&s.reset()}handleFormSubmit(e){const s=e.querySelector("#name").value.trim(),t=e.querySelector("#message").value.trim();if(!s||!t){this.showNotification("이름과 메시지를 모두 입력해주세요.","info");return}this.store.addEntry(s,t),this.displayEntries(),this.closeModal(),this.showNotification("방명록이 성공적으로 추가되었습니다!","success")}displayEntries(){const e=document.getElementById("guestbookEntries");if(!e)return;const s=this.store.getEntries();if(!s.length){e.innerHTML="";return}e.innerHTML=s.map(t=>{var l,d,r;const a=((l=t.palette)==null?void 0:l.bg)||"#fff8a3",i=((d=t.palette)==null?void 0:d.border)||"#f2e28a",o=((r=t.palette)==null?void 0:r.tape)||"#ffd6d6",c=t.rot||"-0.5deg";return`
        <div class="guestbook-entry" style="--note-bg:${a}; --note-border:${i}; --tape:${o}; --rot:${c};">
          <div class="entry-header">
            <span class="entry-name">${this.escapeHtml(t.name)}</span>
            <span class="entry-date">${t.date}</span>
          </div>
          <div class="entry-message">${this.escapeHtml(t.message)}</div>
          <button class="delete-btn" onclick="window.guestbookPage.deleteEntry(${t.id})">삭제</button>
        </div>`}).join("")}deleteEntry(e){confirm("정말로 이 방명록을 삭제하시겠습니까?")&&(this.store.deleteEntry(e),this.displayEntries(),this.showNotification("방명록이 삭제되었습니다.","info"))}syncWallTopPadding(){const e=document.querySelector("header"),s=document.getElementById("guestbookEntries");if(!e||!s)return;const t=e.getBoundingClientRect(),a=Math.ceil(t.bottom+16);s.style.setProperty("--wall-top",`${a}px`)}showNotification(e,s="info"){const t=document.querySelector(".notification");t&&t.remove();const a=document.createElement("div");if(a.className=`notification notification-${s}`,a.textContent=e,a.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${s==="success"?"#48bb78":"#4299e1"};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `,!document.querySelector("#notification-styles")){const i=document.createElement("style");i.id="notification-styles",i.textContent=`
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `,document.head.appendChild(i)}document.body.appendChild(a),setTimeout(()=>{a.parentNode&&(a.style.animation="slideIn 0.3s ease-out reverse",setTimeout(()=>{a.parentNode&&a.remove()},300))},3e3)}escapeHtml(e){const s=document.createElement("div");return s.textContent=e,s.innerHTML}cleanup(){this.isModalOpen=!1}}window.guestbookPage=null;class g{render(){return`
      <main class="page contact-page">
        <section class="contact-hero">
          <h1>Contact Me</h1>
          <p>새로운 프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요</p>
        </section>

        <section class="contact-content">
          <div class="contact-info">
            <h2>연락처 정보</h2>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>wnsdl0604@naver.com</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon">📱</div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>+82 010-6850-5951</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Me</h3>
              <div class="social-grid">
                <a href="#" class="social-link" target="_blank">
                  <span class="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/honghangmon" class="social-link" target="_blank">
                  <span class="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="#" class="social-link" target="_blank">
                  <span class="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    `}init(){this.bindFormEvents(),console.log("Contact 페이지 로드됨")}bindFormEvents(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",s=>{s.preventDefault(),this.handleFormSubmit(e)})}handleFormSubmit(e){const s=new FormData(e),t=Object.fromEntries(s);console.log("폼 데이터:",t),alert("메시지가 성공적으로 전송되었습니다!"),e.reset()}}class f{constructor(){this.routes={"":v,"#/":v,"#/about":p,"#/work":h,"#/guestbook":b,"#/contact":g},this.currentPage=null,this.loadedStyles=new Set}init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("popstate",()=>this.handleRoute())}handleRoute(){const e=window.location.hash||"#/",s=this.routes[e];s?(this.currentPage&&this.currentPage.cleanup&&this.currentPage.cleanup(),this.currentPage=new s,this.loadPageStyles(e),this.render()):this.render404()}loadPageStyles(e){const s=e.replace("#/","")||"home",t=`page-${s}-style`;if(this.loadedStyles.has(t))return;const a=document.createElement("link");a.rel="stylesheet",a.href=`/src/styles/pages/${s}.css`,a.id=t,document.head.appendChild(a),this.loadedStyles.add(t)}render(){const e=document.getElementById("app");this.currentPage&&(e.innerHTML=this.currentPage.render(),this.currentPage.init&&this.currentPage.init())}render404(){const e=document.getElementById("app");e.innerHTML=`
      <div class="error-page">
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <a href="#/">홈으로 돌아가기</a>
      </div>
    `}navigate(e){window.location.hash=e}}class y{constructor(){this.navItems=[{href:"#/",label:"Home"},{href:"#/about",label:"About Me"},{href:"#/work",label:"Work"},{href:"#/guestbook",label:"Guestbook"},{href:"#/contact",label:"Contact Me"}]}render(){const e=document.createElement("nav");e.className="navbar",e.innerHTML=`
      <div class="navbar-container">
        <div class="navbar-brand">
          <a href="#/">Portfolio</a>
        </div>
        <ul class="navbar-menu">
          ${this.navItems.map(t=>`
            <li class="navbar-item">
              <a href="${t.href}" class="navbar-link" data-route="${t.href}">
                <span class="navbar-label">${t.label}</span>
              </a>
            </li>
          `).join("")}
        </ul>
        <button class="navbar-toggle" aria-label="메뉴 열기">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    `;const s=document.querySelector(".navbar");s&&s.remove(),document.body.insertBefore(e,document.body.firstChild),this.bindEvents()}bindEvents(){const e=document.querySelector(".navbar-toggle"),s=document.querySelector(".navbar-menu");e&&s&&e.addEventListener("click",()=>{s.classList.toggle("active"),e.classList.toggle("active")}),this.updateActiveLink(),window.addEventListener("hashchange",()=>this.updateActiveLink())}updateActiveLink(){const e=window.location.hash||"#/";document.querySelectorAll(".navbar-link").forEach(t=>{t.classList.remove("active"),t.getAttribute("data-route")===e&&t.classList.add("active")})}}class k{constructor(){this.router=new f,this.navbar=new y,this.init()}init(){this.navbar.render(),this.router.init(),this.router.handleRoute()}}new k;
