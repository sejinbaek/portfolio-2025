# 📝 BAEKSEJIN PORTFOLIO

백세진의 포트폴리오를 구경해보세요✨🤗
- 배포 사이트: [https://react-blog-frontend-ev4g.vercel.app/](https://baeksejin-portfolio-2025.vercel.app/)



## 📌 프로젝트 소개

- *Next.js(App Router)를 기반으로 제작한 개인 포트폴리오 웹사이트입니다.*
- *프론트엔드 개발자로서의 기본기와 함께, 공통 레이아웃 설계, 사용자 경험, 성능 최적화, 애널리틱스 연동까지 실무에서 요구되는 전반적인 흐름을 경험하는 것을 목표로 개발했습니다.*



## 📹 시연 영상
https://github.com/user-attachments/assets/c3adbd2f-b8db-4e89-a2f7-d489845d596f



## 🧭 페이지 플로우
✅ **Home**: 포트폴리오 전체를 한눈에 볼 수 있는 진입 페이지 (표지, About, Contact 주요 섹션 포함)

✅ **About**: 자기소개 및 이력 상세 페이지

✅ **Projects**: 진행한 프로젝트 목록 및 설명

✅ **Contact**: 문의 및 연락을 위한 폼 페이지



## 🌻 UX 설계 의도
- Home 페이지에서 주요 정보를 요약 제공해 사용자가 빠르게 전체 구조를 파악할 수 있도록 구성했습니다.
  
- 각 섹션(About, Projects, Contact)은 독립적인 페이지로도 접근 가능하도록 설계해 탐색 흐름의 유연성을 확보했습니다.
  
- 스크롤 기반 탐색과 라우트 이동 방식 모두를 지원해 사용자 상황에 맞는 접근이 가능하도록 했습니다.



## ⭐ 구현 포인트

### 공통 레이아웃 설계
- App Router의 `layout.tsx`를 활용해 Header / Footer를 공통 관리
- 페이지 전환 시 레이아웃 재사용으로 UX 일관성 유지

### 애널리틱스(GA4) 연동
- Next.js 환경에서 SSR 이슈를 고려해 `next/script`로 GA4 스크립트 로드
- `afterInteractive` 전략을 사용해 초기 렌더링 성능 저하 방지

### 사용자 피드백 UI
- sonner를 활용해 폼 전송 성공/실패 시 즉각적인 피드백 제공
- 로딩 상태는 spinner로 명확히 표현



## 🛠 기술 스택

- Framework: **Next.js (App Router)**
- Language: **TypeScript**
- UI: **React 19**
- Styling: **Tailwind CSS v4, clsx**
- UI Utils: **sonner (toast notification), react-spinners**
- Form: **Formspree (@formspree/react)**
- Analytics: **Google Analytics 4**
- Tooling: **ESLint, Prettier**
- Deployment: **Vercel**



## 📁 폴더구조
```
.
├── public/                 # 정적 파일 (favicon, 이미지 등)
├── src/
│   ├── app/                # Next.js App Router 기반 페이지
│   │   ├── about/          # 소개 페이지
│   │   ├── contact/        # 문의 페이지
│   │   ├── projects/       # 프로젝트 목록 페이지
│   │   ├── config/         # 앱 전역 설정 관련 라우트
│   │   ├── error.tsx       # 전역 에러 페이지
│   │   ├── loading.tsx     # 전역 로딩 UI
│   │   ├── layout.tsx      # 공통 레이아웃 (Header / Footer)
│   │   ├── page.tsx        # 메인 페이지
│   │   ├── globals.css     # 전역 스타일
│   │   └── favicon.ico
│   │
│   ├── components/         # 공통 UI 컴포넌트
│   │
│   ├── assets/             # 폰트 및 정적 리소스
│   │
│   └── lib/                # 공통 로직 및 유틸 함수
│
├── .env                    # 환경 변수
├── next.config.ts          # Next.js 설정
├── postcss.config.mjs      # PostCSS / Tailwind 설정
├── tsconfig.json           # TypeScript 설정
├── eslint.config.mjs       # ESLint 설정
├── package.json
└── README.md
```



## 🔥 폴더 구조 설계 의도

- App Router를 기준으로 페이지 단위 라우팅을 명확히 분리
  
- 공통 레이아웃(`layout.tsx`)에서 Header / Footer를 관리해 페이지 간 UI 일관성과 유지보수성 확보
  
- 재사용 가능한 UI는 `components` 디렉토리로 분리
  
- 전역 스타일과 폰트는 `globals.css`와 `assets`에서 관리해스타일 충돌 최소화



## 💬 회고

- App Router 구조에 대한 이해도가 크게 향상되었습니다.
  
- 단순 구현이 아닌, 구조와 유지보수를 고려한 설계의 중요성을 느꼈습니다.
  
- 피드백을 반영해 페이지 플로우와 정보 구조를 개선하며 사용자 경험을 한 단계 발전시킬 수 있었습니다.
  
- 사용자 행동을 측정하는 애널리틱스 관점의 프론트엔드 개발을 경험했습니다.
