import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const BackendErdPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.BACKEND.ERD} />;
};

export default BackendErdPage;
