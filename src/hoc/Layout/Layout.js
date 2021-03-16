import React, { Component } from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {

    render () {
        return (
            <>
                <Toolbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;