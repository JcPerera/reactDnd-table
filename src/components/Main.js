import React, { Component } from 'react';
import Frontmatter from './Frontmatter';
import DragandDrop from './DragandDrop';
import Sidebar from './Sidebar';

class Main extends Component {
    render() {
        return (
            <div className="col-md-9">
                <div className="card mb-8 box-shadow">
                    <div className="card-body" >
                        <Frontmatter />
                        <DragandDrop />
                        <Sidebar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
