import "./ul.css"
import { Btn } from "../Button"
import { Input } from "../Input"


export function Ul({userData, removeUser, handleComplete}) {
    return <ul>
        {
            userData.map((user, index) => {
                return (
                    <li key={index}>
                        <Input id={user.id} handleComplete={handleComplete} isChecked={user.isDone} type="checkbox" />
                        <p>{user.work}</p>
                        <Btn id={user.id} removeUser={removeUser} children={"Delete"}/>
                    </li>
                )
            })
        }
    </ul>
}
