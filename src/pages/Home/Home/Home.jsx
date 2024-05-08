import About from "../About/About";
import Banner from "../Banner/Banner";
// import BergerMenu from "../BergerMenu/BergerMenu";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            {/* <BergerMenu/> */}
            <Banner/>
            <About/>
            <Services/>
            <h2 className="text-center font-bold text-red-200">This is home</h2>
        </div>
    );
};

export default Home;