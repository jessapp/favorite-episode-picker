import React from 'react'
import { Store } from './Store'
import { toggleFavoriteAction } from './Actions'
import { IEpisodeProps } from './Interfaces';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavePage(): JSX.Element {
    const {state, dispatch} = React.useContext(Store);
    const props: IEpisodeProps = {
        episodes: state.favorites,
        toggleFavoriteAction,
        store: {state, dispatch},
        favorites: state.favorites,

    }
    return (
        <React.Suspense fallback={<div>loading</div>}>
            <div className='episode-layout'>
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}
