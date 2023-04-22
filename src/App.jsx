import { Form } from "./components/Form"
import { Ul } from "./components/Ul/ul"
import { useState } from "react"

let Data = []

function App() {
  let [userData, setUserData] = useState(Data)

  const removeUser = (index) => {
    let newData = userData.filter((user, i) => i !== index)
    setUserData(newData);
  }

  return (
    <>
      <Form userData={userData} setData={setUserData}/>
      <Ul userData={userData} removeUser={removeUser} />
    </>
  )
}
export default App