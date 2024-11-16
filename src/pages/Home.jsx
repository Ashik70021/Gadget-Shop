import Accordion from "../components/home_page/Accordion";
import Banner from "../components/home_page/Banner";
import FeaturedProducts from "../components/home_page/FeaturedProducts";
import UserReview from "../components/home_page/UserReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center" >Featured Products</h1>
                    <FeaturedProducts></FeaturedProducts>
                </div>

                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center" >Reviews</h1>
                    <UserReview></UserReview>
                </div>

                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center" >Frequently asked questions</h1>
                    <Accordion></Accordion>
                </div>

            </div>

        </div>
    );
};

export default Home;