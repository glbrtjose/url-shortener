"use client";
import React from "react";

const PageContainer = ({ children, maxWidth = "max-w-[880px]" }: any) => {
  return <div className={`${maxWidth} mx-auto my-7 px-4 md:px-0`}>{children}</div>;
};

export default PageContainer;
