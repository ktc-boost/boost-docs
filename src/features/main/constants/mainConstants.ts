import {
  Book,
  BookOpen,
  Settings,
  LaptopMinimal,
  Server,
  CloudUpload,
} from "lucide-react";

export const contentSections = [
  {
    title: "프로젝트 개요",
    icon: Book,
    description: "프로젝트의 기본 목적, 구조, 팀 구성 및 리소스를 소개합니다.",
  },
  {
    title: "온보딩 가이드",
    icon: BookOpen,
    description:
      "환경 세팅부터 실행, 기본 구조까지 전체 온보딩 절차를 안내합니다.",
  },
  {
    title: "개발 가이드",
    icon: Settings,
    description:
      "작업 흐름, Git 규칙, 코드 리뷰 기준 등 개발팀 운영 기준을 담고 있습니다.",
  },
  {
    title: "프론트엔드 문서",
    icon: LaptopMinimal,
    description:
      "FE 설계, 기술 스택 선정, 디자인 시스템 및 주요 이슈 해결 과정을 제공합니다.",
  },
  {
    title: "백엔드 문서",
    icon: Server,
    description:
      "백엔드 아키텍처, ERD, 개발 중 발생한 주요 이슈 해결 과정을 제공합니다.",
  },
  {
    title: "배포 프로세스",
    icon: CloudUpload,
    description: "CI/CD 기반의 자동 배포 구조 및 배포 환경 구성을 안내합니다.",
  },
];
