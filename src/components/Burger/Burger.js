import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = [];
    for (let key in props.ingredients) { // let iterates over keys in an object
        for (let i = 0; i < props.ingredients[key]; i++) {
            transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />);
        }
    }

    if (transformedIngredients.flat().length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);




