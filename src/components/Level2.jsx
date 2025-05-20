import Level3 from "./Level3";

export default function Level2({user}) {
    console.log('render level 2');
    return <Level3 user={user} />
}