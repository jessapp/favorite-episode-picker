import { IAction, IEpisode, IState } from './Interfaces'


export const fetchDataAction = async (dispatch: any) => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  }

  export const toggleFavoriteAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
    const episodeInFave = state.favorites.includes(episode);
    let disaptchObj = {
      type: 'ADD_FAV',
      payload: episode,
    }
    if (episodeInFave) {
      const favWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id);
      disaptchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      }
    };
    return dispatch(disaptchObj);
  }