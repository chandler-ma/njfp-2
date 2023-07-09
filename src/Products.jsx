import logo from './logo.svg';
import './Products.css';
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div><Cards />
    <Link to="/home">Go home</Link>
    </div>
  );
}

export default Products;
