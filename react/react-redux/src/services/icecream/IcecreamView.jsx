import { useDispatch, useSelector } from "react-redux";
import { order, restock } from "./icecreamSlice"

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of icecreams - { numOfIcecreams }</h2>
      <button onClick={() => dispatch(order({ quantity: 1 }))}>Order icecream</button>
      <button onClick={() => dispatch(restock({ quantity: 1 }))}>Restock icecream</button>
    </div>
  );
}
