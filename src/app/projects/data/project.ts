export type Project = {
  slug: string;
  cover: { src: string; alt: string };
  title: string;
  subtitle: string;
  description: string;

  period?: string;
  team?: string;
  role?: string;
  stack?: string[];
  links?: { label: string; href: string; icon?: string }[];

  about?: string;
  features?: string[];
  implementation?: string[];

  thumbnail?: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];

  performance?: string;
  troubleshooting?: string;
};

// ==== Projects Config ====
export const projects: Record<string, Project> = {
  jobthoughts: {
    slug: "jobthoughts",
    cover: {
      src: "/projects/jobthoughts-cover.webp",
      alt: "잡생각 프로젝트 커버 이미지",
    },
    title: "JobThoughts",
    subtitle: "성향을 분석해 맞춤형 직업을 추천하는 서비스",
    description:
      "선택형 성향 테스트와 커리어넷 API 기반 직업 매칭을 결합한 플랫폼입니다. 추천 직업의 상세 정보(직무, 역량, 자격증, 학과)와 실시간 채용 공고를 한 곳에서 조회할 수 있습니다.",

    period: "2025.05.07 ~ 2025.05.20",
    team: "4명 (Frontend)",
    role: "Front-end(서비스 기획, UI/UX 디자인, 가치관 검사 결과 페이지 및 랜딩 페이지 일부 개발)",
    stack: [
      "Vite",
      "HTML5",
      "CSS3",
      "TypeScript",
      "React",
      "Styled-Components",
      "Node.js",
      "Express",
    ],
    links: [
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
      },
      {
        label: "github",
        href: "https://github.com/hyonun321/JobThoughts",
        icon: "/icons/github-black.svg",
      },
      {
        label: "notion",
        href: "https://urecaminiproject2.notion.site/03-Team-Project-1ecbbd280f318080b3f1e61be738fdd6",
        icon: "/icons/notion.svg",
      },
    ],

    about:
      "잡생각은 사용자의 성향, 선호도, 선택 데이터를 기반으로 가치관 검사를 통해 적합한 직업을 추천하고 관련 채용 정보를 실시간으로 연결해주는 진로 탐색·채용 연계 서비스입니다.",
    features: [
      "성향 선택형 테스트: 간단한 질문을 통해 사용자의 가치관과 선호 활동을 분석",
      "직업 추천: 커리어넷 API를 활용해 개인 성향에 맞는 직업 추천",
      "실시간 채용 정보 조회: 추천 직업의 채용 공고를 즉시 확인 가능",
      "직업 정보 열람: 각 직업의 설명, 필요 역량, 자격증, 학과 정보 등 제공",
    ],
    implementation: [
      "본 프로젝트는 Vite · React · TypeScript 기반의 클라이언트와 Node.js(Express) 기반 서버를 하나의 레포지토리에서 pnpm 워크스페이스로 관리했습니다. Feature 기반 폴더 구조를 적용해 기능 단위로 모듈을 캡슐화해 결합도를 낮추고 확장성을 높였습니다.",
      "컴포넌트 재사용성과 유지보수성을 높이기 위해 styled-components를 활용했습니다. props와 variant 패턴을 적용하여 상황에 따라 유연하게 스타일을 변경할 수 있도록 설계하였으며, 전역 테마 시스템을 통해 색상과 타이포그래피의 일관성을 유지했습니다.",
      "CSS clamp() 함수를 적용하여 화면 크기에 따라 텍스트 크기와 여백이 자연스럽게 반응하도록 구현하여 별도의 미디어쿼리 없이 다양한 디바이스에서 균형 잡힌 UI를 제공합니다.",
      "전반적인 UX/UI 설계는 사용자의 여정을 중심으로 구성하였으며, Framer Motion로 랜딩 페이지에 스크롤 트리거 애니메이션과 마이크로 인터랙션을 적용해 자연스러운 안내와 집중을 유도했습니다. 또한 transform/opacity 기반의 모션으로 성능을 고려한 부드러운 전환을 구현했습니다.",
      "검사 결과 시각화에는 Nivo Chart를 활용했습니다. 사용자의 가치관 검사 결과 데이터를 시각적으로 표현하여 성향의 분포와 우선순위를 직관적으로 파악할 수 있도록 설계했습니다.",
    ],

    thumbnail: "",
    screenshots: [
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],

    performance: "",
    troubleshooting: "",
  },
  umate: {
    slug: "umate",
    cover: {
      src: "/projects/u_mate-cover.webp",
      alt: "유메이트 커버 이미지",
    },
    title: "U: mate",
    subtitle: "AI 챗봇 기반 통신사 요금제 추천 및 관리 서비스",
    description:
      "맞춤형 요금제 추천부터 리뷰•비교까지 사용자가 쉽게 선택할 수 있도록 지원하는 플랫폼입니다. 시니어 이용자도 쉽게 접근할 수 있습니다.",
    period: "2025.06.09 ~ 2025.06.27",
    team: "5명 (Frontend)",
    role: "Front-end(서비스 기획, UI/UX 디자인, 온보딩 및 요금제 페이지, 공통 컴포넌트 개발)",
    stack: [
      "Vite",
      "HTML5",
      "CSS3",
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MariaDB",
    ],
    links: [
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
      },
      {
        label: "github",
        href: "https://github.com/U-Mate",
        icon: "/icons/github-black.svg",
      },
      {
        label: "notion",
        href: "https://learned-scarf-b41.notion.site/5-206ca47e589c8078a3adea55ad68d15b?pvs=74",
        icon: "/icons/notion.svg",
      },
    ],

    about:
      "유메이트는 사용자의 사용 패턴, 선호도, 예산 데이터를 바탕으로 요금제 적합도를 진단해 최적 플랜을 추천하고, 실시간 프로모션·신청 가이드까지 연결해주는 통신 요금제 탐색·가입 연계 서비스입니다.",
    features: [
      "회원가입 & 로그인: 개인화 추천, 즐겨찾기/최근 본·챗봇 대화 이력 동기화, 멤버십 등급별 혜택, 연령대 기반 맞춤 콘텐츠 제공",
      "바로가기 페이지: 진입 즉시 핵심 기능만 큼직한 버튼으로 노출해 직관적인 첫 경험 제공",
      "요금제 목록: 50여 개의 다양한 요금제 제공, 다중 필터링으로 탐색 가능",
      "요금제 리뷰: 리뷰·별점 작성/수정/삭제/조회 지원",
      "요금제 비교 분석: 데이터, 통화, 가격 등 항목별 비교 기능으로 합리적인 선택 지원",
      "챗봇 대화를 통한 요금제 추천: 사용자의 데이터 사용량, 통화 습관, 예산 등을 자연어로 입력받아 AI가 최적 요금제를 추천하고 대화 기억으로 재방문 시 맥락 유지, 음성/텍스트 지원",
    ],
    implementation: [
      "본 프로젝트는 React와 TypeScript 기반으로 개발되었으며, 컴포넌트 재사용성과 유지보수성을 높이기 위해 styled-components를 활용했습니다. props와 variant 패턴을 적용하여 상황에 따라 유연하게 스타일을 변경할 수 있도록 설계하였으며, 전역 테마 시스템을 통해 색상과 타이포그래피의 일관성을 유지했습니다.",
      "CSS clamp() 함수를 적용하여 화면 크기에 따라 텍스트 크기와 여백이 자연스럽게 반응하도록 구현하여 별도의 미디어쿼리 없이 다양한 디바이스에서 균형 잡힌 UI를 제공합니다.",
      "전반적인 UX/UI 설계는 사용자의 여정을 중심으로 구성하였으며, Framer Motion로 랜딩 페이지에 스크롤 트리거 애니메이션과 마이크로 인터랙션을 적용해 자연스러운 안내와 집중을 유도했습니다. 또한 transform/opacity 기반의 모션으로 성능을 고려한 부드러운 전환을 구현했습니다.",
      "검사 결과 시각화에는 Nivo Chart를 활용했습니다. 사용자의 가치관 검사 결과 데이터를 시각적으로 표현하여 성향의 분포와 우선순위를 직관적으로 파악할 수 있도록 설계했습니다.",
    ],
    screenshots: [
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],
    performance: "",
    troubleshooting: "",
  },
  itplace: {
    slug: "itplace",
    cover: {
      src: "/projects/it_place-cover.webp",
      alt: "잇플레이스 커버 이미지",
    },
    title: "It:place",
    subtitle: "성향을 분석해 맞춤형 직업을 추천하는 서비스",
    description:
      "선택형 성향 테스트와 커리어넷 API 기반 직업 매칭을 결합한 플랫폼입니다. 추천 직업의 상세 정보(직무, 역량, 자격증, 학과)와 실시간 채용 공고를 한 곳에서 조회할 수 있습니다.",

    period: "2025.05.07 ~ 2025.05.20",
    team: "4명 (Frontend)",
    role: "Front-end(서비스 기획, UI/UX 디자인, 가치관 검사 결과 페이지 및 랜딩 페이지 일부 개발)",
    stack: [
      "Vite",
      "HTML5",
      "CSS3",
      "TypeScript",
      "React",
      "Styled-Components",
      "Node.js",
      "Express",
    ],
    links: [
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
      },
      {
        label: "github",
        href: "https://github.com/ureca-itPlace",
        icon: "/icons/github-black.svg",
      },
      {
        label: "notion",
        href: "https://learned-scarf-b41.notion.site/6-222ca47e589c801c9f3ede0902f3fa36?pvs=74",
        icon: "/icons/notion.svg",
      },
    ],

    about:
      "잡생각은 사용자의 성향, 선호도, 선택 데이터를 기반으로 가치관 검사를 통해 적합한 직업을 추천하고 관련 채용 정보를 실시간으로 연결해주는 진로 탐색·채용 연계 서비스입니다.",
    features: [
      "성향 선택형 테스트: 간단한 질문을 통해 사용자의 가치관과 선호 활동을 분석",
      "직업 추천: 커리어넷 API를 활용해 개인 성향에 맞는 직업 추천",
      "실시간 채용 정보 조회: 추천 직업의 채용 공고를 즉시 확인 가능",
      "직업 정보 열람: 각 직업의 설명, 필요 역량, 자격증, 학과 정보 등 제공",
    ],
    implementation: [
      "본 프로젝트는 React와 TypeScript 기반으로 개발되었으며, 컴포넌트 재사용성과 유지보수성을 높이기 위해 styled-components를 활용했습니다. props와 variant 패턴을 적용하여 상황에 따라 유연하게 스타일을 변경할 수 있도록 설계하였으며, 전역 테마 시스템을 통해 색상과 타이포그래피의 일관성을 유지했습니다.",
      "CSS clamp() 함수를 적용하여 화면 크기에 따라 텍스트 크기와 여백이 자연스럽게 반응하도록 구현하여 별도의 미디어쿼리 없이 다양한 디바이스에서 균형 잡힌 UI를 제공합니다.",
      "전반적인 UX/UI 설계는 사용자의 여정을 중심으로 구성하였으며, Framer Motion로 랜딩 페이지에 스크롤 트리거 애니메이션과 마이크로 인터랙션을 적용해 자연스러운 안내와 집중을 유도했습니다. 또한 transform/opacity 기반의 모션으로 성능을 고려한 부드러운 전환을 구현했습니다.",
      "검사 결과 시각화에는 Nivo Chart를 활용했습니다. 사용자의 가치관 검사 결과 데이터를 시각적으로 표현하여 성향의 분포와 우선순위를 직관적으로 파악할 수 있도록 설계했습니다.",
    ],

    thumbnail: "",
    screenshots: [
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
      { src: "", alt: "" },
    ],

    performance: "",
    troubleshooting: "",
  },
};
