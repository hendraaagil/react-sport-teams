import { Grid } from '@chakra-ui/react';
import Team from './Team';

const Teams = ({ teams }) => (
  <Grid templateColumns="repeat(4, 1fr)" gap={6} py={2} px={5}>
    {teams.teams?.map(team => (
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
    ))}
  </Grid>
);

export default Teams;
