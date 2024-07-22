import React from 'react'

export default function Sidebar(props) {
    const {handleToggleModal}=  props
  return (
    <div className='sidebar'>
        <div onClick={handleToggleModal} className='bgOverlay'></div>
        <div className='sidebarContents'>
            <h2>The Brutal Martin Landscape</h2>
            <div>
                <p>Description</p>
                <p>lorem lldlkd  kskskaldkd fkk </p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
        </div>
    </div>
  )
}
