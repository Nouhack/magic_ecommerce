import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function Languages(props: any) {
  const cities = [
    { name: "Français", code: "fr" },
    { name: "العربية", code: "ar" },
    { name: "Ensligh", code: "en" },
  ];

  const onCityChange = (e) => {
    props.setdefault_language(e.value.code);
  };

  return (
    <Dropdown
      value={
        props.default_language === "fr"
          ? cities[0]
          : props.default_language === "en"
          ? cities[2]
          : cities[1]
      }
      options={cities}
      onChange={onCityChange}
      optionLabel="name"
      placeholder="Select a City"
      style={{
        border: "none",
        boxShadow: "none",
      }}
    />
  );
}
