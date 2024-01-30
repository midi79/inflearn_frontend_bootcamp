export default function BoardComponent(props) {

    return (
        <div>
            <h1>{props.isEdit ? "Edit" : "Add"} page</h1>
            Title : <input type="text" /> <br/>
            Contents : <input type="text" /> <br/>
            <button>{props.isEdit ? "Edit" : "Add"}</button>
        </div>
    )
}

