import {Badge} from "flowbite-react";
import {AiFillMessage} from "react-icons/ai";

export const LINEMessenger = () => {
  return (
    <Badge color="success" size="sm" icon={AiFillMessage} style={{width: "fit-content", marginTop: "10px"}}>
      LINE
    </Badge>
  )
}