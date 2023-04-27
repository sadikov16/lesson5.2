import { Counter } from "./components/Counter"
import { Form } from "./components/Form"
import { useState } from "react"
import { Ul } from "./components/ul/ul"

let Data = JSON.parse(localStorage.getItem("todo"))

function App() {
  let [userData, setUserData] = useState(Data)

  const removeUser = (id) => {
    let newData = userData.filter((user) => user.id !== id)
    setUserData(newData);
    localStorage.setItem("todo", JSON.stringify(newData))
  }

  const handleComplete = (id) => {
    let foundTodo = userData.find(todo => todo.id === Number(id))
    console.log(foundTodo);
  }

  return (
    <>
      <Form userData={userData} setData={setUserData} />
      <Counter userData={userData}/>
      <Ul handleComplete={handleComplete} userData={userData} removeUser={removeUser} />
    </>
  )
}
export default App