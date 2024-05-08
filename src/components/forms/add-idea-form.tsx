'use client';

import { addIdea } from '@/actions/ideas/add-idea.action';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '../ui/use-toast';

export interface AddIdeaFormProps {
  children?: React.ReactNode;
}

function Submit() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>;
}

export const AddIdeaForm = ({}: Readonly<AddIdeaFormProps>) => {
  const [state, action] = useFormState(addIdea, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Idea created',
        description: `Your idea has been created successfully: ${state?.data.title}`,
      });
    }
  }, [state, toast]);

  return (
    <form action={action}>
      {state?.errors?.title && <div>{state.errors.title}</div>}
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" />
      </div>
      <div>
        <label htmlFor="published">Published</label>
        <input type="checkbox" id="published" name="published" value="yes" />
      </div>
      <Submit />
    </form>
  );
};
