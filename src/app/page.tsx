// async function InternalBlogPosts(): Promise<React.ReactElement> {
//   const posts = await getInternalBlogPosts();

import { fetchIdeasAction } from '@/actions';
import { Header } from '@/components';
import { AddIdeaForm } from '@/components/forms';
import { Card, Flex, Grid, Heading, Section, Table } from '@radix-ui/themes';

export default async function Home() {
  const ideas = await fetchIdeasAction();
  return (
    <>
      <Header></Header>
      <Section py={'2'} />
      <Grid columns={{ initial: '1', sm: '18rem 1fr' }} gap={'4'}>
        <Card size={'2'}>
          <Flex gap={'4'} direction={'column'}>
            <Heading as="h2">Add Your Ideas</Heading>
            <AddIdeaForm />
          </Flex>
        </Card>
        <Card size={'2'} variant="surface">
          <Flex gap={'4'} direction={'column'}>
            <Heading as="h2">Idea List</Heading>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Published</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {ideas.length === 0 && (
                  <Table.Row>
                    <Table.Cell>No Data</Table.Cell>
                  </Table.Row>
                )}
                {ideas.map((idea) => {
                  return (
                    <Table.Row key={idea.id}>
                      <Table.RowHeaderCell>{idea.title}</Table.RowHeaderCell>
                      <Table.Cell>{idea.published ? '✅' : '🚫'}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Root>
          </Flex>
        </Card>
      </Grid>
    </>
  );
}
