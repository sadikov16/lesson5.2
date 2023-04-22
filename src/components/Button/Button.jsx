import "./button.css"

export function Btn({children, removeUser, index, type}){
    return <button type={type} onClick={() => removeUser ? removeUser(index) : null}>{children}</button>
} 