import { fetchFeaturesContent } from "../services/api";
import { useContent } from "../hooks/useContent";
import ProductCard from "./ui/ProductCard";
import Carousel from "./ui/Carousel";
import Skeleton from "./ui/Skeleton";

const FeaturesSection = () => {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  if (loading || !data) {
    return (
      <section className="features">
        <Skeleton height={30} width="50%" />
        <Skeleton height={20} width="70%" />

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Skeleton height={200} width={250} />
          <Skeleton height={200} width={250} />
          <Skeleton height={200} width={250} />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error loading features</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return (
    <section className="features">
      <div className="shape shape-left"></div>
      <div className="shape shape-right"></div>
      <h2 className="features-title">
        {data.title.split("Grafterr")[0]}
        <span className="light">Grafterr</span>
        {data.title.split("Grafterr")[1]}
        <br />
        {data.titleAccent}
      </h2>

      <p className="subtitle">{data.subtitle}</p>

      <div className="divider">
        <span></span>
      </div>

      <Carousel
        items={data.products.map((p, i) => (
          <ProductCard key={i} title={p.title} image={p.image} />
        ))}
      />
    </section>
  );
};

export default FeaturesSection;
