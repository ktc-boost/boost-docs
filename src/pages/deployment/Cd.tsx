import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const DeployCDPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.DEPLOYMENT.CD} />;
};

export default DeployCDPage;
