import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

class MeassageContainers extends Component {

    render() {
        var { message } = this.props;
        return (
            <Message message={message}>
            </Message>
        );
    };
}
  

var mapStateToProps = (state) => {
    return {
        message : state.message,
    }
}


export default connect(mapStateToProps,null)(MeassageContainers);
