import './HomeHeader.css';

function HomeHeader() {
    return (
        <div className="banner-container">
            <img src="../../images/ny.jpg" alt="Company Banner" className="banner-image" />
            <h1 className="banner-text">Welcome to Home</h1>
            <p className="sub-description">Explore our services and discover what we have to offer.</p>
        </div>
    )
}
export default HomeHeader;