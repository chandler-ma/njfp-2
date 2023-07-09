import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main page of your website.</p>
      <Link to="/products">Go to products</Link>
    </div>
  );
}

export default Home;
