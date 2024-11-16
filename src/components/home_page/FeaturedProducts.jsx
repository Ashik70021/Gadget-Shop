import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div>
            <div className="lg:flex items-center justify-between gap-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default FeaturedProducts;