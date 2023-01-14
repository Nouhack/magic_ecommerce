
const MenubarDemo = () => {
  return (

    <div className="grid grid-nogutter -ml-3 -mr-3">
      <div className="col-12 lg:col-6 p-3">
        <div
          className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1552337557-45792b252a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
            minHeight: "40rem"
          }}
        >
          <div className="p-4 align-self-start">
            <div className="text-white text-2xl font-bold mb-2">Category Title</div>
            <span className="text-white text-lg line-height-3">
              Quis varius quam quisque id diam. A pellentesque sit amet porttitor
              eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.
            </span>
          </div>
          <div className="p-4 align-self-end">
            <a
              tabIndex={0}
              className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
            >
              Shop Now
              <i className="pi pi-fw pi-arrow-right text-2xl ml-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-6">
        <div className="grid grid-nogutter lg:flex-column">
          <div className="col-12 p-3">
            <div
              className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem"
              style={{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1558961925-296af3f9fefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              }}
            >
              <div className="p-4 align-self-start">
                <div className="text-white text-2xl font-bold mb-2">
                  Category Title
                </div>
                <span className="text-white text-lg line-height-3">
                  Quis varius quam quisque id diam
                </span>
              </div>
              <div className="p-4 align-self-end">
                <a
                  tabIndex={0}
                  className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                >
                  Shop Now
                  <i className="pi pi-fw pi-arrow-right text-2xl ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 p-3">
            <div
              className="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover bg-center h-20rem"
              style={{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1548366565-b81d0aa77d2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
              }}
            >
              <div className="p-4 align-self-start">
                <div className="text-white text-2xl font-bold mb-2">
                  Category Title
                </div>
                <span className="text-white text-lg line-height-3">
                  Vitae purus faucibus ornare
                </span>
              </div>
              <div className="p-4 align-self-end">
                <a
                  tabIndex={0}
                  className="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
                >
                  Shop Now
                  <i className="pi pi-fw pi-arrow-right text-2xl ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MenubarDemo
