// 방명록 데이터를 저장할 배열
let guestbookEntries = [];

// 트렌디 팔레트 (배경/테두리/테이프)
const trendyPalettes = [
    { bg: '#FFE3EC', border: '#FBC4D8', tape: '#FFD6D6' }, // 핑크 코랄
    { bg: '#E3F2FF', border: '#BBDFFF', tape: '#D6E8FF' }, // 하늘 블루
    { bg: '#E9FFE3', border: '#C9F7BB', tape: '#E1FFD6' }, // 민트 그린
    { bg: '#FFF4E3', border: '#FFE0B3', tape: '#FFE7C6' }, // 크림 오렌지
    { bg: '#F1E3FF', border: '#D7BBFF', tape: '#E6D6FF' }, // 라일락 퍼플
    { bg: '#FFFDE3', border: '#F7F1BB', tape: '#FFF4C6' }  // 레몬 옐로
];

function getRandomPalette() {
    return trendyPalettes[Math.floor(Math.random() * trendyPalettes.length)];
}

function getRandomRotationDeg() {
    const deg = (Math.random() * 4) - 2;
    return `${deg.toFixed(2)}deg`;
}

// DOM 요소들
const form = document.getElementById('guestbookForm');
const entriesContainer = document.getElementById('guestbookEntries');
const overlay = document.getElementById('guestbookOverlay');
const openBtn = document.getElementById('openGuestbookModal');
const closeBtn = document.getElementById('closeGuestbookModal');
const cancelBtn = document.getElementById('cancelGuestbookModal');

let lastFocusedElement = null;

// 페이지 로드 시 저장된 데이터 불러오기
document.addEventListener('DOMContentLoaded', function() {
    loadGuestbookEntries();
    displayEntries();
});

// 모달 열기/닫기
function openModal() {
    lastFocusedElement = document.activeElement;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.focus();
}

function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) lastFocusedElement.focus();
    form.reset();
}

if (openBtn) openBtn.addEventListener('click', openModal);
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (overlay.classList.contains('active') && e.key === 'Escape') closeModal();
});

// 폼 제출 이벤트 리스너
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !message) {
        showNotification('이름과 메시지를 모두 입력해주세요.', 'info');
        return;
    }

    addGuestbookEntry(name, message);
    closeModal();
});

// 방명록 항목 추가 함수
function addGuestbookEntry(name, message) {
    const palette = getRandomPalette();
    const rotation = getRandomRotationDeg();

    const entry = {
        id: Date.now(),
        name: name,
        message: message,
        date: new Date().toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        palette: palette,
        rot: rotation
    };
    
    guestbookEntries.unshift(entry);
    saveGuestbookEntries();
    displayEntries();
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
    if (!guestbookEntries.length) {
        entriesContainer.innerHTML = '';
        return;
    }
    
    entriesContainer.innerHTML = guestbookEntries.map(entry => {
        const bg = entry.palette?.bg || '#fff8a3';
        const border = entry.palette?.border || '#f2e28a';
        const tape = entry.palette?.tape || '#ffd6d6';
        const rot = entry.rot || '-0.5deg';
        return `
        <div class="guestbook-entry" style="--note-bg:${bg}; --note-border:${border}; --tape:${tape}; --rot:${rot};">
            <div class="entry-header">
                <span class="entry-name">${escapeHtml(entry.name)}</span>
                <span class="entry-date">${entry.date}</span>
            </div>
            <div class="entry-message">${escapeHtml(entry.message)}</div>
            <button class="delete-btn" onclick="deleteGuestbookEntry(${entry.id})">삭제</button>
        </div>`;
    }).join('');
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
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
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
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => { if (notification.parentNode) notification.remove(); }, 300);
        }
    }, 3000);
}

// 폼 유효성 검사 강화
document.getElementById('name').addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, '');
});

document.getElementById('message').addEventListener('input', function() {
    this.value = this.value.replace(/[<>]/g, '');
});

// 헤더 높이에 맞춰 월 상단 패딩 동기화
function syncWallTopPadding() {
    const header = document.querySelector('header');
    const wall = document.getElementById('guestbookEntries');
    if (!header || !wall) return;
    const rect = header.getBoundingClientRect();
    const topPadding = Math.ceil(rect.bottom + 16); // 헤더 하단 + 여유
    wall.style.setProperty('--wall-top', `${topPadding}px`);
}

window.addEventListener('load', syncWallTopPadding);
window.addEventListener('resize', syncWallTopPadding);
// 폰트 로드로 높이 변동 가능성 대응
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncWallTopPadding).catch(() => {});
}
