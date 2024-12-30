import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollText = () => {
    const[sm, setSm] = useState(window.innerWidth < 500);
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState(true);
    const lastScrollY = useRef(0);

    useGSAP(() => {
        gsap.to(".horibox_par .horibox", {
            transform : `translateX(${ sm ? "-720%" : "-150%"})`,
            scrollTrigger: {
                trigger: ".horibox_par",   
                scroller :"body",
                start: "top 0%",
                end : "top -120%",
                scrub: 4,           
                pin : true,
            },
        });
        gsap.to(".text_div3 .engine1, .text_div7 .engine1", {
            x : scrollDirection ? sm ? 300 : 250 : sm ? -300 : -250,
            scrollTrigger: {
                trigger: ".text_div3",   
                scroller :"body",
                start: "top 10%",
                end : "top -90%",
                scrub: 3,    
            },
        });
    }, []);
    useEffect(() => {
        setSm(window.innerWidth < 500);
    }, []);

    // useGSAP(() => {
    //     gsap.to(".engine1",{
    //         transform : scrollDirection ? "translateX(20%)" : "translateX(-20%)",
    //         duration : 3,
    //         repeat : 0,
    //         ease : "none" ,
    //     });
    // }, [scrollDirection])
    // in case of scrollTrigger not working to animate engines 

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            if (latest > lastScrollY.current) {
                setScrollDirection(true);
            } else if (latest < lastScrollY.current) {
                setScrollDirection(false);
            }
            lastScrollY.current = latest;
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <div className="horibox_par h-screen overflow-hidden bg-[#9AC1CB]">
            <div className='horibox pb-4 h-screen flex max-sm:text-[160vw] text-[52vw] tracking-[-2rem] text-[#151414]'>
                {
                    "EXPERTISES".split("").map((el, ind) => (
                        <div className={`text_div${ind} relative`} key={ind} >
                            <span className='m-0'>{el}</span>
                            {
                                ind == 3 && 
                                <img className='engine1 absolute top-[60%] max-sm:top-[50%] right-[20%]' src="/img3.png" alt="" />
                            }
                            {
                                ind == 7 && 
                                <img className='engine1 absolute max-sm:top-[10%] top-[20%] max-sm:right-[90%] right-[40%]' src="/img2.png" alt="" />
                            }
                        </div>
                    ))
                }
            </div>
        </div>  
    )
}

export default HorizontalScrollText