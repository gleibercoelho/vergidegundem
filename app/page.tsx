import Image from "next/image";
import { MenubarDemo } from "@/components/_menu/menu";
import { MenubarSecond } from "@/components/_menu/menuSnd";
import { DrawerDemo } from "@/components/_drawer/drawer";
import { SheetDemo } from "@/components/_sheet/sheet";
import { CardDemo } from "@/components/_card/card";
import { InputDemo } from "@/components/_search/search";
import { FaSearch } from "react-icons/fa";
import { ModeToggle } from "@/components/_theme/theme"
import { DropdownMenuDemo } from "@/components/_menu/dropdown";
import { ComboboxDemo } from "@/components/_sheet/footer";
import { ComboboxDemoSnd } from "@/components/_sheet/footerSnd";
import { ComboboxDemoTrd } from "@/components/_sheet/footerTrd";
import { ComboboxDemoFth } from "@/components/_sheet/footerFth";



export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-nowrap" style={{ backgroundColor: "rgb(46,46,56)" }}>
        <div className="flex flex-row justify-between" style={{ backgroundColor: "rgb(255,255,255)" }}>
          <div>
            <Image src="/blacklogo2.png" alt="" width={440} height={50} />
          </div>
          <div className="flex flex-row align-middle" >
            <InputDemo />
            <FaSearch style={{ transform: "scale(1.6)", alignSelf: "center", marginRight: "15px", marginLeft: "10", color: "rgb(46,46,56)" }} />

            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-col flex-grow" style={{ backgroundColor: "rgb(46, 46, 56)" }}>

          <MenubarDemo />
          <DropdownMenuDemo />
          <MenubarSecond />

        </div>




        <div className="flex flex-row justify-around">
          <CardDemo style={{ backgroundColor: "rgb(46,46,56)" }} />
          <SheetDemo />
        </div>
        <div className="flex flex-row flex-wrap justify-around mt-7" style={{ backgroundColor: "rgb(12,10,9)" }}>
        <ComboboxDemo/>
        <ComboboxDemoSnd/>
        <ComboboxDemoTrd/>
        <ComboboxDemoFth/>
        </div>
        <DrawerDemo />
      </div>
    </>
  );
}
