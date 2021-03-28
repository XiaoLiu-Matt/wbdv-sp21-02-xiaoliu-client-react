import React,{useState} from 'react'

const ImageWidget = ({widget, updateItem, deleteItem}) =>
{
    const [editingWidget, setEditingWidget] = useState({});
    const [itemCache, setItemCache] = useState(widget);
    return(
    <div>
        {
            editingWidget.id !== widget.id &&
                <>
                    <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </>
        }
        {
            editingWidget.id === widget.id &&
            <>
                <i onClick={() => {
                    updateItem(itemCache)
                    setEditingWidget({})
                }} className="fas fa-2x fa-check float-right"></i>
                <i onClick={() => deleteItem(widget)} className="fas fa-2x fa-trash float-right"></i>
                <input onChange={(e) => setItemCache({...itemCache, src: e.target.value})} value={itemCache.src} placeholder={itemCache.src} className="form-control"/>
                <input onChange={(e) => setItemCache({...itemCache, width: e.target.value})} value={itemCache.width} className="form-control"/>
                <input onChange={(e) => setItemCache({...itemCache, height: e.target.value})} value={itemCache.height} className="form-control"/>
            </>
        }
    </div>
    )
}

export default ImageWidget