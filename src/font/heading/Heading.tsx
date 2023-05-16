import React from "react";
import HeadingStyles from "./heading.module.scss";

export interface HeadingProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}
const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
  const { variant = "h1", text } = props;
  return React.createElement(variant, { className: HeadingStyles.heading }, text);
};

export default Heading;
