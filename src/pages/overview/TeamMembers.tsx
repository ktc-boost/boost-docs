import AnimatedTextBlock from "@/shared/components/animations/AnimatedTextBlock";
import { PageDescriptions } from "@/shared/constants/pageDescriptions";

const MembersPage = () => {
  return <AnimatedTextBlock items={PageDescriptions.OVERVIEW.MEMBER} />;
};

export default MembersPage;
