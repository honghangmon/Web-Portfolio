import { GoogleGenerativeAI } from "@google/generative-ai";

// =================================================================================
// Google AI Studio API 설정 가이드
// =================================================================================
//
// 1. API 키 발급 받기:
//    - Google AI Studio (https://aistudio.google.com/) 에 접속합니다.
//    - Google 계정으로 로그인합니다.
//    - 'Get API key' 버튼을 클릭하여 새로운 API 키를 생성합니다.
//    - 생성된 키를 복사합니다.
//
// 2. 환경 변수 설정 (.env 파일):
//    - 프로젝트 루트 디렉토리(package.json이 있는 곳)에 '.env' 파일을 생성합니다.
//    - 아래와 같이 입력하고 복사한 키를 붙여넣습니다.
//      VITE_GEMINI_API_KEY=여기에_복사한_API_키_붙여넣기
//
// 3. 주의사항:
//    - 이 코드는 프론트엔드에서 실행되므로 API 키가 브라우저에 노출될 수 있습니다.
//    - 프로덕션 환경에서는 백엔드 서버를 통해 호출하는 것이 안전합니다.
//    - 사용량 제한(Quota)을 늘리려면 Google Cloud Console에서 결제 계정을 연결해야 할 수 있습니다.
//      (기본 무료 티어는 분당 요청 제한이 있을 수 있습니다.)
//
// =================================================================================

// .env 파일에서 API 키를 가져옵니다.
// Vite에서는 환경 변수 이름이 VITE_ 로 시작해야 클라이언트에 노출됩니다.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// API 키가 설정되어 있는지 확인
if (!API_KEY) {
    console.warn("Google Gemini API 키가 설정되지 않았습니다. .env 파일을 확인해주세요.");
}

// GoogleGenerativeAI 인스턴스 생성
const genAI = new GoogleGenerativeAI(API_KEY);

// 모델 가져오기 (예: gemini-pro)
// 필요에 따라 'gemini-pro-vision' 등으로 변경 가능
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// 테스트 함수 (필요시 사용)
export async function testGeminiConnection() {
    try {
        const prompt = "Hello, world!";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("Gemini API Connection Success:", text);
        return text;
    } catch (error) {
        console.error("Gemini API Connection Failed:", error);
        throw error;
    }
}
