import { Button } from "@/components/ui/button"


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild className="mt-7">
                <Button>İletişim</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>İletişim:</SheetTitle>
                    <SheetDescription>
                        <p>  M. Fatih Köprü</p>
                        <p>fatih.kopru@tr.ey.com</p>
                        <p>(212) 408 51 79</p>
                    </SheetDescription>
                </SheetHeader>


                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">KAPAT</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
