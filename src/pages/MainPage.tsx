import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/app/routes/routeConstants";
import { Button } from "@/shared/components/shadcn/button";

const MainPage = () => {
  const navigate = useNavigate();

  const goToOverview = () => {
    navigate(ROUTE_PATH.OVERVIEW_PROJECT_OVERVIEW);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h1 className="title1-bold">Welcome to Boost Development Docs</h1>
      <p className="subtitle1-bold">디자인은 임시 구현입니다. 수정될 예정!</p>

      <p className="body1-regular text-gray-700">
        시작하려면 아래 버튼을 클릭하세요.
      </p>
      <Button onClick={goToOverview} variant="boostBlue">
        문서 페이지로 이동
      </Button>
    </div>
  );
};

export default MainPage;
