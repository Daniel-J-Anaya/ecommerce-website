import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-nav">
        <div className="descriptionbox-navbox">
          Description
        </div>
        <div className="descriptionbox-navbox fade">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-desc">
        <p>Description paragraph.</p>
        <p>Description paragraph continued.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
