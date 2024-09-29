import { HockeyTeam } from "./hockey-team.model";

export interface HockeyLeague {
    leagueID: number;
    leagueCode: string;
    leagueDescription: string;
    hockeyTeams?: HockeyTeam[];
  }