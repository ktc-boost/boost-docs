import AnimatedText from "@/shared/components/animations/AnimatedText";
import {
  CommonPageText,
  type TextItem,
} from "@/shared/constants/pageDescriptions";

interface AnimatedTextBlockProps {
  items: TextItem[];
  className?: string;
  includeCommon?: boolean;
}

const AnimatedTextBlock = ({
  items,
  className = "",
  includeCommon = true,
}: AnimatedTextBlockProps) => {
  const finalItems = includeCommon
    ? [CommonPageText.HEADER, ...items, CommonPageText.FOOTER]
    : items;

  return (
    <div className={className}>
      {finalItems.map((item, index) => (
        <AnimatedText
          key={index}
          variant={item.variant}
          delay={item.delay ?? index * 0.1}
        >
          {item.content}
        </AnimatedText>
      ))}
    </div>
  );
};

export default AnimatedTextBlock;
