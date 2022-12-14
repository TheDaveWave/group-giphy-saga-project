import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoriteGif({gif}) {

    const dispatch = useDispatch();

    // get categories from reducer.
    const categories = useSelector(store => store.categories);

    // create local state to track value of select element.
    const [categoryid, setCategory] = useState('');

    // change the category of the gif.
    const updateCategory = () => {
        // find the category id in categories that matches the categoryid
        const categoryObj = categories.find(cat => cat.id === categoryid);
        console.log('Change to category:',categoryObj);
        dispatch({
            type: 'CHANGE_CAT',
            payload: {
                catid: categoryObj.id,
                favid: gif.id
            }
        });
    }

    // remove a favorite gif.
    const removeFav = () => {
        dispatch({
            type: 'DELETE_FAVORITE',
            payload: gif.id
        });
    }

    // set category to value of categories[0].id 
    // after categories has been loaded into redux.
    useEffect(() => {
        // make sure to only set category to value if categories is not empty.
        if (categories.length > 0) {
            setCategory(categories[0].id);
        }
    }, [categories]);

    return (
        <div className="container">
            <div className="not-container">
                <div className="content">
                    {/* display gif properties here */}
                    <img src={gif.gif_obj.images?.original.url}/>
                    <p>Category: {categories.find(item => item.id === gif.category_id)?.name || 'none'}</p>
                    {/* the value of the select will be the id of the category object */}
                    <select className="fav-select" value={categoryid} onChange={evt => setCategory(Number(evt.target.value))} name='category'>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    <div className="fav-btn-container">
                        <button onClick={() => updateCategory()}>Update Category</button>
                        <button onClick={() => removeFav()}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteGif;