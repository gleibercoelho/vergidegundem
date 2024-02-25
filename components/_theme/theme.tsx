"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";


import { useTheme } from "next-themes"
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  const buttonRef = useRef(null);

  useEffect(() => {
      // Verifica se o botão existe
      if (buttonRef.current) {
        // Simula um clique no botão
        buttonRef.current.click();
      }
    }, []);

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild className="hidden">
        <Button ref={buttonRef} onClick={() => setTheme("dark")} variant="outline" size="icon">          
          <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />          
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
