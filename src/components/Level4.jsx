import { useCounterStore } from "../stores/useCounterStore_2";

export default function Level4({user}) {
    const count = useCounterStore((state)=> state.count)
    
    console.log('render level 4');
    return <div>
        <h1>{count}</h1>
        <p>Hello, {user.name}</p>
        </div>
}