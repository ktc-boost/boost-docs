import {
  BookOpen,
  Server,
  LaptopMinimal,
  Book,
  Settings,
  CloudUpload,
} from "lucide-react";
import BoostRocket from "@/shared/assets/boost/boost-rocket-2d.png";
import { ROUTES } from "@/app/routes/routeConstants";

export const sidebarItems = {
  header: {
    name: "Boost 개발 문서",
    logo: BoostRocket,
    plan: "Boost Development Docs",
  },

  navProjectInfos: [
    {
      title: "프로젝트 개요",
      icon: Book,
      items: [
        { title: "문서/프로젝트 개요", path: ROUTES.OVERVIEW() },
        { title: "팀 리소스", path: ROUTES.OVERVIEW_RESOURCES() },
        { title: "팀원 정보", path: ROUTES.OVERVIEW_MEMBERS() },
      ],
    },
    {
      title: "온보딩 가이드",
      icon: BookOpen,
      items: [
        { title: "환경 세팅", path: ROUTES.ONBOARDING_ENV() },
        { title: "프로젝트 가져오기", path: ROUTES.ONBOARDING_SETUP() },
        { title: "실행 방법", path: ROUTES.ONBOARDING_RUN() },
        { title: "기본 구조 안내", path: ROUTES.ONBOARDING_STRUCTURE() },
        { title: "참고 자료 / 지원 채널", path: ROUTES.ONBOARDING_RESOURCES() },
      ],
    },
    {
      title: "개발 가이드",
      icon: Settings,
      items: [
        { title: "작업 흐름", path: ROUTES.PROCESS_WORKFLOW() },
        { title: "Git/Commit 규칙", path: ROUTES.PROCESS_GIT() },
        { title: "코드 리뷰 기준", path: ROUTES.PROCESS_REVIEW() },
        { title: "테스트 및 QA 절차", path: ROUTES.PROCESS_TEST() },
      ],
    },
  ],
  navProjectDocs: [
    {
      title: "프론트엔드 문서",
      icon: LaptopMinimal,
      items: [
        { title: "소개", path: ROUTES.FRONTEND_INTRO() },
        { title: "디자인 시스템", path: ROUTES.FRONTEND_DESIGN() },
        { title: "기술 스택 및 선정 근거", path: ROUTES.FRONTEND_TECHSTACK() },
        { title: "이슈 및 해결 과정", path: ROUTES.FRONTEND_ISSUES() },
      ],
    },
    {
      title: "백엔드 문서",
      icon: Server,
      items: [
        { title: "아키텍처", path: ROUTES.BACKEND_ARCH() },
        { title: "ERD", path: ROUTES.BACKEND_ERD() },
        { title: "이슈 및 해결 과정", path: ROUTES.BACKEND_ISSUES() },
      ],
    },
    {
      title: "배포 프로세스",
      icon: CloudUpload,
      items: [
        { title: "CI", path: ROUTES.DEPLOY_CI() },
        { title: "CD", path: ROUTES.DEPLOY_CD() },
      ],
    },
  ],
};
