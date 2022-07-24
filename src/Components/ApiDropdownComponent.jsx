import React, { useEffect, useState } from "react";
import Dropdown from "./DropdownComponent.tsx";
import axios from "axios";

const beersApiUrl = "https://api.punkapi.com/v2/beers";

const beerToOptionTransformer = (beerArray) => {
  const result = beerArray?.map((beer) => ({
    value: beer.name,
    label: beer.name,
  }));
  return result;
};

export const ApiDropdownComponent = ({selectedValue, onChange}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(beersApiUrl)
      .then((res) => {
        setOptions(beerToOptionTransformer(res.data));
      })
      .catch(() => {
        return [];
      });
  }, []);

  return (
    <Dropdown
      options={options}
      placeholder={{ value: "", label: "Select your option" }}
      selectedValue={selectedValue}
      onChange={onChange}
    />
  );
};
