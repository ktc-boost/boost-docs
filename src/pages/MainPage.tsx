import MainNavigation from "@/features/main/components/MainNavigation";
import MainHero from "@/features/main/components/MainHero";
import MainAboutDocs from "@/features/main/components/MainAboutDocs";
import MainFooter from "@/features/main/components/MainFooter";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center ">
      <MainNavigation />
      <MainHero />
      <MainAboutDocs />
      <MainFooter />
    </div>
  );
};

export default MainPage;
