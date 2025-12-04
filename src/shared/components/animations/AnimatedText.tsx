// src/components/animations/AnimatedText.tsx
import FadeUp from "@/shared/components/animations/FadeUp";
import type { ReactNode } from "react";

type TextVariant = "title" | "body" | "label";

interface AnimatedTextProps {
  children: ReactNode;
  variant?: TextVariant;
  delay?: number;
  className?: string;
}

const variantClasses: Record<TextVariant, string> = {
  title: "title1-bold text-gray-900 mb-4",
  body: "body1-regular text-gray-900 mb-2",
  label: "label1-regular text-gray-500",
};

const AnimatedText = ({
  children,
  variant = "body",
  delay = 0,
  className = "",
}: AnimatedTextProps) => {
  return (
    <FadeUp delay={delay}>
      <p className={`${variantClasses[variant]} ${className}`}>{children}</p>
    </FadeUp>
  );
};

export default AnimatedText;
