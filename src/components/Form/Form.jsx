import { Input } from "../Input"
import { Btn } from "../Button"
import "./form.css"

export function Form({userData, setData}) {
    const submit = (evt) => {
        evt.preventDefault()
        let { todo } = evt.target.elements

        let newObj = {
            id: userData[0].id + 1,
            work: todo.value,
            isdone: false
        }
        setData([newObj, ...userData])
        localStorage.setItem("todo", JSON.stringify([newObj, ...userData]))
        todo.value = null
    }
    return (
        <form onSubmit={submit}>
            <Input placeholder={"Write here..."} name={"todo"} required={true} />
            <Btn className="submit" type={"submit"}>Submit</Btn>
        </form>
    )
}