"use client"
import Image from "next/image";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button"

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarSub,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarTrigger,
    SidebarMenuItem,
    SidebarMenuButton,

    SidebarMenuSub,
    SidebarMenuSubItem,

} from "@/components/ui/sidebar"


import { useSidebar } from "@/components/ui/sidebar"


import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react"
import { forwardRef } from "react";
import Link from "next/link";
import AnnouncementBanner from "./AnnouncementBanner";




type SubEvent = {
    title: string;
    href: string;
};

type EventContent = {
    title: string;
    href: string;
    subEvents?: SubEvent[]; // Allow subEvents to be undefined
};


const eventsContents: EventContent[] = [

    // {
    //     title: "Coming Soon",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined 
    // }, // use this for no events
    // {
    //     title: "Demo Day",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    // {
    //     title: "Google Solution Challenge 2025 Info Session",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    // {
    //     title: "2025 Solution Challenge Kickoff Event",
    //     href: "",
    //     subEvents: undefined, // Set subEvents to undefined instead of null
    // },
    {
        title: "Workshops",
        href: "",
        subEvents: [
            // {
            //     title: "No Workshops Yet",
            //     href: "",
            // }, // use this for no workshops
            {
                title: "Tensorflow Workshop",
                href: "/TensorflowWorkshop",
            }, // use this for no workshops
            {
                title: "Google Workspace with Appsheet",
                href: "/GoogleWorkspaceWithAppsheet",
            }, // use this for no workshops
            {
                title: "Code For Climate",
                href: "/CodeForClimate",
            }, // use this for no workshops
            {
                title: "GCP",
                href: "/GCPEvent",
            }, // use this for no workshops
            {
                title: "Firebase Workshop",
                href: "/FirebaseWorkshop",
            }, // use this for no workshops
            {
                title: "Vertex Ai And Rag",
                href: "/VertexAiAndRag",
            }, // use this for no workshops
            {
                title: "Google Ai Studio",
                href: "/GoogleAiStudioWorkshop",
            }, // use this for no workshops
            // {
            //     title: "Sunway React & Firebase Workshop Series",
            //     href: "/ReactAndFirebaseWorkshop",
            // },
            // {
            //     title: "KDU Android Workshop",
            //     href: "#sub-event-2",
            // },
        ],
    }
];



const moreContents: { title: string; href: string; description: string; src: string }[] = [
    {
        title: "FAQs",
        href: "/#faqs-section",
        description:
            "Get a better understanding of KitaHack 2025",
        src: "images/question-mark-circle.svg"
    },
    {
        title: "About",
        href: "/#about-section",
        description:
            "Join to preserve the environment!",
        src: "images/earth.svg"
    },
    {
        title: "AI Tools",
        href: "/#sdg-ai",
        description:
            "Discover AI Technologies",
        src: "images/artificial-intelligence-04.svg"
    },
    {
        title: "Team Formation",
        href: "/#team-formation",
        description:
            "Stronger together",
        src: "images/team-fill.svg"
    },
    {
        title: "Judging Criteria",
        href: "/#criteria",
        description:
            "Take note",
        src: "images/tick-circle-outline.svg"
    },
    // {
    //     title: "Submission Criteria",
    //     href: "/#submission-criteria",
    //     description:
    //         "You can only submit your project once",
    //     src: "images/email.svg"
    // },
]


const Header = ({ }) => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const { toggleSidebar, open } = useSidebar(); // Using `open` from context

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && show && !isAnimating) {
                if (open) {
                    setIsAnimating(true);
                    toggleSidebar(); // Close sidebar first
                    setTimeout(() => {
                        setShow(false);
                        setIsAnimating(false);
                    }, 400); // Slightly longer delay for a smoother effect
                } else {
                    setShow(false);
                }
            } else if (currentScrollY < lastScrollY && !show) {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [show, lastScrollY, open, toggleSidebar, isAnimating]);

    const { setTheme } = useTheme()


    const MoreMobileItem = forwardRef<
        React.ElementRef<typeof Link>,
        React.ComponentPropsWithoutRef<typeof Link> & { src?: string }
    >(({ className, title, src, ...props }, ref) => {
        return (
            <SidebarMenuSubItem>
                <Link
                    ref={ref}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {/* Icon */}
                    {src && (
                        <Image
                            src={src}
                            alt={`${title} icon`}
                            width={24}
                            height={24}
                            className="w-6 h-6 flex-shrink-0 dark:invert dark:brightness-0 dark:filter"
                        />
                    )}

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                </Link>
            </SidebarMenuSubItem>
        );
    });
    MoreMobileItem.displayName = "MoreMobileItem";

    const MoreItem = forwardRef<
        React.ElementRef<typeof Link>,
        React.ComponentPropsWithoutRef<typeof Link> & { src?: string }
    >(({ className, title, src, children, ...props }, ref) => {
        return (
            <MenubarItem asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {/* Icon */}
                    {src && (
                        <Image
                            src={src}
                            alt={`${title} icon`}
                            width={24}
                            height={24}
                            className="w-6 h-6 flex-shrink-0 dark:invert dark:brightness-0 dark:filter"
                        />
                    )}

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="text-sm leading-snug text-muted-foreground">{children}</p>
                    </div>
                </Link>
            </MenubarItem>
        );
    });
    MoreItem.displayName = "MoreItem";

    const EventItem = forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a"> & {
            title: string;
            href?: string;
            subEvents?: { title: string; href: string }[];
        }
    >(({ className, title, href, subEvents, ...props }, ref) => {
        return subEvents && subEvents.length > 0 ? (
            <MenubarSub>
                <MenubarSubTrigger className={"justify-center"}>{title}</MenubarSubTrigger>
                <MenubarSubContent>
                    {subEvents.map((subEvent) => (
                        <MenubarItem key={subEvent.title} asChild>
                            <Link href={subEvent.href}>{subEvent.title}</Link>
                        </MenubarItem>
                    ))}
                </MenubarSubContent>
            </MenubarSub>
        ) : (
            <MenubarItem asChild>
                <Link
                    ref={ref}
                    href={href || "#"}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "w-full flex justify-end gap-1 px-3 py-2 rounded-md transition-colors",
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-right">{title}</div>
                </Link>
            </MenubarItem>
        );
    });
    EventItem.displayName = "EventItem";

    const EventMobileItem = forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a"> & {
            title: string;
            href?: string;
            subEvents?: { title: string; href: string }[];
        }
    >(({ className, title, href, subEvents, ...props }, ref) => {
        return subEvents && subEvents.length > 0 ? (
            <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                {title}
                                <ChevronsUpDown className="h-4 w-4" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                {subEvents.map((subEvent) => (
                                    <SidebarMenuSubItem key={subEvent.title}>
                                        <Link href={subEvent.href} onClick={() => toggleSidebar()}>{subEvent.title}</Link>
                                    </SidebarMenuSubItem>
                                ))}
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        ) : (
            <SidebarMenuSubItem>
                <Link
                    ref={ref}
                    href={href || "#"}
                    onClick={() => toggleSidebar()}
                    className={cn(
                        "flex flex-col gap-1 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </Link>
            </SidebarMenuSubItem>
        );
    });
    EventMobileItem.displayName = "EventItem";



    return (

        <>

            {/* <div className="absolute inset-0 w-full h-[24rem] z-[-20]">
                <Image
                    src="/images/gradient-navbar.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 [mask-image:linear-gradient(to_bottom,black_10%,transparent_70%)] md:[mask-image:linear-gradient(to_bottom,black_10%,transparent_90%)] backdrop-blur-lg"
                />
            </div> */}

            <header
                className={`h-16 xl:h-24 text-[15px] fixed top-0 left-0 right-0 bg-gradient-to-r from-[#FE79B9]/30 via-[#AD00FF]/30 to-[#2489FF]/30 backdrop-blur-3xl dark:bg-black/40 z-20 transition-transform duration-300 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"}`}
            >

                {/* <nav className="mx-6 lg:ml-24 lg:mr-12 flex justify-center items-center h-full min-w-screen"> */}
                <nav className="mx-6 lg:ml-24 lg:mr-24 flex xl:grid xl:grid-cols-[1fr_auto_1fr] items-center h-full min-w-screen">

                    <div className={"hidden xl:flex xl:items-center xl:mr-auto xl:ml-10"}>
                        <Menubar className={"bg-transparent border-none shadow-none data-[state=open]:bg-transparent  text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none  data-[state=open]:bg-white/10 text-white  data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                                    <Link href={"/#faqs-section"}>
                                        FAQs
                                    </Link>

                                </MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none  data-[state=open]:bg-white/10 text-white  data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                                    <Link href={"/#about-section"}>
                                        About
                                    </Link>
                                </MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none  data-[state=open]:bg-white/10 text-white  data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                                    <Link href={"/#sdg-ai"}>
                                        AI Tools
                                    </Link>
                                </MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none  data-[state=open]:bg-white/10 text-white  data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                                    <Link href={"/#criteria"}>
                                        Criteria
                                    </Link>
                                </MenubarTrigger>
                            </MenubarMenu>

                            {/* <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10 text-white  data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>Details</MenubarTrigger>
                                <MenubarContent align="start" className={"max-h-64 overflow-y-auto hidden lg:block backdrop-blur-md"}>
                                    {moreContents.map((moreContent) => (
                                        <MoreItem
                                            key={moreContent.title}
                                            title={moreContent.title}
                                            src={moreContent.src}
                                            href={moreContent.href}
                                            className={"px-2 py-4"}
                                        >
                                            {moreContent.description}
                                        </MoreItem>
                                    ))}
                                </MenubarContent>
                            </MenubarMenu> */}

                            {/* <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10 text-white active:text-white focus:text-white focus-visible:text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>About</MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10 text-white active:text-white focus:text-white focus-visible:text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>AI Tools</MenubarTrigger>
                            </MenubarMenu>

                            <MenubarMenu>
                                <MenubarTrigger className={"bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10 text-white active:text-white focus:text-white focus-visible:text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>AI Criteria</MenubarTrigger>
                            </MenubarMenu> */}

                        </Menubar>
                    </div>
                    <div className="">
                        <Link href={"/"} className={"block md:hidden"}>
                            <Image src="/images/kitahack-mobile.svg" alt="" width={200} height={300} className="max-h-[40px] max-w-[40px] md:max-h-[60px] md:max-w-[60px] cursor-pointer xl:mx-5" />
                        </Link>
                        <Link href={"/"} className={"hidden md:block"}>
                            <Image src="/images/KitaHack2025-Logo-new.svg" alt="" width={200} height={300} className="max-h-[180px] max-w-[180px] md:max-h-[200px] md:max-w-[200px] cursor-pointer xl:mx-5" />
                        </Link>
                    </div>



                    <div className={"flex gap-4 items-center ml-auto"}>

                        {/* <div className={"hidden xl:flex xl:items-center xl:gap-4 xl:w-full"}>
                            <ul className={"flex items-center gap-4 text-white"}>
                                <li><Link href="">Sponsors</Link></li>
                                <li><Link href="">Chapters</Link></li>
                                <li><Link href="">Events</Link></li>
                            </ul>
                        </div> */}

                        <Menubar className={"bg-transparent border-none active:bg-transparent focus:bg-transparent focus-visible:bg-transparent data-[state=open]:bg-transparent aria-selected:bg-transparent group-active:bg-transparent shadow-md"}>
                            <MenubarMenu>
                                <MenubarTrigger className="p-1 bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 border-none text-white" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 border-none text-white" />
                                    <span className="sr-only">Toggle theme</span>
                                </MenubarTrigger>
                                <MenubarContent className={""} align="end">
                                    <MenubarItem onClick={() => setTheme("light")}>
                                        Light
                                    </MenubarItem>
                                    <MenubarItem onClick={() => setTheme("dark")}>
                                        Dark
                                    </MenubarItem>
                                    <MenubarItem onClick={() => setTheme("system")}>
                                        System
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                        </Menubar>




                        {/* Shadcn for nav links */}

                        <div className={"hidden xl:block"}>
                            <Menubar className={"bg-transparent border-none shadow-none data-[state=open]:bg-transparent  text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>

                                <MenubarMenu>
                                    <MenubarTrigger className={"bg-transparent border-none active:bg-white/10 focus:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 aria-selected:bg-white/10 group-active:bg-white/10 text-white active:text-white focus:text-white focus-visible:text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white"}>
                                        <Link href={"/#sponsor"}>
                                            Sponsor
                                        </Link>
                                    </MenubarTrigger>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className={`bg-transparent border-none data-[state=open]:bg-white/10  text-white data-[state=open]:text-white `}>Events</MenubarTrigger>
                                    <MenubarContent className={`max-w-24 mt-2 ${show ? "block" : "hidden"}`} align="start">
                                        {eventsContents.map((event) => (
                                            <EventItem key={event.title} title={event.title} href={event.href} subEvents={event.subEvents} />
                                        ))}
                                    </MenubarContent>
                                </MenubarMenu>



                                {/* <MenubarMenu>
                                    <MenubarTrigger>Details</MenubarTrigger>
                                    <MenubarContent align="end" className={"max-h-64 overflow-y-auto hidden lg:block backdrop-blur-md opacity-90"}>
                                        {moreContents.map((moreContent) => (
                                            <MoreItem
                                                key={moreContent.title}
                                                title={moreContent.title}
                                                src={moreContent.src}
                                                href={moreContent.href}
                                                className={"px-2 py-4"}
                                            >
                                                {moreContent.description}
                                            </MoreItem>
                                        ))}
                                    </MenubarContent>
                                </MenubarMenu> */}
                            </Menubar>
                        </div>


                        <Link className={"hidden xl:block"} href="/#demo-day">
                            <button className="bg-white/30 text-gray-200 border-white font-black px-7 py-3 rounded-full backdrop-blur-lg border transition-all duration-300 w-fit hover:bg-white/40">
                                Demo Day
                            </button>
                        </Link>


                    </div>



                    <SidebarTrigger className={"xl:hidden text-white bg-transparent border-none active:bg-transparent focus:bg-transparent focus-visible:bg-transparent data-[state=open]:bg-transparent aria-selected:bg-transparent group-active:bg-transparent active:text-white focus:text-white focus-visible:text-white data-[state=open]:text-white aria-selected:text-white group-active:text-white flex items-center space-x-1 rounded-md border shadow-md ml-3 h-[36px] w-[36px]"} />

                    <div className={"xl:hidden"}>
                        <Sidebar side={"right"} collapsible={"offcanvas"} variant={"sidebar"} onClick={toggleSidebar}>
                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            <Collapsible defaultOpen className="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton>
                                                            KitaHack 2025 Info

                                                            <ChevronsUpDown className="h-4 w-4" />

                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {moreContents.map((moreContent) => (


                                                                <MoreMobileItem
                                                                    key={moreContent.title}
                                                                    title={moreContent.title}
                                                                    src={moreContent.src}
                                                                    href={moreContent.href}
                                                                    className={"px-2 py-3"}
                                                                >
                                                                    {moreContent.description}
                                                                </MoreMobileItem>


                                                            ))}

                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                            <Collapsible defaultOpen className="group/collapsible">
                                                <SidebarMenuItem>
                                                    <CollapsibleTrigger asChild>
                                                        <SidebarMenuButton>
                                                            Events

                                                            <ChevronsUpDown className="h-4 w-4" />

                                                        </SidebarMenuButton>
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <SidebarMenuSub>
                                                            {eventsContents.map((event) => (
                                                                <EventMobileItem key={event.title} title={event.title} href={event.href} subEvents={event.subEvents} />
                                                            ))}

                                                        </SidebarMenuSub>
                                                    </CollapsibleContent>
                                                </SidebarMenuItem>
                                            </Collapsible>
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>

                            </SidebarContent>
                        </Sidebar>

                    </div>
                </nav>


            </header>

            {/* Announcement */}
            <AnnouncementBanner show={show} />
        </>
    )
}
export default Header



