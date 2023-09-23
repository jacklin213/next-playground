'use client'
import AppLayout from "@cloudscape-design/components/app-layout";

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppLayout
      navigationHide
      toolsHide
      content={children}
    />
  );
};