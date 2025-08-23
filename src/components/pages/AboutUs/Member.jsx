import { LinkedInLogo, InstagramLogoBlue as InstagramLogo, YoutubeLogo, GithubLogo } from "../../../assets";
import placeholder from "../../../assets/images/commuter.png"

const SocialMedia = [
    {name: "LinkedIn", logo: LinkedInLogo},
    {name: "Instagram", logo: InstagramLogo},
    {name: "Youtube", logo: YoutubeLogo},
    {name: "Github", logo: GithubLogo}
];

const Member = (props) => {
    return (
        <div className="member-box">
            {/* TODO make a more selective color thing i think --gfaus */}
            <img className={`member-pic ${props.hasOwnProperty('special_display') ? props.special_display : "" }`} src={props.image || placeholder} alt="Loading.."/>
            <h3>{props.name}</h3>
            <h4>{props.pronouns ? `(${props.pronouns})` : '\u00A0'}</h4>
            <h5>{props.discipline || 'Eng 2T?'}</h5>
            <h4>{props.role || 'Executive'}</h4>
            <p>{props.funfact ? `Fun Fact: ${props.funfact}` : '\u00A0'}</p>
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