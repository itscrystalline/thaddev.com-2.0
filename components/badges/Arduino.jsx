import {Badge} from "flowbite-react";
import {SiArduino} from "react-icons/si";

export const Arduino = () => {
  return (
    <Badge color="info" size="sm" icon={SiArduino} style={{width: "fit-content", marginTop: "10px"}}>
      Arduino
    </Badge>
  )
}