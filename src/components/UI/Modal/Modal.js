import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../containers/Layout/hoc/Aux/Aux';
import Backdrop from './Backdrop/Backdrop';

const Modal = props => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.show !== props.show;
    // }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );
}


export default React.memo(
    Modal,
    (prevProps, nextProps) =>
        prevProps.show === nextProps.show &&
        prevProps.children === nextProps.children
);