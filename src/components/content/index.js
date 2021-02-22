import List from '../list'

export default function(){
  const leftClassName = 'left-item'
  const leftItemList = ['あ', 'い', 'う']

  const rightClassName = 'right-item'
  const rightItemList = ['か', 'き', 'く']
  return (
    <div className='main'>
      <List
        className = {leftClassName}
        itemList  = {leftItemList}
        color     = 'red'
      />
      <List
        className = {rightClassName}
        itemList  = {rightItemList}
        color     = 'blue'
      />
  </div>
  )
}
