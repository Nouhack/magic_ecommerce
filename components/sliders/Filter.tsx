import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Sidebar } from "primereact/sidebar";
import React from "react";

type Props = {};

export default function Filter(props: any) {
  return (
    <Sidebar
      visible={props.showfilter}
      position="left"
      className="h-full"
      onHide={() => props.setshowfilter(false)}
    >
      <div className="flex align-items-center md:flex-row gap-3 md:gap-0 flex-column justify-content-center ">
        <Dropdown
          className="w-full md:w-3 text-center"
          options={props.sortOptions}
          value={props.sortKey}
          optionLabel="label"
          placeholder="Sort By Price"
          onChange={props.onSortChange}
        />

        <span className="p-input-icon-left w-full md:w-3 md:mx-4 text-center">
          <i className="pi pi-search" />
          <InputText
            value={props.search}
            className="w-full"
            onChange={(e) => props.setsearch(e.target.value)}
            placeholder="Search"
          />
        </span>

        <MultiSelect
          optionLabel=""
          className="w-full md:w-3  text-center"
          value={props.categoryselected}
          maxSelectedLabels={2}
          placeholder="select a category"
          options={props.categories_list}
          onChange={(e) => {
            props.setcategoryselected(e?.value);
          }}
        />

        <div className="text-center w-full md:w-3">
          <Button
            className="p-button-outlined p-button-danger"
            onClick={() => {
              props.resetfilter();
            }}
            icon="pi pi-eraser"
            label="Tout effacer"
          />
        </div>
      </div>
    </Sidebar>
  );
}
