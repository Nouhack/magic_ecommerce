import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Sidebar } from "primereact/sidebar";
import React from "react";

type Props = {};

export default function Filter(props: any) {
  const component_array = [
    <Dropdown
      key={1}
      className="w-full md:w-3 text-center "
      panelClassName={`${props.default_language === "ar" && "text-right"}`}
      options={props.sortOptions}
      value={props.sortKey}
      optionLabel="label"
      placeholder={props.lan.filter.price.sort}
      onChange={props.onSortChange}
    />,

    <span
      key={2}
      className="p-input-icon-left w-full md:w-3 md:mx-4 text-center"
    >
      <i className="pi pi-search" />
      <InputText
        value={props.search}
        className={`w-full ${props.default_language === "ar" && "text-right"}`}
        onChange={(e) => props.setsearch(e.target.value)}
        placeholder={props.lan.filter.search}
      />
    </span>,
    <MultiSelect
      key={3}
      optionLabel=""
      className="w-full md:w-3  text-center"
      value={props.categoryselected}
      placeholder={props.lan.filter.category.placeholder}
      options={props.categories_list}
      onChange={(e) => {
        props.setcategoryselected(e?.value);
      }}
    />,

    <div key={4} className="text-center w-full md:w-3">
      <Button
        className="p-button-outlined p-button-danger"
        onClick={() => {
          props.resetfilter();
        }}
        icon="pi pi-eraser"
        label={props.lan.filter.clear}
      />
    </div>,
  ];
  return (
    <Sidebar
      visible={props.showfilter}
      position="top"
      className="h-10rem"
      onHide={() => props.setshowfilter(false)}
    >
      <div className="flex align-items-center  md:flex-row gap-3 md:gap-0 flex-column justify-content-center ">
        {props.default_language === "ar"
          ? component_array.reverse()
          : component_array}
      </div>
    </Sidebar>
  );
}
