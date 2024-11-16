import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="my-16 mx-24">
            <div className="text-center text-4xl font-bold">
                <h3 className="" >Featured Products</h3>
            </div>
            <div className="my-14 flex items-center justify-between gap-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default FeaturedProducts;