export interface HockeyTeam {
    teamID: number;
    leagueID: number;
    teamCode: string;
    cityCode: string;
    description: string;
    mascotDescription: string;
    activeInd: boolean;
    teamInceptionYear: Date;
    teamFinalYear?: Date;
}