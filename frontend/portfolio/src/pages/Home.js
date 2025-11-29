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
        <section class="skills-section">
          <span class="skills-mask">
            <span class="skills-text">
              <span class="skills-line-1">SKILLS</span>
            </span>
          </span>
          
          <div class="skills-grid">
            <!-- Skill Cards 1-12 -->
            <div class="skill-card"><img src="/src/assets/skill-1.png" alt="Skill 1" /></div>
            <div class="skill-card"><img src="/src/assets/skill-2.png" alt="Skill 2" /></div>
            <div class="skill-card"><img src="/src/assets/skill-3.png" alt="Skill 3" /></div>
            <div class="skill-card"><img src="/src/assets/skill-4.png" alt="Skill 4" /></div>
            <div class="skill-card"><img src="/src/assets/skill-5.png" alt="Skill 5" /></div>
            <div class="skill-card"><img src="/src/assets/skill-6.png" alt="Skill 6" /></div>
            <div class="skill-card"><img src="/src/assets/skill-7.png" alt="Skill 7" /></div>
            <div class="skill-card"><img src="/src/assets/skill-8.png" alt="Skill 8" /></div>
            <div class="skill-card"><img src="/src/assets/skill-9.png" alt="Skill 9" /></div>
            <div class="skill-card"><img src="/src/assets/skill-10.png" alt="Skill 10" /></div>
            <div class="skill-card"><img src="/src/assets/skill-11.png" alt="Skill 11" /></div>
            <div class="skill-card"><img src="/src/assets/skill-12.png" alt="Skill 12" /></div>
          </div>
        </section>
      </main>
      `
  }

  init() {
    // 1. Slogan Section Animations (Timeline)
    const sloganTl = gsap.timeline()

    // Initial setup for slogan words
    gsap.set('.slogan-word', { opacity: 0, y: 20 });
    gsap.set('.slogan-container', { opacity: 1 }); // Ensure container is visible

    sloganTl.to('.character-image', {
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

    tl.fromTo('.intro-sticky-wrapper .mask .text span', {
      'background-size': '100% 0%'
    }, {
      'background-size': '100% 100%',
      stagger: 0.5,
      ease: 'power3.out'
    });

    // 3. Skills Section Animation (Left to Right Fill)
    // 1. 타임라인 생성 (변수에 담기!)
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        end: 'center center',
        scrub: 1,
        markers: true
      }
    });

    // 2. 생성한 타임라인에 애니메이션 추가
    skillsTl.fromTo('.skills-text span',
      {
        'background-size': '0% 100%'
      },
      {
        'background-size': '100% 100%',
        stagger: 0.5,
        ease: 'none' // scrub을 쓸 때는 보통 none을 씁니다 (스크롤 속도 그대로 따라가게)
      }
    );

  }
}
