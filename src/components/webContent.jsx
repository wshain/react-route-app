import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from'react-router-dom';

class WebContent extends Component {
    state = {
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
    };

    render() { 

        return (
            <React.Fragment>
                <h1>Web - {this.state.searchParams.get('chapter')}</h1>
                <h2>内容</h2>
                <hr></hr>
                <Link to="/web">返回</Link>
            </React.Fragment>
        );
    }
}
 
export default (props) => {
 return <WebContent {...props} params={useSearchParams()}></WebContent>
};