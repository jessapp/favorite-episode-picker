import React from 'react'
import {IEpisode, IEpisodeProps} from './Interfaces'

export default function EpisodesList(props: IEpisodeProps):JSX.Element[] {
    const {episodes, toggleFavoriteAction, favorites} = props
    const {state, dispatch} = props.store
    return episodes.map((episode:IEpisode) => {
        return (
            <section key={episode.id} className="episode-box">
            <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}/>
            <div>{episode.name}</div>
            <section style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type='button' onClick={ () => toggleFavoriteAction(state, dispatch, episode)}>
                {favorites.find((fave: IEpisode) => fave.id === episode.id) ? 'Unfave' : 'Fave'}
                </button>
            </section>
            </section>
        )
        })
}
