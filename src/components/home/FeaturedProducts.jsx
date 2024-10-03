import "./FeaturedProducts.css";
import ProductCard from "../products/ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "../products/ProductCardSkeleton";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData("/products/featured");
  const skeletons = [1, 2, 3];

  const isComingSoon = true;

  return (
    <section className="featured_products">
      <h2>Featured Products</h2>

      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
      {isComingSoon && (
        <div className="coming_soon_overlay">
          <span>Coming Soon</span>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
