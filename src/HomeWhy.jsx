import './HomeWhy.css';
import { Link } from 'react-router-dom';

function HomeWhy() {
    return (
        <div className="why-section">
            <h2 className="section-header">Why?</h2>
            <div className="content-container">
                <p className="left-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis semper magna eu iaculis.
                    Nulla facilisi. Curabitur iaculis commodo purus, sit amet aliquet quam lobortis nec.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis semper magna eu iaculis.
                    Nulla facilisi. Curabitur iaculis commodo purus, sit amet aliquet quam lobortis nec.
                </p>
                <div className="right-image">
                    <img src="../../images/kitchen.jpg" alt="Why Section Image" />
                </div>
            </div>
        </div>
    )
}
export default HomeWhy;