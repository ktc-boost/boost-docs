import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendTroubleShootingPage = () => {
  return (
    <AnimatedTextBlock items={PageDescriptions.BACKEND.TROUBLE_SHOOTING} />
  );
};

export default BackendTroubleShootingPage;
