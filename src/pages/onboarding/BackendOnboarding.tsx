import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendOnboardingPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.ONBOARDING.BACKEND} />;
};

export default BackendOnboardingPage;
