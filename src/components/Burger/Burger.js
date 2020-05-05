import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { // _ underscore ignore element itself
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    // for (let index = 0; index < Array(props.ingredients[igKey]).length; index++) {
    //     return <BurgerIngredient key={igKey + index} type={igKey} />

    // }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;

