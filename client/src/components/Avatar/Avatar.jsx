import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  margin,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    margin,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
