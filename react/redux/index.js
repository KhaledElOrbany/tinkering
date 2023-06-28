const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const ORDER_CAKE = 'ORDER_CAKE';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const ORDER_ICECREAM = 'ORDER_ICECREAM';
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM';

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIcecreams: 15
}

function order(type, quantity = 1) {
  if (!type) {
    throw new Error('Provide a type!');
  }

  return {
    type: type,
    payload: quantity,
  }
}

function restock(type, quantity = 1) {
  if (!type) {
    throw new Error('Provide a type!');
  }

  return {
    type: type,
    payload: quantity,
  }
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ORDER_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - action.payload,
      }
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams + action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

const store = createStore(rootReducer);
console.log('init state', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('update state ', store.getState())
});

const actions = bindActionCreators({ order, restock }, store.dispatch);
actions.order(ORDER_CAKE, 2);
actions.order(ORDER_ICECREAM, 1);
actions.restock(RESTOCK_CAKE, 2);
actions.restock(RESTOCK_ICECREAM, 1);

unsubscribe();
