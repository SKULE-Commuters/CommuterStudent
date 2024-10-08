import './Resources.css';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Background from '../../Background/Background';

const tips = {
  "TTC Tips": {
    "tips": [
              "If you are travelling from Kipling, Vaughan, or North York, a TTC may be your best method of commute.",
              "There are four subway stations on or very near the University of Toronto: Queen's Park Station, Museum Station, St. George Station and Spadina Station. Queen's Park is the the closest to the Engineering Buildings.",
              "If you commuting from Finch Side (Line 1), you can walk to campus from College station (about a 12-minute walk).",
              "After your initial payment using your PRESTO card you can travel free of cost for the next two hours.",
              "You can load a Monthly Pass onto your PRESTO Card that will allow you as many TTC rides as your heart desires for $128.15 per month, plus the $5.25 student ID card they make you buy."
            ],
    "image": require("../../../assets/images/ttc.png")
  },
  "GO Train Tips": {
    "tips": [
              "If you are travelling from Oakville, Brampton, or Milton, a GO train may be your best method of commute.",
              "Get off at Union Station, and take the TTC up to Queen's Park Station.",
              "Don’t forget to set a default trip. If your PRESTO card has a default trip set for travel between two stations, you only have to tap on it. If you take a trip that begins or ends at a different station, you have to tap on and off.",
              "If you forget to tap off at the end of your trip, you will be charged the fare to the last stop on the line. You can always appeal a refund by filling out the webform on gotransit.com.",
              "For the Barrie Line, sometimes it may be better to get off at Downsview park and take TTC vs getting off at Union Station (Especially during exams to Clara Benson Building)."
            ],
    "image": require("../../../assets/images/go-train.png")
  },
  "Misc Tips": {
    "tips": [
              "Try to make the most out of your commute. If your commute is longer than 40 minutes, you might want to do some light work or catch up on sleep. Use an agenda and calendar to stay organized and on top of your work.",
              "Arrive at your destination at least 5 minutes before class starts.",
              "If you are commuting from Queen’s park, try to walk through Medical Science Building which will save you a solid 2-3 minutes each time.",
              "If you live close to the UofT Mississauga campus, you can take a shuttle bus between there and St.George. Rides are $7 with a $650 semester pass."
            ],
    "image": require("../../../assets/images/misc.png")
  },
}

const transitMaps = {
  "TTC": {
    "image": require("../../../assets/images/ttc.png"),
    "maps": {
      "Subway and Streetcar": require("../../../assets/images/maps/ttc-subway-and-streetcar-map.png"),
      "System Map": require("../../../assets/images/maps/ttc-system-map.png")
      },
    "link": 'https://www.ttc.ca/routes-and-schedules'
  },
  "GO Transit": {
    "image": require("../../../assets/images/go-train.png"),
    "maps": {
      "GO Train": require("../../../assets/images/maps/go-train-map.png"),
      "GO Bus": require("../../../assets/images/maps/go-bus-map.png")
      },
    "link": 'https://www.gotransit.com/en/system-map'
  },
  "MiWay": {
    "image": require("../../../assets/images/miway.png"),
    "maps": {
      "Weekday": require("../../../assets/images/maps/miway-weekday-system-map.png"),
      "Saturday": require("../../../assets/images/maps/miway-saturday-system-map.png"),
      "Sunday": require("../../../assets/images/maps/miway-sunday-system-map.png")
      },
    "link": 'https://www.mississauga.ca/miway-transit/maps'
  },
  "YRT": {
    "image": require("../../../assets/images/yrt.png"),
    "maps": {
      "System Map": require("../../../assets/images/maps/yrt-system-map.png"),
      "Viva Map": require("../../../assets/images/maps/yrt-viva-map.png")
      },
    "link": 'https://www.yrt.ca/en/schedules-and-maps/maps.aspx'
  },
  "Oakville Transit": {
    "image": require("../../../assets/images/oakville-transit.png"),
    "maps": {
      "System Map": require("../../../assets/images/maps/oakville-transit-system-map.png")
      },
    "link": 'https://www.oakvilletransit.ca/schedules-maps/'
  },
  "Durham Transit": {
    "image": require("../../../assets/images/durham-transit.png"),
    "maps": {
      "System Map": require("../../../assets/images/maps/durham-transit-system-map.png")
      },
    "link": 'https://www.durhamregiontransit.com/en/routes-and-schedules/system-maps.aspx'
  },
};

const tipKeys = Object.keys(tips);
const transitMapAgencies = Object.keys(transitMaps);

const Resources = () => {
  return (
    <Background>
      <div id="resources" className="resources">

        <h1>Commuter Tips</h1><br/>
        <Dropdowns>
          {tipKeys.map((key) => {
            return <Dropdown key={key} title={key} content={tips[key].tips} image={tips[key].image}/>
          })}
        </Dropdowns>
        <p>
          Some tips are sourced from the 2T5 Frosh Handbook. <br/> 
          <a href="https://discord.com/invite/yph2EjkbhW">Contact us</a> if you have any other suggestions!
        </p>
        <p>Check out the <a href="https://www.youtube.com/playlist?list=PL_hXA0UTYo0D5VP5XOUm7zg0fuQAwEOO1">Toronto Commuter Guide video series on YouTube</a>.<br/>It provides detailed advice on using Presto, TTC subway, and GO Transit!</p>

        <hr/>

        <h1>Transit Maps</h1>
        <p>View various maps from regional transit agencies to help you navigate your commute!</p>
        <p>Zoom in and pan the maps to get a better view. Double click to zoom in/out. Click the agency name to view maps on their website.</p>
        
        {/* Render each transit agency with their respective maps */}
        {transitMapAgencies.map((agency) => {
          return (
            <div key={agency} style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}>
              <h2><a href={transitMaps[agency].link}>{agency}</a></h2>
              <Dropdowns>
                {Object.keys(transitMaps[agency].maps).map((mapName) => {
                  return <Dropdown key={mapName} title={mapName} image={transitMaps[agency].image} map={transitMaps[agency].maps[mapName]} />
                })}
              </Dropdowns>
            </div>
          );
        })}

        <hr/>

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
  
export default Resources;