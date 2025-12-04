import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendPerformancePage = () => {
  return <AnimatedTextBlock items={PageDescriptions.BACKEND.PERFORMANCE} />;
};

export default BackendPerformancePage;
