const store = require('./app/store');
const fetchUsers = require('./services/user/userSlice').fetchUsers;
const cakeActions = require('./services/cake/cakeSlice').cakeActions;
const icecreamActions = require('./services/icecream/icecreamSlice').icecreamActions;

console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state: ', store.getState());
})

// store.dispatch(cakeActions.order({ quantity: 3 }));
// store.dispatch(cakeActions.restock({ quantity: 3 }));
// store.dispatch(icecreamActions.order({ quantity: 3 }));
// store.dispatch(icecreamActions.restock({ quantity: 3 }));
store.dispatch(fetchUsers());

// unsubscribe();