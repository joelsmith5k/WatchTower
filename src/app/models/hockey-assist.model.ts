import { HockeyTeam } from './hockey-team.model';
import { HockeyPosition } from './hockey-position';
import { HockeyGoalie } from './hockey-goalie.model';
import { HockeyPlayer } from './hockey-player.model';

export interface HockeyAssist {
  assistId: number;
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
  hockeyPosition?: HockeyPosition;
  assistDate?: Date;
}
