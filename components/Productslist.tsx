
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext'
import { Rating } from 'primereact/rating';
import { Dialog } from 'primereact/dialog';
import { MultiSelect } from 'primereact/multiselect'

const DataViewDemo = () => {
  const [showfilter, setshowfilter] = useState(false)
  const [selecteditem, setselecteditem] = useState(
    {
      name: "",
      image: "",
      price: null,
      description: '',
      category: "",
      imagesdetail: []
    }
  )
  const [search, setsearch] = useState('')
  const [categoryselected, setcategoryselected] = useState([

    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5'
  ])
  const [openproductdetail, setopenproductdetail] = useState(false)

  const categories_list = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5'
  ];

  const [products, setProducts] = useState([
    {
      name: 'product 1',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 10,
      category: 'category 1',
      description: 'lsdkjflskdjf sdklfj sdlkfjs lfkjsldfkjs dlfkjsdflksjdflksjdfl sdlfk sdlfk jsdlfk sjdf',
      imagesdetail: [
        'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://plus.unsplash.com/premium_photo-1664187387080-1b6408c0039c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

      ]
    },
    {
      name: 'product 2',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 30,
      category: 'category 2',
      description: 'lsdkjflskdjf sdklfj sdlkfjs lfkjsldfkjs dlfkjsdflksjdflksjdfl sdlfk sdlfk jsdlfk sjdf',
      imagesdetail: [
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      ]
    },
    {
      name: 'product 3',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 4,
      category: 'category 3',
      description: 'lsdkjflskdjf sdklfj sdlkfjs lfkjsldfkjs dlfkjsdflksjdflksjdfl sdlfk sdlfk jsdlfk sjdf',
      imagesdetail: [
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',

      ]

    },
    {
      name: 'product 4',
      image: 'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
      price: 48,
      category: 'category 4',
      description: 'lsdkjflskdjf sdklfj sdlkfjs lfkjsldfkjs dlfkjsdflksjdflksjdfl sdlfk sdlfk jsdlfk sjdf',
      imagesdetail: [
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',

      ]

    },

  ]);

  const imagesdetail = [
    'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    'https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
  ]

  const [layout, setLayout] = useState('grid');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState<any>(null);
  const [sortField, setSortField] = useState('');
  const sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' },
  ];


  const onSortChange = (event: any) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    }
    else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  }

  const renderListItem = (data: any) => {
    return (
      <div className="col-12 "
        onClick={() => {
          setselecteditem(data)
          setopenproductdetail(true)

        }}
      >
        <div className="product-list-item">
          <img src={`${data.image}`} alt={data.name} />
          <div className="product-list-detail">
            <div className="product-name">{data.name}</div>
            <div className='mt-2'>
              <i className="pi pi-tag product-category-icon"></i><span className="category text-grey-400">{data.category}</span>
            </div>
          </div>
          <div className="product-list-action">
            <span className="product-price">${data.price}</span>
            <Button icon="pi pi-shopping-cart p-button-outlined p-button-secondary" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>

          </div>
        </div>
      </div>
    );
  }

  const renderGridItem = (data: any) => {
    return (

      <div className="col-12 h-full md:col-6 lg:col-3 mb-5 md:mb-0 "
        onClick={() => {
          setselecteditem(data)
          setopenproductdetail(true)
        }}
      >
        <div className="p-2 h-full">
          <div className="h-full relative mb-2">
            <img
              src={data.image}
              className="w-full"
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <div
              className="absolute h-4rem w-4rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
              style={{ bottom: "1.25rem", right: "1rem" }}
            >
              $42
            </div>
          </div>
          <div className="text-900 font-medium text-xl mb-3 text-center">
            {data.name}
          </div>
          <div className="flex align-items-center justify-content-center mb-3">
            <i className="pi pi-tag mr-2 text-md" />
            <div className="font-medium line-height-1">{data.category}</div>
          </div>
          <Button
            type="button"
            className="p-button-rounded p-button-outlined p-button-secondary w-full text-center "
            style={{
              display: 'inline-block'
            }}
          >
            <i className="pi pi-check mr-2"></i>
            Add to Cart
            <span role="presentation" className="p-ink" />
          </Button>

        </div>
      </div>

    );
  }

  const itemTemplate = (product: any, layout: any) => {
    if (!product) {
      return;
    }

    if (layout === 'list')
      return renderListItem(product);
    else if (layout === 'grid')
      return renderGridItem(product);
  }

  const renderHeader = () => {
    return (
      <div className="grid grid-nogutter">
        <div className="md:col-10 col-6" style={{ textAlign: 'left' }}>

          <Button label="Filter" className="p-button p-component p-button-rounded bg-gray-900 text-white px-5 lg:mr-4 sm w-full lg:w-auto border-none"
            onClick={() => setshowfilter(true)}
          />
        </div>
        <div className="md:col-2 col-6" style={{ textAlign: 'right' }}>
          <DataViewLayoutOptions layout={layout === 'grid' ? 'grid' : 'list'} onChange={(e) => setLayout(e.value)} />
        </div>
      </div>
    );
  }

  const header = renderHeader();

  const itemTemplategallery = (item: any) => {
    return <img src={item} alt={item.alt} style={{ width: '100%' }} />
  }

  const thumbnailTemplate = (item: any) => {
    return <img src={item} alt={item.alt} />
  }

  const resetfilter = () => {
    setsearch('')
    setcategoryselected([
      'category 1',
      'category 2',
      'category 3',
      'category 4',
      'category 5'
    ])
    setSortKey(null)
    setSortOrder(null)
    setSortField(null)
  }
  return (
    <div className='bg'>
      <Sidebar visible={showfilter} position="top" className='h-auto' onHide={() => setshowfilter(false)}>

        <div className='flex align-items-center md:flex-row gap-3 md:gap-0 flex-column justify-content-center '>

          <Dropdown className='w-full md:w-3 text-center' options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange} />

          <span className="p-input-icon-left w-full md:w-3 md:mx-4 text-center" >
            <i className="pi pi-search" />
            <InputText value={search} className='w-full' onChange={(e) => setsearch(e.target.value)} placeholder="Search" />
          </span>

          <MultiSelect optionLabel="" className='w-full md:w-3  text-center' value={categoryselected} maxSelectedLabels={2} placeholder='select a category' options={categories_list} onChange={(e) => {
            setcategoryselected(e.value)
            console.log(categoryselected)
          }} />

          <div className='text-center w-full md:w-3'>

            <Button className='p-button-outlined p-button-danger' onClick={() => {
              resetfilter()
            }} icon='pi pi-eraser' label='Clear All' />

          </div>

        </div>
      </Sidebar>


      <Dialog visible={openproductdetail} position='top' modal style={{ width: '90vw' }} onHide={() => setopenproductdetail(false)}
        draggable={true} resizable={true}>

        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
          <div className="grid">
            <div className="col-12 lg:col-6">
              <div className="flex h-full  justify-content-center">
                <Carousel className='h-full w-full' value={selecteditem.imagesdetail} numVisible={1} numScroll={1} orientation="horizontal" verticalViewPortHeight="360px"
                  style={{ maxWidth: '400px', height: '360px' }}
                  itemTemplate={(e) => {
                    return (
                      <img src={e} alt='none' className='w-full h-full' style={{ objectFit: 'cover' }} />
                    )
                  }} />
              </div>
            </div>
            <div className="col-12 lg:col-6 py-5 lg:py-3 lg:pl-5">
              <div className="flex align-items-center justify-content-between mb-4">
                <span className="text-xl font-medium text-900">
                  {selecteditem.name}
                </span>
                <span className="text-xl font-medium text-900">{selecteditem.price}</span>
              </div>
              <p className="p-0 mt-0 mb-5 line-height-3 text-700">
                {selecteditem.description}
              </p>
              <div className="bg-yellow-200 text-yellow-900 text-sm inline-flex align-items-center px-2 py-1 font-medium mb-5">
                <i className="pi pi-exclamation" />
                <span>{selecteditem.category}</span>
              </div>
              <button
                aria-label="Add to Cart"
                className="p-button p-component w-full mb-5"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-shopping-cart" />
                <span className="p-button-label p-c">Add to Cart</span>
                <span role="presentation" className="p-ink" />
              </button>
              <ul className="list-none p-0 m-0 text-sm text-600">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-credit-card mr-2" />
                  <span>Paiement when recieving</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-send mr-2" />
                  <span>Safe shipping</span>
                </li>
                <li className="flex align-items-center">
                  <i className="pi pi-refresh mr-2" />
                  <span>30 Days Return Policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Dialog>


      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="p-2 w-full xl:w-6">
            <div
              className="bg-no-repeat bg-cover p-3 border-round pr-2"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1642505173110-c51e4fc1d5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              }}
            >
              <div className="border-2 border-round border-gray-900 flex flex-column sm:flex-row overflow-hidden">
                <div
                  className="flex-1 text-center bg-white-alpha-60 font-medium"
                  style={{ backdropFilter: "blur(15px)" }}
                >
                  <div className="p-6 flex flex-column align-items-center">
                    <span className="text-xl text-gray-900 mb-5">Up To</span>
                    <span className="text-xl text-gray-900 mb-5 text-5xl">
                      25 <span className="text-xl text-gray-900">% OFF</span>
                    </span>
                    <span className="text-xl text-gray-900">Exclusive JEWELRY</span>
                  </div>
                </div>
                <div
                  className="flex-1 bg-no-repeat bg-cover"
                  style={{
                    background: 'url("https://images.unsplash.com/photo-1634959228334-1df2c6b08ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
                    backgroundPosition: 'center',
                    minHeight: 200
                  }}
                />
              </div>
            </div>
          </div>
          <div className="p-2 w-full xl:w-6">
            <div
              className="bg-no-repeat bg-cover p-3 border-round pr-2"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1546641082-b3c3d4bfae25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              }}
            >
              <div className="border-2 border-round border-white flex flex-column sm:flex-row overflow-hidden">
                <div
                  className="flex-1 text-center bg-dark-alpha-60 font-medium"
                  style={{ backdropFilter: "blur(15px)" }}
                >
                  <div className="p-6 flex flex-column align-items-center">
                    <span className="text-xl text-gray-100 mb-5">Up To</span>
                    <span className="text-xl text-gray-100 mb-5 text-5xl">
                      25 <span className="text-xl text-gray-100">% OFF</span>
                    </span>
                    <span className="text-xl text-gray-100">Exclusive JEWELRY</span>
                  </div>
                </div>
                <div
                  className="flex-1 bg-no-repeat bg-cover"
                  style={{
                    background:
                      'url("https://images.unsplash.com/photo-1507486990559-1d65aaad9ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")',
                    minHeight: 200
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="dataview-demo ">
        <div className="card">
          <DataView value={products.filter((item, index) => item.name.includes(search) && categoryselected.indexOf(item.category) !== -1)}
            layout={layout === 'grid' ? 'grid' : 'list'}
            header={header}
            itemTemplate={itemTemplate}
            paginator rows={9}
            sortOrder={sortOrder}
            sortField={sortField} />
        </div>
      </div>
    </div >
  );
}

export default DataViewDemo;
