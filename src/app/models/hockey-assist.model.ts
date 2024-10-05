import { HockeyTeam } from './hockey-team.model';
import { HockeyPosition } from './hockey-position';
import { HockeyGoalie } from './hockey-goalie.model';
import { HockeyPlayer } from './hockey-player.model';

export interface HockeyAssist {
  assistId: number;
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
  hockeyPosition?: HockeyPosition;
}
