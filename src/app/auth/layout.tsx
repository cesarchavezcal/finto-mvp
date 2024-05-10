import { Box, Flex } from '@radix-ui/themes';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box width="100%">
      <Flex justify="center" align="center" minHeight="100vh">
        {children}
      </Flex>
    </Box>
  );
}
