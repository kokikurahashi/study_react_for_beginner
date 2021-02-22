import Item from './item'

export default function(props){
  return(
    <div className='list'>
      { props.itemList.map( (content) => {
        return (
          <Item
            className={props.className}
            content={content}
            color={props.color}
          />
        )
      })}
    </div>
  )
}