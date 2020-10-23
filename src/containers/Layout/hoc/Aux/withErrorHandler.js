import React, { useEffect, useState } from 'react';

import Modal from '../../../../components/UI/Modal/Modal';
import Aux from './Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);
        const [unmounted, setMounted] = useState(false);

        const reqInterceptor = axios.interceptors.request.use(
            req => {
                if (unmounted) {
                    setError(null);
                }
                return req;
            });
        const resInterceptor = axios.interceptors.response.use(
            res => res, err => {
                setError(err);
            });

        useEffect(() => {
            setMounted(true);
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
                setMounted(false);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    }
}

export default withErrorHandler;