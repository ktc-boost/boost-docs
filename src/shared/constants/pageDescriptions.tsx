export interface TextItem {
  content: string | React.ReactNode;
  variant?: "title" | "body" | "label";
  delay?: number;
}

export const CommonPageText: Record<"HEADER" | "FOOTER", TextItem> = {
  HEADER: {
    content: "🤔 이 페이지는 어떤 내용을 담고 있나요?",
    variant: "title",
  },
  FOOTER: {
    content: "작성 예정인 문서입니다. 조금만 기다려주세요 ദ്ദിᐢ･֊･ᐢ₎ ♥",
    variant: "label",
  },
};

export const PageDescriptions = {
  // 개요
  OVERVIEW: {
    PROJECT: [
      {
        content:
          "개발 문서의 개요와 BOOST 프로젝트의 개요를 설명하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    MEMBER: [
      {
        content: "BOOST 모든 팀원들의 정보를 알 수 있는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    RESOURCE: [
      {
        content:
          "깃허브, 노션 페이지등 BOOST 팀의 리소스를 기재하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
  },

  // 온보딩 가이드
  ONBOARDING: {
    FRONTEND: [
      {
        content:
          "프론트엔드 팀에 새로운 팀원이 들어왔을 때, 프로젝트를 빠르게 이해하고 셋업하도록 돕는 입문 가이드 페이지입니다.",
        variant: "body" as const,
      },
    ],
    BACKEND: [
      {
        content:
          "백엔드 팀에 새로운 팀원이 들어왔을 때, 프로젝트를 빠르게 이해하고 셋업하도록 돕는 입문 가이드 페이지입니다.",
        variant: "body" as const,
      },
    ],
  },

  // 개발 가이드
  DEV_GUIDE: {
    COMMON: [
      {
        content:
          "BOOST 프로젝트의 현재/미래 팀원 모두가 따라야 할 프로젝트 개발 규칙 입니다.",
        variant: "body" as const,
      },
    ],
    FRONTEND: [
      {
        content:
          "프론트엔드의 현재/미래 팀원 모두가 따라야 할 프로젝트 개발 규칙 입니다.",
        variant: "body" as const,
      },
    ],
    BACKEND: [
      {
        content:
          "백엔드의 현재/미래 팀원 모두가 따라야 할 프로젝트 개발 규칙 입니다.",
        variant: "body" as const,
      },
    ],
  },

  // 프론트엔드
  FRONTED: {
    CICD: [
      {
        content:
          "프론트엔드의 CI/CD 구축에 관한 내용을 기재하는 페이지입니다. 개발 가이드 속 CI/CD 안내 페이지의 내용보다 자세한 구조, 구축 과정 설명을 확인할 수 있어요.",
        variant: "body" as const,
      },
    ],
    DESIGN: [
      {
        content:
          "개발에 사용한 모든 디자인에 관한 자료를 모아두는 페이지입니다. 색상 토큰, 타이포그래피, 서비스 캐릭터, 서비스 로고 등 다양한 정보가 포함됩니다.",
        variant: "body" as const,
      },
    ],
    GETTING_START: [
      {
        content:
          "프론트엔드에 새로운 팀원이 이 페이지를 통해 원활하게 프로젝트에 참여할 수 있도록 온보딩 가이드, 개발 가이드로 이동할 수 있는 페이지입니다.",
      },
    ],
    KEY_FEATURES: [
      {
        content:
          "프론트엔드의 주요 기능 개발 과정과 기술적인 내용을 작성하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    PERFORMANCE: [
      {
        content:
          "프론트엔드의 현재 시스템의 동작을 분석하여 속도·메모리·사용자 경험을 개선하는 활동과 전략을 작성하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    TECH_STACK: [
      {
        content:
          "프론트엔드 개발에 사용한 기술 스택을 기록하는 페이지입니다. 사용한 스택들은 기본적으로 표로 제공되며, 주요 기술 스택은 자세한 내용을 제공합니다. 주요 기술 스택에는 zustand, react-query, tailwindcss+shadcn, RHF+zod, dnd-kit 정도가 있으며, 타 라이브러리와 비교 설명도 포함됩니다.",
        variant: "body" as const,
      },
    ],
    TROUBLE_SHOOTING: [
      {
        content:
          "프론트엔드 개발 과정 중 발생한 문제·오류·버그를 해결하는 과정과 기록하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
  },

  BACKEND: {
    ARCHITECTURE: [
      {
        content:
          "백엔드 문서 중 아키텍쳐 내용이 포함되는 페이지입니다. (임시 세팅)",
        variant: "body" as const,
      },
    ],
    ERD: [
      {
        content: "백엔드 문서 중 ERD 내용이 포함되는 페이지입니다. (임시 세팅)",
        variant: "body" as const,
      },
    ],
    TECH_STACK: [
      {
        content: "백엔드 개발에 사용한 기술 스택을 기록하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    TROUBLE_SHOOTING: [
      {
        content:
          "백엔드 개발 과정 중 발생한 문제·오류·버그를 해결하는 과정과 기록하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
    PERFORMANCE: [
      {
        content:
          "백엔드의 현재 시스템의 동작을 분석하여 속도·메모리·사용자 경험을 개선하는 활동과 전략을 작성하는 페이지입니다.",
        variant: "body" as const,
      },
    ],
  },

  DEPLOYMENT: {
    CI: [
      {
        content: "임시 세팅된 페이지입니다.",
        variant: "body" as const,
      },
    ],
    CD: [
      {
        content: "임시 세팅된 페이지입니다.",
        variant: "body" as const,
      },
    ],
  },
};
