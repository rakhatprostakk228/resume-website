import Hero from "../components/home/hero";
import RecentProducts from "../components/home/recentProducts";
import Information from "../components/home/information";

function AppHome() {
    return (
        <div>
            <Hero />
            <div className="container">
                <RecentProducts />
                <Information />
            </div>
        </div>
    )
}

export default AppHome;