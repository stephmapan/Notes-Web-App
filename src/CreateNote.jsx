import React from 'react'

function CreateNote({inputText, setInputText, saveHandler}) {

    const char = 150;
    const charLimit = char - inputText.length;

    return(
        <div className='note'>
            <textarea
                cols={10}
                rows={5}
                placeholder='Type...'
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                maxLength={100}
            >
            </textarea>

            <div className='note-footer'>
                <span className='chars-label'>{charLimit} Left</span>
                <i onClick={saveHandler} className='fa-solid fa-square-check'></i>
            </div>
        </div>
    )
}

export default CreateNote