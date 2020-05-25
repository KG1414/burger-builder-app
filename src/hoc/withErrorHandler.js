import React, { Component } from 'react';

import Modal from '../components/UI/Modal/Modal';
import Aux from './Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        _Unmounted = false;
        constructor(props) {
            super(props);
            this.state = { error: null };
        }

        reqInterceptor = axios.interceptors.request.use(
            req => {
                if (this._Unmounted) {
                    this.setState({ error: null })
                }
                return req;
            });

        resInterceptor = axios.interceptors.response.use(
            res => res, error => {
                this.setState({ error: error });
            });

        componentDidMount() {
            this._Unmounted = true;
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
            this._Unmounted = false;
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}



export default withErrorHandler;