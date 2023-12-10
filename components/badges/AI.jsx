import {Badge} from "flowbite-react";
import {FaAndroid, FaCube} from "react-icons/fa";
import {SiOpenai} from "react-icons/si";

export const AI = () => {
  return (
    <Badge color="success" size="sm" icon={SiOpenai} style={{width: "fit-content", marginTop: "10px"}}>
      AI
    </Badge>
  )
}