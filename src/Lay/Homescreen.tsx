import Globalbutton from "../components/GlobalButton/Globalbutton"
import Input from "../components/Reuse/Input"
import { MdSearch } from "react-icons/md"
import Film from "../components/static/Film"
import Alert from "../components/Reuse/Alert"
import Switch from "../components/Reuse/Switch"
import Card from "../components/Reuse/Card"
import pix from "../assets/logo.jpg"
import { MdCheck } from "react-icons/md"
import { FaDeleteLeft } from "react-icons/fa6";
const Homescreen = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-10
      md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3
      ">
        <div className=" bg-red-500 h-[250px]">1</div>
        <div className=" bg-purple-500 h-[250px]">2</div>


        <div className="grid grid-rows-2 gap-5 
        col-span-1 lg:col-span-1
        md:col-span-3">

          <div className="bg-red-500 h-[120px]">1</div>
          <div className="bg-green-500 ">1</div>

        </div>

      </div>
      {/* <Film />
      <Alert title="Warning, best check your self you are not loookinh good" />
      <Switch /> */}
      {/* <Card image={pix} title="zion" des="fhhfyuey" /> */}
      <Alert name="This account has been permanently deleted
The user `IanAtlas` no longer has access to Atlassian services." choices={"big"} size={"big"}
        icon={<FaDeleteLeft />}
      />
    </div>

  )
}

export default Homescreen