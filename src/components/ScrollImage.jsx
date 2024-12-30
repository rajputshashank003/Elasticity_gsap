import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollImage = () => {
  useGSAP(() => {
    gsap.to(".scrollimage", {
        height: "100%",
        width : "100%",
        scrollTrigger: {
            trigger: ".scrollimage",   
            start: "top 90%",
            end : "top 40%",
            scrub: 2,     
        },
    });
  }, []);

  return (
    <div className="scrollimage_par overflow-hidden w-screen h-screen flex justify-center items-center text-[22vw] text-[#F3C77C]">
      <div className="scrollimage h-[10%] w-[10%] bg-slate-700 ">
        <img src="/img1.jpg" className='h-full object-cover w-full' alt="" />
      </div>
    </div>
  );
}

export default ScrollImage;
