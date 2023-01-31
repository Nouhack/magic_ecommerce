import { Dialog } from "primereact/dialog";
import { Messages } from "primereact/messages";

import { Divider } from "primereact/divider";

import { InputMask } from "primereact/inputmask";

import { Dropdown } from "primereact/dropdown";

import { InputTextarea } from "primereact/inputtextarea";
import { attributes } from "../../content/wilaya.md";
import React, { useRef, useState } from "react";
import { formatter } from "../../utils/Money_formatter";

type Props = {};

export default function Order_details(props: any) {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [adress, setadress] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [phone, setphone] = useState("");
  const [note, setnote] = useState("");

  const msgs = useRef(null);

  const send_order = () => {
    if (
      name === "" ||
      username === "" ||
      adress === "" ||
      postalcode === "" ||
      !selectedCity.align ||
      phone === ""
    ) {
      msgs.current.show([
        {
          severity: "error",
          detail: "vous devez remplir tous les champs",
          sticky: true,
          closable: true,
        },
      ]);
    } else if (props.list.length === 0) {
      msgs.current.show([
        {
          severity: "error",
          detail: "Il n'y a pas de produit(s) à commander",
          sticky: true,
          closable: true,
        },
      ]);
    } else {
      fetch("https://formsubmit.co/ajax/nouh.saiche@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nom: name,
          Prénom: username,
          Adresse: adress,
          "Code postale": postalcode,
          city: selectedCity?.align,
          "Numéro de téléphone": phone,
          Note: note,
          "Prix total": props.total + selectedCity.tax,
          "produits(s)": JSON.stringify(props.list, null, 4),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  const cities = attributes.wilaya;
  const onCityChange = (e: any) => {
    setSelectedCity(e.value);
  };

  return (
    <Dialog
      header="Remplissez les informations détaillées pour le processus d'expédition"
      visible={props.showcheckoutmodal}
      maximizable
      modal
      style={{ width: "90vw" }}
      onHide={() => props.setshowcheckoutmodal(false)}
    >
      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div className="grid -mr-3 -ml-3">
          <div className="col-12 lg:col-8 p-4">
            <div className="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
              <div className="col-12 mb-4 flex flex-column lg:flex-row align-items-center justify-content-between">
                <div className="text-900 font-medium text-xl">
                  Contact Information{" "}
                </div>
                <div className="mt-3 lg:mt-0">
                  <span className="text-600 mr-2">
                    Already hava an account?
                  </span>
                  <a
                    tabIndex={0}
                    className="cursor-pointer text-900 hover:text-primary transition-duration-150"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div
                className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full px-2 mb-3"
                role="separator"
              >
                <div className="p-divider-content" />
              </div>
              <div className="col-12 lg:col-6 field mb-0">
                <label htmlFor="name2" className="text-900 font-medium mb-3">
                  Nom
                </label>
                <input
                  placeholder="Doe"
                  required
                  type="text"
                  className="p-inputtext w-full mb-3"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              <div className="col-12 lg:col-6 field mb-0">
                <label htmlFor="surname2" className="text-900 font-medium mb-3">
                  Prénom
                </label>
                <input
                  placeholder="Jane"
                  required
                  type="text"
                  className="p-inputtext w-full mb-3"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
              <div className="col-12 field mb-0">
                <label htmlFor="address3" className="text-900 font-medium mb-3">
                  Adresse, Appartement, Suite, etc.
                </label>
                <input
                  placeholder="7 rue des Oiseaux, 16000 Alger, Algeria"
                  type="text"
                  required
                  className="p-inputtext w-full mb-3"
                  value={adress}
                  onChange={(e) => setadress(e.target.value)}
                />
              </div>
              <div className="col-12 lg:col-6 field mb-0">
                <label htmlFor="pc2" className="text-900 font-medium mb-3">
                  Code Postal
                </label>
                <input
                  placeholder="16000"
                  type="text"
                  required
                  className="p-inputtext w-full mb-3"
                  value={postalcode}
                  onChange={(e) => setpostalcode(e.target.value)}
                />
              </div>
              <div className="col-12 lg:col-6 field mb-0">
                <label htmlFor="phone" className="text-900 font-medium mb-3">
                  Ville
                </label>

                <Dropdown
                  required
                  value={selectedCity}
                  options={cities}
                  onChange={onCityChange}
                  optionLabel="align"
                  placeholder="Select a City"
                />
              </div>
              <div className="col-12 field mb-0">
                <label htmlFor="phone" className="text-900 font-medium mb-3">
                  Numéro de téléphone
                </label>
                <InputMask
                  required
                  id="phone"
                  mask="(999) 999-9999"
                  value={phone}
                  placeholder="(999) 999-9999"
                  onChange={(e) => setphone(e.target.value)}
                ></InputMask>
              </div>
              <Divider />

              <div className="col-12 field mb-0">
                <label htmlFor="phone" className="text-900 font-medium mb-3">
                  Ajoutez des notes (pas obligatoire mais si vous avez un détail
                  sur votre commande, veuillez nous en informer)
                </label>

                <InputTextarea
                  placeholder="Veuillez livrer le colis à l'entrée de l'immeuble."
                  className="p-inputtext w-full mb-3"
                  rows={5}
                  cols={30}
                  value={note}
                  onChange={(e) => setnote(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4 p-4">
            <div className="surface-card border-round shadow-2 p-5">
              <div className="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                <span className="text-900 font-medium text-lg ">
                  <i className="pi pi-shopping-cart mr-2" />
                  Votre commande ({props.nombre_de_produit})
                </span>
              </div>
              <div className="py-2 mt-3 border-bottom-1 surface-border">
                <div className="flex justify-content-between align-items-center mb-3">
                  <span className="text-900">Subtotal</span>
                  <span className="text-900">
                    {formatter.format(props.total)}
                  </span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <span className="text-900">Shipping</span>
                  <span className="text-900">
                    {selectedCity ? formatter.format(selectedCity.tax) : 0}
                  </span>
                </div>
                <div className="flex justify-content-between align-items-center mb-3">
                  <span className="text-900">Total</span>
                  <span className="text-900 font-bold">
                    {formatter.format(
                      props.total + (selectedCity ? selectedCity.tax : 0)
                    )}
                  </span>
                </div>
              </div>
              <Messages ref={msgs} />

              <button
                onClick={() => send_order()}
                aria-label="Place Order"
                className="p-button p-component p-button-primary w-full mt-3"
              >
                <span className="p-button-label p-c">Place Order</span>
                <span role="presentation" className="p-ink" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
