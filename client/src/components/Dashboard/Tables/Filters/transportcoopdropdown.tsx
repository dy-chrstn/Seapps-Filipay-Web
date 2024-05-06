import React from "react";
import Select, { StylesConfig } from "react-select";

interface TransportCoopOption {
  value: string;
  label: string;
}

interface TransportCoopDropdownProps {
  options: TransportCoopOption[];
  value: TransportCoopOption | null;
  onChange: (selectedOption: TransportCoopOption | null) => void;
}

const customStyles: StylesConfig<TransportCoopOption, false> = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '28px',
    height: '28px',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0 5px'
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '26px',
  }),
  dropdownIndicator: base => ({
    ...base,
    color: "#00558d",
  })
};

const TransportCoopDropdown: React.FC<TransportCoopDropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder="Transport Cooperative" 
      styles={customStyles}
    />
  );
};


export default TransportCoopDropdown;
