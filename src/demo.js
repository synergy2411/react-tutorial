import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

}