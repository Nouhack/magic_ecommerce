import { useState } from "react";
import Checkoutsidebar from "./Checkoutsidebar";
import { Dialog } from "primereact/dialog";
import { Tooltip } from "primereact/tooltip";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Languages from "./sub_components/languages";
import { reverse } from "lodash";

export default function Header(props: any) {
  const [showmodal, setshowmodal] = useState(false);
  const [visible, setVisible] = useState(false);

  const events = [
    {
      status: "Trouver le(s) produit(s)",
      icon: "pi pi-search",
      color: "#9C27B0",
    },
    {
      status: "Cliquer sur Ajouter au panier",
      icon: "pi pi-cart-plus",
      color: "#673AB7",
    },
    {
      status: "Ouvrer le panier et cliquer sur checkout",
      icon: "pi pi-check-circle",
      color: "#FF9800",
    },
    {
      status: "Remplissez toutes les informations",
      icon: "pi pi-info",
      color: "#654514",
    },
    {
      status: "Cliquez sur commander maintenant",
      icon: "pi pi-send",
      color: "#607D8B",
    },
  ];

  const customizedContent = (item) => {
    return <h4>{item.status}</h4>;
  };

  const customizedMarker = (item: any) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const Logo_comp = () => {
    return (
      <div className="flex align-items-center justify-content-center">
        <img
          src="vercel.svg"
          alt="Image"
          className="lg:mr-6 h-1rem sm:h-2rem"
        />
      </div>
    );
  };

  const list_comp_item = () => [
    <li className="flex flex-column  lg:flex-row">
      <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
        <span className="font-bold">{props.lan.header.home}</span>
        <span
          role="presentation"
          className="p-ink"
          style={{
            height: 87,
            width: 87,
            top: "-4.5px",
            left: "-4.57812px",
          }}
        />
      </a>
    </li>,
    <li className="flex flex-column lg:flex-row">
      <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
        <span className="font-bold">{props.lan.header.store}</span>
        <span role="presentation" className="p-ink" />
      </a>
      <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
        <div className="border-2 border-dashed surface-border border-round h-full" />
      </div>
    </li>,
    <li className="flex flex-column lg:flex-row">
      <a
        className="p-ripple inline-flex align-items-center custom-tooltip-btn cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
        onClick={() => setVisible(true)}
      >
        <span className="font-bold">{props.lan.header.how_to_order}</span>
        <span role="presentation" className="p-ink" />
      </a>
      <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
        <div className="border-2 border-dashed surface-border border-round h-full" />
      </div>
    </li>,
  ];
  const List_comp = () => {
    return (
      <div
        id="nav-1"
        className="lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-full py-3 lg:py-0 hidden"
      >
        <ul
          className={`list-none p-0 m-0 ${
            props.default_language === "ar" && "justify-content-end"
          } flex flex-column lg:flex-row w-full `}
        >
          {props.default_language === "ar"
            ? list_comp_item().reverse()
            : list_comp_item()}
        </ul>
      </div>
    );
  };
  const Cart_comp = () => {
    return (
      <div className="flex ml-auto">
        <ul className="list-none p-0 m-0 flex">
          <li className="flex">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
              <Checkoutsidebar
                setdefault_language={props.setdefault_language}
                default_language={props.default_language}
                lan={props.lan}
                total={props.total}
                settotal={props.settotal}
                setlist={props.setlist}
                list={props.list}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div
      className="sticky top-0 z-5 surface-overlay px-3 sm:px-6 flex align-items-stretch relative"
      style={{
        minHeight: 80,
        backgroundColor: "rgba(255,255,255,0.6)",
      }}
    >
      <Dialog
        header="Processus de commande un produit"
        visible={visible}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </Dialog>
      <Dialog visible={showmodal} onHide={() => setshowmodal(false)}>
        <div className="surface-section  border-right-1  surface-border flex flex-column w-18rem select-none">
          <div className="p-3 flex align-items-center justify-content-center">
            <img src="vercel.svg" alt="hyper-700" height={40} />
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-2 m-0">
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-home mr-2" />
                  <span className="font-medium">{props.lan.header.home}</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-info-circle mr-2" />
                  <span className="font-medium">{props.lan.header.store}</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i
                    className="pi pi-info-circle mr-2"
                    onClick={() => setVisible(true)}
                  />
                  <span className="font-medium">
                    {props.lan.header.how_to_order}
                  </span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
      {props.default_language === "ar"
        ? [<Logo_comp />, <List_comp />, <Cart_comp />].reverse()
        : [<Logo_comp />, <List_comp />, <Cart_comp />]}

      <a
        className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5"
        onClick={() => setshowmodal(true)}
      >
        <i className="pi pi-bars text-4xl" />
        <span
          role="presentation"
          className="p-ink"
          style={{ height: 80, width: 80, top: 4, left: "-20px" }}
        />
      </a>
    </div>
  );
}
