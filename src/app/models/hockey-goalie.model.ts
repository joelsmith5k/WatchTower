import { HockeyTeam } from './hockey-team.model';
import { HockeyLeague } from './hockey-league.model';

export interface HockeyGoalie {
  leagueCode: any;
  teamCode: string | undefined; // set manually
  goalieID: number;
  currentTeamID: number;
  goalieCode: string;
  firstName: string;
  lastName: string;
  dexterity?: string;
  gloveHand?: string;
  height?: number;
  weight?: number;
  dob?: Date;
  leagueID: number;
  hockeyTeam?: HockeyTeam;
  hockeyLeague?: HockeyLeague;
}
