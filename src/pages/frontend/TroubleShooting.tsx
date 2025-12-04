import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const FrontendTroubleShootingPage = () => {
  return (
    <AnimatedTextBlock items={PageDescriptions.FRONTED.TROUBLE_SHOOTING} />
  );
};

export default FrontendTroubleShootingPage;
