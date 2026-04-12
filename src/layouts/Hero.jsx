import React from 'react'
import heropic from '../assets/HeroPic.png'
import profilepic from '../assets/nan.jpeg'
import { Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className='relative min-h-screen  flex items-center overflow-hidden'>
            {/* BG */}
            <div className='absolute inset-0'>
                <img src={heropic} alt="bg pic" className='w-full h-full  opacity-40 ' />

            </div>

            {/* Content */}
            <div className='py-30'>


                {/* profile + content */}
                <div className='px-7 py-8 flex flex-col items-center gap-8 sm:flex-row  w-screen '>

                    {/* Image Container */}
                    <div className='px-10 relative'>
                        <img
                            src={profilepic}
                            alt="Profile"
                            className='mx-auto rounded-full animate-fade-in  object-cover border-4 border-white/10
                            w-70 h-auto       /* Default (Mobile) */
                            sm:w-80 sm:h-auto /* Small screens */
                            md:w-90 md:h-auto /* Medium */
                            lg:w-100 lg:h-auto /* Large */
                            // transition-all duration-500 ease-in-out transform
                            hover:scale-105
                            shadow-[0_0_20px_rgba(0,194,255,0.6)] relative'
                        />
                        {/* Availability badget */}
                        <div className='absolute bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float animation-delay-400'>
                             <div className="flex items-center gap-3 ">
                                <div className='  w-3 h-3 bg-[var(--color-baseColor)] rounded-full animate-pulse '>
                                
                            </div>
                                <span className="text-sm font-md">Available for work</span>
                            </div>
                        </div>

                    </div>

                    {/* Text Content */}
                    <div className='space-y-3'>
                        {/* title  */}
                        <div className=' px-5 py-10  relative w-full sm:flex'>
                            <span className=' text-[var(--color-color6)] items-center gap-2 rounded-full px-10 py-3 bg-white/5 border border-white/10  '>Software Engineer | Cyber Security</span>
                        </div>
                        <span className='block text-white text-2xl md:text-3xl animate-fade-in animation-delay-200 font-bold'>
                            Lets Create Together...!
                        </span>
                        <p className='text-gray-300 animate-fade-in animation-delay-400 max-w-2xl leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat ducimus minus
                            quam praesentium animi nostrum officiis asperiores impedit sit laborum eius laboriosam
                            reprehenderit necessitatibus voluptates ad, numquam, quod obcaecati.
                        </p>

                        {/* Button - contact me*/}
                        <div className='flex  justify-start items-center gap-6 mt-6 animate-fade-in animation-delay-200 '>
                            <div className='px-5 py-2 '>
                                <button className='animated-border-btn'>
                                    <span className='btn-inner-content text-xs sm:text-sm'> Connect with me</span></button>
                            </div>
                            <div className='px-5 py-2 '>
                                <button className='animated-border-btn'>
                                    <a href="/Nandana_General_Resume.pdf" download className='btn-inner-content flex items-center gap-3 text-xs sm:text-sm '>
                                        <Download size={22} className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Download CV</a></button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='absolute inset-0 flex items-end z-10 px-7 py-6 '>
                <p className='text-white'>Technologies known</p>
            </div> */}

        </section>
    )
}

export default Hero
