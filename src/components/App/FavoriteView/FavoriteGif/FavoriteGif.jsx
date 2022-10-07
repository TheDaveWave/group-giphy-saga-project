import { useDispatch, useSelector } from "react-redux";

function FavoriteGif({gif}) {

    const categories = useSelector(store => store.categories);

    // test button for categories.

    const dispatch = useDispatch();

    const removeFav = () => {
        dispatch({
            type: 'DELETE_GIF',
            payload: gif.id
        });
    }

    console.log(gif.id);

    return (
        <section>
            <h1>This is a favorited gif</h1>
            {/* display gif properties here */}
            <select>

            </select>
            <button>TEST</button>
            <button onClick={() => removeFav()}>Remove</button>
        </section>
    );
}

export default FavoriteGif;