export interface RankingInfoProperties {
  getRanking: {
    summonerResponseDto: {
      classNo: number;
      gameName: string;
      grade: number;
      name: string;
      profileIcon: string;
      ranking: number;
      soloLp: number;
      soloTier: string;
      soloWins: number;
      soloLoses: number;
      tagLine: string;
      studentNo: number;
      mostChampions: {
        id: string;
        name: string;
      }[];
    }[];
  };
}
