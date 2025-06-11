import Hero from "../components/home/hero";
import RecentProducts from "../components/home/recentProducts";
import Skills from "../components/home/skills";
import Timeline from "../components/home/timeline";
import Information from "../components/home/information";
import Contact from "../components/home/contact";

function AppHome() {
    return (
        <div>
            <Hero />
            <RecentProducts />
            <div className="container">
                <Information />
            </div>
            <Skills />
            <Timeline />
            <Contact />
        </div>
    )
}

export default AppHome;