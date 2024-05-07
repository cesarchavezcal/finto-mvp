'use client';

import { addIdea } from '@/actions/ideas/add-idea.action';
import { useFormState } from 'react-dom';

export interface AddIdeaFormProps {
  children?: React.ReactNode;
}

export const AddIdeaForm = ({}: Readonly<AddIdeaFormProps>) => {
  const [state, action] = useFormState(addIdea, undefined);
  console.log(state);
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
      <button>Submit</button>
    </form>
  );
};
