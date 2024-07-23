import { React, useState, useEffect } from 'react'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'
import {v4 as uuid} from 'uuid'

function Notes() {

    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)

    function editHandler(id, text) {
        setEditToggle(id)
        setInputText(text)
    }

    function deleteHandler(id) {
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(prevNotes => newNotes)
    }

    function saveHandler() {
        if(editToggle) {
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                {...note, text: inputText}
                : note
            )))
        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        setInputText("")
        setEditToggle(null)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"))
        if(data) {
            setNotes(data)
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes])

    return(
        <div class="content">
            <h1 className='notes-content-title'>
                Folder #1
            </h1>

            {/* <button className='new-note-button'>
                <i className='fa-regular fa-pen-to-square'></i>
                New Note
            </button> */}

            <div className='notes-container'>
                {
                    notes.map((note) => (
                        editToggle === note.id ?
                        <CreateNote 
                            inputText={inputText}
                            setInputText={setInputText}
                            saveHandler={saveHandler}
                        />
                        :
                        <Note 
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            editHandler={editHandler}
                            deleteHandler={deleteHandler}
                        />
                    ))
                }
                {
                    editToggle === null ? 
                    <CreateNote 
                        inputText={inputText}
                        setInputText={setInputText}
                        saveHandler={saveHandler}
                    />
                    : <></>
                }
                
            </div>

        </div>
    )
}

export default Notes