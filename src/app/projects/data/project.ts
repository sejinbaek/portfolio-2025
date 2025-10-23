export type Inline = string | { mark: "red" | "blue"; text: string };
export type Paragraph = { children: Inline[] };
export type List = { items: Inline[][] };

export type InsightSectionData = {
  title: string;
  content: Paragraph[];
  impact?: "low" | "medium" | "high";
};

export type Project = {
  slug: string;
  cover: { src: string; alt: string };
  title: string;
  subtitle: string;
  description: string;

  period?: string;
  team?: string;
  role?: string;
  stack?: string[] | { label: string; items: string[] }[];
  links?: { label: string; href: string; icon?: string }[];

  about?: string;
  features?: string[];
  implementation?: string[];

  thumbnail?: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];

  performance?: InsightSectionData[];
  troubleshooting?: InsightSectionData[];
};

export type GroupedStackItem = { label: string; items: string[] };

// ==== Projects Config ====
export const projects: Record<string, Project> = {
  jobthoughts: {
    slug: "jobthoughts",
    cover: {
      src: "/projects/jobthoughts/jobthoughts-cover.webp",
      alt: "잡생각 프로젝트 커버 이미지",
    },
    title: "JobThoughts",
    subtitle: "성향을 분석해 맞춤형 직업을 추천하는 서비스",
    description:
      "선택형 성향 테스트와 커리어넷 API 기반 직업 매칭을 결합한 플랫폼입니다. 추천 직업의 상세 정보(직무, 역량, 자격증, 학과)와 실시간 채용 공고를 한 곳에서 조회할 수 있습니다.",

    period: "2025.05.07 ~ 2025.05.20",
    team: "4명 (Frontend)",
    role: "Front-end (서비스 기획, UI/UX 디자인, 가치관 검사 결과 페이지 및 랜딩 페이지 일부 개발)",
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
        label: "website",
        href: "https://job-thoughts-client.vercel.app/",
        icon: "/icons/web.svg",
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
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
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
      "모든 페이지를 반응형으로 구현하여 다양한 디바이스 환경에서 일관된 사용자 경험을 제공합니다.",
    ],

    thumbnail: "",
    screenshots: [
      {
        src: "/projects/jobthoughts/jobthoughts-1.webp",
        alt: "잡생각 프로젝트 이미지 1",
      },
      {
        src: "/projects/jobthoughts/jobthoughts-2.webp",
        alt: "잡생각 프로젝트 이미지 2",
      },
      {
        src: "/projects/jobthoughts/jobthoughts-3.webp",
        alt: "잡생각 프로젝트 이미지 3",
      },
    ],
  },
  umate: {
    slug: "umate",
    cover: {
      src: "/projects/umate/u_mate-cover-2.webp",
      alt: "유메이트 커버 이미지",
    },
    title: "U: mate",
    subtitle: "AI 챗봇 기반 통신사 요금제 추천 서비스",
    description:
      "맞춤형 요금제 추천부터 리뷰•비교까지 사용자가 쉽게 선택할 수 있도록 지원하는 플랫폼입니다. 시니어 이용자도 쉽게 접근할 수 있습니다.",
    period: "2025.06.09 ~ 2025.06.27",
    team: "5명 (Frontend)",
    role: "Front-end (서비스 기획, UI/UX 디자인, 온보딩 및 요금제 페이지, 공통 컴포넌트 개발)",
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
        label: "website",
        href: "https://umate.vercel.app/",
        icon: "/icons/web.svg",
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
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
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
      "본 프로젝트는 본 프로젝트는 Vite · React · TypeScript 기반으로 개발되어 빠른 반응성과 코드의 품질을 개선한 개발 환경을 구축하였습니다. Custom Hooks를 사용한 컴포넌트 설계로 재사용 가능한 로직을 효율적으로 관리했으며, 전역 상태 관리는 Context API 또는 Redux Toolkit을 활용했습니다.",
      "AI 챗봇 기능은 OpenAI API를 연동하여 구현했으며, 사용자의 데이터 사용량, 통화 습관, 예산 등을 자연어로 입력받아 최적의 요금제를 추천합니다. 대화 히스토리는 서버와 동기화되어 재방문 시에도 이전 대화 맥락을 유지합니다. Web Speech API의 Speech Recognition과 Speech Synthesis API를 활용하여 안정적인 한국어 음성 입출력을 구현했습니다. 음성 인식 오류 처리와 음성 합성 속도 조절 기능을 통해 자연스러운 대화 경험을 제공합니다.",
      "보안에는 JWT(JSON Web Token)를 활용한 인증 시스템을 구현하여 로그인 후 사용자 식별 및 세션 유지에 사용했습니다. CSRF(Cross-Site Request Forgery) 토큰 검증을 통해 자동 요청을 통한 정보 탈취를 위한 공격을 방지했으며, 별도 CSRF 토큰을 발급해 요청을 이중 검증합니다. 또한, XSS(Cross-Site Scripting) 공격을 방지하기 위해 스크립트 기반 공격으로 다른 사용자에게 악성 코드 전파 가능성을 차단했으며, 의심되는 스크립트 태그를 제거하여 원천 차단했고, SQL Injection 방지를 위해 WHERE 1=1 등으로 인증 우회 및 DB 탈취 가능성을 차단하고, 쿼리 파라미터화 및 필터링을 통해 차단했습니다.",
      "반응형 디자인은 모바일 우선 설계(Mobile-First)로 접근하여, 다양한 디바이스 크기에서 일관된 사용자 경험을 제공합니다. Tailwind CSS를 활용해 빠르고 일관된 스타일링을 구현했습니다.",
    ],
    screenshots: [
      {
        src: "/projects/umate/u_mate-1.webp",
        alt: "유메이트 프로젝트 이미지 1",
      },
      {
        src: "/projects/umate/u_mate-2.webp",
        alt: "유메이트 프로젝트 이미지 2",
      },
      {
        src: "/projects/umate/u_mate-3.webp",
        alt: "유메이트 프로젝트 이미지 3",
      },
      {
        src: "/projects/umate/u_mate-4.webp",
        alt: "유메이트 프로젝트 이미지 4",
      },
      {
        src: "/projects/umate/u_mate-5.webp",
        alt: "유메이트 프로젝트 이미지 5",
      },
    ],
    performance: [
      {
        title: "불필요한 API 호출 감소 (useDebounce 활용)",
        content: [
          {
            children: [
              "요금제 페이지에 있는 필터 모달에서 필터 변경 시 ",
              {
                mark: "blue",
                text: "짧은 시간에 여러 번 요청하는 것을 방지하기 위해 useDebounce(300ms)를 적용해 단일 요청만 보내도록 구성",
              },
              "했습니다. 미선택 시 빈 조건 요청 자체를 차단하고, 모달을 닫을 때는 화면에 표시된 결과 수를 현재 목록 길이와 동기화해 불필요한 재조회가 발생하지 않도록 했습니다.",
            ],
          },
          {
            children: [
              "이를 통해 네트워크 트래픽과 API 호출 수를 크게 줄이고, 서버 부하와 클라이언트 대기 시간을 낮춰 탐색 중 체감 응답성을 개선했습니다.",
            ],
          },
        ],
      },
      {
        title: "초기 렌더링 비용 절감",
        content: [
          {
            children: [
              {
                mark: "blue",
                text: "초기 진입 시 visibleCount를 적용해 요금제 카드 6개만 우선 렌더링",
              },
              "하고, 사용자가 요청할 때마다 “더보기”로 항목을 점진적으로 렌더링하도록 설계했습니다. 또한 모달·배너 등 부가 컴포넌트는 ",
              {
                mark: "blue",
                text: "조건부 렌더링으로 초기 트리에서 제외",
              },
              "해 불필요한 DOM 마운트와 자바스크립트 실행을 줄였습니다.",
            ],
          },
          {
            children: [
              "이를 통해 첫 화면에서 처리해야 할 작업량을 줄이고, TTI(Time to Interactive)를 단축해 초기 체감 속도와 인터랙션 반응성을 향상시켰습니다.",
            ],
          },
        ],
      },
      {
        title:
          "불필요한 리렌더링 억제 (React.memo 및 useMemo, useCallback 활용)",
        content: [
          {
            children: [
              "카드 목록의 렌더링 비용을 줄이기 위해 PlanCard에 ",
              {
                mark: "blue",
                text: "React.memo를 적용해 변경 없는 항목의 리렌더링을 방지",
              },
              "했습니다. 하위로 전달되는 이벤트 핸들러는 ",
              {
                mark: "blue",
                text: "useCallback으로 레퍼런스 안정화를 적용해 매 렌더링마다 함수가 새로 생성되지 않게 했고, ",
              },
              "rating 등 객체형 프롭은 원시값으로 분해해 참조 변경으로 인한 불필요한 업데이트를 차단했습니다. 추가로 ",
              {
                mark: "blue",
                text: "정렬 결과는 useMemo로 캐싱해 동일 조건에서 재계산을 피했습니다.",
              },
            ],
          },
          {
            children: [
              "이를 통해 리스트 스크롤·필터 변경 시 리렌더링이 줄어, 인터랙션 응답성이 좋아지고 모션이 자연스러워졌습니다.",
            ],
          },
        ],
      },
    ],
  },
  itplace: {
    slug: "itplace",
    cover: {
      src: "/projects/itplace/it_place-cover.webp",
      alt: "잇플레이스 커버 이미지",
    },
    title: "It:place",
    subtitle: "전국 제휴처를 잇는 통신사 멤버십 지도 서비스",
    description:
      "선택형 성향 테스트와 커리어넷 API 기반 직업 매칭을 결합한 플랫폼입니다. 추천 직업의 상세 정보(직무, 역량, 자격증, 학과)와 실시간 채용 공고를 한 곳에서 조회할 수 있습니다.",
    period: "2025.06.30 ~ 2025.08.07",
    team: "8명 (Frontend 4명, Backend 4명)",
    role: "Front-end (서비스 기획, UI/UX 디자인, 랜딩 페이지 및 공통 컴포넌트 개발)",
    stack: [
      {
        label: "(Frontend)",
        items: [
          "Vite",
          "HTML5",
          "CSS3",
          "TypeScript",
          "React",
          "Redux",
          "Tailwind CSS",
          "GSAP",
          "Lodash",
        ],
      },
      {
        label: "(Backend)",
        items: [
          "Java",
          "Spring",
          "Spring Data",
          "Spring Security",
          "Spring AI",
          "OpenAI",
          "OAuth",
          "MySQL",
          "MongoDB",
          "Redis",
          "Elasticsearch",
          "Kibana",
        ],
      },
      {
        label: "(Infra)",
        items: [
          "Route53",
          "CloudFront",
          "ELB(Elastic Load Balancing)",
          "GitHub Actions",
          "CodeDeploy",
          "ECR(Elastic Container Registry)",
          "Docker",
          "EC2",
          "App Auto Scaling",
          "RDS",
          "S3",
        ],
      },
    ],
    links: [
      {
        label: "website",
        href: "https://itplace.click/",
        icon: "/icons/web.svg",
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
      {
        label: "youtube",
        href: "https://www.youtube.com/@whitemondejin",
        icon: "/icons/youtube-black.svg",
      },
    ],

    about:
      "It:place(잇플레이스)는 LG U+ 멤버십 이용자들이 전국 제휴처를 지도 기반으로 탐색하고, 혜택을 간편하게 확인하며, 개인 맞춤형 혜택 추천을 받을 수 있는 지도 기반 혜택 안내 서비스입니다.",
    features: [
      "회원가입 & 로그인: 일반 및 소셜 로그인 지원, LG U+ 멤버십 연동으로 기본 정보 자동 입력과 인증 절차를 통한 보안 강화 제공",
      "지도 및 위치 기반 시스템: 제휴처 위치와 로드뷰 및 GPS 기반 반경 검색·거리순 정렬·AI 혜택 추천 등 맞춤형 탐색 기능 지원",
      "혜택 및 제휴처 정보 제공: 제휴처 위치와 혜택 정보를 제공하고, 등급별 혜택 확인·즐겨찾기·이력 조회 등 다양한 혜택 관리 기능 지원",
      "AI 추천 & 질문 서비스: 멤버십 이용 이력과 사용자 행동 로그를 기반으로 개인 맞춤형 혜택과 제휴처 정보 제공",
      "관리자 대시보드 & 통계 관리: 서비스 현황 Overview 및 제휴처별 통계, 멤버십 등급별 이용 현황 확인, 회원 및 제휴처 정보를 효율적으로 관리",
      "이벤트 페이지 & 프로모션 기능: 지도 내 이벤트 지점을 통한 혜택 안내 및 스크래치 카드 기반 이벤트 제공",
    ],
    implementation: [
      "본 프로젝트는 Vite · React · TypeScript 기반으로 개발되어 빠른 번들링 속도와 효율적인 개발 환경을 구축했습니다. 상태 관리는 Redux를 통해 통합적으로 관리하여 지도, 혜택, 사용자 데이터의 일관성과 안정성을 확보했습니다.",
      "컴포넌트 간 애니메이션과 전환 효과는 GSAP ScrollTrigger를 활용해 스크롤 위치에 따라 자연스럽게 콘텐츠가 등장하도록 구현했습니다. 이를 통해 사용자에게 몰입감 있는 랜딩 경험을 제공합니다.",
      "지도 기능은 Kakao Map API를 기반으로 구현했으며, 제휴처 마커 표시, 로드뷰 지원, 거리순 정렬, 반경 내 검색 등 다양한 탐색 기능을 제공합니다. 제휴처가 전국 단위로 분포되어 있어 다수의 마커가 동시에 표시될 경우 렌더링 지연과 시각적 혼잡도가 발생하는 문제를 해결하기 위해 마커 클러스터링(Clusterer)을 적용했습니다. 또한 Zoom 동작을 마우스 포인터 기준으로 적용해 사용자 중심의 확대·축소를 구현했습니다. 디바운싱 최소화 과정에서 발생한 타이밍 불일치 문제에는 Zoom In / Drag 이벤트 분리와 재처리 로직 최적화를 적용해 안정적인 클러스터링을 실현했습니다.",
      "반복되는 데이터 조작 로직(정렬, 필터, 검색 등)은 Lodash로 모듈화하여 코드의 일관성과 유지보수성을 높였습니다.",
      "모든 페이지를 반응형으로 구현하여 다양한 디바이스 환경에서 일관된 사용자 경험을 제공합니다.",
    ],
    screenshots: [
      {
        src: "/projects/itplace/it_place-1.webp",
        alt: "잇플레이스 프로젝트 이미지 1",
      },
      {
        src: "/projects/itplace/it_place-2.webp",
        alt: "잇플레이스 프로젝트 이미지 2",
      },
      {
        src: "/projects/itplace/it_place-3.webp",
        alt: "잇플레이스 프로젝트 이미지 3",
      },
      {
        src: "/projects/itplace/it_place-4.webp",
        alt: "잇플레이스 프로젝트 이미지 4",
      },
      {
        src: "/projects/itplace/it_place-5.webp",
        alt: "잇플레이스 프로젝트 이미지 5",
      },
      {
        src: "/projects/itplace/it_place-6.webp",
        alt: "잇플레이스 프로젝트 이미지 6",
      },
    ],

    performance: [
      {
        title:
          "이미지 리소스 포맷 변경(Webp) 및 Lazy Loading 적용을 통한 로딩 성능 개선",
        content: [
          {
            children: [
              { mark: "blue", text: "전 페이지 이미지에 WebP 포맷을 적용" },
              "하여 용량을 크게 줄이고, 페이지 전반의 로딩 속도를 효율적으로 단축시켰습니다. 또한 ",
              {
                mark: "blue",
                text: "랜딩 페이지의 섹션 및 주요 이미지에는 Lazy Loading 기법을 적용",
              },
              "해 화면 진입 시 필요한 요소만 우선적으로 렌더링되도록 구성했습니다.",
            ],
          },
          {
            children: [
              "이를 통해 초기 구동 속도를 개선하고, 사용자가 스크롤할 때 필요한 리소스만 순차적으로 불러오도록 최적화하여 불필요한 데이터 로드를 최소화하고 사용자 경험(UX)을 향상시켰습니다.",
            ],
          },
        ],
      },
      {
        title: "UX 인터랙션 개선 - 메인 페이지 잇플AI 추천 탭",
        content: [
          {
            children: [
              "메인 페이지 주요 기능 중 하나인 잇플AI 추천 탭은 사용자에게 자연스럽게 눈에 띄도록 시각적 강조가 필요했습니다. 다른 탭과 차별화된 인터랙션을 적용해 주목도를 높이고, 사용자가 추천 기능을 직관적으로 인식할 수 있도록 하였습니다.",
              {
                mark: "blue",
                text: " GSAP을 활용해 부드럽고 자연스러운 애니메이션을 구현",
              },
              "했으며, ‘잇플AI 추천’ 탭에는 둥둥 떠 있는 듯한 부유(hovering) 효과를 적용해 시각적 생동감을 더했습니다.",
            ],
          },
          {
            children: [
              "이를 통해 사용자의 시선을 자연스럽게 ‘잇플AI 추천’ 탭으로 유도하며, 탐색 과정에서 클릭률을 높이고 기능 접근성을 개선했습니다. 결과적으로 사용자에게 부드럽고 역동적인 인터페이스 경험을 제공하며, 핵심 기능의 인지도를 높이는 UX적 효과를 이끌어냈습니다.",
            ],
          },
        ],
      },
      {
        title: "UX 인터랙션 개선 - 이벤트 모달 인터랙션 개선",
        content: [
          {
            children: [
              {
                mark: "blue",
                text: "이벤트 모달이 화면에 등장할 때 부드러운 페이드 & 스케일 인(Fade & Scale In) 애니메이션을 적용",
              },
              "해, 사용자의 시선을 자연스럽게 집중시키고 이벤트 참여 경험을 더욱 몰입감 있게 구성했습니다. 단순한 정보 전달이 아닌 시각적 피드백 중심의 인터랙션을 통해 이벤트 기능의 주목도와 접근성을 함께 높였습니다.",
            ],
          },
        ],
      },
    ],
    troubleshooting: [
      {
        title: "GSAP ScrollTrigger 반응형 전환 시 섹션 겹침 현상 해결",
        content: [
          {
            children: [
              "랜딩페이지에서 디바이스 사이즈가 변경되는 반응형 전환 시, pin이 적용된 Feature 섹션과 Video 섹션에서 스크롤 중 섹션이 서로 겹치거나 순서가 꼬이는 현상이 발생했습니다. 이는 ScrollTrigger가 화면 크기가 바뀔 때 refresh()를 수행하며 각 섹션의 start, end, pinSpacing 값을 다시 계산하는데, pin이 적용된 섹션들의 refresh 순서가 뒤섞이면, 상단 섹션의 계산 결과가 하단 섹션에 제대로 반영되지 않아 섹션이 어긋나거나 겹치는 문제가 발생했습니다.",
            ],
          },
          {
            children: [
              "이를 해결하기 위해 pin이 적용된 Feature 섹션과 Video 섹션의 ScrollTrigger에 ",
              { mark: "red", text: "refreshPriority: -1 " },
              "옵션을 적용하여, 두 섹션의 refresh 순서를 뒤로 미뤄 순차적으로 계산되도록 조정하여 상단 섹션의 계산이 먼저 완료된 뒤 하단 섹션이 안정적으로 갱신되도록 했습니다. 또한 ",
              { mark: "red", text: "invalidateOnRefresh: true" },
              "를 함께 설정하여 리사이즈 시 start와 end 값이 항상 최신 상태로 재계산되도록 보장했습니다.",
            ],
          },
          {
            children: [
              "결과적으로 디바이스 크기가 변경될 때 Feature → Video 섹션이 올바른 순서로 정상적으로 pin 고정 및 해제되며, 겹침 없이 안정적으로 스크롤 되도록 구현할 수 있었습니다.",
            ],
          },
        ],
      },
      {
        title: "비디오 재생 트리거 작동 문제 해결",
        content: [
          {
            children: [
              "랜딩페이지 비디오 섹션에서 비디오 재생 중 역스크롤 시 비디오가 올바르게 정지되지 않거나 다시 재생되지 않는 문제가 발생했습니다. 비디오 재생 제어가 onEnter / onLeave 이벤트에만 의존하고 있었기 때문에, 스크롤 방향이 역방향일 때 해당 이벤트가 제대로 감지되지 않아 재생 상태가 갱신되지 않았습니다.",
            ],
          },
          {
            children: [
              "이를 해결하기 위해 ScrollTrigger의 ",
              {
                mark: "red",
                text: "onUpdate 콜백을 활용해 스크롤 방향(self.direction)과 진행도(self.progress)를 실시간 감지하도록 수정",
              },
              "했습니다. 스크롤 방향이 아래일 때(direction === 1)는 비디오를 재생하고, 위로 이동할 때(direction === -1)는 일시정지하도록 조건을 분리해 양방향 스크롤에서도 정확하게 반응하도록 구현했습니다.",
            ],
          },
          {
            children: [
              "결과적으로 역방향 스크롤에서 비디오 재생이 정확하게 제어되며, 사용자가 어떤 방향으로 스크롤하더라도 자연스러운 인터랙션을 경험할 수 있게 되었습니다.",
            ],
          },
        ],
      },
    ],
  },
};
