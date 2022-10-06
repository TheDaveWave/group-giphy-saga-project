import { useDispatch } from "react-redux";

function FavoriteGif({gif}) {

    const dispatch = useDispatch();

    const removeFav = () => {
        dispatch({
            type: 'DELETE_GIF',
            payload: gif.id
        });
    }

    return (
        <section>
            <h1>This is a favorited gif</h1>
            {/* display gif properties here */}

            <button onClick={() => removeFav()}>Remove</button>
        </section>
    );
}

export default FavoriteGif;