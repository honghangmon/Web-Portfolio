// 방명록 데이터를 저장할 배열
let guestbookEntries = [];

// DOM 요소들
const form = document.getElementById('guestbookForm');
const entriesContainer = document.getElementById('guestbookEntries');

// 페이지 로드 시 저장된 데이터 불러오기
document.addEventListener('DOMContentLoaded', function() {
    loadGuestbookEntries();
    displayEntries();
});

// 폼 제출 이벤트 리스너
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && message) {
        addGuestbookEntry(name, message);
        form.reset(); // 폼 초기화
    }
});

// 방명록 항목 추가 함수
function addGuestbookEntry(name, message) {
    const entry = {
        id: Date.now(), // 간단한 ID 생성
        name: name,
        message: message,
        date: new Date().toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    guestbookEntries.unshift(entry); // 최신 항목을 맨 위에 추가
    saveGuestbookEntries();
    displayEntries();
    
    // 성공 메시지 표시
    showNotification('방명록이 성공적으로 추가되었습니다!', 'success');
}

// 방명록 항목 삭제 함수
function deleteGuestbookEntry(id) {
    if (confirm('정말로 이 방명록을 삭제하시겠습니까?')) {
        guestbookEntries = guestbookEntries.filter(entry => entry.id !== id);
        saveGuestbookEntries();
        displayEntries();
        showNotification('방명록이 삭제되었습니다.', 'info');
    }
}

// 방명록 목록 표시 함수
function displayEntries() {
    if (guestbookEntries.length === 0) {
        entriesContainer.innerHTML = `
            <div class="empty-message">
                아직 방명록이 없습니다.<br>
                첫 번째 방명록을 남겨보세요!
            </div>
        `;
        return;
    }
    
    entriesContainer.innerHTML = guestbookEntries.map(entry => `
        <div class="guestbook-entry">
            <div class="entry-header">
                <span class="entry-name">${escapeHtml(entry.name)}</span>
                <span class="entry-date">${entry.date}</span>
            </div>
            <div class="entry-message">${escapeHtml(entry.message)}</div>
            <button class="delete-btn" onclick="deleteGuestbookEntry(${entry.id})">
                삭제
            </button>
        </div>
    `).join('');
}

// HTML 이스케이프 함수 (XSS 방지)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 로컬 스토리지에 저장
function saveGuestbookEntries() {
    localStorage.setItem('guestbookEntries', JSON.stringify(guestbookEntries));
}

// 로컬 스토리지에서 불러오기
function loadGuestbookEntries() {
    const saved = localStorage.getItem('guestbookEntries');
    if (saved) {
        guestbookEntries = JSON.parse(saved);
    }
}

// 알림 메시지 표시 함수
function showNotification(message, type = 'info') {
    // 기존 알림이 있다면 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 스타일 적용
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
    `;
    
    // 애니메이션 CSS 추가
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// 키보드 단축키 지원
document.addEventListener('keydown', function(e) {
    // Ctrl+Enter로 폼 제출
    if (e.ctrlKey && e.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

// 폼 유효성 검사 강화
document.getElementById('name').addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, ''); // XSS 방지
});

document.getElementById('message').addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, ''); // XSS 방지
});
