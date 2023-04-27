import "./style.module.css"

export function Counter({userData}) {
    let allCount = userData.length
    let doneCount = userData.filter(todo => todo.isDone).length
    let needDoCount = userData.filter(todo => !todo.isDone).length
    return (
        <div>
            <div>
                <p className="all">All: {allCount}</p>
                <p className="done">Done: {doneCount}</p>
                <p className="need-done">Need done: {needDoCount}</p>
            </div>
        </div>
    )
}