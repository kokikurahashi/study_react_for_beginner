export default function(props){
  return(
    <div className={`item ${props.className}`}
      onClick={props.onClick}
    >
      {props.content}
    </div>
  )
}
