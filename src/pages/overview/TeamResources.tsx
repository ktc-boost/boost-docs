import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const ResourcesPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.OVERVIEW.RESOURCE} />;
};

export default ResourcesPage;
