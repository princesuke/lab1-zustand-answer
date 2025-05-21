import { useCounterStore } from "../stores/counterStore";

export default function History() {
    const history = useCounterStore((state)=>state.history);
    return (
        <div>
            <h3>History</h3>
            <ul>
                {
                    history.map((entry, index) => 
                        <li key={index}>{entry}</li>
                   )
                }
            </ul>
        </div>
    )
}