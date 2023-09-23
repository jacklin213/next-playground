"use client";
import { Textarea } from "@cloudscape-design/components";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { Dispatch, SetStateAction, useState } from "react";

const initialFormData = {
  name: '',
  email: '',
  description: ''
};

type MainFormData = {
  name: string;
  email: string;
  description: string;
};

type MainFormProps = {
  setResult: Dispatch<SetStateAction<MainFormData>>;
}

const MainForm = ({ setResult }: MainFormProps) => {
  const [formData, setFormData] = useState<MainFormData>(initialFormData);

  return (
    <Container header={<Header variant="h2">Fill out form</Header>}>
      <form onSubmit={(event) => {
        event.preventDefault();
        setResult(formData);
      }}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setFormData(initialFormData)}>
                Clear
              </Button>
              <Button data-testid="create" variant="primary">
                Submit
              </Button>
            </SpaceBetween>
          }
        >
          <SpaceBetween size='l'>
            <FormField
              label="Name"
            >
              <Input
                value={formData?.name}
                ariaRequired={true}
                placeholder="Jack Lin"
                onChange={({ detail: { value } }) => setFormData({...formData, name: value})}
              />
            </FormField>
            <FormField
              label="Email"
            >
              <Input
                value={formData?.email}
                ariaRequired={true}
                placeholder="jack.lin@example.com"
                onChange={({ detail: { value } }) => setFormData({...formData, email: value})}
              />
            </FormField>
            <FormField
              label="Description"
            >
              <Textarea
                value={formData?.description}
                onChange={({ detail: { value } }) => setFormData({...formData, description: value})}
              />
            </FormField>
          </SpaceBetween>
        </Form>
      </form>
    </Container>
  );
};

const ResultContainer = ({ formData }: {formData: MainFormData}) => {
  return (
    <Container header={<Header variant="h2">JSON output</Header>}>
      <Box variant="code">
        <pre>{JSON.stringify(formData, null, 4)}</pre>
      </Box>
    </Container>
  );
};

export default function Page() {
  const [result, setResult] = useState<MainFormData>(initialFormData);

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
          Form to JSON
        </Header>
      }
    >
      <SpaceBetween size="l">
        <MainForm setResult={setResult} />
        <ResultContainer formData={result} />
      </SpaceBetween>
    </ContentLayout>
  );
}
