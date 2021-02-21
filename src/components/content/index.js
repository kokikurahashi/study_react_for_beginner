import List from '../list'
import OnClick from '../../hooks/onClick'

export default function(){
  const leftClassName = 'left-item'
  const rightClassName = 'right-item'
  const leftItemList = ['あ', 'い', 'う']
  const rightItemList = ['か', 'き', 'く']

  return (
    <div className='main'>
      <List
        className = {leftClassName}
        itemList  = {leftItemList}
        onClick   = {(event) => { OnClick(event, leftClassName, 'red')() }}
      />
      <List
        className = {rightClassName}
        itemList  = {rightItemList}
        onClick   = {(event) => { OnClick(event, rightClassName, 'blue')() }}
      />
  </div>
  )
}
