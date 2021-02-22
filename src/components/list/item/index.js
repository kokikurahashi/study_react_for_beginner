import OnClick from '../../../hooks/onClick'

export default function(props){
  return(
    <div className={`item ${props.className}`}
      onClick={(event) => { OnClick(event, props.className, props.color)() }}
    >
      {props.content}
    </div>
  )
}
