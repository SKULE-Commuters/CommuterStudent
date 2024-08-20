import { useState } from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import FilterDropdown from '../../Dropdown/FilterDropdown';
import Background from '../../Background/Background';
import Multiselect from '../../Multiselect/Multiselect';
import { clubInfo } from './clubInfo.jsx';

const clubKeys = Object.keys(clubInfo);

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const lengthOptions = ["<1 hour", "1-3 hours", "3-5 hours"];
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

  const handleSearchTextChange = e => setSearchTerm(e.target.value);

  const handleOptionChange = (option, selectedOptions, setSelectedOptions) => {
    setSelectedOptions({ ...selectedOptions, [option]: !selectedOptions[option] });
  };
  const handleLengthChange = option => handleOptionChange(option, selectedLengths, setSelectedLengths);
  const handleMethodChange = option => handleOptionChange(option, selectedMethods, setSelectedMethods);
  const handleCommitmentChange = option => handleOptionChange(option, selectedCommitments, setSelectedCommitments);
  const handleCategoryChange = option => handleOptionChange(option, selectedCategories, setselectedCategories);
  
  const filterOptions = (
    <div className="filter__options">
      <div className="filter__dropdown__content__item">
        <input
          type="text"
          placeholder="Search by name or description"
          onChange={handleSearchTextChange}
        />
      </div>
      <div className="multiselect__container">
        <div className="filter__dropdown__content__item">
          <label>Meeting Length:</label>
          <Multiselect
            options={lengthOptions}
            selectedOptions={selectedLengths}
            onChange={handleLengthChange}
          />
        </div>
        <div className="filter__dropdown__content__item">
          <label>Meeting Method:</label>
          <Multiselect
            options={methodOptions}
            selectedOptions={selectedMethods}
            onChange={handleMethodChange}
          />
        </div>
        <div className="filter__dropdown__content__item">
          <label>Weekly Commitment:</label>
          <Multiselect
            options={commitmentOptions}
            selectedOptions={selectedCommitments}
            onChange={handleCommitmentChange}
          />
        </div>
        <div className="filter__dropdown__content__item">
          <label>Category:</label>
          <Multiselect
            options={categoryOptions}
            selectedOptions={selectedCategories}
            onChange={handleCategoryChange}
          />
        </div>
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
        <p>We've gathered information from various UofT clubs to give you sense of what it's like to be part of a club whilst having to commmute.<br/><br/></p>

        <FilterDropdown title="Filter Clubs" filterOptions={filterOptions} />

        <Dropdowns>
          {filterClubs().map((club) => {
            return <Dropdown key={club} title={club} content={clubInfo[club].tips} image={clubInfo[club].image} />
          })}
        </Dropdowns>
        <p>Want commuters to know about your club? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPJoUOOKM1GoTeBuK0Zngc2F5PAjBX7Mj1Qkcc6AXa1n5tWA/viewform">Let us know</a>!</p>
      </div>
    </Background>
  );
}
  
export default Clubs;