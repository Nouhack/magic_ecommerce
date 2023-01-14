
import { Galleria } from 'primereact/galleria';
import { useRef } from 'react'
import { Toast } from 'primereact/toast';
import React, { useState } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { attributes } from '../content/category.md';
import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog';
import { MultiSelect } from 'primereact/multiselect'

const DataViewDemo = (props: any) => {
  const [selectedproducts, setselectedproducts] = useState([])

  const toast = useRef(null);
  let { categories } = attributes;
  console.log(categories)
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



  const [categoryselected, setcategoryselected] = useState(categories.map((item: any) => item.name))
  const [defaultcategories, setdefaultcategories] = useState(categories.map((item: any) => item.name))
  const [openproductdetail, setopenproductdetail] = useState(false)

  const categories_list = categories.map((item: any) => item.name)





  const [products, setProducts] = useState(
    categories.map((item: any) =>
      item.products.map((item2: any) => ({
        name: item2.name,
        image: item2.thumbnail,
        price: item2.price,
        category: item.name,
        description: item2.description,
        imagesdetail: item2.images
      })
      )
    )[0]
  )

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
      >
        <div

          onClick={() => {
            setselecteditem(data)
            setopenproductdetail(true)

          }}
          className="product-list-item">
          <img src={`${data.image}`} alt={data.name} />
          <div

            className="product-list-detail">
            <div className="product-name">{data.name}</div>
            <div className='mt-2'>
              <i className="pi pi-tag product-category-icon"></i><span className="category text-grey-400">{data.category}</span>
            </div>
          </div>
          <div className="product-list-action">
            <span className="product-price">{data.price} DA</span>
            <Button icon="pi pi-shopping-cart p-button-outlined p-button-secondary" label="Add to Cart "

              className="p-button-rounded p-button-outlined p-button-secondary w-full text-center "
              style={{
                display: 'inline-block'
              }}
              disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>

          </div>
        </div>
      </div>
    );
  }

  const renderGridItem = (data: any) => {
    return (

      <div className="col-12 h-full md:col-6 lg:col-3 mb-5 md:mb-0 "
      >
        <div className="p-2 h-full">
          <div

            onClick={() => {
              setselecteditem(data)
              setopenproductdetail(true)
            }}
            className="h-full relative mb-2">
            <img
              src={data.image}
              className="w-full"
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <div
              className="absolute h-5rem w-5rem border-circle border-2 border-yellow-500 bg-gray-900 text-white inline-flex justify-content-center align-items-center"
              style={{ bottom: "1.25rem", right: "1rem" }}
            >
              {data.price} DA
            </div>
          </div>
          <div className="text-900 font-medium text-xl mb-3 text-center">
            {data.name}
          </div>
          <div className="flex align-items-center justify-content-center mb-3">
            <i className="pi pi-tag mr-2 text-md" />
            <div className="font-medium line-height-1">{data.category}</div>
          </div>

          <Button icon="pi pi-shopping-cart p-button-outlined p-button-secondary" label="Add to Cart "

            className="p-button-rounded p-button-outlined p-button-secondary w-full text-center "
            onClick={() => {
              props.selected((old: any) => !old.includes(data) ? [...old, data] : old)

              if (!props.val.includes(data)) {
                toast.current.show({ severity: 'info', summary: 'Success Message', detail: 'Order submitted' });
              } else {

                toast.current.show({ severity: 'error', summary: 'Success Message', detail: 'Order submitted' });
              }

            }}
            style={{
              display: 'inline-block'
            }}
            disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>

        </div>
      </div >

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
    setcategoryselected(defaultcategories)
    setSortKey(null)
    setSortOrder(null)
    setSortField('')
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
            setcategoryselected(e?.value)
          }} />

          <div className='text-center w-full md:w-3'>

            <Button className='p-button-outlined p-button-danger' onClick={() => {
              resetfilter()
            }} icon='pi pi-eraser' label='Clear All' />

          </div>

        </div>
      </Sidebar>


      <Dialog visible={openproductdetail} className='w-full md:w-8' position='top' modal onHide={() => setopenproductdetail(false)}
        draggable={true} resizable={true}>

        <div id="pr_id_5_content" className="p-dialog-content" style={{ paddingTop: '1rem' }}>
          <div className="grid relative">
            <div className="col-12 lg:col-6 text-center ">

              <Galleria value={selecteditem.imagesdetail} numVisible={5} circular style={{ maxWidth: '640px' }}
                showItemNavigators showThumbnails={false} showItemNavigatorsOnHover showIndicators item={(e) => {
                  return (
                    <img src={e.image} alt='none' className='w-full ' style={{ objectFit: 'cover', height: '400px' }} />
                  )
                }} thumbnail={thumbnailTemplate} />
            </div>
            <div className="col-12 lg:col-6 py-0 lg:pl-5">
              <div className="flex align-items-center justify-content-between mb-3"><span className="text-xl font-medium text-900">{selecteditem.name}</span></div>
              <div className="flex align-items-center justify-content-between mb-3">
                <div className="text-xl text-900">{selecteditem.price} da</div>
                <div className="flex align-items-center"><span className="mr-3 flex"><i className="pi pi-star-fill text-yellow-500 mr-1" /><i className="pi pi-star-fill text-yellow-500 mr-1" /><i className="pi pi-star-fill text-yellow-500 mr-1" /><i className="pi pi-star-fill text-yellow-500 mr-1" /><i className="pi pi-star-fill text-yellow-500" /></span></div>
              </div>
              <p className="p-0 mt-0 mb-3 line-height-3 text-700">{selecteditem.description}</p>
              <div className="font-bold text-900 mb-3">Couleurs</div>
              <div className="flex align-items-center mb-5">
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-cyan-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" style={{ boxShadow: '0 0 0 0.2rem var(--cyan-500)' }} />
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-purple-500 mr-3 cursor-pointer border-2 border-white transition-all transition-duration-300" />
                <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-indigo-500 cursor-pointer border-2 border-white transition-all transition-duration-300" /></div>
              <div className="mb-3 flex align-items-center justify-content-between"><span className="font-bold text-900">Size l</span><a tabIndex={0} className="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i className="ml-1 pi pi-angle-right" /></a></div>
              <div className="flex align-items-center mb-3 text-base">
                <div className="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">S</div>
                <div className="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500">M</div>
                <div className="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">L</div>
                <div className="h-2rem w-2rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-2 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">XL</div>
              </div>
              <button aria-label="Add to Cart" className="p-button p-component w-full"><span className="p-button-icon p-c p-button-icon-left pi pi-shopping-cart" /><span className="p-button-label p-c">Add to Cart</span><span role="presentation" className="p-ink" /></button>
            </div>
          </div>
        </div>

      </Dialog >


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

        <Toast ref={toast} />
        <div className="card">
          <DataView
            value={products.filter((item: any, index: number) => item.name.includes(search) && categoryselected.indexOf(item.category) !== -1)}
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
