import React from "react";
import { render } from "react-dom";
import MindMap from "react-mindmap";

export default function CustomMindMap (props) {
    const {nodes, connections } = props;
    return (
        <div>
            <MindMap nodes= {nodes} connections= {connections}/>
        </div>
    );
}