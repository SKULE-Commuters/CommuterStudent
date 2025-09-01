import './PathBar.css'

// This is a very jank layout because I couldn't get "/" subpages working with the app (see App.jsx)
// It'd be better if the URL was actually scraped for components or something but whatever
// --gfaus
const paths = {
    "/": [
        { localUrl: "/", display: "Home" }
    ],
    "/about": [
        { localUrl: "/about", display: "About Us" }
    ],
    "/resources": [
        { localUrl: "/resources", display: "Resources" }
    ],
    "/resources-tips": [
        { localUrl: "/resources", display: "Resources" },
        { localUrl: "/resources-tips", display: "General Transit Tips" }
    ],
    "/resources-maps": [
        { localUrl: "/resources", display: "Resources" },
        { localUrl: "/resources-maps", display: "GTA Transit System Maps" }
    ],
    "/resources-fares": [
        { localUrl: "/resources", display: "Resources" },
        { localUrl: "/resources-fares", display: "Transit Fares and Expenses Guides" }
    ],
    // "/resources-lockers": [ // Uncomment when lockers page added! --gfaus
    //     { localUrl: "/resources", display: "Resources" },
    //     { localUrl: "/resources-lockers", display: "Rent a Skule Commuter Locker" }
    // ],
    "/resources-misc": [
        { localUrl: "/resources", display: "Resources" },
        { localUrl: "/resources-misc", display: "Mental Health and Other Info" }
    ],
    "/clubs": [
        { localUrl: "/clubs", display: "Clubs" }
    ]
}

// All paths in the navbar are preceded with "SKULE Commuter Student", which when clicked takes you to the home page ("/")
const rootPath = { localUrl: "/", display: "SKULE Commuter Student" }

const PathBar = () => {
    var displayList = [rootPath];
    const path = paths[window.location.pathname];
    if (path)
        displayList = displayList.concat(path);
    const sz = displayList.length;

    return (
        <div>
            { displayList.map((item, index) => {
                console.log("localUrl=%s, display=%s", item.localUrl, item.display);
                return <>
                    <a href={item.localUrl}>{item.display}</a>
                    { index == sz - 1 ? null : <br/> }
                </>
            })}
        </div>
    );
}

export default PathBar;