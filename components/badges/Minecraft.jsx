import {Badge} from "flowbite-react";
import {FaCube} from "react-icons/fa";

export const Minecraft = () => {
  return (
    <Badge color="success" size="sm" icon={FaCube} style={{width: "fit-content", marginTop: "10px"}}>
      Minecraft
    </Badge>
  )
}