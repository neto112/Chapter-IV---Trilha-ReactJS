import { Button } from "@chakra-ui/react";

interface PaginationItemsProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ 
  isCurrent = false, 
  number 
}: PaginationItemsProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: 'pink.500',
        cursor: 'default',
      }}
    >
      {number}
    </Button>
  )
}