export class Contact {
  render() {
    return `
      <main class="page contact-page">
        <section class="contact-hero">
          <h1>Get In Touch</h1>
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
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon">📱</div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>+82 10-1234-5678</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                  <h3>Location</h3>
                  <p>Seoul, South Korea</p>
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
                <a href="#" class="social-link" target="_blank">
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

          <div class="contact-form">
            <h2>메시지 보내기</h2>
            <form id="contactForm" class="form">
              <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="subject">제목</label>
                <input type="text" id="subject" name="subject" required>
              </div>
              <div class="form-group">
                <label for="message">메시지</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">메시지 보내기</button>
            </form>
          </div>
        </section>
      </main>
    `
  }

  init() {
    this.bindFormEvents()
    console.log('Contact 페이지 로드됨')
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
