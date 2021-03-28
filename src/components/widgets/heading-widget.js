import React, {useState} from 'react'

const HeadingWidget = ({widget, updateItem, deleteItem}) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [itemCache, setItemCache] = useState(widget);
    return(
        <>
            {
                editingWidget.id === widget.id &&
                <>
                    <i onClick={() => {
                        updateItem(itemCache)
                        setEditingWidget({})
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => deleteItem(widget)} className="fas fa-2x fa-trash float-right"></i>
                </>
            }
            {
                editingWidget.id !== widget.id &&
                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
            }

            {
                editingWidget.id === widget.id &&
                    <>
                        <select onChange={(e) => setItemCache({...itemCache, type: e.target.value})} value={itemCache.type} className="form-control">
                            <option value={"HEADING"}>Heading</option>
                            <option value={"PARAGRAPH"}>Paragraph</option>
                            <option value={"HEADING"}>Video</option>
                            <option value={"IMAGE"}>Image</option>
                            <option value={"HEADING"}>Link</option>
                            <option value={"LIST"}>List</option>
                            <option value={"HEADING"}>HTML</option>
                        </select>
                        <input onChange={(e) => setItemCache({...itemCache, text: e.target.value})} value={itemCache.text} className="form-control"/>
                        <select onChange={(e) => setItemCache({...itemCache, size: parseInt(e.target.value)})} value={itemCache.size} className="form-control">
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                    </>
            }
            {
                editingWidget.id !== widget.id &&
                    <>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </>
            }
        </>
    )
}

export default HeadingWidget