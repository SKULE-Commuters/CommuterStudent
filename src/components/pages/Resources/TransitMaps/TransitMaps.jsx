import '../Resources.css';
import Dropdown from '../../../Dropdown/Dropdown';
import Dropdowns from '../../../Dropdown/Dropdowns';
import Background from '../../../Background/Background';

const getAsset = (path) => {
  return require("../../../../assets/" + path)
}

const transitMaps = {
  "TTC": {
    "image": getAsset("images/ttc.png"),
    "maps": {
      "Subway and Streetcar": getAsset("images/maps/ttc-subway-and-streetcar-map.png"),
      "System Map": getAsset("images/maps/ttc-system-map.png")
      },
    "link": 'https://www.ttc.ca/routes-and-schedules'
  },
  "GO Transit": {
    "image": getAsset("images/go-train.png"),
    "maps": {
      "GO Train": getAsset("images/maps/go-train-map.png"),
      "GO Bus": getAsset("images/maps/go-bus-map.png")
      },
    "link": 'https://www.gotransit.com/en/system-map'
  },
  "MiWay": {
    "image": getAsset("images/miway.png"),
    "maps": {
      "Weekday": getAsset("images/maps/miway-weekday-system-map.png"),
      "Saturday": getAsset("images/maps/miway-saturday-system-map.png"),
      "Sunday": getAsset("images/maps/miway-sunday-system-map.png")
      },
    "link": 'https://www.mississauga.ca/miway-transit/maps'
  },
  "YRT": {
    "image": getAsset("images/yrt.png"),
    "maps": {
      "System Map": getAsset("images/maps/yrt-system-map.png"),
      "Viva Map": getAsset("images/maps/yrt-viva-map.png")
      },
    "link": 'https://www.yrt.ca/en/schedules-and-maps/maps.aspx'
  },
  "Oakville Transit": {
    "image": getAsset("images/oakville-transit.png"),
    "maps": {
      "System Map": getAsset("images/maps/oakville-transit-system-map.png")
      },
    "link": 'https://www.oakvilletransit.ca/schedules-maps/'
  },
  "Durham Transit": {
    "image": getAsset("images/durham-transit.png"),
    "maps": {
      "System Map": getAsset("images/maps/durham-transit-system-map.png")
      },
    "link": 'https://www.durhamregiontransit.com/en/routes-and-schedules/system-maps.aspx'
  },
};

const transitMapAgencies = Object.keys(transitMaps);

const TransitMaps = () => {
    return (
        <Background>
          <div id="resources" className="resources">
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
          </div>
        </Background>
    );
};

export default TransitMaps;