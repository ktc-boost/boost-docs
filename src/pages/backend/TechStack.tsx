import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendTechStackPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.BACKEND.TECH_STACK} />;
};

export default BackendTechStackPage;
