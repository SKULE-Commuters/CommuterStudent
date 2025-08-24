import './Aboutus.css';
import Member from './Member';
import Background from '../../Background/Background';
import Card from '../../Card/Card.jsx';
import Cards from '../../Card/Cards.jsx';
import { team as execs } from './execsInfo.jsx';
import { team as reps } from './repsInfo.jsx';

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

        <hr/>

        <div className="section-title">
          <h1>Meet the Execs</h1>
          <h3>(more details soon!)</h3> {/*TODO remove once done*/}
        </div>
        <div className="about-us__team">
          {execs.map((member) => {
            return (
              <Member
                key={member.name}
                name={member.name}
                discipline={member.discipline}
                role={member.role}
                pronouns={member.pronouns}
                specialDisplay={member.specialDisplay}
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

        <hr/>

        <div className="section-title">
          <h1>Meet the Reps</h1>
          <h3>(more details soon!)</h3> {/*TODO remove once done*/}
        </div>
        <div className="about-us__team">
          {reps.map((member) => {
            return (
              <Member
                key={member.name}
                name={member.name}
                discipline={member.discipline}
                role={member.role}
                pronouns={member.pronouns}
                specialDisplay={member.specialDisplay}
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