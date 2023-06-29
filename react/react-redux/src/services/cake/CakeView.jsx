import { useSelector, useDispatch } from "react-redux";
import { order, restock } from '../cake/cakeSlice';

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - { numOfCakes }</h2>
      <button onClick={() => dispatch(order({ quantity: 1 }))}>Order cake</button>
      <button onClick={() => dispatch(restock({ quantity: 1 }))}>Restock cake</button>
    </div>
  );
}