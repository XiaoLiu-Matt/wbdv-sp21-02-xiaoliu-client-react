import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <div className="wbdv-sticky-nav-bar color-white">
            <div className="row wbdv-editor-padding-right">
                <a href="/">
                    X
                </a>
                <input/>
                <div >
                    <i className="fas fa-plus-circle fa-2x"></i>
                </div>
            </div>
        </div>
        <div className="list-group">
            <Link to="/courses/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
            <Link to="/editor" className="list-group-item">
                Course Editor
            </Link>
        </div>
    </>
