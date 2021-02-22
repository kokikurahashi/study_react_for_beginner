import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ErrorIcon from '@material-ui/icons/Error';
import './index.css';
import React, { useState } from 'react'
export default function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(true)
  const [isOpenedError, setIsOpenedError] = useState(true)
  // ここが複数個出るのは許して

  const handleIsOpened = (IsOpenedState, setIsOpenedState) => {
    setIsOpenedState(!IsOpenedState)
  }

  return (
    <div>
      <div className='header'>ヘッダー
        <AddCircleOutlineIcon
          onClick = { () => handleIsOpened(isOpenedMenu, setIsOpenedMenu) }
        />
        { isOpenedMenu && <div className="menu"> メニュー </div> }
        <ErrorIcon
          onClick = { () => handleIsOpened(isOpenedError, setIsOpenedError ) }
        />
        { isOpenedError && <div className="menu"> メニュー </div> }
      </div>
    </div>
  );
}