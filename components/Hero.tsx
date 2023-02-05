const MenubarDemo = (props: any) => {
  return (
    <div
      className={`flex flex-wrap surface-section px-4 py-5 md:px-6 lg:px-8 ${
        props.default_language === "ar" && "text-right"
      }`}
    >
      {props.default_language === "ar"
        ? [
            <div
              key={1}
              className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8 surface-900"
            >
              <div className="text-4xl text-0 mb-3 font-medium">
                {props.lan.banner.title}
              </div>
              <p className="line-height-3 mt-0 mb-7 p-0 text-0 text-xl">
                {props.lan.banner.description}
              </p>
              <a
                tabIndex={0}
                className="p-ripple text-xl cursor-pointer surface-card text-900 text-center px-5 py-3 border-1 border-gray-200 hover:text-primary transition-duration-150 select-none block w-12rem"
              >
                {props.lan.banner.button_label}
              </a>
            </div>,
            <div
              key={2}
              className="w-full md:w-6 bg-no-repeat bg-cover"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80")',
                minHeight: 400,
              }}
            />,
          ]
        : [
            <div
              key={1}
              className="w-full md:w-6 px-4 py-8 md:px-6 lg:px-8 surface-900"
            >
              <div className="text-4xl text-0 mb-3 font-medium">
                {props.lan.banner.title}
              </div>
              <p className="line-height-3 mt-0 mb-7 p-0 text-0 text-xl">
                {props.lan.banner.description}
              </p>
              <a
                tabIndex={0}
                className="p-ripple text-xl cursor-pointer surface-card text-900 text-center px-5 py-3 border-1 border-gray-200 hover:text-primary transition-duration-150 select-none block "
              >
                {props.lan.banner.button_label}
              </a>
            </div>,
            <div
              key={2}
              className="w-full md:w-6 bg-no-repeat bg-cover"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80")',
                minHeight: 400,
              }}
            />,
          ].reverse()}
    </div>
  );
};
export default MenubarDemo;
