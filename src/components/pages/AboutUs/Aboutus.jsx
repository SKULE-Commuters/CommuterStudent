import './Aboutus.css';
import Member from './Member';
import Background from '../../Background/Background';
import Card from '../../Card/Card.jsx';
import Cards from '../../Card/Cards.jsx';
import { Sean, Sunny, Eshaa } from '../../../assets';

const team = [
  {
    name: "Akshat Gandhi",
    pronouns: "",
    discipline: "Mech 2T6",
    role: "Director",
    image: null,
    funfact: "",
  },
  {
    name: "Sean Leung",
    pronouns: "He/Him",
    discipline: "CIV2T6",
    role: "Vice Director",
    image: Sean,
    funfact: "Freight trains use a part of the ION Line tracks in Kitchener during non-revenue hours and gauntlet tracks are used to ensure that the trains don't hit the platforms.",
    linkedin: "https://www.linkedin.com/in/sean-leung-0b8b9017b/",
  },
  {
    name: "Sunny Wu",
    pronouns: "He/Him",
    discipline: "ECE2T7",
    role: "Webmaster",
    image: Sunny,
    funfact: "My favourite colours are pink and green! The cirle around my face is green!",
    linkedin: "https://www.linkedin.com/in/wu-sunny/",
    github: "https://github.com/sunnwydays"
  },
  {
    name: "Eshaa Chenthuran",
    pronouns: "She/Her",
    discipline: "ECE2T6",
    role: "Outreach & 3rd Year Representative",
    image: Eshaa,
    funfact: "I broke my arm playing basketball once and have never played since 💀.",
    linkedin: "https://ca.linkedin.com/in/eshaac",
    github: "https://github.com/eshaachenthuran"
  },
  {
    name: "pls fill out the form",
    pronouns: "",
    discipline: "",
    role: "",
    image: null,
    funfact: "",
  },
]

const AboutUs = () => {
  return (
    <Background>

      <div id="about-us" className="about-us">

        <div className="about-us__header">
            <div className="section-title">
              <h1>About Us</h1>
            </div>
            <Cards>
              <Card 
                title="Our Mission" 
                content='We are creating a "commuterty" between commuters and non-commuters!
                We aim to create a hub for commuters and non-commuters alike.
                We aim to make university easier for commuters and help others who want to take transit.
                In short, our mission is to create a better experience for students taking transit.
                Whether you are a commuter or simply like trains, we are creating a commuterty for you!'
                />
                <Card 
                  title="What We Do" 
                  content="We make transit and commuting enjoyable.
                  We provide resources, guidance, and tips for new commuters to get used to commuting and others taking transit.
                  We host events for the commuterty to have fun and learn more!
                  We advocate for a better commuting experience.
                  And of course, we provide a space for everyone to share their thoughts on transit!"
                />
            </Cards>
        </div>  

        <div className="section-title">
          <h1>Meet Our Team</h1>
        </div>
        <div className="about-us__team">
          {team.map((member) => {
            return (
              <Member
                key={member.name}
                name={member.name}
                discipline={member.discipline}
                role={member.role}
                pronouns={member.pronouns}
                image={member.image}
                funfact={member.funfact}
                linkedin={member.linkedin}
                instagram={member.instagram}
                youtube={member.youtube}
                github={member.github}
              />
            );
          })}
        </div>

      </div>
    </Background>
  );
}

export default AboutUs;