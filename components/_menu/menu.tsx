import {
    Menubar,    
    MenubarContent,
    MenubarItem,
    MenubarMenu,    
    MenubarSeparator,    
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image"
import { FaUserFriends, FaStar, FaCalendar, FaArrowCircleRight } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa6";
import { BsCalculatorFill } from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";








export function MenubarDemo() {
    return (
        <Menubar className="mt-3 rounded-none flex flex-wrap">
            <MenubarMenu>
                <MenubarTrigger><FaUserFriends style={{color: "rgb(36, 34, 20)" }} /> Hakkımızda</MenubarTrigger>
                <MenubarContent className="flex p-4 gap-4">
                    <MenubarItem>
                        <Image src="/hizmet.png" width={200} height={100} alt="" />
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Image src="/lider.png" width={200} height={100} alt="" />
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <Image src="/ofis.png" width={200} height={100} alt="" />
                    </MenubarItem>
                </MenubarContent>



            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><IoDocumentText style={{color: "rgb(255,230,0)" }}/>Sirküler</MenubarTrigger>
                <MenubarContent className="grid grid-cols-3 grid-rows-2 gap-2 p-4" >
                    <MenubarItem>
                        <Image src="/vergi.png" width={200} height={100} alt="" />
                    </MenubarItem>

                    <MenubarItem>
                        <Image src="/gumruk.png" width={200} height={100} alt="" />
                    </MenubarItem>

                    <MenubarItem>
                        <Image src="/tesvik.png" width={200} height={100} alt="" />
                    </MenubarItem>

                    <MenubarItem>
                        <Image src="/new_sgk.png" width={200} height={100} alt="" />
                    </MenubarItem>

                    <MenubarItem>
                        <Image src="/sirket.png" width={200} height={100} alt="" />
                    </MenubarItem>

                    <MenubarItem>
                        <Image src="/rekabet.png" width={200} height={100} alt="" />
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger> <FaStar style={{color: "rgb(255,230,0)" }}/> E-Dergi</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem inset>Vergide Gündem</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Otomotivde Gündem</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger> <MdWindow style={{color: "rgb(255,230,0)" }}/> Yayınlar</MenubarTrigger>
                <MenubarContent>
                    <MenubarSub>
                        <MenubarSubTrigger>Rehber</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Menkul Kıymet Gelirlerinin Vergilendirilmesi</MenubarItem>
                            <MenubarItem>Kira Gelirlerinin Vergilendirilmesi</MenubarItem>
                            <MenubarItem>İndirimli Kurumlar Vergisi</MenubarItem>
                            <MenubarItem>EY Vergi Rehberi</MenubarItem>
                            <MenubarItem>Ar-Ge ve Tasarım Faaliyetlerine Sağlanan Destek ve Teşvikler</MenubarItem>
                            <MenubarItem>20 Soruda Türkiye de Yeni Transfer Fiyatlandırması Dokümantasyon Yükümlülüğü</MenubarItem>
                            <MenubarItem>Varlık Barışı</MenubarItem>
                            <MenubarItem>Katma Değer Vergisi Tevkifatı</MenubarItem>
                            <MenubarItem>Yeni Türk Ticaret Kanunu</MenubarItem>
                            <MenubarItem>Esas Sözleşme Kontrol Listesi</MenubarItem>
                            <MenubarItem>Serbest Bölgeler</MenubarItem>
                            <MenubarItem>Vergi, Resim ve Harç İstisnası</MenubarItem>
                            <MenubarItem>Kurumlar Vergisinin Beya</MenubarItem>
                            <MenubarItem>Kurumlar Vergisinden İstisna Kazançlar Rehberi</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Makaleler</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Ekonomist Makaleleri</MenubarItem>
                            <MenubarItem>Ekonomim Gazetesi Makaleleri</MenubarItem>
                            <MenubarItem>Vergide Gündem Makaleleri</MenubarItem>
                            <MenubarItem>Tüm Makaleler</MenubarItem>
                            <MenubarItem>Dünya Gazetesi Makaleleri</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarSub>
                        <MenubarSubTrigger>Broşürler</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem>Menkul Kıymet Gelirlerinin Vergilendirilmesi</MenubarItem>
                            <MenubarItem>Sosyal Güvenlik ve İş Hukuku Hizmetleri</MenubarItem>
                            <MenubarItem>Kambiyo İşlemleri Danışmanlık Hizmetleri</MenubarItem>
                            <MenubarItem>Gümrük Vergi Alacaklarının Yeniden Yapılandırılması</MenubarItem>
                            <MenubarItem>Yetkilendirilmiş Yükümlü Sertifikası</MenubarItem>
                            <MenubarItem>6736 Sayılı Kanun Kapsamında Vergi Alacaklarının Yapılandırılması ve Matrah Artırım</MenubarItem>
                            <MenubarItem>Teşvik Belgeli Yatırımlara Sağlanan Destekler</MenubarItem>
                            <MenubarItem>Elektronik Vergi Uygulamaları</MenubarItem>
                            <MenubarItem>Trade Watch</MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger> <BsFileBarGraphFill style={{color: "rgb(255,230,0)" }} />Sektörel</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><FaPaperclip style={{color: "rgb(255,230,0)" }} />Pratik Bilgiler</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><FaCalendar style={{color: "rgb(255,230,0)" }} />Vergi Takvimi</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><BsCalculatorFill  style={{color: "rgb(255,230,0)" }}/>Maaş Hesaplama</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger> <IoChatboxEllipses style={{color: "rgb(255,230,0)" }} />EY Webcast</MenubarTrigger>               
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><FaArrowCircleRight  style={{color: "rgb(255,230,0)" }}/>EY Türkiye</MenubarTrigger>                
            </MenubarMenu>

        </Menubar>
    )
}
