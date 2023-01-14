
import { useState } from 'react'
import Checkoutsidebar from './Checkoutsidebar';
import { Dialog } from 'primereact/dialog';

export default function Header(props: any) {
  const [showmodal, setshowmodal] = useState(false)

  return (

    <div
      className="sticky top-0 z-5 surface-overlay px-3 sm:px-6 flex align-items-stretch relative"
      style={{
        minHeight: 80,
        backgroundColor: 'rgba(255,255,255,0.6)'
      }}
    >
      <Dialog visible={showmodal} onHide={() => setshowmodal(false)}>

        <div className="surface-section  border-right-1  surface-border flex flex-column w-18rem select-none">
          <div className="p-3 flex align-items-center justify-content-center">
            <img
              src="vercel.svg"
              alt="hyper-700"
              height={40}
            />
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-2 m-0">
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-home mr-2" />
                  <span className="font-medium">Home</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-book mr-2" />
                  <span className="font-medium">Categories</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-info-circle mr-2" />
                  <span className="font-medium">Magasin</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
              <li>
                <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                  <i className="pi pi-info-circle mr-2" />
                  <span className="font-medium">Order process</span>
                  <span role="presentation" className="p-ink" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Dialog>

      <a className="p-ripple cursor-pointer flex align-items-center lg:hidden text-700 mr-3 sm:mr-5"

        onClick={() => setshowmodal(true)}
      >
        <i className="pi pi-bars text-4xl" />
        <span
          role="presentation"
          className="p-ink"
          style={{ height: 80, width: 80, top: 4, left: "-20px" }}
        />
      </a>
      <div className="flex align-items-center justify-content-center">
        <img
          src="vercel.svg"
          alt="Image"
          className="lg:mr-6 h-1rem sm:h-2rem"
        />
      </div>
      <div
        id="nav-1"
        className="surface-overlay lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0 hidden"
      >
        <ul className="list-none p-0 m-0 flex flex-column lg:flex-row">
          <li className="flex flex-column lg:flex-row">
            <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
              <span className='font-bold'>Home</span>
              <span
                role="presentation"
                className="p-ink"
                style={{ height: 87, width: 87, top: "-4.5px", left: "-4.57812px" }}
              />
            </a>
          </li>

          <li className="flex flex-column lg:flex-row">
            <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
              <span className='font-bold'>Magasin</span>
              <span role="presentation" className="p-ink" />
            </a>
            <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
              <div className="border-2 border-dashed surface-border border-round h-full" />
            </div>
          </li>

          <li className="flex flex-column lg:flex-row">
            <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
              <span className='font-bold'>Categories</span>
              <span role="presentation" className="p-ink" />
            </a>
            <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
              <div className="border-2 border-dashed surface-border border-round h-full" />
            </div>
          </li>
          <li className="flex flex-column lg:flex-row">
            <a className="p-ripple inline-flex align-items-center cursor-pointer border-right-2 lg:border-right-none lg:border-bottom-2 border-transparent hover:border-primary py-3 lg:py-0 px-6 lg:px-3 text-700 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto">
              <span className='font-bold'>Order process</span>
              <span role="presentation" className="p-ink" />
            </a>
            <div className="surface-overlay shadow-none lg:shadow-2 hidden lg:absolute w-full left-0 top-100 px-6 py-0 lg:py-6 h-10rem lg:h-30rem z-1">
              <div className="border-2 border-dashed surface-border border-round h-full" />
            </div>
          </li>
        </ul>
      </div>
      <div className="flex ml-auto">
        <ul className="list-none p-0 m-0 flex">
          <li className="flex">
            <a className="p-ripple text-900 font-medium inline-flex align-items-center cursor-pointer px-2 sm:px-3 hover:text-primary">
              <Checkoutsidebar list={props.list} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


