import { Flex, Text } from '@chakra-ui/react';
import Team from './Team';

const Teams = ({ teams }) => (
  <Flex gap={6} py={2} px={5} flexWrap="wrap" justifyContent="center">
    {teams.teams ? (
      teams.map(team => (
        <Team
          key={team.idTeam}
          name={team.strTeam}
          badge={team.strTeamBadge}
          alt={team.strAlternate}
          stadiumName={team.strStadium}
          stadium={team.strStadiumThumb}
          desc={team.strDescriptionEN}
          jersey={team.strTeamJersey}
        />
      ))
    ) : (
      <Text fontSize="xl" fontWeight="bold">
        Nothing here!
      </Text>
    )}
  </Flex>
);

export default Teams;
