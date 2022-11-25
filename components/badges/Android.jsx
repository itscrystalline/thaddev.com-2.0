import {Badge} from "flowbite-react";
import {FaAndroid, FaCube} from "react-icons/fa";

export const Android = () => {
  return (
    <Badge color="success" size="sm" icon={FaAndroid} style={{width: "fit-content", marginTop: "10px"}}>
      Android
    </Badge>
  )
}