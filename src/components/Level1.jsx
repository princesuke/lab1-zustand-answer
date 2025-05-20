import Level2 from "./Level2"

export default function Level1({user}) {
    console.log('render level 1');
    return <Level2 user={user} />
}