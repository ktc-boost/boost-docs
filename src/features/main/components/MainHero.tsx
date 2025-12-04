import { Button } from "@/shared/components/shadcn/button";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/app/routes/routeConstants";

const MainHero = () => {
  const navigate = useNavigate();
  const goToOverview = () => navigate(ROUTE_PATH.OVERVIEW.PROJECT);

  return (
    <section
      id="main-hero"
      aria-label="Main Hero Section"
      className="min-h-screen flex items-center justify-center w-full"
    >
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Boost Development Docs
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Boost 프로젝트 개발 문서에 오신 것을 환영합니다.
          <br /> 현재 디자인은 임시이며, 더 예쁘고 완성도 있게 개선될
          예정입니다!
        </p>

        <div className="mt-2">
          <p className="text-gray-500 mb-4">
            시작하려면 아래 버튼을 클릭하세요.
          </p>
          <Button
            onClick={goToOverview}
            variant="boostBlue"
            className="px-8 py-3 text-base rounded-full"
          >
            문서 보러가기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
