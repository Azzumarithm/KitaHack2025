"use client";
import { useEffect, useState } from "react";

export default function AnnouncementBanner({ show }: { show: boolean }) {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-04-11T23:59:59") - +new Date();
        let timeLeft = {
            difference,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                difference,
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };


    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft> | null>(null);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft === null) {

        return null;
    }

    const isDeadlinePassed = timeLeft.difference <= 0;

    return (
        <div
            className={`py-3 text-[15px] fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#FE79B9]/30 via-[#AD00FF]/30 to-[#2489FF]/30 backdrop-blur-3xl dark:bg-black/40 z-20 transition-transform duration-300 ease-in-out ${show ? "translate-y-0" : "translate-y-96"
                }`}
        >
            <div className="flex justify-center items-center px-4">
                <p className="text-white text-xs md:text-md lg:text-md xl:text-xl text-center">
                    {isDeadlinePassed ? (
                        "✅ Prototype Submission Closed! Thank you! ✅"
                    ) : (
                        <>
                            Only {" "}
                                <span className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </span>{" "}
                            left to shine!{" "}
                            <br className={"md:hidden"}/>
                            <a
                                href="https://www.tinyurl.com/submit-kitahack25"
                                target="_blank"
                                rel="noopener noreferrer"
                                    className="font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:underline"
                            >
                                Submit your prototype
                            </a>{" "}
                            before April 11th.
                        </>
                    )}
                </p>
            </div>
        </div>
    );


}
