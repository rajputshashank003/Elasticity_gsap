import { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin); 

const StartupAniation = () => {
    useEffect(() => {
        const textArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
        const tl = gsap.timeline();
        textArray.forEach((text, index) => {
            tl.to(".text-span", {
                text: text,          
                duration: 0.07,         
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
