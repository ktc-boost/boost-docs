import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const DeployCIPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.DEPLOYMENT.CI} />;
};

export default DeployCIPage;
