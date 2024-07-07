import React, { useState } from 'react';
import Checkbox from "../components/ui/checkbox";
import Radio from "../components/ui/radio";
import Switch from "../components/ui/switch";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitched, setIsSwitched] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSwitchChange = () => {
    setIsSwitched(!isSwitched);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Checkbox
        label="Checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked && <p>Checkbox is checked</p>}
      <Switch
        label="Switch"
        checked={isSwitched}
        onChange={handleSwitchChange}
      />
      {isSwitched && <p>Switch is on</p>}
      <Radio
        label="Option 1"
        name="options"
        id="option1"
        value="1"
        checked={selectedOption === "1"}
        onChange={handleRadioChange}
      />
      <Radio
        label="Option 2"
        name="options"
        id="option2"
        value="2"
        checked={selectedOption === "2"}
        onChange={handleRadioChange}
      />
      <Radio
        label="Option 3"
        name="options"
        id="option3"
        value="3"
        checked={selectedOption === "3"}
        onChange={handleRadioChange}
      />
      <Radio
        label="Option 4"
        name="options"
        id="option4"
        value="4"
        checked={selectedOption === "4"}
        onChange={handleRadioChange}
      />
      {selectedOption && <p>Selected option: {selectedOption}</p>}
    </div>
  );
};

export default HomePage;
