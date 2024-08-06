import SocialMediaButton from "./SocialMediaButton";
import { InstagramLogoOrange as InstagramLogo, DiscordLogo, CommuterBanner, EmailLogo } from "../../../assets";
import { setSideBar } from "../../..";
import { useDispatch } from 'react-redux';
import './Home.css';

const Home = () => {
	const dispatch = useDispatch();

    return (
		<div id="home" className="home-banner" onClick={() => dispatch(setSideBar(false))}>
			<div className="home-banner__img">
				<img src={CommuterBanner} alt="" />
			</div>
			<div className="home-banner__content">
				<div className="home-banner__content__title">
					<h1>Commuter Student Project Directorship</h1>
				</div>
				<div className="home-banner__content__icons">
					<SocialMediaButton source={DiscordLogo} link="https://discord.gg/yph2EjkbhW"/>
					<SocialMediaButton source={InstagramLogo} link="https://www.instagram.com/skule.commuters/"/>
					<SocialMediaButton source={EmailLogo} link="mailto:webmaster@commuter.skule.ca"/>
				</div>
			</div>
		</div>
    );
  }
  
export default Home;