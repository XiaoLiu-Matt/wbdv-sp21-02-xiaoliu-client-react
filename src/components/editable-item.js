import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        type,
        active,

    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(

    <li className={`${type} ${(editing) ? 'active' : ''} ${active?'active':''}`}>

            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right"></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }} className="fas fa-check float-right"></i>
                    <i onClick={() => deleteItem(item)} className="fas fa-times float-right"></i>
                </>
            }

    </li>





    )
}

export default EditableItem