import './App.css';
import React, {useState} from 'react'

function App() {
  const [filter, setFilter] = useState("All")
  const [notes, setNotes] = useState([])

  const addNote = (event) => {
    event.preventDefault()

    setNotes([
      ...notes,
      {
        id: notes.length + 1,
        title: event.target.noteTitle.value,
        isCompleted: event.target.noteStatus.value === "active" ? false : true
      }
    ])
    event.target.noteTitle.value = ""
    event.target.noteStatus.value = ""
  }

  const handleAction = (event) => {
    setFilter(event.target.name)
  }

  function ToDoComponent(props){

    if (props.filter === "All"){
      return (
        notes.map(note => <tr className="table-row" key={note.id}><td className="table-col">{note.title}</td><td className="table-col">{ note.isCompleted ? "Completed" : "Active"}</td></tr>)
      )
    } else if (props.filter === "Completed"){
      return (
         notes.filter(note => note.isCompleted === true).map(filteredNote => <tr className="table-row" key={filteredNote.id}><td className="table-col">{filteredNote.title}</td><td className="table-col">{ filteredNote.isCompleted ? "Completed" : "Active"}</td></tr>)
      )
    } else if (props.filter === "Active"){
        return (
          notes.filter(note => note.isCompleted === false).map(filteredNote => <tr className="table-row" key={filteredNote.id}><td className="table-col">{filteredNote.title}</td><td className="table-col">{ filteredNote.isCompleted ? "Completed" : "Active"}</td></tr>)
        )
    }
  }

  return (

    <div>
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <section>
        <form onSubmit={addNote}>
          <div className="flex-box">
            <input
            type="text"
            placeholder="Title"
            name="noteTitle"
            value={notes.title}
            className="text-box"
          />
          <input
            type="text"
            placeholder="Status"
            name="noteStatus"
            value={notes.status}
            className="text-box"
          />
          <button className="button">Add Note</button>
          </div>
        </form>
        <hr />
        <div className="flex-box">
          <button className="invi-button" name="All" onClick={handleAction}>All</button>
          <button className="invi-button" name="Completed" onClick={handleAction}>Completed</button>
          <button className="invi-button" name="Active" onClick={handleAction}>Active</button>
        </div>
        
        <hr />
        <div className="table-flexbox">
          <table className="table">
            <thead>
              <tr className="table-row-header">
                <th className="table-col">Title</th>
                <th className="table-col">Status</th>
              </tr>
            </thead>
            <tbody>
                <ToDoComponent filter={filter}/>
            </tbody>
          </table>
        </div>
        
      </section>
    </div>
  );
}

export default App;
