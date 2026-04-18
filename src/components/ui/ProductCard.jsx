const ProductCard = ({ title, image }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>

      <div className="card-img">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProductCard;