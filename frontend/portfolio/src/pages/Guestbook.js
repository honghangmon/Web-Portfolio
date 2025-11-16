import { guestbookStore } from '../state/guestbookStore.js'

export class Guestbook {
  constructor() {
    this.store = guestbookStore
    this.isModalOpen = false
    this.lastFocusedElement = null
  }

  render() {
    return `
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
    `
  }

  init() {
    this.displayEntries()
    this.bindEvents()
    this.syncWallTopPadding()
    console.log('Guestbook 페이지 로드됨')
  }

  bindEvents() {
    // 모달 열기/닫기
    const openBtn = document.getElementById('openGuestbookModal')
    const closeBtn = document.getElementById('closeGuestbookModal')
    const cancelBtn = document.getElementById('cancelGuestbookModal')
    const overlay = document.getElementById('guestbookOverlay')
    const form = document.getElementById('guestbookForm')

    if (openBtn) {
      openBtn.addEventListener('click', () => this.openModal())
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal())
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.closeModal())
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal()
      })
    }

    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
      if (this.isModalOpen && e.key === 'Escape') {
        this.closeModal()
      }
    })

    // 폼 제출
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.handleFormSubmit(form)
      })
    }

    // XSS 방지
    const nameInput = document.getElementById('name')
    const messageInput = document.getElementById('message')
    
    if (nameInput) {
      nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[<>]/g, '')
      })
    }

    if (messageInput) {
      messageInput.addEventListener('input', function() {
        this.value = this.value.replace(/[<>]/g, '')
      })
    }

    // 윈도우 리사이즈 이벤트
    window.addEventListener('resize', () => this.syncWallTopPadding())
    window.addEventListener('load', () => this.syncWallTopPadding())
    
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => this.syncWallTopPadding()).catch(() => {})
    }
  }

  openModal() {
    this.lastFocusedElement = document.activeElement
    const overlay = document.getElementById('guestbookOverlay')
    if (overlay) {
      overlay.classList.add('active')
      overlay.setAttribute('aria-hidden', 'false')
      this.isModalOpen = true
      
      const nameInput = document.getElementById('name')
      if (nameInput) nameInput.focus()
    }
  }

  closeModal() {
    const overlay = document.getElementById('guestbookOverlay')
    const form = document.getElementById('guestbookForm')
    
    if (overlay) {
      overlay.classList.remove('active')
      overlay.setAttribute('aria-hidden', 'true')
      this.isModalOpen = false
    }
    
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus()
    }
    
    if (form) {
      form.reset()
    }
  }

  handleFormSubmit(form) {
    const name = form.querySelector('#name').value.trim()
    const message = form.querySelector('#message').value.trim()
    
    if (!name || !message) {
      this.showNotification('이름과 메시지를 모두 입력해주세요.', 'info')
      return
    }

    this.store.addEntry(name, message)
    this.displayEntries()
    this.closeModal()
    this.showNotification('방명록이 성공적으로 추가되었습니다!', 'success')
  }

  displayEntries() {
    const entriesContainer = document.getElementById('guestbookEntries')
    if (!entriesContainer) return

    const entries = this.store.getEntries()
    
    if (!entries.length) {
      entriesContainer.innerHTML = ''
      return
    }
    
    entriesContainer.innerHTML = entries.map(entry => {
      const bg = entry.palette?.bg || '#fff8a3'
      const border = entry.palette?.border || '#f2e28a'
      const tape = entry.palette?.tape || '#ffd6d6'
      const rot = entry.rot || '-0.5deg'
      
      return `
        <div class="guestbook-entry" style="--note-bg:${bg}; --note-border:${border}; --tape:${tape}; --rot:${rot};">
          <div class="entry-header">
            <span class="entry-name">${this.escapeHtml(entry.name)}</span>
            <span class="entry-date">${entry.date}</span>
          </div>
          <div class="entry-message">${this.escapeHtml(entry.message)}</div>
          <button class="delete-btn" onclick="window.guestbookPage.deleteEntry(${entry.id})">삭제</button>
        </div>`
    }).join('')
  }

  deleteEntry(id) {
    if (confirm('정말로 이 방명록을 삭제하시겠습니까?')) {
      this.store.deleteEntry(id)
      this.displayEntries()
      this.showNotification('방명록이 삭제되었습니다.', 'info')
    }
  }

  syncWallTopPadding() {
    const header = document.querySelector('header')
    const wall = document.getElementById('guestbookEntries')
    if (!header || !wall) return
    
    const rect = header.getBoundingClientRect()
    const topPadding = Math.ceil(rect.bottom + 16)
    wall.style.setProperty('--wall-top', `${topPadding}px`)
  }

  showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) existingNotification.remove()
    
    const notification = document.createElement('div')
    notification.className = `notification notification-${type}`
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#48bb78' : '#4299e1'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `
    
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style')
      style.id = 'notification-styles'
      style.textContent = `
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
      `
      document.head.appendChild(style)
    }
    
    document.body.appendChild(notification)
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideIn 0.3s ease-out reverse'
        setTimeout(() => { if (notification.parentNode) notification.remove() }, 300)
      }
    }, 3000)
  }

  escapeHtml(text) {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }

  cleanup() {
    // 페이지 전환 시 정리 작업
    this.isModalOpen = false
  }
}

// 전역에서 접근 가능하도록 설정 (삭제 버튼 onclick에서 사용)
window.guestbookPage = null
