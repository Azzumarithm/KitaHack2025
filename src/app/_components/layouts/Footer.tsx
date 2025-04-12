import Image from "next/image";


const Footer = () => {
    return (
        <footer className="flex flex-col text-gray-600 dark:text-gray-400 w-full relative">
            <img src="/images/gradient-footer.svg" alt="Gradient Navbar" className="absolute top-12 md:top-1 2xl:hidden left-0 w-full opacity-80 [mask-image:linear-gradient(to_bottom,transparent_10%,black_70%)]" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 grid-row-3 md:grid-row-1 gap-8 md:gap-12 lg:gap-8 z-10 bg-white dark:bg-[hsl(0,0%,6.9%)] mt-24 py-8 md:py-14 md:px-24">
                <div className="col-span-1 md:col-span-2 lg:col-span-4 gap-1 flex flex-col text-center md:text-left mx-auto md:mx-0">
                    <Image
                        src="/images/KitaHack2025-logo.svg"
                        width={350}
                        height={100}
                        className="object-cover object-center max-h-[90px]"
                        alt="Kitahack-Logo"
                        priority
                    />
                    <p className="md:ml-6 lg:ml-7">Innovate, Build, and Compete!</p>
                    <a className="md:ml-6 lg:ml-7 mt-2" href=""><button className="py-[7px] px-[17px] rounded-[55px] border border-gray-500 text-gray-500 transition-colors duration">Submit Prototype</button></a>
                </div>
                <div className="col-span-1 flex flex-col gap-4 text-sm text-center md:text-left">
                    <p className="font-bold">Legals</p>
                    <ul className="flex flex-col gap-4">
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="">Terms and Conditions</a></li>
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="">Rules and Regulations</a></li>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col gap-4 text-sm text-center md:text-left">
                    <p className="font-bold">Details</p>
                    <ul className="flex flex-col gap-4">
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="/#hero">What is KitaHack?</a></li>
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="/#about-section">What is SDG?</a></li>
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="/#sdg-ai">What is Google AI?</a></li>
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="/#team-formation">Team Formation</a></li>
                        <li className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"><a href="/#criteria">Judging Criteria </a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full mx-auto relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px] before:bg-[linear-gradient(to_right,_rgba(0,0,0,0)_30%,_#F4F3FA_50%,_rgba(0,0,0,0)_70%)] z-10 bg-white dark:bg-[hsl(0,0%,6.9%)]">
                <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between md:px-32 lg:px-52">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="https://www.instagram.com/kitahack.my" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/kitahack.my" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                            <span className="sr-only">Youtube</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 1024 768"><path fill="currentColor" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/gdgoc.my" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                            <span className="sr-only">LinkedIn</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.13 0-2.06-.92-2.06-2.05s.92-2.05 2.06-2.05 2.06.92 2.06 2.05-.92 2.05-2.06 2.05zm15.11 13.02h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.27 2.38 4.27 5.47v6.28z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/gdgoc.my" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                            <span className="sr-only">X</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://discord.gg/GqVp4Fe8m9" className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                            <span className="sr-only">Discord</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-6 lg:h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z" /></svg>
                        </a>
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-xs leading-5 text-center text-gray-500 dark:text-gray-400">
                            &copy; 2025 GDGoC Malaysia&trade;. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer