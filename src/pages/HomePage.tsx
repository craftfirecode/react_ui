import React, { useState } from "react";
import Checkbox from "../components/ui/checkbox";
import Radio from "../components/ui/radio";
import Switch from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

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
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <Input placeholder="Username" />
      <Input floating placeholder="Username" />
      <Button variant="primary" size="md">
        Button
      </Button>
      <Button variant="outline_primary" size="md">
        Button
      </Button>
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
