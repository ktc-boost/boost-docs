import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const FrontendDevGuidePage = () => {
  return <AnimatedTextBlock items={PageDescriptions.DEV_GUIDE.FRONTEND} />;
};

export default FrontendDevGuidePage;
