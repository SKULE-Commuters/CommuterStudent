import { useState } from 'react';
import './Clubs.css';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import FilterDropdown from '../../Dropdown/FilterDropdown';
import Background from '../../Background/Background';

const clubInfo = {
  "Toike Oike": {
    "tips": [
      "Club description: The premium satire newspaper at UofT! If you have aspirations of doing something creative while completing your engineering degree, we are the club for you! Check us out at toike.skule.ca",
      "Meeting frequency: Monthly",
      "Meeting length: <1 hour",
      "Meeting method: Hybrid",
      "Weekly commitment: <1 hour",
      "Commuter notes: Meetings are generally in the pit, sometime in the evening; around 6pm."
    ],
    "categories": ["Skule"]
  },
  "St. George Capital": {
    "tips": [
      "Club description: Innovative student led investment design team aimed at leveraging macro/equity research alongside quantitative methods. The team is very project based with a variety of projects available to members that will give them the experience to land roles in Trading and Quantitative Finance. We are also currently building an investment portfolio that students can be a part of.",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 3-5 hours",
      "Commuter notes: Usually our meetings are in the evenings on school nights on campus. We organize them to be flexible for everyone's times. "
    ]
  },
  "Sustainable Engineers Association": {
    "tips": [
      "Club description: The Sustainable Engineers Association (SEA) is fueled by the drive to increase interest and awareness about sustainability. Our events allow us to educate students on the technical aspects of sustainable design, provide support for students to develop their own visions and interest in sustainability, and create a platform for networking with industry professionals. Through seminars, plant tours, career fairs, competitions, conference, workshops, and student projects, SEA offers a wide variety of ways to get involved and participate throughout the year. Email chair@sea.skule.ca for more info or follow us on FB @SEAUofT and IG @seauoft.",
      "Meeting frequency: Monthly",
      "Meeting length: <1 hour",
      "Meeting method: Hybrid",
      "Weekly commitment: <1 hour",
      "Commuter notes: We try to accommodate commuters by offering virtual/hybrid meetings so students do not need to stay late on campus or come on weekends!"
    ],
    "categories": ["Skule"]
  },
  "Skule French-speaking Society": {
    "tips": [
      "Club description: The Skule French-speaking Society is creating a vibrant community for French-speaking engineering students at all levels, starting from scratch. Our goal is to offer a space where students can practise their French and connect with others who share similar interests through enjoyable and relaxing activities. Over the past year, we organised events like a Café gathering and French film outings. This year, we've hosted a range of activities including a Crêpes Café, French Movie Night, Valentine’s Day Origami session, and an Academic Speakers event. We’ve also collaborated with various clubs, such as Hard-Hat Café, the Language Initiative Exchange Club, and the French Course Union Program Club.  SFS is always looking to grow its community, so please fill the form in their instagram bio @uoftsfs to join as an executive or general member to receive emails about our next events! Add us and dm us on instagram @uoftsfs ! You dont have to be an engineering student to join!",
      "Meeting frequency: Every 2 weeks",
      "Meeting length: <1 hour",
      "Meeting method: Remote",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: The meetings are remote, so you should be able to join even when you're at home. The events are in-person and would require you to be on campus, but you can always help with the planning online. "
    ],
    "categories": ["Skule"]
  },
  "EngSci Club": {
    "tips": [
      "Club description: EngSci Club is the official discipline club for all EngSci students. It consists of elected and appointed students who work to represent all EngSci students through Faculty advocacy, help strengthen the connection between EngSci and the rest of the engineering department, and work to bring the EngSci community together through fun events.",
      "Meeting frequency: Every week, every two weeks, or once a month depending on the role and external circumstances (i.e. midterm/final exam season).",
      "Meeting length: <1 hour",
      "Meeting method: Remote",
      "Weekly commitment: <1 hour",
      "Commuter notes: The time commitment varies depending on the role, but we we do recognize and respect that you are a student! You also do not need any previous experience to apply, we welcome and encourage anyone interested!"
    ],
    "categories": ["Discipline Club"]
  },
  "University of Toronto Smash Ultimate Club": {
    "tips": [
      "Club description: UTSmash is the central gathering point for Super Smash Bros. Ultimate (Smash Ultimate) players and enthusiasts at the University of Toronto to play, discuss, compete, and enjoy Smash Ultimate.",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: <1 hour",
      "Commuter notes: There is no commitment to join the club! We hold weekly free tournaments that are open to all and our Discord server is used for discussing Smash in and out of U of T. Any players of any level are welcome to stop by and join the tournament bracket, play a few friendlies, or just talk about the game. Events are usually held on Friday evenings."
    ]
  },
  "UofT Toastmasters": {
    "tips": [
      "Club description: UofT Toastmasters is a club dedicated to helping students improve their public speaking and leadership skills. We have regular meetings that allow students to take on leadership roles, or to speak about topics they are interested in. ",
      "Meeting frequency: 1-2 times/week",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: <1 hour",
      "Commuter notes: Our meetings are usually held on the St. George campus from 6:00-8:00PM."
    ]
  },
  "University of Toronto Robotics Association (UTRA)": {
    "tips": [
      "Club description: UTRA is the premier robotics student group at the University of Toronto. Our mission is to foster creativity and innovation while cultivating technology leaders of the future by providing students with opportunities to design and build advanced robotic technologies.",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: UTRA officially represents the University of Toronto in many prestigious international competitions. We currently have 6 sub-teams that focus on design, education and skill-building. We provide students interested in this broad field of robotics the opportunity to experience different aspects and find their passion. Hands-on participation on-campus at the Myhal Arena is highly encouraged!"
    ],
    "categories": ["Design Team"]
  },
  "University of Toronto Open Source Society": {
    "tips": [
      "Club description: Building the Open Future.\nWe do software, hardware and outreach in an open source way.",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: 3-5 hours",
      "Commuter notes: Our meeting is totally optional. It is in-person working session/office hour."
    ]
  },
  "Concrete Toboggan Design Team": {
    "tips": [
      "Club description: TBog is an award winning design team that builds a large toboggan with concrete skis, competing against teams across Canada in steering, braking, speed, and team spirit (represented by our theme that we chose every year). Get experience pouring and testing concrete, laying up carbon fibre, machining metal, and using power tools!! Anyone and everyone is welcome to join the team, with no commitment required, follow us @uoftbog on Instagram to hear about work sessions!",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: Meetings usually occur on Sundays, however a hybrid option is available"
    ],
    "categories": ["Design Team"]
  },
  "Skule™ Choir": {
    "tips": [
      "Club description: Skule™ Choir is a 30-member SATB mixed chorus that performs a wide range of music. We are open to all members of the community, regardless of field of study or music background!",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: Rehearsals are every Thursday evening from 7pm-9pm in the Myhal Music Room (MY 041). Once a semester we hold a weekend workshop, usually on campus for about 2-3hrs to learn a large amount of music at once. We are also often invited to perform at events both on and off campus, generally in the Downtown Toronto area."
    ],
    "categories": ["Skule"]
  },
  "University of Toronto Supermilage (UTSM)": {
    "tips": [
      "Club description: We're a club that builds cars to focus on energy efficiency. We build 2 cars: a battery electric prototype car to push the limits of energy efficiency, and a hydrogen urban concept car to demonstrate the possibility of real world energy efficiency.",
      "Meeting frequency: 2-3 times/week",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: 3-5 hours",
      "Commuter notes: Meetings occur Wednesday night but the bulk of our meetings happen on weekends because we need longer stints continuously to execute some of our activities. All meetings happen either at Myhal or 256 McCaul St. We'd love to have you attend our kickoff meeting on Sep 11th, 2024"
    ],
    "categories": ["Design Team"]
  },
  "University of Toronto Sports Analytics Student Group (UTSPAN)": {
    "tips": [
      "Club description: Do you have a passion for sports and data? UTSPAN is the perfect club for you. We are a tight-knit community that competes in the world’s largest competitions, conducts research at the highest level, and connects members to industry leaders. Over time, we have built a great reputation in the sports analytics field and are recognized globally as one of the largest and most successful student groups.",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 1-3 hours"
    ]
  },
  "The Cannon Magazine": {
    "tips": [
      "Club description: The Cannon is an arts and culture magazine, published once a semester. It is a space for engineering students who are passionate about writing, art, and journalism. All are welcome to contribute to the Cannon!",
      "Meeting frequency: 3-6 times/year",
      "Meeting length: <1 hour",
      "Meeting method: Hybrid",
      "Weekly commitment: <1 hour",
      "Commuter notes: The Cannon is the perfect low commitment club for a commuter student! We have idea meetings and the occasional editing meeting, but writing for the Cannon can be done from the comfort of your own home (or a GO train). Our contributors are given a lot of flexibility and independence with completing their work. "
    ],
    "categories": ["Skule"]
  },
  "University of Toronto Chemical Vehicle": {
    "tips": [
      "Club description: UTCV is a multidisciplinary design team dedicated to designing, building, and perfecting a chemically-powered, environmentally friendly, autonomous car on a yearly basis and competes at the AIChE Chem-E-Car competitions. Check our work and past projects at our website: utcv.ca! ",
      "Meeting frequency: Weekly",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: Due to the building regulation and lab safety consideration, most of the lab sessions and meetings are during weekdays and on-campus at the Wallberg Building. We do understand this may be difficult for commuters, however, we schedules our sessions according to members' availability and tries to accommodate as much as possible! "
    ],
    "categories": ["Design Team"]
  },
  "Canadian Society for Chemical Engineering (CSChE UofT)": {
    "tips": [
      "Club description: The Canadian Society for Chemical Engineering (CSChE) is a national, non-profit, professional association that unites all established and aspiring chemical engineers from across Canada. The University of Toronto Chapter (our club) has helped hundreds of chemical engineering (and adjacent) students achieve their career goals through connections with professors, alumni, recruiters, and industry leaders and equipping them with the tools they need to excel in a professional environment. Fill out this form if you would like to join our general membership program: https://forms.gle/ZniD6eJnGMwTob3J9",
      "Meeting frequency: Every 2 weeks",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: 1-3 hours",
    ]
  },
  "University of Toronto Outing Club (UTOC)": {
    "tips": [
      "Club description: The University of Toronto Outing Club is a non-profit organization committed to making the outdoors accessible to students of the University of Toronto and GTA. As a club, we facilitate trips around Ontario, provide rental gear to students interested in planning their own outdoor adventures, and aim to create a welcoming environment where members with similar hobbies can connect! Throughout the school year, we regularly run weekend cabin trips that serve as a great way to get out of the city, destress from school, and make great memories with peers.",
      "Meeting frequency: There are no regular meetings. Instead, students meet up at events sent out in our monthly newsletter.",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: <1 hour",
      "Commuter notes: Short meet-up events typically take place on campus or within downtown Toronto. Longer weekend outings, like our cabin trips, take us far out of the city and require students to carpool. The club coordinates these carpools and can usually accommodate members who live farther from campus. (Plus drivers get their gas costs covered!)"
    ]
  },
  "MSE Club": {
    "tips": [
      "Club description: MSE Club is the Student Representative Body for all Materials Science and Engineering undergraduate students. If you are an MSE student and are looking to get involved with the MSE community through community outreach, events, academics, student advocacy, and dope vibes, JOIN US!!!",
      "Meeting frequency: Weekly (usually)",
      "Meeting length: <1 hour",
      "Meeting method: In-person",
      "Weekly commitment: <1 hour",
    ],
    "categories": ["Discipline Club"]
  },
  "Blue Sky Solar Racing": {
    "tips": [
      "Club description: We are a student design team that designs and engineers solar-powered vehicles to race in the World Solar Challenge in Australia, which occurs every 2 years.",
      "Meeting frequency: 1-3 times/week (varies)",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 5+ hours",
      "Commuter notes: Meetings usually occur after classes end around 5-7 PM and sometimes end at 8-9 PM."
    ],
    "categories": ["Design Team"]
  },
  "Engineers Without Borders": {
    "tips": [
      "Club description: Engineers Without Borders is a club of like minded individuals hoping to inspire positive change in the U of T community and beyond!  We focus on issues in our community and connect them to issues around the globe through hands-on projects, learning, and advocacy.  You can get involved at any as a general member, or join a specific project in our Community, Technical, or Programs branches! Engineering is about more than just building cool stuff; it's about building a better future.",
      "Meeting frequency: Flexible (once per week to several times per month)",
      "Meeting length: 1-3 hours",
      "Meeting method: Hybrid",
      "Weekly commitment: 1-3 hours",
      "Commuter notes: There are no strict meeting times. Meetings are flexible and will aim to take everyone's availabilities into account."
    ],
    "categories": ["Skule"]
  },
  "Latin Engineering Students' Association": {
    "tips": [
      "Club description: The Latin Engineering Students' Association (LESA) is a club where Latinx engineering students can connect with each other. The association is open to anyone interested in learning about Latin culture and promoting cultural issues.",
      "Meeting frequency: Executive Members: 2 times/month. General Members: Various fun events each month, attendance not mandatory.",
      "Meeting length: 1-3 hours",
      "Meeting method: In-person",
      "Weekly commitment: <1 hour",
      "Commuter notes: Members interested in being on the executive team are required to attend two, one-hour meetings per month, held after 6PM on campus (time chosen based on all executives' availablity). General members are free to attend or not attend any of the events that we host."
    ],
    "categories": ["Skule"]
  },
  // "": {
  //   "tips": [
  //     "Club description: ",
  //     "Meeting frequency: ",
  //     "Meeting length: ",
  //     "Meeting method: ",
  //     "Weekly commitment: ",
  //     "Commuter notes: "
  //   ]
  // },
}

const MultiSelect = ({ options, selectedOptions, onChange }) => {
  return (
    <div className="multi-select">
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions[option]}
            onChange={() => onChange(option)}
          />
          {option}
        </label>

      ))}
    </div>
    );
};

const clubKeys = Object.keys(clubInfo);

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const lengthOptions = ["<1 hour", "1-3 hours", "3-5 hours", "5+ hours"];
  const methodOptions = ["Hybrid", "In-person", "Remote"];
  const commitmentOptions = ["<1 hour", "1-3 hours", "3-5 hours", "5+ hours"];
  const categoryOptions = ["Skule", "Design Team", "Discipline Club"];

  const createMap = (options) => {
    return options.reduce((acc, option) => {
      acc[option] = false;
      return acc;
    }, {});
  };

  const [selectedLengths, setSelectedLengths] = useState(createMap(lengthOptions));
  const [selectedMethods, setSelectedMethods] = useState(createMap(methodOptions));
  const [selectedCommitments, setSelectedCommitments] = useState(createMap(commitmentOptions));
  const [selectedCategories, setselectedCategories] = useState(createMap(categoryOptions));

  const handleSearchTextChange = (e) => {
    setSearchTerm(e.target.value);
  };  
  const handleLengthChange = (option) => {
    setSelectedLengths({ ...selectedLengths, [option]: !selectedLengths[option] });
  };
  const handleMethodChange = (option) => {
    setSelectedMethods({ ...selectedMethods, [option]: !selectedMethods[option] });
  };
  const handleCommitmentChange = (option) => {
    setSelectedCommitments({ ...selectedCommitments, [option]: !selectedCommitments[option] });
  };
  const handleCategoryChange = (option) => {
    setselectedCategories({ ...selectedCategories, [option]: !selectedCategories[option] });
  };
  
  const filterOptions = (
    <div className="filter-options">
      <input
        type="text"
        placeholder="Search by name or description"
        onChange={handleSearchTextChange}
      />
      <div className="multi-selects">
        <label>Length:</label>
        <MultiSelect
          options={lengthOptions}
          selectedOptions={selectedLengths}
          onChange={handleLengthChange}
        />
        <label>Method:</label>
        <MultiSelect
          options={methodOptions}
          selectedOptions={selectedMethods}
          onChange={handleMethodChange}
        />
        <label>Commitment:</label>
        <MultiSelect
          options={commitmentOptions}
          selectedOptions={selectedCommitments}
          onChange={handleCommitmentChange}
        />
        <label>Category:</label>
        <MultiSelect
          options={categoryOptions}
          selectedOptions={selectedCategories}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );

  const filterClubs = () => {
    const isMatch = (selectedOptions, detail) => {
      return (
        // Checks if any filters are selected - if not, it displays everything, OR if any selected, check if the club meets the criteria
        // Looks complicated because it's dealing with maps and arrays
        Object.keys(selectedOptions).every(key => !selectedOptions[key]) ||
        Object.keys(selectedOptions).some(option => selectedOptions[option] && detail.includes(option))
      )
    };

    return clubKeys.filter((club) => {
      const tips = clubInfo[club].tips;
      const categories = clubInfo[club].categories ?? [];
      const search = searchTerm.toLowerCase().trim();
      const description = clubInfo[club].tips[0].toLowerCase();
  
      return (
        (club.toLowerCase().includes(search) || description.includes(search)) &&
        isMatch(selectedLengths, tips[2]) &&
        isMatch(selectedMethods, tips[3]) &&
        isMatch(selectedCommitments, tips[4]) &&
        isMatch(selectedCategories, categories)
      );
    });
  };

  return (
    <Background>
      <div id="clubs" className="resources">

        <h1>Clubs</h1>
        <h2>What's it like to join a club?</h2>
        <p>We've gathered information from various clubs, so you can get a sense of what it's like to be part of a club whilst having to commmute. <br/><br/></p>

        <FilterDropdown title="Filter Clubs" filterOptions={filterOptions} />

        <Dropdowns>
          {filterClubs().map((club) => {
            return <Dropdown key={club} title={club} content={clubInfo[club].tips}/>
          })}
        </Dropdowns>
        <p>Want commuters to know about your club? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPJoUOOKM1GoTeBuK0Zngc2F5PAjBX7Mj1Qkcc6AXa1n5tWA/viewform">Let us know</a>!</p>
      </div>
    </Background>
  );
}
  
export default Clubs;