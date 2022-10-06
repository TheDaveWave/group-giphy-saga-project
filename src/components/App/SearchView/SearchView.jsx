import {useDispatch, useSelector} from 'react-redux';


function SearchView(){
    const dispatch = useDispatch(); // set up dispatch

    // dispatch to 
    function fetchGifList(){

    }



    return (
        <div>
            <input placeholder="Search Parameters" type="text" onClick={()=>fetchGifList()}/>
        </div>
    )
}

export default SearchView;