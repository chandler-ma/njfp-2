import { Link } from 'react-router-dom';
import './Home.css';
import HomeHeader from './HomeHeader.jsx';
import HomeWhy from './HomeWhy.jsx';
import HomeProducts from './HomeProducts.jsx';

function Home() {
  return (
    <div>
      
      <div className="header">
        <HomeHeader />
      </div>

      <div className="body">
        <HomeWhy />
        <HomeProducts />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <span className="copyright">
            &copy; {new Date().getFullYear()} Your Company Name
          </span>
        </div>
      </footer>

    </div>
  );
}

export default Home;
