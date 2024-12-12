import React from 'react'
import data from './data'
import  './style.css'
import MenuList from './MenuList'

const TreeViewCom = ({menus = []}) => {
  console.log(data)
  return (
    <>
      <div className="tree-view-container">
        <MenuList />
      </div>
    </>
  )
}

export default TreeViewCom