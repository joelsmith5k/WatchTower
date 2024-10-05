import { HockeyTeam } from './hockey-team.model';
import { HockeyLeague } from './hockey-league.model';
import { HockeyGoalie } from './hockey-goalie.model';
import { HockeyPlayer } from './hockey-player.model';

export interface HockeyGoal {
  goalId: number;
  goalieId: number;
  playerId: number;
  teamId: number;
  positionId?: number;
  dexterityId?: number;
  positionX?: number;
  positionY?: number;
  date?: Date;
  hockeyGoalie?: HockeyGoalie;
  hockeyPlayer?: HockeyPlayer;
  hockeyTeam?: HockeyTeam;
  hockeyLeague?: HockeyLeague;
}
