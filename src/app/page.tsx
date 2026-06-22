'use client'
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu,NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import  {TypingAnimation}  from "@/components/ui/typing-animation";
import { ArrowRight, Check, Copyright, Square } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GetStarted from "@/components/get-started";


export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };
  

  const fullCol = ["Custom designs, just for YOUR business!","As many web pages as you need!",
    "Support for website anytime while the contract is valid!", "Mobile and Desktop accessibility!","Domain and Deployment setup!",
    "SEO for your business."]
  const lowCol = ["Custom designs, just for YOUR business!","Up to 3 web pages as you need!",
    "Support for website anytime while the contract is valid!", "Mobile and Desktop accessibility!","Domain and Deployment setup!"]



  const HowItWorks = [
  {
    value: "item-1",
    trigger: "Buy The Website",
    content:
      `Start with a Consultation with the designers. Detail what you want and wait for a demo. 
      You will be kept in the loop, and can ask for as much changes as you would like. Then,   once you are happy with how the website looks,
       you may purchase the website for the initial fee listed on the package.
        Otherwise, you are able to reject the deal, and walk away without any charges.`,
  },
  {
    value: "item-2",
    trigger: "Service Fees",
    content:
      `The service fee is required to keep the website running. This is the fee for support, and is a monthly fee. Prices are listed in the packages.`,
  },
  {
    value: "item-3",
    trigger: "Seasonal Update Charges",
    content:
      `Seasonal Charges are paid every season. They usually include changing the theme of the website to match the season,
       and/or seasonal price updates like summer deals and the like. These are optional, and can be paid only if a change is to be made. Prices are listed
       in the package.`,
  },
]

  return (
    <div>

      <section id="intro">
        <NavigationMenu className="flex items-center flex-row h-15 fixed w-screen bg-white">
          <NavigationMenuList>
            <NavigationMenuItem className="ml-5 md:ml-40">
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Button onClick={()=>scrollToSection("intro")} className="bg-transparent hover:bg-transparent focus:bg-tranparent">
                  <div className = "text-[15px] flex flex-row">
              
                    <Square className="size-2.75 mt-1.25 mr-2 rounded-full fill-black"/>
                    <p className="font-bold text-black">Cybercreation Studios</p>

                  </div>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block ml-75">
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Button onClick={()=>scrollToSection("packages")} className="bg-transparent hover:bg-transparent focus:bg-tranparent">
                  <div className = "text-[14px] flex flex-row">
                    <p className={"text-black"}>Pricing</p>

                  </div>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block ml-4">
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Button onClick={()=>scrollToSection("how it works")} className="bg-transparent hover:bg-transparent focus:bg-tranparent">
                  <div className = "text-[14px] flex flex-row">
                    <p className="text-black">How It Works</p>

                  </div>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="ml-7 md:ml-80">
                  <GetStarted/>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Separator orientation="horizontal"/>
        <div className="flex flex-col mt-40 ml-10 md:ml-40 ">
          <div className="font-serif gap-5 text-6xl font-extrabold">
            <h1 className="md:block hidden">
              Website Creation,
            </h1>
            <h1 className="mt-2 hidden md:block">
              <TypingAnimation words={["With a Flat Charge For Everyone.", "No Hidden Fees.", "No Consulting Fees."]} 
              loop 
              typeSpeed={70}
              deleteSpeed={40}
              pauseDelay={1500}
              />
              
            </h1>
              <h1
                className="gap-5 md:hidden text-6xl font-extrabold"
                
              >
                Website Creation,
              </h1>
              <h1
                className="gap-5  md:hidden text-6xl font-extrabold"
              >
                Made Easy.
              </h1>

          </div>
          <p className="font-mono text-lg w-90 md:w-160 font-light pt-5">
            One flat initial fee starting at $300, then a service fee starting at $40 per month to keep it running, secure, and updated. No additional charges. No hidden fees. Straight to the point.
          </p>
          <div className="flex flex-row font-mono mt-5">
              <GetStarted/>
            <Button className="bg-transparent ml-10 hover:bg-transparent  w-35 h-10 text-black" onClick={()=>scrollToSection("packages")}>
              See What's Included
              <ArrowRight/>
            </Button>
          </div>
          
        </div>
      </section>
      <section id="packages" className="mt-30">
        <Separator orientation="horizontal"/>
        <div className="flex flex-col mt-20 ml-5 md:ml-40 ">
          <div className="font-serif gap-5 text-5xl font-extrabold">
            <h1 className="mb-5">
              Packages
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <Card className="w-100 md:w-150 h-120 md:mt-5 mb-3 md:mb-10">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Complete Package</CardTitle>
                  <CardDescription>All Setup Covered</CardDescription>
                  <CardAction className=" bg-black text-white p-2 rounded-md">All-Inclusive!</CardAction>
                </CardHeader>
                <CardContent className="font-normal">
                  <div className="flex flex-col ml-10 text-2xl md:text-4xl">
                      <div className="flex flex-row">
                        <p className="md:ml-1">Inital</p>
                        <p className="ml-5 md:ml-15">Service</p>
                        <p className="ml-5 md:ml-15">Seasonal</p>
                      </div>
                      <div className="flex flex-row">
                        <p className="">$500</p>
                        <p className="ml-9 md:ml-20">$75</p>
                        <p className="ml-12 md:ml-30" >$100</p>
                      </div>
                  </div>
                  <Separator orientation="horizontal" className="mt-5"/>
                  {fullCol.map((el)=>(
                    <div key ={el} className="font-normal flex flex-row gap-2 mt-3">
                        <Check size={15} className="mt-0.5" />
                        {el}
                    </div>
                  ))}
                  <div className="mt-7"><GetStarted/></div>
                </CardContent>
              </Card>
              
              <Card className="w-100 md:w-150 md:mt-5 mb-3 md:mb-10">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Basic Package</CardTitle>
                  <CardDescription>Most Needed Setup Covered</CardDescription>
                  <CardAction className=" bg-black text-white p-2 rounded-md">Semi-Inclusive!</CardAction>
                </CardHeader>
                <CardContent className="font-normal">
                  <div className="flex flex-col ml-10 text-2xl md:text-4xl">
                      <div className="flex flex-row">
                        <p className="md:ml-1">Inital</p>
                        <p className="ml-5 md:ml-15">Service</p>
                        <p className="ml-5 md:ml-15">Seasonal</p>
                      </div>
                      <div className="flex flex-row">
                        <p className="">$300</p>
                        <p className="ml-9 md:ml-20">$40</p>
                        <p className="ml-12 md:ml-30" >$75</p>
                      </div>
                  </div>
                  <Separator orientation="horizontal" className="mt-5"/>
                  {lowCol.map((el)=>(
                    <div key ={el} className="font-normal flex flex-row gap-2 mt-3">
                        <Check size={15} className="mt-0.5" />
                        {el}
                    </div>
                  ))}
                  <div className="mt-7"><GetStarted/></div>
                </CardContent>
              </Card>
              
              
            </div>
          </div>
        </div>
      </section>
      <section id="how it works">
        <Separator orientation="horizontal" className="mt-5"/>
        <div className="flex mt-40 ml-5 md:ml-40 ">
          <div className="flex md:items-center flex-col md:flex-row font-serif gap-5 mb-10 text-5xl font-extrabold">
            <h1 className="">
              How It Works
            </h1>
            <Accordion
              type="multiple"
              className="w- 70 md:w-200 md:ml-40 font-mono"
                >
              {HowItWorks.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="font-semibold text-black text-xl">{item.trigger}</AccordionTrigger>
                  <AccordionContent className="font-normal text-sm text-black">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section id="footer">
        <Separator orientation="horizontal" className="mt-5"/>
        <div className = "text-[15px] mt-10 md:ml-30 ml-10 flex flex-row">
            
          <Square className="size-2.75 mt-1.25 mr-2 rounded-md fill-black"/>
          <p className="font-bold text-black">Cybercreation Studios</p>
          <div className="mt-10">
            footer stuff goes here, too lazy to do rn
          </div>
        </div>
        <div className="p-15 ">
          <Separator orientation="horizontal" className="mt-5"/>
          <div className="text-xs flex flex-row gap-2 md:ml-10 mt-10">
            <Copyright size={10} className="mt-0.75"/> 
            2026 Cybercreation Studios. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}


