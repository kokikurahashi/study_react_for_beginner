import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './index.css';
import React, { useState } from "react"

export default function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(true)

  const handleIsOpenedMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }

  return (
    <div>
      <div className='header'>ヘッダー
        <AddCircleOutlineIcon
          onClick = { () => handleIsOpenedMenu() }
        />
        { isOpenedMenu && <div className="menu"> メニュー </div> }
      </div>
    </div>
  );
}
