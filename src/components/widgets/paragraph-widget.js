import React,{useState} from 'react'

const ParagraphWidget = ({widget, updateItem, deleteItem}) => {
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
                (editingWidget.id === widget.id) &&
                <>
                    <select onChange={(e) => setItemCache({...itemCache, type: e.target.value})} value={itemCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"PARAGRAPH"}>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"PARAGRAPH"}>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"PARAGRAPH"}>HTML</option>
                    </select>
                    <textarea onChange={(e) => setItemCache({...itemCache, text: e.target.value})} value={itemCache.text} className="form-control"></textarea>
                </>
            }
            {
                (editingWidget.id !== widget.id) &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget