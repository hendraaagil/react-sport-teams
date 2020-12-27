import {
  useDisclosure,
  Grid,
  Box,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';

const Teams = ({ teams }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} py={2} px={5}>
      {teams.teams?.map(team => (
        <Box
          p={4}
          w="100%"
          textAlign="center"
          borderRadius="md"
          boxShadow="md"
          key={team.idTeam}
        >
          <Text mb={4} fontSize="xl" fontWeight="bold">
            {team.strTeam}
          </Text>
          <Box boxSize="100px" m="auto">
            <Image src={team.strTeamBadge} alt={team.strAlternate} />
          </Box>
          <Button onClick={onOpen} mt={4} mb={2}>
            Detail
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default Teams;
