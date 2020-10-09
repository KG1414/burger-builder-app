import { put } from 'redux-saga/effects';

import axiosOrders from '../../axios-orders';
import * as actions from '../actions/index';

export function* initIngredientsSaga(action) {
    try {
        const response = yield axiosOrders.get('https://react-burger-builder-cb99d.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}