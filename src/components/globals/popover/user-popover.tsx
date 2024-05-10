'use client';
import { Button, Flex, Heading, Popover, Separator, Text } from '@radix-ui/themes';
import { signOut } from 'next-auth/react';

export interface UserPopoverProps {
  children: React.ReactNode;
}

const UserPopover = (props: UserPopoverProps) => (
  <Popover.Root>
    <Popover.Trigger className="cursor-pointer">{props.children}</Popover.Trigger>
    <Popover.Content width="1">
      <div>
        <Heading size="2" mb="1">
          ⚙️ User Configuration
        </Heading>
        <Text as="p" size="2" mb="4" color="gray">
          Here goes the user configuration options
        </Text>
        <Separator my="3" size="4" />
        <Flex direction="column" align="stretch">
          <Popover.Close>
            <Button onClick={() => signOut()} size="1" variant="soft" color="red" highContrast>
              Sign Out
            </Button>
          </Popover.Close>
        </Flex>
      </div>
    </Popover.Content>
  </Popover.Root>
);

export default UserPopover;
