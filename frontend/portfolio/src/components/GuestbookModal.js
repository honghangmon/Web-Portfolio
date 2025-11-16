// 모달 컴포넌트 (필요시 별도 분리)
export class GuestbookModal {
  constructor() {
    this.isOpen = false
    this.lastFocusedElement = null
  }

  render() {
    return `
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
    `
  }

  open() {
    this.lastFocusedElement = document.activeElement
    const overlay = document.getElementById('guestbookOverlay')
    if (overlay) {
      overlay.classList.add('active')
      overlay.setAttribute('aria-hidden', 'false')
      this.isOpen = true
      
      const nameInput = document.getElementById('name')
      if (nameInput) nameInput.focus()
    }
  }

  close() {
    const overlay = document.getElementById('guestbookOverlay')
    const form = document.getElementById('guestbookForm')
    
    if (overlay) {
      overlay.classList.remove('active')
      overlay.setAttribute('aria-hidden', 'true')
      this.isOpen = false
    }
    
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus()
    }
    
    if (form) {
      form.reset()
    }
  }

  bindEvents(onSubmit) {
    const overlay = document.getElementById('guestbookOverlay')
    const form = document.getElementById('guestbookForm')
    const closeBtn = document.getElementById('closeGuestbookModal')
    const cancelBtn = document.getElementById('cancelGuestbookModal')

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close())
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.close())
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.close()
      })
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        onSubmit(form)
        this.close()
      })
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
      if (this.isOpen && e.key === 'Escape') {
        this.close()
      }
    })
  }
}
