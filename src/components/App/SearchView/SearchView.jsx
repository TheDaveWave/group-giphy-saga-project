import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import ListItem from './ListItem/ListItem';



function SearchView(){
    const dispatch = useDispatch(); // set up dispatch
    const [searchTerm, setSearchTerm] = useState('');
    let searchList = useSelector(store=>store.search);

   
    function fetchGifList(){
         // dispatch searched term to GET_GIFS
        let action = {
            type: 'GET_GIFS',
            payload: searchTerm
        }
        dispatch(action);

        // clear input
        setSearchTerm('');

    }

    return (
        <div id="search-view-window">
            <div id="search-form">
                <h1>Search for a gif!</h1>
                <input placeholder="Search Parameters" type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <button onClick={()=>fetchGifList()}>Search</button>
            </div>
            <div>
                    {searchList.map((gifObj, index)=>{
                        return <ListItem key={index} gifObj={gifObj}/>
                    })}
            </div>
        </div>
    )
}

export default SearchView;