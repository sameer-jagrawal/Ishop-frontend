"use client";

import Select from "react-select";

const options = [
  {
    value: "USD",
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/flags/americaflag.jpg"
          alt="US flag"
          width= "20"
        />
        USA
      </div>
    ),
  },
  {
    value: "INR",
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/flags/indiaflag.jpg"
          width="20"
          alt="India flag"
        />
        IND
      </div>
    ),
  },
  {
    value: "EUR",
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/flags/EU.jpg"
          width="20"
          alt="EU flag"
        />
        EUR 
      </div>
    ),
  },
  {
    value: "GBP",
    label: (
      <div className="flex items-center gap-2">
        <img
          src="/flags/ukflag.jpg"
          width="20"
          alt="UK flag"
        />
        UK
      </div>
    ),
  },
];
const customStyles = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      background: "transparent",
      minHeight: "auto",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
export default function CurrencySelect() {
  return (
  <Select  options={options}
  defaultValue={options[0]} 
  isSearchable={false} 
  styles={customStyles}
  
  />
)
}