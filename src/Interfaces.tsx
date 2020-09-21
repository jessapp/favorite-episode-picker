export interface IState{ 
    episodes: Array<IEpisode>,
    favorites: Array<IEpisode>,
}

export interface IAction { 
    type: string,
    payload: any,
}

export interface IEpisode {
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number,
    name: string,
    image: {
      medium: string,
      original: string,
    }
    season: string,
    number: string,
    runtime: number,
    summary: string,
    url: string,
  }

export interface IEpisodeProps {
    episodes: Array<IEpisode>,
    store: {
        state: IState,
        dispatch: any,
    }
    toggleFavoriteAction: (state: IState, dispatch: any, episode: IEpisode) => IAction,
    favorites: Array<IEpisode>,
}