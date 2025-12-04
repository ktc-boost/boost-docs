import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const ProjectOverviewPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.OVERVIEW.PROJECT} />;
};

export default ProjectOverviewPage;
