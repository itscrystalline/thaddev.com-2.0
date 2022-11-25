import {Badge} from "flowbite-react";
import {FaDiscord} from "react-icons/fa";

export const Discord = () => {
  return (
    <Badge color="info" size="sm" icon={FaDiscord} style={{width: "fit-content", marginTop: "10px"}}>
      Discord
    </Badge>
  )
}