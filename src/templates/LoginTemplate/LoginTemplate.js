import { Route } from "react-router-dom";

export const LoginTemplate = (props) => {
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <section
              className="w-full h-screen text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=1280")',
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div className="lg:w-3/6 lg:pr-0 pr-0">
                  <h1 className="font-medium text-5xl text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <p className="leading-relaxed mt-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <Component {...propsRoute} />
              </div>
            </section>
          </>
        );
      }}
    />
  );
};
