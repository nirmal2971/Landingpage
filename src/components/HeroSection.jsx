import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../../src/services/api";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero">
      <h1>
        {data.headlinePrefix} <br />
        <span className="gradient-text">{data.headlineGradient}</span>
      </h1>

      <p className="hero-text">
        {data.subheadline.split("success stories")[0]}
        <span className="highlight">success stories</span>
        {data.subheadline.split("success stories")[1]}
      </p>

      <button className="gradient-btn">{data.cta}</button>
    </section>
  );
};

export default HeroSection;
