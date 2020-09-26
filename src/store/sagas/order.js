import { put } from 'redux-saga/effects';

import axiosOrders from '../../axios-orders';
import * as actions from '../actions';

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());
    try {
        const response = yield axiosOrders.post("/orders.json?auth=" + action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        console.log(error);
        yield put(actions.purchaseBurgerFail(error));
    }
}

