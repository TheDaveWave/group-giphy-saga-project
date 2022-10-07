import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteGif from "./FavoriteGif/FavoriteGif";

function FavoriteView () {
    // get the list of favorite gifs object
    const favoriteGifs = useSelector(store => store.favs);

    const dispatch = useDispatch();

    // on load fetch favorites and categories.
    useEffect(() => {
        dispatch({type: 'GET_FAVS'});
        // this dispatch is for loading the categories before the 
        // FavoriteGif component loads.
        dispatch({type: 'GET_CATEGORY'});
    }, []);

    return (
        <section>
            <h1>This is the Favorite View Page</h1>
            <div>
                {favoriteGifs.map(gif => (
                    <FavoriteGif key={gif.id} gif={gif}/>
                ))}
            </div>
        </section>
    );
}

export default FavoriteView;