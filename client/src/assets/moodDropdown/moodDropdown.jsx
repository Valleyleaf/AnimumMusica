import React, {useState} from 'react';
// Add css here

const Dropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }

return (
    <>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isDropdownOpen && (
        <div>
          <p>Dropdown Item 1</p>
          <p>Dropdown Item 2</p>
          <p>Dropdown Item 3</p>
        </div>
      )}
    </>
  );
};

export default Dropdown;


// Goal here is for the dropdown to set a state for the user on the mood.
//Should this overlay the display element?