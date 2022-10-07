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
        <div className='container'>
            <div className='not-container'>
                <div className='content'>
                    <img src={gifObj.images.original.url}/>
                    {isFav ? <button onClick={()=>removeFromFavs()}>❤️</button> : <button onClick={()=>addToFavs()}>♡</button>}
                </div>
            </div>
        </div>

    )
}

export default ListItem;