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

    // // 2. Self-Introduction Sticky Scroll Sequence

    // // Initial State: Hide all text elements
    // gsap.set(".intro-text", { autoAlpha: 0 });

    // // Create Timeline
    // const introTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".intro-section",
    //     pin: true,           // Pin the section
    //     start: "top top",    // Start when section hits top
    //     end: "+=4000",       // Scroll distance
    //     scrub: 1,            // Smooth scrubbing
    //   }
    // });

    // // Sequence 1: "안녕하십니까!" (Center)
    // introTl.fromTo(".text-1",
    //   { autoAlpha: 0, y: 50 },
    //   { autoAlpha: 1, y: 0, duration: 1 }
    // )
    //   .to(".text-1", { autoAlpha: 0, y: -50, duration: 1 }, "+=1"); // Stay then disappear

    // // Sequence 2: "재밌고" (Left Top)
    // introTl.fromTo(".text-2",
    //   { autoAlpha: 0, x: -300, y: -50 },
    //   { autoAlpha: 1, x: -100, y: -50, duration: 1 }
    // )
    //   .to([".text-2"], { autoAlpha: 0, duration: 1 }, "+=1");

    // // Sequence 2: "흥미로운" (Right Bottom)
    // introTl.fromTo(".text-3",
    //   { autoAlpha: 0, x: 300, y: 50, scale: 0.8 },
    //   { autoAlpha: 1, x: 100, y: 50, scale: 1, duration: 1 }
    // )
    //   .to(".text-3", { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=1");


    // // Sequence 3: "경험을 선사하는 개발자" (Center Yellow)
    // introTl.fromTo(".text-4",
    //   { autoAlpha: 0, scale: 0.8 },
    //   { autoAlpha: 1, scale: 1, duration: 1 }
    // )
    //   .to(".text-4", { autoAlpha: 0, scale: 1.2, duration: 1 }, "+=1");

    // // Sequence 4: "Yoon Jun 입니다" (Center White) - Final State
    // introTl.fromTo(".text-5",
    //   { autoAlpha: 0, y: 50 },
    //   { autoAlpha: 1, y: 0, duration: 1 }
    // );

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
  }
}
