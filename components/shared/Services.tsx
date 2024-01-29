import { services } from '@/constants'
import Image from 'next/image'

const Services = () => {
    return (
        <div className="flex flex-col p-10 px-10 md:px-20 bg-[#6B6B6B] rounded-3xl text-slate-200 hover:bg-black/80 hover:scale-[1.01] transition delay-150 ease-in-out">
            <span className="font-bold text-4xl py-2">What We Serve</span>
            <span className="text-2xl mb-8">
                As a tight-knit team of experts, we create <br />memorable and emotional websites, digital<br /> experiences, and native apps.
            </span>
            <div className='w-full md:p-4 text-white flex flex-col md:flex-row flex-wrap gap-5 md:justify-between'>
                {
                    services.map((service, index) => {
                        return (
                            <div key={index} className='w-full md:w-[28%] flex flex-col gap-2 mb-20  '>
                                <Image src={service.icon} alt={service.title} height={60} width={60} className='rounded-full' />
                                <span className='text-3xl font-bold'>{service.title}</span>                                                              <span className='text-sm'>{service.description}</span>

                            </div>
                        )
                    })
                }
            </div >
        </div>
    )
}

export default Services