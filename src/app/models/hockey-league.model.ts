import { HockeyTeam } from "./hockey-team.model";

export interface HockeyLeague {
    hockeyLeagueID: number;
    leagueCode: string;           // Maps to the C# string property
    hockeyLeagueDescription: string;    // Maps to the C# string property
    hockeyTeams?: HockeyTeam[];     // Maps to the C# ICollection property, optional
  }