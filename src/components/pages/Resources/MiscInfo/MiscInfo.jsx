import '../Resources.css';
import Background from '../../../Background/Background';

const MiscInfo = () => {
    return (
        <Background>
          <div id="resources" className="resources">
            <h1>Mental Health</h1>
            <p style={{ textWrap: "balance"}}>Caring for your mental-well being can be tough, especially with long commutes. <a href="https://mentalhealth.utoronto.ca/">UofT provides resources</a> along with <a href="https://wellness.skule.ca/">Skule Mental Wellness</a>, helping you get back on track!</p>

            <hr/>

            <h1>Other Info</h1>
            <p>Explore more Skule Commuter resources at our <a href="https://linktr.ee/skule.commuters">LinkTree</a>. You can find our social links there along with information on joining the Skule Commuter Directorship team (when applicable).</p>
            <p>
              You'll find up-to-date announcements in our <a href="https://discord.com/invite/yph2EjkbhW">Discord server</a>.<br/>
              If you like updates on Instagram, follow us on <a href="https://www.instagram.com/skule.commuters/">@skule.commuters</a>.
            </p>
          </div>
        </Background>
    );
};

export default MiscInfo;