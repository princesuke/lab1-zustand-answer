import { useCounterStore } from "../stores/counterStore";

export default function CounterDisplay() {
    const count = useCounterStore((state)=>state.count);

    return <div>
        <h1>Count: {count}</h1>
        {count >= 100 && <p style={{color: "red"}}>Count reached 100!</p>}
    </div>
}