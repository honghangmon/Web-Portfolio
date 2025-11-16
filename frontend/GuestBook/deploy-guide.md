# 방명록 페이지 배포 가이드

## 1. GitHub Pages (무료, 추천)

### 단계별 배포 방법:

1. **GitHub 계정 생성 및 저장소 만들기**
   - GitHub.com에서 계정 생성
   - "New repository" 클릭
   - Repository name: `guestbook` (또는 원하는 이름)
   - Public으로 설정
   - "Create repository" 클릭

2. **파일 업로드**
   - "uploading an existing file" 클릭
   - index.html, style.css, script.js, README.md 파일들을 드래그 앤 드롭
   - "Commit changes" 클릭

3. **GitHub Pages 활성화**
   - 저장소의 "Settings" 탭 클릭
   - 왼쪽 메뉴에서 "Pages" 클릭
   - Source를 "Deploy from a branch" 선택
   - Branch를 "main" 선택
   - "Save" 클릭

4. **배포 완료**
   - 몇 분 후 `https://[사용자명].github.io/[저장소명]` 주소로 접속 가능

## 2. Netlify (무료, 매우 쉬움)

### 드래그 앤 드롭 배포:
1. netlify.com 접속
2. "Sites" → "Add new site" → "Deploy manually"
3. 프로젝트 폴더를 드래그 앤 드롭
4. 자동으로 배포 완료!

### Git 연동 배포:
1. GitHub에 코드 푸시
2. Netlify에서 "New site from Git" 선택
3. GitHub 저장소 연결
4. 자동 배포 설정 완료

## 3. Vercel (무료, 빠름)

1. vercel.com 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 자동 배포 완료

## 4. 로컬 서버 테스트

### Python 사용 (Python 설치된 경우):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Node.js 사용:
```bash
# http-server 설치
npm install -g http-server

# 서버 실행
http-server
```

### VS Code Live Server 확장:
1. VS Code에서 "Live Server" 확장 설치
2. index.html 우클릭 → "Open with Live Server"

## 5. 도메인 연결 (선택사항)

### 무료 도메인:
- Freenom에서 무료 도메인 (.tk, .ml, .ga 등)
- GitHub Pages에서 Custom domain 설정

### 유료 도메인:
- 가비아, 후이즈 등에서 도메인 구매
- DNS 설정으로 연결

## 추천 배포 순서:

1. **처음이라면**: Netlify (가장 쉬움)
2. **Git 사용 경험 있다면**: GitHub Pages
3. **고급 기능 필요하다면**: Vercel

모든 방법이 무료이고, 몇 분 안에 배포 가능합니다!
