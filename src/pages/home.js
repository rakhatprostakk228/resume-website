import Hero from "../components/home/hero";
import RecentProducts from "../components/home/recentProducts";
import Information from "../components/home/information";

function AppHome() {
    return (
        <div className="container">
            <Hero />
            <RecentProducts />
            <Information />
        </div>
    )
}

export default AppHome;