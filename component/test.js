/* rcc - class component skeleton */
import React, {Component} from 'react';

class Test extends Component {
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

export default Test;

/* rrc - class component skeleton with react-redux connect */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyComponent extends Component {
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(MyComponent);

/* rccp - class component skeleton with prop types after the class */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

MyComponent.propTypes = {};
export default MyComponent;

/* rcfc - class component skeleton with that contains all the lifecycle methods */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
    
    }
    
    componentDidMount() {
    
    }
    
    componentWillReceiveProps(nextProps) {
    
    }
    
    shouldComponentUpdate(nextProps, nextState) {
    
    }
    
    componentWillUpdate(nextProps, nextState) {
    
    }
    
    componentDidUpdate(prevProps, prevState) {
    
    }
    
    componentWillUnmount() {
    
    }
    
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

MyComponent.propTypes = {};
export default MyComponent;


/* ********************************** */
/* rsc - stateless component skeleton */
import React from 'react';

const MyComponent = () => {
    return (
        <div>
        
        </div>
    );
};
export default MyComponent;
/* ********************************** */


/* rscp - stateless component with prop types skeleton */
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props => {
    return (
        <div>
        
        </div>
    );
};
MyComponent.propTypes = {};
export default MyComponent;

/* pt - empty propTypes declaration */
MyComponent.propTypes = {};





