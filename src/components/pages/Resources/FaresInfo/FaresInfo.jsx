import '../Resources.css';
import Background from '../../../Background/Background';
import Dropdown from '../../../Dropdown/Dropdown';
import Dropdowns from '../../../Dropdown/Dropdowns';

const fares = {
  "Paying with PRESTO cards": {
    "video": "https://www.youtube.com/embed/UYEQ1pfeVdg?si=B6Ow_7zt_VmPOmIq",
    "summary": [
              "All transit operators in the GTA* accept your PRESTO card as payment for transit fares.",
              "You can get a PRESTO card for 4 dollars (CA$4.00) at your local Shoppers Drug Mart, a PRESTO vending machine in the TTC subway system, or UP (Union-Pearson) service machines at Pearson Airport.",
              "You must load at least 5 cents (CA$0.05) when buying a PRESTO card.",
              "PRESTO offers Youth (13-19 years old, inclusive, requires proof of age with photo ID with date of birth) and Post-Secondary fare types (requires proof of full-time enrolment using your student card). These fare types offer transit cost savings with some transit agencies.",
              "We recommend getting your PRESTO card at a Shoppers, as you can set your fare type there and easily start saving.",
              "We recommend downloading the official PRESTO app on your phone and adding your card to it for more convenient payment and reloading. You can also manage your card at prestocard.ca.",
              "You can either load funds at self-service machines (available at many transit stations) or by setting up Autoload. Autoload will automatically refill your PRESTO card from your bank account. See the video for information on how to setup Autoload.",
              "To pay your fare, tap on fare gates in subway stations or fare readers at train stations and on busses.",
              "Local transit agencies only require you to tap on when boarding. However, GO Transit additionally requires you to tap off in a similar manner.",
              "Tapping off on GO Transit is required as its fares vary depending on distance.",
              "If you lose your PRESTO card, you can use the PRESTO app or go to prestocard.ca to cancel it and prevent misuse.",
              "After cancelling your PRESTO card, you can transfer its funds to your new PRESTO card. See the video for more details.",
              "The OneFare program in the GTA saves you money when using your PRESTO card to transfer between different transit agencies (local/regional to GO, local to local, etc.). See the video for more details.",
              "Your PRESTO card can also yield discounts at places outside of transit under various PRESTO offers. To take advantage of these discounts, show your PRESTO card at the point of purchase. See the video for more details.",
              "*DISCLAIMER: The one exception is Milton Transit, which does not yet support PRESTO as of writing. This is not stated in the video. However, fare integration (free rides to and from GO stations/stops) with the GO Train and GO Bus exists."
            ],
    "image": require("../../../../assets/images/metrolinx-icon.jpg")
  }
}

const fareKeys = Object.keys(fares);

const FaresInfo = () => {
    return (
        <Background>
          <div id="resources" className="resources">
            <h1>How to Pay Your Transit Fares</h1>

            <p style={{ textWrap: "balance"}}>We have created videos on how to pay for your commute with the various transit agencies in the Greater Toronto Area (the GTA). Check them out!</p>
            <br/>
            <p>(More to come soon!)</p>

            <Dropdowns>
              {fareKeys.map((key) => {
                return <Dropdown key={key} title={key} video={fares[key].video} content={fares[key].summary} image={fares[key].image}/>
              })}
            </Dropdowns>

            <hr/>
          </div>
        </Background>
    );
};

export default FaresInfo;