import React from "react";
import { FormControl, Center, Input, Select, Button } from "@chakra-ui/react";
import { CountryDropdown } from "react-country-region-selector";

function ApplicationFormPage() {
  return (
    <Center m="10px">
      <FormControl w="40%" id="name" isRequired errorBorderColor="red">
        <Input placeholder="Full Name" type="text" />
        <Input placeholder="Age" type="number" />
        <Input placeholder="Occupation" type="text" />
        <Input placeholder="Country" type="text" />
        {/* <div class="chakra-select__icon-wrapper css-fmsrp" display="block">
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            class="chakra-select__icon"
            focusable="false"
            aria-hidden="true"
            style={{ width: "1em", height: "1em", color: "currentcolor" }}
          >
            <path
              fill="currentColor"
              d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
            ></path>
          </svg>

          <CountryDropdown
            class="chakra-select css-ts"
            style={{
              width: "100%",
              outline: 0,
              position: "relative",
              appearance: "none",
              transition: "all 0.2s",
              fontSize: "1rem",
              paddingLeft: "1rem",
              paddingRight: "2rem",
              height: "2.5rem",
              borderRadius: "0.375rem",
              border: "1px solid",
              borderColor: "inherit",
              background: "inherit",
            }}
          />
        </div> */}
        <Select placeholder="Trip of interest">
          {/* aqui tem que passar por ?props? os valores trip.trip.name? cada um vai renderizar como uma option do select. onde tem que fazer isso? */}
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <Input placeholder="Application Message" type="text" />
        <Button>Apply!</Button>
      </FormControl>
    </Center>
  );
}

export default ApplicationFormPage;
