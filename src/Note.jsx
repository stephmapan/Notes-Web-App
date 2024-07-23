import React from 'react'

function Note({id, text, editHandler, deleteHandler}) {
    return(
        <div className='note'>
            <textarea 
                className='note-body'
                cols={10}
                rows={5}
                placeholder='Type...'
                readOnly
            >
                {text}
            </textarea>
            <div className='note-footer'>
                <i onClick={() => editHandler(id, text)} className='fa-solid fa-pen-to-square'></i>
                <i onClick={() => deleteHandler(id)}className='fa-solid fa-trash-can'></i>
            </div>
        </div>
    )
}

export default Note
