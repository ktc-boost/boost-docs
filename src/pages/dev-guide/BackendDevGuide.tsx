import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendDevGuidePage = () => {
  return <AnimatedTextBlock items={PageDescriptions.DEV_GUIDE.BACKEND} />;
};

export default BackendDevGuidePage;
