import { useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import React, { useRef } from 'react'

const SpringWire = () => {
    const xPoint = useMotionValue(100);
    const yPoint = useMotionValue(100);
    const divRef = useRef();

    const handleMouseMove = (e) => {
        const bound = divRef.current.getBoundingClientRect();
        xPoint.set(e.clientX - bound.left);
        yPoint.set(e.clientY - bound.top);

        gsap.to(".string_gsap svg path" ,{
            attr : {
                d :`M 40 100 Q ${xPoint.current} ${yPoint.current} ${window.innerWidth - 40} 100`
            },
            duration : 0.3,
            ease : "power3.out"
        });
    }

    const handleMouseLeave = () => {
        xPoint.set(100);
        yPoint.set(100);
        
        gsap.to(".string_gsap svg path" ,{
            attr : {
                d :`M 40 100 Q ${xPoint.current} ${yPoint.current} ${window.innerWidth - 40} 100`
            },
            duration : 1.2,
            ease : "elastic.out(1,0.1)"
        });
    }

    return (
        <div
            ref={divRef} 
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}  
            className='string_gsap bg-[#151414] cursor-grabbing h-fit w-full flex justify-center items-center'
        >
            <svg className='' width="100vw" height="260" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d={`M 40 100 Q ${yPoint.current} ${xPoint.current} ${window.innerWidth - 40} 100`} 
                    stroke="white" 
                    fill="transparent"
                    strokeWidth={2}
                />
            </svg>
        </div>
    )
}

export default SpringWire