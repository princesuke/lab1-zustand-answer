import { useCounterStore } from "../stores/counterStore";

export default function ButtonPanel() {
    const increase = useCounterStore((state)=>state.increase);
    const reset = useCounterStore((state)=>state.reset);

    return (
        <div>
            <button onClick={()=> increase(1)}>+1</button>
            <button onClick={()=> increase(5)}>+5</button>
            <button onClick={()=> increase(10)}>+10</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}