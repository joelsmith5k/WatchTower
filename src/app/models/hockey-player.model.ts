import { HockeyTeam } from './hockey-team.model';
import { HockeyPosition } from './hockey-position';

export interface HockeyPlayer {
  playerId: number;
  playerCode: string;
  defaultTeamId: number;
  defaultPositionId: number;
  firstName: string;
  lastName: string;
  dexterityId?: number;
  height?: number;
  wieght?: number;
  dob: Date;
  defaultTeam?: HockeyTeam;
  hockeyPosition?: HockeyPosition;
}
