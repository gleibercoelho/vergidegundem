

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FaDownload, FaPrint } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"




type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[80%] sm:w-[100%]", className)} {...props}>
            <CardHeader>
                <div className="flex flex-row justify-between m-2 text-12">
                <CardTitle className="text-sm">No: 24</CardTitle>
                <CardTitle className="text-sm">Tarih: 20/02/2024</CardTitle>
                </div>
                <CardTitle className="mt-6" >Konu: Enflasyon düzeltmesine ilişkin açıklamaların yer aldığı Sirküler yayımlandı.</CardTitle>

            </CardHeader>
            <CardContent className="grid gap-4 text-justify text-base" >

               
                    Özet: Vergi Usul Kanunu’nun mükerrer 298. maddesinin (A) fıkrası uyarınca enflasyon düzeltmesi kısaca; bilançodaki parasal olmayan kıymetlerin tarihi değerlerinin (düzeltmeye esas alınacak tutarın) düzeltme katsayısıyla çarpılması suretiyle bilançonun ait olduğu tarihteki satın alma gücü cinsinden hesaplanması işlemi olarak tanımlanmaktadır.
                    20 Şubat 2024 tarihinde Gelir İdaresi Başkanlığının (GİB) internet sitesinde yayımlanan 165 numaralı Sirküler’de; 2023 hesap dönemi sonuna ait bilançonun enflasyon düzeltmesi işlemlerinde kullanılacak ortalama ticari kredi faiz oranları belirlenmiş, ayrıca enflasyon düzeltmesi uygulamasına yönelik bazı hususlara ilişkin örnek hesaplamalara da yer verilmek suretiyle açıklamalar yapılmıştır.
                    Vergi Usul Kanunu’nun mükerrer 298. maddesinin (A) fıkrası uyarınca enflasyon düzeltmesi kısaca; bilançodaki parasal olmayan kıymetlerin tarihi değerlerinin (düzeltmeye esas alınacak tutarın) düzeltme katsayısıyla çarpılması suretiyle bilançonun ait olduğu tarihteki satın alma gücü cinsinden hesaplanması işlemi olarak tanımlanmaktadır. Yurt içi üretici fiyat endeksindeki (Yİ-ÜFE) son 36 aylık artış oranının yüzde 100 den ve son 12 aylık artış oranının da yüzde 10 dan fazla olması şartlarının her ikisinin birden gerçekleşmesi durumunda malî tabloların enflasyon düzeltmesine tâbi tutulması gerekmektedir.
                    Ancak 7352 sayılı Kanun’la Vergi Usul Kanunu’na eklenen geçici 33. madde uyarınca 31.12.2023 tarihli mali tabloların yukarıdaki yüzde 10 ve yüzde 100 şartlarının gerçekleşip gerçekleşmediğine bakılmaksızın enflasyon düzeltmesine tabi tutulması gerekmektedir.
                    Vergi Usul Kanunu’nun yukarıda yer verilen maddeleri kapsamında yapılacak düzeltme işlemlerinin usul ve esasları, 30 Aralık 2023 tarihli 2. mükerrer Resmî Gazete’de yayımlanan 555 sıra numaralı Vergi Usul Kanunu Genel Tebliği ile belirlenmişti.
                    20 Şubat 2024 tarihinde Gelir İdaresi Başkanlığının (GİB) internet sitesinde yayımlanan 165 numaralı Sirküler’de; 2023 hesap dönemi sonuna ait bilançonun enflasyon düzeltmesi işlemlerinde kullanılacak ortalama ticari kredi faiz oranları belirlenmiş ayrıca enflasyon düzeltmesi uygulamasına yönelik bazı hususlara ilişkin örnek hesaplamalara da yer verilmek suretiyle açıklamalar yapılmıştır.
                    <br></br>
                    <br></br>
                    <a href="#">165 numaralı Sirkülere ulaşmak için tıklayınız...</a>
                
            </CardContent>
            <CardFooter>
                Saygılarımızla. <br></br>
Kuzey YMM ve Bağımsız Denetim A.Ş. <br></br>
Erkan Baykuş  <br></br>
<br></br>
<br></br>
Yukarıda yer verilen açıklamalarımız, konuya ilişkin genel bilgiler içermektedir. EY ve/veya Kuzey YMM ve Bağımsız Denetim A.Ş.’ye, işbu dokümanın içeriğinden kaynaklanan veya içeriğine ilişkin olarak ortaya çıkan sonuçlardan dolayı herhangi bir sorumluluk iddiasında bulunulamaz.
            </CardFooter>
            <div  className="flex flex-row justify-between m-2">
                <Button> <FaDownload className="m-1"/> Dosyayı İndir</Button>
                <Button> <FaPrint className="m-1"/> Baskıya yolla</Button>
                <Button> <IoMdArrowBack className="m-1"/> Başa Dön</Button>
            </div>
        </Card>
    )
}
