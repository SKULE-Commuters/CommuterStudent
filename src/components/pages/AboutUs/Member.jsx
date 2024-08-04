import { LinkedInLogo, InstagramLogoBlue as InstagramLogo, YoutubeLogo, GithubLogo } from "../../../assets";

const SocialMedia = [
    {name: "LinkedIn", logo: LinkedInLogo},
    {name: "Instagram", logo: InstagramLogo},
    {name: "Youtube", logo: YoutubeLogo},
    {name: "Github", logo: GithubLogo}
];

const Member = (props) => {
    return (
        <div className="member-box">
            <img className="member-pic" src={props.image} alt="Loading.."/>
            <h3>{props.name}</h3>
            <h4>{props.pronouns}</h4>
            <h5>{props.discipline}</h5>
            <h4>{props.role}</h4>
            <p>Fun Fact: {props.funfact}</p>
            {SocialMedia.map((media) => {
                const url = props[media.name.toLowerCase()];
                return url ? (
                    <a href={url} className="button" key={media.name}>
                        <img className="social-media-logo" src={media.logo} alt={`${media.name} logo`} />
                    </a>
                ) : null;
            })}
        </div>
    );
}

export default Member