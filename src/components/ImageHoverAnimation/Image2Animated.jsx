import { useGSAP } from '@gsap/react';
import { IconArrowRight } from '@tabler/icons-react';
import { useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { bg_images_url } from './backgroundImges';

gsap.registerPlugin(ScrollTrigger);

const Image1Animated = ({img2Hovered , setImg2Hovered}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const par2Ref = useRef();

    const handleMouseEnter2 = (e) => {
      setImg2Hovered(true);
      const bound = par2Ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - bound.left);
      mouseY.set(e.clientY - bound.top);

      gsap.to(".div2", {
        scale : 0.95,
        duration : 0.4
      })
      gsap.to(".img2", {
        y : 0,
        scale : 1.15,
        duration : 0.4
      })
      gsap.to(".hover2", {
        opacity : 1,
        x : mouseX.current,
        y : mouseY.current
      })
    }
    const handleMouseLeave2 = () => {
      setImg2Hovered(false);
      gsap.to(".div2", {
        scale : 1,
        duration : 0.4
      })
      gsap.to(".img2", {
        scale : 1,
        duration : 0.4
      })
      gsap.to(".hover2", {
        opacity : 0,
      })
    }
  
    useGSAP(() => {
      gsap.to(".img2", {
        y : -35,
        scale : 1.04,
        scrollTrigger : {
          trigger : ".div2",
          start : "top 80%",
          end : "top -100%",
          scrub : 3,
        }
      })
    })

    return (
        <Link ref={par2Ref} to={"https://foodybro.vercel.app"}>
            <div className={`absolute z-[9] rounded-full h-[3rem] w-[3rem] opacity-0 text-4xl bg-[#151414] p-2 text-white hover2 ${img2Hovered && "pointer-events-none"}`}>
                <IconArrowRight className='h-full w-full'/>
            </div>
            <div 
                onMouseMove={(e) => handleMouseEnter2(e)} 
                onMouseLeave={handleMouseLeave2} 
                style={{ backgroundImage: `url(${bg_images_url[2]})`}}
                className={`div2 h-[25vw] w-[25vw] max-md:h-[60vw] max-md:w-[64vw] flex justify-center bg-cover items-center overflow-hidden rounded-lg`}
                >
                <img 
                className='img2 h-[28vw] w-[28vw] max-md:h-[68vw] max-md:w-[68vw] object-cover'
                // src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
                src='/Foodybro.png'
                />
            </div>
            <div className='text-xl font-brandium'>
                FoodyBro
                <br />
                <span className='text-sm text-neutral-400'>
                Online food ordering web app 
                </span>
            </div>
        </Link>
    )
}

export default Image1Animated