import "./ul.css"
import { Btn } from "../Button"
export function Ul({userData, removeUser}) {
    return <ul>
        {
            userData.map((user, index) => {
                return (
                    <li key={index}>
                        <input type="checkbox" />
                        <p>{user.work}</p>
                        <Btn index={index} removeUser={removeUser} children={"Delete"}/>
                    </li>
                )
            })
        }
    </ul>
}
