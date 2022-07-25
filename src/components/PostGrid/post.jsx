import "./post.css"
import React from 'react';

class post extends React.Component{
    render() {
        return(
            <h1>{this.props.name}</h1>
        );
    }
}

export default post;