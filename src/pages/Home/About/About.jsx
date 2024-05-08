import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-[50%] relative">
                <img src={person} className="w-3/4 h-96 rounded-lg shadow-2xl" />
                <img src={parts} className="w-72 h-56 rounded-lg shadow-2xl absolute right-5 -bottom-24 border-8 border-white" />
                </div>
                <div className="w-1/2">
                    <h2 className='text-orange-500 text-2xl font-bold'>About</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>

                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;