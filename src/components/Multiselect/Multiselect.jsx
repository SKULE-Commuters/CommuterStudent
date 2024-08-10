import './Multiselect.css';

const MultiSelect = ({ options, selectedOptions, onChange }) => {
    return (
      <div className="multiselect">
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

export default MultiSelect;