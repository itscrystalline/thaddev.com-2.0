import {Badge} from "flowbite-react";
import {FaPython} from "react-icons/fa";

export const Python = () => {
  return (
    <Badge color="info" size="sm" icon={FaPython} style={{width: "fit-content", marginTop: "10px"}}>
      Python
    </Badge>
  )
}