import './Resources.css';
import Background from '../../Background/Background';

import NavCard from '../../NavCard/NavCard';
import NavCards from '../../NavCard/NavCards';

const Resources = () => {
  return (
    <Background>
      <div id="resources" className="resources">
        <h1>Resources</h1>
        <p style={{ textWrap: "balance"}}>Below are various resources to enhance your commute and time spent at UofT. Click a button below to "travel" to that page!</p>
        <br/>
        <p></p>

        <NavCards>
          <NavCard label="General Transit Tips" page="/resources-tips" bgImage="images/maps-tips-bg.png" />
          <NavCard label="GTA Transit System Maps" page="/resources-maps" bgImage="images/maps-button-bg.png" />
          <NavCard label="Transit Fares and Expenses Guides" page="/resources-fares" bgImage="images/maps-fares-bg.png" />
          {/* <NavCard label="Rent a Skule Commuter Locker" page="/resources-lockers" /> */}
          <NavCard label="Mental Health and Other Info" page="/resources-misc" bgImage="images/maps-misc-bg.png" />
        </NavCards>
      </div>
    </Background>
  );
};
  
export default Resources;