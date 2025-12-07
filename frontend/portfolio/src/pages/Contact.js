import gsap from 'gsap'

export class Contact {
  render() {
    return `
      <main class="page contact-page">
        <div class="contact-container">
          <div class="contact-left">
            <h1 class="contact-title">
              Get in <br>
              touch
            </h1>
            <div class="underline-container">
               <svg width="400" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="contact-line-svg">
                  <path d="M5 30 Q 100 5, 200 20 T 395 10" stroke="white" stroke-width="4" stroke-linecap="round" class="contact-line-path"/>
               </svg>
            </div>
            
            <div class="mascot-wrapper">
              <img src="/src/assets/contact_mascot.png" alt="Contact Me Mascot" class="contact-mascot" />
            </div>
          </div>

          <div class="contact-right">
            <div class="contact-list">
              <div class="contact-item">
                <span class="label">Name</span>
                <span class="value">Yoonjun Lee</span>
              </div>
              <div class="contact-item">
                <span class="label">Email</span>
                <span class="value">wnsdl0604@naver.com</span>
              </div>
              <div class="contact-item">
                <span class="label">Phone</span>
                <span class="value">+82 010-6850-5951</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    `
  }

  init() {
    // Initial State
    gsap.set('.contact-title', { opacity: 0, y: 50 });
    gsap.set('.contact-item', { opacity: 0, x: 50 });
    gsap.set('.mascot-wrapper', { opacity: 0, scale: 0.8, rotation: -10 });

    // SVG Line setup
    const path = document.querySelector('.contact-line-path');
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    }

    // Main Timeline
    this.tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    this.tl
      .to('.contact-title', { opacity: 1, y: 0, duration: 1 })
      .to('.contact-line-path', { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.5")
      .to('.contact-item', { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 }, "-=0.8")
      .to('.mascot-wrapper', { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)" }, "-=0.5");
  }

  cleanup() {
    if (this.tl) this.tl.kill();
  }

  bindFormEvents() {
    const form = document.getElementById('contactForm')
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.handleFormSubmit(form)
      })
    }
  }

  handleFormSubmit(form) {
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // 실제로는 서버로 전송하거나 이메일 서비스 사용
    console.log('폼 데이터:', data)

    // 성공 메시지 표시
    alert('메시지가 성공적으로 전송되었습니다!')
    form.reset()
  }
}
