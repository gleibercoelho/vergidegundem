import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarSecond() {
    return (
        <Menubar className="rounded-none" style={{backgroundColor: "rgb(255,255,255)"}}>
            <MenubarMenu >
                <MenubarTrigger className="text-slate-900"> Ana Sayfa</MenubarTrigger>
                <MenubarTrigger className="text-slate-900"> Vergi Sirküleri</MenubarTrigger>
                <MenubarTrigger className="text-slate-900"> Sirküler Detay</MenubarTrigger>

            </MenubarMenu>
        </Menubar>

    )
};
