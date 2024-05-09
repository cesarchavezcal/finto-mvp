// async function InternalBlogPosts(): Promise<React.ReactElement> {
//   const posts = await getInternalBlogPosts();

import { Header } from '@/components';

//   return (
//     <Table>
//       <TableCaption>A list of your recent posts.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Title</TableHead>
//           <TableHead>Content</TableHead>
//           <TableHead>Created</TableHead>
//           <TableHead className="text-right">Published</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {posts.map((post) => (
//           <TableRow key={post.id}>
//             <TableCell className="font-medium">{post.title}</TableCell>
//             <TableCell className="font-medium">{post.content}</TableCell>
//             <TableCell>{post.createdAt?.toLocaleDateString()}</TableCell>
//             <TableCell className="text-right">{post.published ? '✅' : '🚫'}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">{posts.length}</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   );
// }
export default async function Home() {
  // const user = await getProfile();
  return (
    <div>
      <Header></Header>
      <h1 role="heading">Hello World</h1>
    </div>
    // <>
    //   <Container width={'100%'}>
    //     <Box>
    //       <Card>
    //         <Flex gap="3" align="center">
    //           <Avatar
    //             size="3"
    //             src={user?.image as string}
    //             radius="full"
    //             fallback={user?.name as string}
    //           />
    //           <Box>
    //             <Text as="p" size="2" weight="bold">
    //               {user?.name}
    //             </Text>
    //             <Text as="p" size="2" color="gray">
    //               {user?.email}
    //             </Text>
    //             <Badge size="1">Authenticated</Badge>
    //           </Box>
    //         </Flex>
    //       </Card>
    //     </Box>
    //     <Box py="4">
    //       <Heading as="h1" size="1" weight="bold">
    //         Welcome to your dashboard
    //       </Heading>
    //     </Box>
    //   </Container>
    //   <main className="flex min-h-screen flex-col items-center justify-between container">
    //     <section className="grid grid-cols-6 gap-4 pt-4">
    //       <section className="col-span-2">
    //         <AddPost />
    //       </section>
    //       <section className="col-span-4">
    //         {/* <Suspense fallback={}>
    //         </Suspense> */}
    //         {/* <InternalBlogPosts /> */}
    //       </section>
    //     </section>
    //   </main>
    // </>
  );
}
