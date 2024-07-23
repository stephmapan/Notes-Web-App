import { React, useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'

function Sidebar() {

    const [folders, setFolders] = useState([{
        id: uuid(),
        text: "Folder #1"
    }])
    const [currentFolderId, setCurrentFolderId] = useState(folders[0].id)

    const folderElements = folders.map(folderObj => 
        folderObj.id === currentFolderId ? 
        (
        <div className='folder-section'>
            <a id={folderObj.id} className='active'>
                {folderObj.text}
                <i className='fa-solid fa-pen-to-square'></i>   
            </a>
        </div>
        ) : (
            <div className='folder-section'>
                <a id={folderObj.id}>
                    {folderObj.text}
                    <i className='fa-solid fa-pen-to-square'></i>
                </a>
            </div>
        )
    )

    function addFolder() {
        setFolders(prevFolders => (
            [...prevFolders, {
                id: uuid(),
                text: `Folder #${prevFolders.length + 1}`
            }]
        ))
    }

    return(
        <div class="sidebar">
            <h1 className='sidebar-title'>MA Notes</h1>
            <input type='text' placeholder='Search' size={28} className='search-bar'></input>
            <br></br>

            <div className='sidebar-button'>
                <button onClick={addFolder} className='new-folder-button'>
                    <i className='fa-regular fa-folder-open'></i>
                    New Folder
                </button>
            </div>
            
            {folderElements}

            {/* <div className='folder-section'>
                <a class="active" href="#home">Folder #1</a>
                <a href="#news">Folder 
                    #2</a>
                <a href="#contact">Folder #3</a>
                <a href="#about">Folder #4</a>
            </div> */}

        </div>
    )
}

export default Sidebar