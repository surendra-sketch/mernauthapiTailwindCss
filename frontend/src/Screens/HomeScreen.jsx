import React from "react";

const HomeScreen = () => {
  return (
    <div className=" text-center bgtop bg-slate-100 p-3 h-screen">
      <div className=" bg-transparent  text-white flex justify-start content-start items-center bg-slate-100 p-3 h-screen">
        <section className="dsc  ">
          <h1 className="dsc w-3/4 m-auto capitalize lg:text-7xl text-3xl  drop-shadow-lg font-bold">
            Let's see amazing feature of this app <br /> where user can perform
            CRUD operation and much more...
          </h1>
          <div className="dec text-2xl p-4 rounded-lg  bg-black w-2/4 m-auto mt-16">
            <h3>This is a full crud mern app </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
