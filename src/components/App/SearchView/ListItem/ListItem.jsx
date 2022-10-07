import {useDispatch} from 'react-redux';
import {useState} from 'react';

function ListItem({gifObj}){
    const dispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);
    

    console.log(gifObj.images.url);

    function addToFavs(){
        let action = {
            type: 'ADD_FAVORITE',
            payload: gifObj
        }
        dispatch(action);
        
        setIsFav(true);
    }


    // function removeFromFavs(){
    //     let action = {
    //         type: 'ADD_FAVORITE',
    //         payload: gifObj
    //     }
    //     dispatch(action);
    //     setIsFav(false);
    // }




    return(
        <li>
            <img src={gifObj.images.original.url}/>
            {isFav ? <button onClick={()=>removeFromFavs()}>❤️</button> : <button onClick={()=>addToFavs()}>♡</button>}
        </li>

    )
}

export default ListItem;