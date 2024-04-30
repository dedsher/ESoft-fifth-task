import { decrement, increment } from "@store/example/exampleSlice";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return <div>
    <h2>{count}</h2>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>;
};

export default Counter;
