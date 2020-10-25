import { useState, useEffect } from 'react';

export default (httpClient) => {
    const [error, setError] = useState(null);
    const [unmounted, setMounted] = useState(false);

    const reqInterceptor = httpClient.interceptors.request.use(
        req => {
            if (unmounted) {
                setError(null);
            }
            return req;
        });
    const resInterceptor = httpClient.interceptors.response.use(
        res => res, err => {
            setError(err);
        });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
            setMounted(false);
        };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [error, errorConfirmedHandler];

}