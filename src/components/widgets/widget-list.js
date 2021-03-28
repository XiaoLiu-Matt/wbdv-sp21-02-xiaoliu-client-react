import React,{useEffect,useState} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets=[],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams();
    // const [widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        // if(lessonId!==undefined &&typeof lessonId!=="undefined") {
        findWidgetsForTopic(topicId)
        // }
    }, [findWidgetsForTopic, topicId])
    return(
        <div>
            <i onClick={()=> createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            {/*<h2>Widget List ({widgets.length}) {editingWidget.id}</h2>*/}
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {/*{*/}
                            {/*    editingWidget.id === widget.id &&*/}
                            {/*    <>*/}
                            {/*        <i onClick={() => {*/}
                            {/*            updateWidget(widget)*/}
                            {/*            setEditingWidget({})*/}
                            {/*        }} className="fas fa-2x fa-check float-right"></i>*/}
                            {/*        <i onClick={() => deleteWidget(widget)} className="fas fa-2x fa-trash float-right"></i>*/}
                            {/*    </>*/}
                            {/*}*/}
                            {/*{*/}
                            {/*    editingWidget.id !== widget.id &&*/}
                            {/*    <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>*/}
                            {/*}*/}
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    // editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateItem = {updateWidget}
                                    deleteItem = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    widget={widget}
                                    updateItem = {updateWidget}
                                    deleteItem = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    widget={widget}
                                    updateItem = {updateWidget}
                                    deleteItem = {deleteWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    widget={widget}
                                    updateItem = {updateWidget}
                                    deleteItem = {deleteWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget",widgetOrder:0, width:100, height:100, src:"https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"})
            .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    },
    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem.id, newItem)
            .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
    },
    deleteWidget: (widgetToDelete) => {
        widgetService.deleteWidget(widgetToDelete.id)
            .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    }
})

const pm = connect(stpm, dtpm)

export default pm(WidgetList)

