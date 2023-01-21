import { Link } from "react-router-dom";

function NavigationBar() {
  return (
	  <div className="overlay-nav">
			<nav>
				<ul className="navigation-bar">
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about">
							About me
						</Link>
					</li>
					<li>
						<Link to="/real-esrgan">
							Real-ESRGAN
						</Link>
					</li>
				</ul>
			</nav>
	  </div>
	);
  }

  export default NavigationBar;