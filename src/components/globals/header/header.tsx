import { getProfile } from '@/actions';
import { Avatar, Box, Card, Flex, Heading, Text } from '@radix-ui/themes';
import UserPopover from '../popover/user-popover';

export interface HeaderProps {
  children?: React.ReactNode;
}

export async function Header() {
  const user = await getProfile();
  return (
    <Box role="navigation" position="sticky" top="0" left="0" className="z-10">
      <Card>
        <Flex justify="between" wrap="wrap" align="center">
          <Heading size="3" role="title">
            🪅 Piñata Template
          </Heading>
          <UserPopover>
            <Flex gap="3" align="center">
              <Avatar
                role="user__img"
                size="3"
                src={user?.image as string}
                radius="full"
                fallback={user?.name as string}
              />
              <Box display={{ initial: 'none', xs: 'block' }}>
                <Text as="p" size="2" weight="bold" highContrast role="user__name">
                  {user?.name}
                </Text>
                <Text as="p" size="1" role="user__email">
                  {user?.email}
                </Text>
              </Box>
            </Flex>
          </UserPopover>
        </Flex>
      </Card>
    </Box>
  );
}
