import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../../../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSidedrawer, setSidedrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSidedrawer(false);
    }

    const sideDrawerOpenedHandler = () => {
        setSidedrawer(!showSidedrawer);
    }

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerOpenedHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSidedrawer}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);