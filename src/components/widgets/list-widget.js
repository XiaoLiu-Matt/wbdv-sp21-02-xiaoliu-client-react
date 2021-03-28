import React,{useState}from 'react'

const ListWidget = ({widget, updateItem, deleteItem}) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [itemCache, setItemCache] = useState(widget);
    return(
        <div>
            {
                editingWidget.id === widget.id &&
                    <>

                        <i onClick={() => {
                            updateItem(itemCache)
                            setEditingWidget({})
                        }} className="fas fa-2x fa-check float-right"></i>
                        <input onChange={(e) => setItemCache({...itemCache, widgetOrder: e.target.checked?1:0})} checked={itemCache.widgetOrder === 1} type="checkbox"/> Ordered
                        <i onClick={() => deleteItem(widget)} className="fas fa-2x fa-trash float-right"></i>
                        <br/>
                        Item list
                        <textarea onChange={(e) => setItemCache({...itemCache, text: e.target.value})} value={itemCache.text} rows={10} className="form-control"></textarea>

                    </>
            }
            {
                editingWidget.id !== widget.id &&
                    <>
                        <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        {
                            itemCache.widgetOrder ===1 &&
                            <ol>
                                {
                                    itemCache.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            itemCache.widgetOrder===0 &&
                            <ul>
                                {
                                    itemCache.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget