import { Galleria } from "primereact/galleria";
import _ from "lodash";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import React, { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { attributes } from "../content/category.md";
import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import Product_detail from "./dialogs/Product_detail";
import Filter from "./sliders/Filter";
import { formatter } from "../utils/Money_formatter";

const DataViewDemo = (props: any) => {
  const [selectedproducts, setselectedproducts] = useState([]);

  const toast = useRef(null);
  let { categories } = attributes;
  const [showfilter, setshowfilter] = useState(false);
  // selected color
  const [selectedcolor, setselectedcolor] = useState("");
  //=========================================
  // selected size
  const [selectedsize, setselectedsize] = useState("");

  const [selecteditem, setselecteditem] = useState({
    name: "",
    image: "",
    price: null,
    description: "",
    category: "",
    imagesdetail: [],
    colors: [],
    sizes: [],
  });
  const [search, setsearch] = useState("");

  const [categoryselected, setcategoryselected] = useState(
    categories.map((item: any) => item.name)
  );
  const [defaultcategories, setdefaultcategories] = useState(
    categories.map((item: any) => item.name)
  );
  const [openproductdetail, setopenproductdetail] = useState(false);

  const categories_list = categories.map((item: any) => item.name);

  const [products, setProducts] = useState(
    categories.map((item: any) =>
      item.products.map((item2: any) => ({
        name: item2.name,
        image: item2.thumbnail,
        price: item2.price,
        category: item.name,
        description: item2.description,
        imagesdetail: item2.images,
        colors: item2.colors,
        sizes: item2.sizes,
      }))
    )[0]
  );

  const imagesdetail = [
    "https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    "https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    "https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    "https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
  ];

  const [layout, setLayout] = useState("grid");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState<any>(null);
  const [sortField, setSortField] = useState("");
  const sortOptions = [
    { label: "Price High to Low", value: "!price" },
    { label: "Price Low to High", value: "price" },
  ];

  const onSortChange = (event: any) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };
  function containsObject(obj: any, list: any) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].toString() === obj.toString()) {
        return true;
      }
    }

    return false;
  }

  const addToCart = (data: any) => {
    // with _.isEqual
    let doesObjectExist = props.val.find((obj: any) => _.isEqual(obj, data));

    if (doesObjectExist) {
      console.log("Object exists!");
      toast.current.show({
        severity: "error",
        summary: "Exist",
        detail: "Produit exist deja dans le panier",
      });
    } else {
      console.log("Object does not exist!");
      props.selected((old) => [...old, data]);
      toast.current.show({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
      });
    }
  };

  const showDetail = (data: any) => {
    setselecteditem(data);
    setopenproductdetail(true);
  };

  const renderListItem = (data: any) => {
    return (
      <div className="col-12 ">
        <div className="product-list-item">
          <img src={`${data.image}`} alt={data.name} />
          <div className="product-list-detail">
            <div className="product-name">{data.name}</div>
            <div className="mt-2">
              <i className="pi pi-tag product-category-icon"></i>
              <span className="category text-grey-400">{data.category}</span>
            </div>
          </div>
          <div className="product-list-action">
            <span className="product-price">
              {formatter.format(data.price)}
            </span>
            <Button
              icon="pi pi-shopping-cart p-button-outlined p-button-secondary"
              label="Plus de détails"
              className="p-button-rounded p-button-outlined p-button-secondary w-full text-center "
              onClick={() => {
                showDetail(data);
              }}
              style={{
                display: "inline-block",
              }}
              disabled={data.inventoryStatus === "OUTOFSTOCK"}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const renderGridItem = (data: any) => {
    return (
      <div className=" mt-4 col-12 md:col-6 lg:col-4 ">
        <div className="p-2 h-full ">
          <div
            onClick={() => {
              showDetail(data);
            }}
            className="shadow-2 p-4  h-full cursor-pointer surface-card border-round"
          >
            <div className="relative mb-3">
              <span
                className="surface-card text-900 shadow-2 px-3 py-2 absolute"
                style={{ borderRadius: "1.5rem", left: "1rem", top: "1rem" }}
              >
                {data.category}
              </span>
              <img
                src={data.image}
                className="w-full h-20rem "
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex justify-content-between align-items-center mb-3">
              <span className="text-900 font-medium text-xl">{data.name}</span>
              <span>
                <i className="pi pi-star-fill text-yellow-500 mr-1" />
                <span className="font-medium">5.0</span>
              </span>
            </div>
            <p className="mt-0 mb-3 text-600  line-height-3">
              {data.description.slice(0, 50)}...
            </p>
            <span className="text-primary text-xl font-medium">
              {formatter.format(data.price)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product: any, layout: any) => {
    if (!product) {
      return;
    }

    if (layout === "list") return renderListItem(product);
    else if (layout === "grid") return renderGridItem(product);
  };

  // THIS IS THE HEADER OF DATATABLE OF THE PRODUCT LIST
  const renderHeader = () => {
    return (
      <div
        className="grid  grid-nogutter"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="md:col-10 col-6" style={{ textAlign: "left" }}>
          <Button
            label="Filter"
            className="p-button p-component p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none"
            onClick={() => setshowfilter(true)}
          />
        </div>
        <div className="md:col-2 col-6" style={{ textAlign: "right" }}>
          <DataViewLayoutOptions
            layout={layout === "grid" ? "grid" : "list"}
            onChange={(e) => setLayout(e.value)}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  const itemTemplategallery = (item: any) => {
    return <img src={item} alt={item.alt} style={{ width: "100%" }} />;
  };

  const thumbnailTemplate = (item: any) => {
    return <img src={item} alt={item.alt} />;
  };

  const resetfilter = () => {
    setsearch("");
    setcategoryselected(defaultcategories);
    setSortKey(null);
    setSortOrder(null);
    setSortField("");
  };
  return (
    <div className="bg">
      {/* THIS IS THE FILTER SIDEBAR */}
      <Filter
        showfilter={showfilter}
        setshowfilter={setshowfilter}
        sortOptions={sortOptions}
        sortKey={sortKey}
        onSortChange={onSortChange}
        search={search}
        setsearch={setsearch}
        categoryselected={categoryselected}
        categories_list={categories_list}
        setcategoryselected={setcategoryselected}
        resetfilter={resetfilter}
      />
      {/* END OF FILTER SLIDER*/}

      {/* THIS IS THE DIALOG OF PRODUCT DETAIL */}
      <Product_detail
        openproductdetail={openproductdetail}
        setopenproductdetail={setopenproductdetail}
        thumbnailTemplate={thumbnailTemplate}
        selecteditem={selecteditem}
        setselecteditem={setselecteditem}
        selectedcolor={selectedcolor}
        setselectedcolor={setselectedcolor}
        selectedsize={selectedsize}
        setselectedsize={setselectedsize}
        addToCart={addToCart}
      />

      {/* THIS IS THE END OF  DIALOG OF PRODUCT DETAIL */}

      <div className="dataview-demo ">
        <Toast ref={toast} />
        <div className="card">
          <DataView
            value={products.filter(
              (item: any, index: number) =>
                item.name.includes(search) &&
                categoryselected.indexOf(item.category) !== -1
            )}
            layout={layout === "grid" ? "grid" : "list"}
            header={header}
            itemTemplate={itemTemplate}
            paginator
            rows={9}
            sortOrder={sortOrder}
            sortField={sortField}
          />
        </div>
      </div>
    </div>
  );
};

export default DataViewDemo;
