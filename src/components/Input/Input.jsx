export function Input({ type = "text", handleComplete ,id , placeholder, isChecked = true, name, value, required = false }) {
    return (<input onChange={() => handleComplete(id)} type= {type} placeholder={placeholder} name={name} value={value} defaultChecked={isChecked} required={required} />)
}