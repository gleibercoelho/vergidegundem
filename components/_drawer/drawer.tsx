"use client"

import * as React from "react"
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export function DrawerDemo() {

    const buttonRef = useRef(null);

    useEffect(() => {
        // Verifica se o botão existe
        if (buttonRef.current) {
          // Simula um clique no botão
          buttonRef.current.click();
        }
      }, []);


    /*   function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
      } */

    return (
        <Drawer >
            <DrawerTrigger asChild className="hidden">
                <Button variant="outline" ref={buttonRef} onClick={() => console.log('Botão clicado')} className="display none" >Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent className="outline-none focus:outline-none">
            <DrawerHeader>
                        <DrawerTitle>
                            Gizlilik Politikası</DrawerTitle>
                        <DrawerDescription>Bu web sitesi, işlevselliği sağlamak ve online deneyiminizi geliştirmek için çerezler kullanır. Bu web sitesini kullanarak <a href="#">EY Çerez Politikası</a>  ve <a href="#">Aydınlatma Metni</a>’nde yer alan şekilde, çerezlerin kullanılmasına rıza gösterirsiniz.</DrawerDescription>
                    </DrawerHeader>
                    
                <div className="mx-auto w-full max-w-sm">
                    
                    <DrawerFooter>

                        <DrawerClose asChild className="w-full ">

                            <Button>KAPAT</Button>

                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
