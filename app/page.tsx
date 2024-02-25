import Image from "next/image";
import { MenubarDemo } from "@/components/_menu/menu";
import { MenubarSecond } from "@/components/_menu/menuSnd";
import { DrawerDemo } from "@/components/_drawer/drawer";
import {SheetDemo} from "@/components/_sheet/sheet";
import {CardDemo} from "@/components/_card/card";
import {InputDemo} from "@/components/_search/search";
import { FaSearch } from "react-icons/fa";
import {ModeToggle} from "@/components/_theme/theme"



export default function Home() {
  return (
    <>
    <div className="flex flex-col flex-nowrap" style={{backgroundColor: "rgb(46,46,56)"}}>
     {/*  <div className="flex flex-row justify-between" style={{backgroundColor: "rgb(255,255,255)"}}>        
          <div>
          <Image src="/blacklogo2.png" alt="" width={440} height={50}  />
          </div>
          <div className="flex flex-row align-middle" >
          <InputDemo  />
          <FaSearch style={{transform: "scale(1.6)", alignSelf: "center", marginRight: "15px", marginLeft: "10", color: "rgb(46,46,56)" }} />

          <ModeToggle/>
          </div>
      </div> */}
      <div className="flex flex-col relative">
      <MenubarDemo/>
      </div>
      <div className="flex flex-col relative">
      <MenubarSecond/>
      </div>
     
     {/*   <div  className="flex flex-row justify-around sm:flex-col-reverse">
       <CardDemo style={{backgroundColor: "rgb(46,46,56)"}}/>
       <SheetDemo />
       </div>
      
      <DrawerDemo/> */}
    </div>
    </>
  );
}
