import { Button } from "@/components/ui/button"

function WebButton({...props}) {
    let backgroundColor;
    let textColor;
    let border;
    let hovered;

    if (props?.type === "filled") {
        backgroundColor = "bg-blue-800";
        textColor = "text-white";
        border = "border-transparent"
        hovered = "hover:bg-white hover:text-blue-800 hover:border-blue-800"
    } else{
        backgroundColor = "bg-white"
        textColor = "text-blue-800"
        border = "border-blue-800"
        hovered = "hover:bg-blue-800 hover:text-white"
    }
    
  return (
    <Button className={`m-1 ${backgroundColor} ${textColor} border-2 ${border} ${hovered} transition-all duration-300`}>{props?.title}</Button>
  )
}

export default WebButton