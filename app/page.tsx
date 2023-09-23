"use client";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useRouter } from 'next/navigation'

const PlaygroundContainer = () => {
  return (
    <Container header={<Header variant="h2">Playground</Header>}>
      <Box variant="p">
        Basic Next.js 13 project with{" "}
        <Link href="https://cloudscape.design/" external>
          Cloudscape UI framework
        </Link>
      </Box>
      <Box variant="p">Project automatically builds and deploys the app to gh-pages.</Box>
    </Container>
  );
};

const FormToJSONContainer = () => {
  const router = useRouter();

  return (
    <Container header={<Header variant="h2">Form to JSON</Header>}>
      <SpaceBetween size="l">
        <Box variant="p">Fill in some form fields and submit to see the data converted to JSON</Box>
        <Button variant="primary" onClick={() => router.push("/start")}>Get started</Button>
      </SpaceBetween>
    </Container>
  );
};

export default function Page() {
  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          description="Created by jacklin213"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                href="https://github.com/jacklin213/next-playground"
                target="_blank"
                iconAlign="right"
                iconName="external"
                variant="primary"
              >
                Github
              </Button>
            </SpaceBetween>
          }
        >
          Next Playground
        </Header>
      }
    >
      <SpaceBetween size="l">
        <PlaygroundContainer />
        <FormToJSONContainer />
      </SpaceBetween>
    </ContentLayout>
  );
}
