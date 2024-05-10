'use client';

import { addIdeaAction } from '@/actions';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Separator,
  Spinner,
  Switch,
  Text,
  TextArea,
  TextField,
} from '@radix-ui/themes';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export interface AddIdeaFormProps {
  children?: React.ReactNode;
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? <Spinner /> : null}
      Share Idea
    </Button>
  );
}

export const AddIdeaForm = ({}: Readonly<AddIdeaFormProps>) => {
  const [state, action] = useFormState(addIdeaAction, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <Card>
      <form action={action} ref={formRef}>
        <Grid gap={'4'}>
          {state?.errors?.title && <div>{state.errors.title}</div>}
          <Flex direction="column" gap="3">
            <Box>
              <Flex direction="column" gap="1">
                <Text weight={'bold'} as="label" size={'2'} htmlFor="title">
                  💡 Idea Title
                </Text>
                <TextField.Root
                  name="title"
                  variant="surface"
                  placeholder="Search the docs…"
                ></TextField.Root>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" gap="1">
                <Text weight={'bold'} as="label" size={'2'} htmlFor="content">
                  💬 Idea Description
                </Text>
                <TextArea placeholder="Add your content" name="content" />
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" gap="1">
                <Text weight={'bold'} as="label" size={'2'} htmlFor="published">
                  🚀 Should Publish?
                </Text>
                <Switch name="published" />
              </Flex>
            </Box>
          </Flex>
          <Separator size={'4'} />
          <Submit />
        </Grid>
      </form>
    </Card>
  );
};
