import React from "react";
import HeadingStyles from "./heading.module.scss";

export interface IHeading {
  text: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<IHeading> = (props) => {
  const { text, variant = "h1" } = props;
  return React.createElement(
    variant,
    {
      className: HeadingStyles.heading,
    },
    text
  );
};

export default Heading;
