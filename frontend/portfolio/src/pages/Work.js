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
          <!-- Project list will go here later -->
          <div class="placeholder-content" style="height: 100vh; background: #000000ff; padding: 100px;">
            <h2>Selected Works</h2>
            <p>Scroll down to see projects...</p>
          </div>
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
        end: '+=1000', // Scroll distance for the animation
        pin: true,
        scrub: 1,
        markers: false
      }
    });

    // Animate the title scale from huge to normal and move to top
    this.heroTl.fromTo('.work-title',
      {
        scale: 1.4,        // 처음 얼마나 크게 보일지
      },
      {
        scale: 0.4,
        y: -400,         // 최종 작은 사이즈
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }
    );

    // Animate the line to move up
    this.heroTl.fromTo('.line',
      { width: '100%', opacity: 1 },
      {
        y: -850, // Match the title's vertical movement
        duration: 1,
        ease: 'power2.out'
      },
      '<' // Start at the same time as the previous animation
    );
  }

  cleanup() {
    if (this.heroTl) this.heroTl.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
