const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state: ', store.getState());
})

store.dispatch(cakeActions.order({ quantity: 3 }));
store.dispatch(cakeActions.restock({ quantity: 3 }));
store.dispatch(icecreamActions.order({ quantity: 3 }));
store.dispatch(icecreamActions.restock({ quantity: 3 }));

unsubscribe();