import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//     const transformedIngredients = Object.keys(props.ingredients)
//         .map(igKey => {
//             return [...Array(props.ingredients[igKey])].map((_, i) => { // _ underscore ignore element itself
//                 return <BurgerIngredient key={igKey + i} type={igKey} />
//             });
//         })
//         .flat();
// or instead of flat use .reduce((arr, el) => {
//                              return arr.concat(el)  
//                             }, []);
//                  


// for (let index = 0; index < Array(props.ingredients[igKey]).length; index++) {
//     return <BurgerIngredient key={igKey + index} type={igKey} />

// }

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

export default burger;




