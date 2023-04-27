import "./button.css"

export function Btn({children, removeUser, id, type}){
    return <button type={type} onClick={() => removeUser ? removeUser(id) : null}>{children}</button>
} 