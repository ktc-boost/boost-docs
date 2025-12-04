import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const FrontendOnboardingPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.ONBOARDING.FRONTEND} />;
};

export default FrontendOnboardingPage;
