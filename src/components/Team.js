import { useDisclosure, Box, Text, Image, Button } from '@chakra-ui/react';
import Detail from './Detail';

const Team = ({ name, badge, alt, stadiumName, stadium, desc, jersey }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={4} w="100%" textAlign="center" borderRadius="md" boxShadow="md">
      <Text mb={4} fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Box boxSize="100px" m="auto">
        <Image src={badge} alt={alt} />
      </Box>
      <Button onClick={onOpen} mt={4} mb={2}>
        Detail
      </Button>
      <Detail
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        alt={alt}
        stadiumName={stadiumName}
        stadium={stadium}
        desc={desc}
        badge={badge}
        jersey={jersey}
      />
    </Box>
  );
};

export default Team;
