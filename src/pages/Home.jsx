import About from "../components/home/About";
import Achievements from "../components/home/Achievements";
import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import MeetTheTeam from "../components/home/MeetTheTeam";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <HowItWorks></HowItWorks>
            <Achievements></Achievements>
            <MeetTheTeam></MeetTheTeam>
        </div>
    );
};

export default Home;