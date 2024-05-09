'use client';
import { Box, Button, Card, Flex, Heading, Inset } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  return (
    <Box maxWidth={'400px'} width={'100%'}>
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            width={600}
            height={600}
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)',
            }}
          />
        </Inset>
        <Flex gap="3" direction={'column'} align={'center'}>
          <Heading as="h1" size="5">
            Please sign in to continue.
          </Heading>
          <Button onClick={() => signIn('google', { callbackUrl: '/' })}>
            Sign In With Google
          </Button>
        </Flex>
      </Card>
    </Box>
  );
}
