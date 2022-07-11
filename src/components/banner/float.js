export const Float = () => {
  return (
    <div className="absolute w-full py-8 px-8 lg:px-0 top-32 bg-gradient-to-r from-white opacity-90">
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-end">
          <img
            className="h-[65px] w-[256px]"
            src="/static/images/logo.png"
            alt="logo"
          />
          <h3 className="text-3xl text-gray font-roboto font-normal italic pl-2">The</h3>
        </div>
        <h2 className="text-4xl text-green italic">Fastest, Most Accurate</h2>
        <h3 className="text-3xl text-gray font-roboto font-normal  italic">
          Way to Close Your Books!
        </h3>
      </div>
    </div>
  );
};
