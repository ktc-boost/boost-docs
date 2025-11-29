import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_PATH } from "@/app/routes/routeConstants";

import OverviewPage from "@/pages/overview/Overview";
import ResourcesPage from "@/pages/overview/Resources";
import MembersPage from "@/pages/overview/Members";

import EnvironmentPage from "@/pages/onboarding/Environment";
import SetupPage from "@/pages/onboarding/Setup";
import RunPage from "@/pages/onboarding/Run";
import StructurePage from "@/pages/onboarding/Structure";
import OnboardingResourcesPage from "@/pages/onboarding/Resources";

import WorkflowPage from "@/pages/dev-guide/Workflow";
import GitPage from "@/pages/dev-guide/Git";
import ReviewPage from "@/pages/dev-guide/Review";
import TestPage from "@/pages/dev-guide/Test";

import FrontendIntroPage from "@/pages/frontend/Intro";
import DesignSystemPage from "@/pages/frontend/DesignSystem";
import TechStackPage from "@/pages/frontend/TechStack";
import FrontendIssuesPage from "@/pages/frontend/Issues";

import BackendArchPage from "@/pages/backend/Architecture";
import BackendERDPage from "@/pages/backend/Erd";
import BackendIssuesPage from "@/pages/backend/Issues";

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
      { path: ROUTE_PATH.OVERVIEW_PROJECT_OVERVIEW, element: <OverviewPage /> },
      { path: ROUTE_PATH.OVERVIEW_RESOURCES, element: <ResourcesPage /> },
      { path: ROUTE_PATH.OVERVIEW_MEMBERS, element: <MembersPage /> },

      { path: ROUTE_PATH.ONBOARDING_ENV, element: <EnvironmentPage /> },
      { path: ROUTE_PATH.ONBOARDING_SETUP, element: <SetupPage /> },
      { path: ROUTE_PATH.ONBOARDING_RUN, element: <RunPage /> },
      { path: ROUTE_PATH.ONBOARDING_STRUCTURE, element: <StructurePage /> },
      {
        path: ROUTE_PATH.ONBOARDING_RESOURCES,
        element: <OnboardingResourcesPage />,
      },

      { path: ROUTE_PATH.PROCESS_WORKFLOW, element: <WorkflowPage /> },
      { path: ROUTE_PATH.PROCESS_GIT, element: <GitPage /> },
      { path: ROUTE_PATH.PROCESS_REVIEW, element: <ReviewPage /> },
      { path: ROUTE_PATH.PROCESS_TEST, element: <TestPage /> },

      { path: ROUTE_PATH.FRONTEND_INTRO, element: <FrontendIntroPage /> },
      { path: ROUTE_PATH.FRONTEND_DESIGN, element: <DesignSystemPage /> },
      { path: ROUTE_PATH.FRONTEND_TECHSTACK, element: <TechStackPage /> },
      { path: ROUTE_PATH.FRONTEND_ISSUES, element: <FrontendIssuesPage /> },

      { path: ROUTE_PATH.BACKEND_ARCH, element: <BackendArchPage /> },
      { path: ROUTE_PATH.BACKEND_ERD, element: <BackendERDPage /> },
      { path: ROUTE_PATH.BACKEND_ISSUES, element: <BackendIssuesPage /> },

      { path: ROUTE_PATH.DEPLOY_CI, element: <DeployCIPage /> },
      { path: ROUTE_PATH.DEPLOY_CD, element: <DeployCDPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
