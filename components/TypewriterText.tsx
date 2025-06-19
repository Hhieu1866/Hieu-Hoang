import React from "react";

interface TypewriterTextProps {
  typedText: string;
  isDark: boolean;
  isVisible: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  typedText,
  isDark,
  isVisible,
}) => {
  return (
    <h2
      className={`mb-8 text-3xl font-bold md:text-4xl ${isDark ? "text-white" : "text-black"} font-mono ${
        isVisible ? "animate-slide-in-left" : "opacity-0"
      }`}
    >
      <span className={isDark ? "text-green-400" : "text-green-600"}>
        {typedText}
      </span>
      <span
        className={`${isDark ? "text-green-400" : "text-green-600"} ${
          isVisible ? "animate-blink" : ""
        }`}
      >
        |
      </span>
    </h2>
  );
};

export default TypewriterText;
