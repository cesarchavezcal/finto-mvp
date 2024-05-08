import { AddIdeaForm } from '@/components/forms';

export default async function IdeasPage(): Promise<React.ReactElement> {
  return (
    <div>
      <h1>Ideas</h1>
      <AddIdeaForm />
    </div>
  );
}
