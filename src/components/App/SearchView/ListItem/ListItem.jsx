function ListItem({gifObj}){

    console.log(gifObj.images.url);

    return(
        <li>
            <img src={gifObj.images.original.url}/>
        </li>

    )
}

export default ListItem;