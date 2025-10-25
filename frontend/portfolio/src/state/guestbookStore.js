// 방명록 상태 관리
export class GuestbookStore {
  constructor() {
    this.entries = []
    this.loadFromStorage()
  }

  // 로컬 스토리지에서 불러오기
  loadFromStorage() {
    const saved = localStorage.getItem('guestbookEntries')
    if (saved) {
      this.entries = JSON.parse(saved)
    }
  }

  // 로컬 스토리지에 저장
  saveToStorage() {
    localStorage.setItem('guestbookEntries', JSON.stringify(this.entries))
  }

  // 방명록 추가
  addEntry(name, message) {
    const palette = this.getRandomPalette()
    const rotation = this.getRandomRotationDeg()

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
    }
    
    this.entries.unshift(entry)
    this.saveToStorage()
    return entry
  }

  // 방명록 삭제
  deleteEntry(id) {
    this.entries = this.entries.filter(entry => entry.id !== id)
    this.saveToStorage()
  }

  // 모든 방명록 가져오기
  getEntries() {
    return this.entries
  }

  // 랜덤 팔레트 생성
  getRandomPalette() {
    const trendyPalettes = [
      { bg: '#FFE3EC', border: '#FBC4D8', tape: '#FFD6D6' }, // 핑크 코랄
      { bg: '#E3F2FF', border: '#BBDFFF', tape: '#D6E8FF' }, // 하늘 블루
      { bg: '#E9FFE3', border: '#C9F7BB', tape: '#E1FFD6' }, // 민트 그린
      { bg: '#FFF4E3', border: '#FFE0B3', tape: '#FFE7C6' }, // 크림 오렌지
      { bg: '#F1E3FF', border: '#D7BBFF', tape: '#E6D6FF' }, // 라일락 퍼플
      { bg: '#FFFDE3', border: '#F7F1BB', tape: '#FFF4C6' }  // 레몬 옐로
    ]
    return trendyPalettes[Math.floor(Math.random() * trendyPalettes.length)]
  }

  // 랜덤 회전 각도 생성
  getRandomRotationDeg() {
    const deg = (Math.random() * 4) - 2
    return `${deg.toFixed(2)}deg`
  }
}

// 싱글톤 인스턴스
export const guestbookStore = new GuestbookStore()
