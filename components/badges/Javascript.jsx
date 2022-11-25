import {Badge} from "flowbite-react";
import {FaJava} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";

export const Javascript = () => {
  return (
    <Badge color="warning" size="sm" icon={SiJavascript} style={{width: "fit-content", marginTop: "10px"}}>
      JavaScript
    </Badge>
  )
}