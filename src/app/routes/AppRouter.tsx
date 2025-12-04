import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_PATH } from "@/app/routes/routeConstants";

import ProjectOverviewPage from "@/pages/overview/ProjectOverview";
import TeamResourcesPage from "@/pages/overview/TeamResources";
import TeamMembersPage from "@/pages/overview/TeamMembers";

import FrontendOnboardingPage from "@/pages/onboarding/FrontendOnboarding";
import BackendOnboardingPage from "@/pages/onboarding/BackendOnboarding";

import CommonDevGuidePage from "@/pages/dev-guide/CommonDevGuide";
import FrontendDevGuidePage from "@/pages/dev-guide/FrontendDevGuide";
import BackendDevGuidePage from "@/pages/dev-guide/BackendDevGuide";

import FrontendGettingStartPage from "@/pages/frontend/GettingStart";
import FrontenDesignSystemPage from "@/pages/frontend/DesignSystem";
import FrontendKeyFeaturesPage from "@/pages/frontend/KeyFeatures";
import FrontendTechStackPage from "@/pages/frontend/TechStack";
import FrontendTroubleShootingPage from "@/pages/frontend/TroubleShooting";
import FrontendPerformancePage from "@/pages/frontend/Performance";
import FrontendCiCdPage from "@/pages/frontend/CiCd";

import BackendErdPage from "@/pages/backend/Erd";
import BackendArchitecturePage from "@/pages/backend/Architecture";
import BackendTroubleShootingPage from "@/pages/backend/TroubleShooting";
import BackendPerformancePage from "@/pages/backend/Performance";
import BackendTechStackPage from "@/pages/backend/TechStack";

import DeployCIPage from "@/pages/deployment/Ci";
import DeployCDPage from "@/pages/deployment/Cd";

import MainPage from "@/pages/MainPage";
import { AppLayout } from "@/app/layout/AppLayout";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT || "/",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // 프로젝트 개요
      { path: ROUTE_PATH.OVERVIEW.PROJECT, element: <ProjectOverviewPage /> },
      { path: ROUTE_PATH.OVERVIEW.RESOURCES, element: <TeamResourcesPage /> },
      { path: ROUTE_PATH.OVERVIEW.MEMBERS, element: <TeamMembersPage /> },

      // 온보딩 가이드
      {
        path: ROUTE_PATH.ONBOARDING.FRONTEND,
        element: <FrontendOnboardingPage />,
      },
      {
        path: ROUTE_PATH.ONBOARDING.BACKEND,
        element: <BackendOnboardingPage />,
      },

      // 개발 가이드
      {
        path: ROUTE_PATH.DEVELOPER_GUIDE.COMMON,
        element: <CommonDevGuidePage />,
      },
      {
        path: ROUTE_PATH.DEVELOPER_GUIDE.FRONTEND,
        element: <FrontendDevGuidePage />,
      },
      {
        path: ROUTE_PATH.DEVELOPER_GUIDE.BACKEND,
        element: <BackendDevGuidePage />,
      },

      // 프론트엔드 문서
      {
        path: ROUTE_PATH.FRONTEND.GETTING_STARTED,
        element: <FrontendGettingStartPage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.DESIGN,
        element: <FrontenDesignSystemPage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.TECHSTACK,
        element: <FrontendTechStackPage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.KEY_FEATURES,
        element: <FrontendKeyFeaturesPage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.TROUBLE_SHOOTING,
        element: <FrontendTroubleShootingPage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.PERFORMANCE,
        element: <FrontendPerformancePage />,
      },
      {
        path: ROUTE_PATH.FRONTEND.CICD,
        element: <FrontendCiCdPage />,
      },

      // 백엔드 문서
      {
        path: ROUTE_PATH.BACKEND.ARCHITECTURE,
        element: <BackendArchitecturePage />,
      },
      { path: ROUTE_PATH.BACKEND.TECHSTACK, element: <BackendTechStackPage /> },
      { path: ROUTE_PATH.BACKEND.ERD, element: <BackendErdPage /> },
      {
        path: ROUTE_PATH.BACKEND.TROUBLE_SHOOTING,
        element: <BackendTroubleShootingPage />,
      },
      {
        path: ROUTE_PATH.BACKEND.PERFORMANCE,
        element: <BackendPerformancePage />,
      },

      // 배포 프로세스
      { path: ROUTE_PATH.DEPLOYMENT.CI, element: <DeployCIPage /> },
      { path: ROUTE_PATH.DEPLOYMENT.CD, element: <DeployCDPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
