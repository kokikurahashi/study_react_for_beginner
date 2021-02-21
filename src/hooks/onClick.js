export default function(event, className, color){
  const initialColor = 'white'
  const initializeAllItem = () =>{
    const items = document.getElementsByClassName(className)
    for (let i = 0; i < items.length; i ++){
      items[i].style.background = initialColor
    }
  }

  const changeColorOfElement = (element) => {
    element.style.background = color
  }

  const onClick = () => {
    initializeAllItem(className)
    changeColorOfElement(event.target)
  }

  return onClick
}