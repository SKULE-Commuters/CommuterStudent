import ChevronDownIcon from "../../../assets/icons/chevron-down-solid.svg";
import SocialMediaButton from "./SocialMediaButton";
import { InstagramLogoOrange as InstagramLogo, DiscordLogo, CommuterBanner, LinktreeLogo } from "../../../assets";
import { setSideBar } from "../../..";
import { useDispatch } from 'react-redux';
import './Home.css';

const DiscordLink = "https://discord.gg/yph2EjkbhW";
const InstagramLink = "https://www.instagram.com/skule.commuters/";
const LinktreeLink = "https://linktr.ee/skule.commuters";

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
					<SocialMediaButton source={DiscordLogo} link={DiscordLink}/>
					<SocialMediaButton source={InstagramLogo} link={InstagramLink}/>
					<SocialMediaButton source={LinktreeLogo} link={LinktreeLink}/>
				</div>
				<div className="home-banner__content__chevron">
					<img src={ChevronDownIcon} alt="down arrow"/>
				</div>
			</div>
		</div>
    );
  }
  
export default Home;