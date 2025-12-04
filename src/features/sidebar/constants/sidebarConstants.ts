import {
  BookOpen,
  Server,
  LaptopMinimal,
  Book,
  Settings,
  CloudUpload,
} from "lucide-react";
import BoostRocket from "@/shared/assets/boost/boost-rocket-2d.png";
import { ROUTE_PATH } from "@/app/routes/routeConstants";

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
        { title: "프로젝트/문서 개요", path: ROUTE_PATH.OVERVIEW.PROJECT },
        { title: "팀 리소스", path: ROUTE_PATH.OVERVIEW.RESOURCES },
        { title: "팀원 정보", path: ROUTE_PATH.OVERVIEW.MEMBERS },
      ],
    },
    {
      title: "온보딩 가이드",
      icon: BookOpen,
      items: [
        { title: "FE 온보딩 가이드", path: ROUTE_PATH.ONBOARDING.FRONTEND },
        { title: "BE 온보딩 가이든", path: ROUTE_PATH.ONBOARDING.BACKEND },
      ],
    },
    {
      title: "개발 가이드",
      icon: Settings,
      items: [
        { title: "공통 개발 가이드", path: ROUTE_PATH.DEVELOPER_GUIDE.COMMON },
        { title: "FE 개발 가이드", path: ROUTE_PATH.DEVELOPER_GUIDE.FRONTEND },
        { title: "BE 개발 가이드", path: ROUTE_PATH.DEVELOPER_GUIDE.BACKEND },
      ],
    },
  ],
  navProjectDocs: [
    {
      title: "프론트엔드 문서",
      icon: LaptopMinimal,
      items: [
        { title: "시작하기", path: ROUTE_PATH.FRONTEND.GETTING_STARTED },
        { title: "디자인 시스템", path: ROUTE_PATH.FRONTEND.DESIGN },
        {
          title: "기술 스택 및 선정 근거",
          path: ROUTE_PATH.FRONTEND.TECHSTACK,
        },
        { title: "주요 기능", path: ROUTE_PATH.FRONTEND.KEY_FEATURES },
        { title: "트러블 슈팅", path: ROUTE_PATH.FRONTEND.TROUBLE_SHOOTING },
        { title: "성능 최적화", path: ROUTE_PATH.FRONTEND.PERFORMANCE },
        { title: "CI/CD", path: ROUTE_PATH.FRONTEND.CICD },
      ],
    },
    {
      title: "백엔드 문서",
      icon: Server,
      items: [
        {
          title: "기술 스택 및 선정 근거",
          path: ROUTE_PATH.BACKEND.TECHSTACK,
        },
        { title: "아키텍처", path: ROUTE_PATH.BACKEND.ARCHITECTURE },
        { title: "ERD", path: ROUTE_PATH.BACKEND.ERD },
        { title: "트러블 슈팅", path: ROUTE_PATH.BACKEND.TROUBLE_SHOOTING },
        { title: "성능 최적화", path: ROUTE_PATH.BACKEND.PERFORMANCE },
      ],
    },
    {
      title: "배포 프로세스",
      icon: CloudUpload,
      items: [
        { title: "CI", path: ROUTE_PATH.DEPLOYMENT.CI },
        { title: "CD", path: ROUTE_PATH.DEPLOYMENT.CD },
      ],
    },
  ],
};
