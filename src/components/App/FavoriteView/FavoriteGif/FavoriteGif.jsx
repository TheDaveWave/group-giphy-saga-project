import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteGif({gif}) {

    const dispatch = useDispatch();

    // get categories from reducer.
    const categories = useSelector(store => store.categories);

    // create local state to track value of select element
    const [category, setCategory] = useState('');


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
            <img src={gif.gif_obj.url}/>
            <select value={category.name} onChange={evt => setCategory(evt.target.value)} name='category'>
                {categories.map(cat => (
                    <option key={cat.id} value={cat}>{cat.name}</option>
                ))}
            </select>
            <button onClick={() => removeFav()}>Remove</button>
        </section>
    );
}

export default FavoriteGif;