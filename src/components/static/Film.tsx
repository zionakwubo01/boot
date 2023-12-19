import Globalbutton from "../GlobalButton/Globalbutton"
import { MdSearch } from "react-icons/md"
import pix from "../../assets/react.svg"
import Input from "../Reuse/Input"
import { useEffect, useState } from "react"
const Film = () => {


    const [state, Setstate] = useState<Array<{}>>([])
    const [movie, Setmovie] = useState<string>("")

    const Data = [{ title: "zion" }, { title: "matt" }, { title: "john" }
        , { title: "zion" }, { title: "zion" }, { title: "james" }, { title: "kign" }, { title: "prince" }
        , { title: "numb" }, { title: "daniel" }
    ]

    useEffect(() => {
        Setstate(Data)
    })


    const SearchData = state.filter((el: any) => {
        return el.title.toLowerCase().includes(movie.toLocaleLowerCase())
    })

    console.log(SearchData)
    return (
        //         <div className="
        // grid grid-cols-1 h-[190vh] mt-5 gap-5 md:grid-cols-1 lg:grid-cols-3 ">

        //             <div className="col-span-3 flex flex-col gap-4
        //             ">
        //                 <div className="flex items-center">
        //                     <Globalbutton buttonName="TREND" choice={"pry"} size={"sm"} />
        //                     <Globalbutton buttonName="LATEST" choice={"sec"} size={"sm"} />
        //                     <Globalbutton buttonName="PLAYING NOW" choice={"danger"} size={"sm"} />
        //                 </div>
        //                 <Input
        //                     value={movie}
        //                     onChange={(e) => Setmovie(e.target.value)}
        //                     icon={<MdSearch />} placeholder="search movie" />

        //                 <div className="flex flex-row flex-wrap justify-between
        //                   col-span-1 lg:col-span-2
        //                 ">
        //                     {
        //                         SearchData.map((el) => (
        //                             <div className="w-[300px]">
        //                                 <img src={pix} className="h-[300px] w-[300px] bg-slate-200" />
        //                                 <center>{el.title}</center>
        //                                 <center>description</center>
        //                             </div>
        //                         ))
        //                     }
        //                 </div>


        //             </div>
        //             <div className="col-span-1 sm:col-span-1
        //             h-[400px] rounded-lg sticky top-1 lg:col-span-1
        //             bg-red-500"></div>
        //         </div>

        <div>
            comp
        </div>
    )
}

export default Film