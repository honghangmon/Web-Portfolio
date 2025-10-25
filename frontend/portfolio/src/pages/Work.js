export class Work {
  constructor() {
    this.projects = [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "React와 Node.js를 활용한 온라인 쇼핑몰 플랫폼",
        image: "🛒",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "#",
        demo: "#",
        featured: true
      },
      {
        id: 2,
        title: "Task Management App",
        description: "팀 협업을 위한 프로젝트 관리 도구",
        image: "📋",
        tech: ["Vue.js", "Firebase", "CSS3"],
        github: "#",
        demo: "#",
        featured: true
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "실시간 날씨 정보를 제공하는 대시보드",
        image: "🌤️",
        tech: ["JavaScript", "API", "Chart.js"],
        github: "#",
        demo: "#",
        featured: false
      }
    ]
  }

  render() {
    return `
      <main class="page work-page">
        <section class="work-hero">
          <h1>My Work</h1>
          <p>창의적이고 실용적인 웹 프로젝트들</p>
        </section>

        <section class="projects">
          <div class="projects-filter">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="featured">Featured</button>
            <button class="filter-btn" data-filter="web">Web</button>
            <button class="filter-btn" data-filter="mobile">Mobile</button>
          </div>

          <div class="projects-grid">
            ${this.projects.map(project => `
              <div class="project-card ${project.featured ? 'featured' : ''}" data-category="web">
                <div class="project-image">
                  <div class="project-icon">${project.image}</div>
                </div>
                <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                  </div>
                  <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">
                      <span>GitHub</span>
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="cta">
          <h2>함께 일하고 싶으시다면</h2>
          <p>새로운 프로젝트에 대한 아이디어가 있으시다면 언제든 연락주세요</p>
          <a href="#/contact" class="btn btn-primary">연락하기</a>
        </section>
      </main>
    `
  }

  init() {
    this.bindFilterEvents()
    console.log('Work 페이지 로드됨')
  }

  bindFilterEvents() {
    const filterBtns = document.querySelectorAll('.filter-btn')
    const projectCards = document.querySelectorAll('.project-card')

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 활성 버튼 변경
        filterBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')

        // 필터링
        const filter = btn.getAttribute('data-filter')
        
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
      })
    })
  }
}
