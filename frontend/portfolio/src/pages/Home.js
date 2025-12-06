import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export class Home {
  render() {
    return `
      <main class="page home-page">
        <!-- Slogan Section -->
        <section class="slogan-section">
          <div class="animation-container">
            <img src="/src/assets/sleeping_cat.png" alt="Sleeping Cat" class="character-image" />
          </div>
          
          <div class="slogan-container">
            <h1 class="main-slogan">
              <span class="slogan-word">More</span> <span class="slogan-word">Fun,</span><br>
              <span class="slogan-word">More</span> <span class="slogan-word">Interesting</span>
            </h1>
          </div>
          
          <div class="scroll-indicator">
            <span class="scroll-text">Scroll</span>
            <div class="scroll-line"></div>
          </div>
        </section>

        <section class="me-burst" id="me-burst">
          <div class="me-burst__center">YOONJUN</div>

          <div class="me-burst__images">
            <img src="/src/assets/val1.jpeg" alt="Frontend" class="me-burst__img" />
            <img src="/src/assets/val2.jpeg" alt="UX" class="me-burst__img" />
            <img src="/src/assets/val3.jpeg" alt="AI" class="me-burst__img" />
            <img src="/src/assets/val4.jpeg" alt="Animation" class="me-burst__img" />
            <img src="/src/assets/val5.jpeg" alt="Teamwork" class="me-burst__img" />
            <img src="/src/assets/val6.jpeg" alt="Teamwork" class="me-burst__img" />
            <img src="/src/assets/val7.jpeg" alt="Teamwork" class="me-burst__img" />
          </div>
        </section>


        <!-- Self-Introduction Section (Scroll Trigger) -->
        <section class="intro-section">
          <div class="intro-sticky-wrapper">
            <span class="mask">
              <span class="text">
              <span class="line-1">안녕하십니까!</span><br>
              <span class="line-2">재밌고</span><br>
              <span class="line-3">흥미로운</span><br>
              <span class="line-4">경험을 선사하는</span><br>
              <span class="line-5">개발자</span><br>
              <span class="line-6-name">Yoon Jun</span><br>
              <span class="line-6-suffix">입니다.</span>  
              </span>
            </span>
          </div>
        </section>

        <!-- Skills Section -->
        <!-- Skills Section -->
        <!-- <section class="skills-section">
          <span class="skills-mask">
            <span class="skills-text">
              <span class="skills-line-1">SKILLS</span>
            </span>
          </span>
          
          <div class="skills-container">
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
        </section> -->

        <section class="skills2-section">
        <div class="textLoop">
          <ul>
            <li>JavaScript <img src="/src/assets/sk1.png" alt="HTML" /></li>
            <li>TypeScript <img src="/src/assets/sk2.png" alt="HTML" /></li>
            <li>React <img src="/src/assets/sk3.png" alt="HTML" /></li>
            <li>Vue <img src="/src/assets/sk4.png" alt="HTML" /></li>
            <li>Next.js <img src="/src/assets/sk5.png" alt="HTML" /></li>
            <li>Java <img src="/src/assets/sk6.png" alt="HTML" /></li>
            <li>JavaScript <img src="/src/assets/sk1.png" alt="HTML" /></li>
            <li>TypeScript <img src="/src/assets/sk2.png" alt="HTML" /></li>
            <li>React <img src="/src/assets/sk3.png" alt="HTML" /></li>
            <li>Vue <img src="/src/assets/sk4.png" alt="HTML" /></li>
            <li>Next.js <img src="/src/assets/sk5.png" alt="HTML" /></li>
            <li>Java <img src="/src/assets/sk6.png" alt="HTML" /></li>
          </ul>
          </div>
          <div class="card">
          </div>
          <div class="textLoop2">
          <ul>
          <li>Spring <img src="/src/assets/sk7.png" alt="HTML" /></li>
            <li>MySQL <img src="/src/assets/sk8.png" alt="HTML" /></li>
            <li>Figma <img src="/src/assets/sk9.png" alt="HTML" /></li>
            <li>Git <img src="/src/assets/sk10.png" alt="HTML" /></li>
            <li>Jira <img src="/src/assets/sk11.png" alt="HTML" /></li>
            <li>Photoshop <img src="/src/assets/sk12.png" alt="HTML" /></li>
            <li>Spring <img src="/src/assets/sk7.png" alt="HTML" /></li>
            <li>MySQL <img src="/src/assets/sk8.png" alt="HTML" /></li>
            <li>Figma <img src="/src/assets/sk9.png" alt="HTML" /></li>
            <li>Git <img src="/src/assets/sk10.png" alt="HTML" /></li>
            <li>Jira <img src="/src/assets/sk11.png" alt="HTML" /></li>
            <li>Photoshop <img src="/src/assets/sk12.png" alt="HTML" /></li>
          </ul>
          </div>
        </section>

        <section class="project-section">
          <div class="project-container">
            <h2>Projects</h2>
            
            <div class="project-scene">
              <!-- Background Elements -->
              <div class="bg-text" id="bgText">TRIVERSE</div>
              <div class="side-img left" id="sideLeft">
                <img src="/src/assets/tri1.png" alt="Side Left" />
              </div>
              <div class="side-img right" id="sideRight">
                <img src="/src/assets/tri2.png" alt="Side Right" />
              </div>

              <!-- Existing Carousel -->
              <div class="carousel-3d">
                <!-- Phone Frame Overlay -->
                <img src="/src/assets/phone.png" class="phone-frame-overlay" alt="Phone Frame" />
                
                <!-- Carousel Items -->
                <div class="carousel-items">
                  <div class="c-item active" data-index="0">
                    <img src="/src/assets/Triverse.jpeg" alt="Triverse" />
                  </div>
                  <div class="c-item next" data-index="1">
                    <img src="/src/assets/Gooddog.jpeg" alt="Gooddog" />
                  </div>
                  <div class="c-item prev" data-index="2">
                    <img src="/src/assets/Randezview.jpeg" alt="Randezview" />
                  </div>
                </div>
                <div class="phone-controls">
                  <button id="prevBtn" class="nav-btn">←</button>
                  <button id="nextBtn" class="nav-btn">→</button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      `
  }

  init() {
    // 1. Slogan Section Animations (Timeline)
    this.sloganTl = gsap.timeline()

    // Initial setup for slogan words
    gsap.set('.slogan-word', { opacity: 0, y: 20 });
    gsap.set('.slogan-container', { opacity: 1 }); // Ensure container is visible

    this.sloganTl.to('.character-image', {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      onStart: () => {
        gsap.fromTo('.character-image',
          { filter: 'drop-shadow(0 0 0 rgba(255,255,255,0)) brightness(0)' },
          {
            filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.6)) brightness(1.2)',
            duration: 1.5,
            ease: 'rough({ template: none.out, strength: 1, points: 20, taper: "none", randomize: true, clamp: false })'
          }
        )
      }
    })
      .to('.character-image', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      }, '-=0.5')
      .to('.character-image', {
        filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.3)) brightness(1)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      }, '<')
      // Animate words sequentially
      .to('.slogan-word', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.6, // Slow stagger as requested
        ease: 'power3.out'
      }, '-=1.0')
      .to('.scroll-indicator', {
        opacity: 0.7,
        duration: 1,
        delay: 0.5
      })

    // Section 3: Me Burst Animation
    const meSection = document.querySelector('.me-burst');
    const meImages = document.querySelectorAll('.me-burst__img');

    if (meSection && meImages.length > 0) {
      // 1. Define Fixed End Positions & Scales (Scattered Layout)
      // Coordinates relative to center (0,0)
      const endPositions = [
        { x: -450, y: -250, scale: 1.2 },  // Top Left (Large)
        { x: 320, y: 100, scale: 0.8 },   // Top Right (Medium)
        { x: -700, y: -100, scale: 0.9 },   // Middle Left (Small)
        { x: 550, y: -100, scale: 1.4 },     // Middle Right (Large)
        { x: -300, y: 250, scale: 1.4 },   // Bottom Left (Medium)
        { x: 550, y: 270, scale: 1.5 },   // Bottom Right (Small)
        { x: 150, y: -240, scale: 1.0 },     // Top Center (Very Small)
      ];

      // 3. Create ScrollTrigger Animation
      // Performance Optimization: Start from 30% of the distance instead of center (0,0)
      this.meBurstTween = gsap.fromTo(meImages,
        {
          x: (i) => endPositions[i] ? endPositions[i].x * 0.5 : 0, // Start closer to end
          y: (i) => endPositions[i] ? endPositions[i].y * 0.5 : 0,
          scale: 0.5, // Start smaller
        },
        {
          scrollTrigger: {
            trigger: '.me-burst',
            start: 'top center',
            end: '+=400',
            scrub: 1,
          },
          x: (i) => endPositions[i] ? endPositions[i].x : 0,
          y: (i) => endPositions[i] ? endPositions[i].y : 0,
          scale: (i) => endPositions[i] ? endPositions[i].scale : 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.05
        }
      );

      // 4. Background Color Change Animation
      this.meBurstTrigger = ScrollTrigger.create({
        trigger: '.me-burst',
        start: 'top center', // Start when top of section hits center of viewport (same as burst)
        end: 'bottom center',   // End when bottom of section hits center of viewport
        onEnter: () => {
          gsap.to('body', { backgroundColor: '#ffffff', color: '#000000', duration: 0.5 });
          gsap.to('.me-burst__center', { color: '#000000', duration: 0.5 });
        },
        onLeave: () => {
          gsap.to('body', { backgroundColor: '#0a0a0a', color: '#ffffffff', duration: 0.5 });
          gsap.to('.me-burst__center', { color: '#ffffff', duration: 0.5 });
        },
        onEnterBack: () => {
          gsap.to('body', { backgroundColor: '#ffffff', color: '#000000', duration: 0.5 });
          gsap.to('.me-burst__center', { color: '#000000', duration: 0.5 });
        },
        onLeaveBack: () => {
          gsap.to('body', { backgroundColor: '#0a0a0a', color: '#ffffffff', duration: 0.5 });
          gsap.to('.me-burst__center', { color: '#ffffff', duration: 0.5 });
        }
      });
    }



    //section 2 
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-section', // Trigger the whole section
        pin: true,                 // Pin the section
        start: 'top top',          // Start when top of section hits top of viewport
        end: '+=3000',             // Pin for 3000px of scrolling
        scrub: 1,
        markers: true
      }
    });

    this.introTl = tl; // Store for cleanup

    tl.fromTo('.intro-sticky-wrapper .mask .text span', {
      'background-size': '100% 0%'
    }, {
      'background-size': '100% 100%',
      stagger: 0.5,
      ease: 'power3.out'
    });

    // 3. Skills Section Animation (Left to Right Fill)
    // 1. 타임라인 생성 (변수에 담기!)
    if (document.querySelector('.skills-section')) {
      this.skillsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.skills-section',
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
          markers: true
        }
      });

      // 2. 생성한 타임라인에 애니메이션 추가
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
          ease: 'none' // scrub을 쓸 때는 보통 none을 씁니다 (스크롤 속도 그대로 따라가게)
        }
      );
    }

    // Project Data
    const projects = [
      {
        name: "Triverse",
        left: "/src/assets/tri1.png",
        right: "/src/assets/tri2.png",
        color: "#e865ffff",
        title: "TRIVERSE"
      },
      {
        name: "Gooddog",
        left: "/src/assets/dog1.png",
        right: "/src/assets/dog2.png",
        color: "#7ED321",
        title: "GOODDOG"
      },
      {
        name: "Randezview",
        left: "/src/assets/ran1.png",
        right: "/src/assets/ran2.png",
        color: "#ff4040ff",
        title: "RANDEZVIEW"
      }
    ];

    const items = document.querySelectorAll('.c-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sideLeft = document.getElementById('sideLeft');
    const sideRight = document.getElementById('sideRight');
    const bgText = document.getElementById('bgText');

    let currentIndex = 0;
    const totalItems = items.length;

    if (items.length > 0 && prevBtn && nextBtn) {
      this.nextBtn = nextBtn;
      this.prevBtn = prevBtn;

      const updateCarousel = () => {
        // 1. Update Carousel Classes
        items.forEach((item, index) => {
          item.className = 'c-item';
          if (index === currentIndex) {
            item.classList.add('active');
          } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
            item.classList.add('prev');
          } else if (index === (currentIndex + 1) % totalItems) {
            item.classList.add('next');
          } else {
            item.classList.add('hidden');
          }
        });

        // 2. Update Side Elements & Background
        if (sideLeft && sideRight && bgText) {
          const project = projects[currentIndex];
          console.log('UpdateCarousel:', currentIndex, project.title, project.color); // Debug Log

          // Animate Out
          sideLeft.classList.add('exit-left');
          sideRight.classList.add('exit-right');
          bgText.style.opacity = 0;

          setTimeout(() => {
            // 1. Disable Transition & Update Content
            sideLeft.classList.add('no-transition');
            sideRight.classList.add('no-transition');

            sideLeft.querySelector('img').src = project.left;
            sideRight.querySelector('img').src = project.right;
            bgText.textContent = project.title;
            bgText.style.color = project.color; // Apply project color

            // 2. Reset to Start Position (Instant)
            sideLeft.classList.remove('exit-left');
            sideRight.classList.remove('exit-right');

            sideLeft.classList.add('enter-left');
            sideRight.classList.add('enter-right');

            // 3. Force Reflow (Flush changes)
            void sideLeft.offsetWidth;

            // 4. Re-enable Transition & Animate In
            sideLeft.classList.remove('no-transition');
            sideRight.classList.remove('no-transition');

            sideLeft.classList.remove('enter-left');
            sideRight.classList.remove('enter-right');
            bgText.style.opacity = 1;
          }, 300); // Sync with transition
        }
      };

      // Initialize
      if (bgText) {
        bgText.style.color = projects[0].color;
      }
      updateCarousel();

      this.handleNext = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
      };
      nextBtn.addEventListener('click', this.handleNext);

      this.handlePrev = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
      };
      prevBtn.addEventListener('click', this.handlePrev);
    }
  }

  cleanup() {
    // Kill GSAP animations
    if (this.sloganTl) this.sloganTl.kill();
    if (this.meBurstTween) this.meBurstTween.kill();
    if (this.meBurstTrigger) this.meBurstTrigger.kill();
    if (this.introTl) this.introTl.kill();
    if (this.skillsTl) this.skillsTl.kill();

    // Remove Event Listeners
    if (this.nextBtn && this.handleNext) {
      this.nextBtn.removeEventListener('click', this.handleNext);
    }
    if (this.prevBtn && this.handlePrev) {
      this.prevBtn.removeEventListener('click', this.handlePrev);
    }

    // Reset body styles if me-burst changed them
    gsap.set('body', { backgroundColor: '#0a0a0a', color: '#f5f5f5' });

    // Clear ScrollTriggers to be safe
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
