import { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(TextPlugin); 

const StartupAniation = () => {
    useGSAP(() => {
        const textArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
        const tl = gsap.timeline();
        textArray.forEach((text) => {
            tl.to(".text-span", {
                text: text,          
                duration: 0.05,         
                stagger: 0.07,
                ease : "power3.inOut",
            });
        });
    }, []);

    return (
        <div className='flex z-[99] justify-center text-black font-extrabold items-center '>
            <span className="text-span"></span>
        </div>
    );
};

export default StartupAniation;
