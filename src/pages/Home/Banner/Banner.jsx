import ban1 from '../../../assets/images/banner/1.jpg'
import ban2 from '../../../assets/images/banner/2.jpg'
import ban3 from '../../../assets/images/banner/3.jpg'
import ban4 from '../../../assets/images/banner/4.jpg'
import ban5 from '../../../assets/images/banner/5.jpg'
import ban6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full rounded-xl" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full rounded-xl">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={ban2} className="w-full" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={ban3} className="w-full" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={ban5} className="w-full" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={ban6} className="w-full" />
                <div className="absolute flex flex-col justify-center gap-5 left-0 right-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">

                    <h2 className="text-5xl font-bold text-[#ffff] w-1/3 ml-12" >Sample text real content coming after few minute.</h2>
                    <p className='text-[#ffff] w-1/3 ml-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque facilis necessitatibus numquam impedit veniam corrupti! Unde amet repudiandae blanditiis animi natus ipsum odit dolore at non, voluptas exercitationem culpa.</p>
                    <div className='ml-12'>
                        <button className="btn btn-active btn-secondary">Secondary</button>
                        <button className="btn btn-outline btn-warning ml-5">Warning</button>
                    </div>

                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;