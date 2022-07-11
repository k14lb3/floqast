export const Demo = () => {
  return (
    <div className="grid sm:grid-rows-2 lg:grid-rows-none grid-cols-1 lg:grid-cols-8 bg-white w-full rounded-md mt-auto">
      <div className="flex row-span-1 lg:col-span-3 ">
        <div className="flex flex-col flex-grow justify-center items-center bg-green text-white text-center p-4 rounded-tl-md rounded-bl-md">
          <h2 className="text-3xl">SCHEDULE A DEMO</h2>
          <p className="text-xl">Learn More About FloQast.</p>
        </div>
        <div className="hidden lg:block border-t-[3.2rem] border-t-[transparent] border-l-[1.25rem] border-l-green border-b-[3.2rem] border-b-[transparent]"></div>
      </div>
      <div className="row-span-1 lg:col-span-5 flex flex-col space-y-4 w-full p-4">
        <div className="flex flex-col md:flex-row w-full justify-center text-center text-gray text-xl">
          <h2>Learn How FloQast Can</h2>
          <h2 className="md:pl-2 text-green">Improve Your Month-End</h2>
        </div>
        <div className="flex flex-col sm:flex-row  w-full justify-between space-y-4 sm:space-y-0 sm:space-x-4 px-10 md:px-20 lg:px-0">
          <input className="input" type="text" placeholder="First Name*" />
          <input className="input" type="text" placeholder="Email*" />
          <button className="btn">SCHEDULE NOW</button>
        </div>
      </div>
    </div>
  );
};
