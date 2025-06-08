import Hero from "../components/home/hero";
import RecentProducts from "../components/home/recentProducts";
import Skills from "../components/home/skills";
import Information from "../components/home/information";

function AppHome() {
    return (
        <div>
            <Hero />
            <div className="container">
                <RecentProducts />
            </div>
            <Skills />
            <div className="container">
                <Information />
            </div>
        </div>
    )
}

export default AppHome;