import './HomeProducts.css';
import { Link } from 'react-router-dom';

function HomeProducts() {
    return (
        <div className="product-section">
          <h2 className="section-header">Products</h2>
          <div className="product-container">
            <Link to="/products" className="product-link">
              <img src="../../images/tv.jpg" alt="Plastic Product" className="product-image" />
              <span className="product-name">Plastic</span>
            </Link>
            <Link to="/products" className="product-link">
              <img src="../../images/tv.jpg" alt="Metal Product" className="product-image" />
              <span className="product-name">Metal</span>
            </Link>
            <Link to="/products" className="product-link">
              <img src="../../images/tv.jpg" alt="Wood Product" className="product-image" />
              <span className="product-name">Wood</span>
            </Link>
          </div>
        </div>
    )
}
export default HomeProducts;