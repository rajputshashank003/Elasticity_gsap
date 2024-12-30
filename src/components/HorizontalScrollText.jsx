import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollText = () => {
    const[sm, setSm] = useState(window.innerWidth < 500);

    useGSAP(() => {
        gsap.to(".horibox_par h1", {
            transform : `translateX(${ sm ? "-750%" : "-220%"})`,
            scrollTrigger: {
                trigger: ".horibox_par",   
                scroller :"body",
                start: "top 0%",
                end : "top -120%",
                scrub: 4,           
                pin : true,
            },
        });
    }, []);
    useEffect(() => {
        setSm(window.innerWidth < 500);
    }, []);
    return (
        <div className="horibox_par h-screen overflow-hidden bg-[#9AC1CB]">
            <h1 className='horibox pb-4 h-screen flex max-sm:text-[160vw] text-[50vw] text-[#151414]'>
                EXPERTISES
            </h1>
        </div>  
    )
}

export default HorizontalScrollText