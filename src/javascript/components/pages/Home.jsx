'use strict';

import React from 'react';

// Components
import ReleaseDeck from '../ReleaseDeck';

// Action
import getRelease from '../../actions/getRelease';

export default class Home extends React.Component{

	componentWillMount () {
        this.context.executeAction(getRelease, 'LATEST');
    }

    render () {
        return <ReleaseDeck release={this.props.latest} />
    }
}

Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};
