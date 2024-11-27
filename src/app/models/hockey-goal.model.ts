import { HockeyTeam } from './hockey-team.model';
import { HockeyLeague } from './hockey-league.model';
import { HockeyGoalie } from './hockey-goalie.model';
import { HockeyPlayer } from './hockey-player.model';

export interface HockeyGoal {
  goalId: number;
  goalieId: number;
  goalieTeamId: number;
  playerId: number;
  playerTeamId: number;
  positionId?: number;
  dexterityId?: number;
  positionX?: number;
  positionY?: number;
  date?: Date;
  hockeyGoalie?: HockeyGoalie;
  hockeyPlayer?: HockeyPlayer;
  playerTeam?: HockeyTeam;
  goalieTeam?: HockeyTeam;
  hockeyLeague?: HockeyLeague;
  goalDate?: Date;
}
