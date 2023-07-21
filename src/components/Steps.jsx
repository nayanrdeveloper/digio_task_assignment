function Steps() {
  return (
    <div className="">
      <div className="flex flex-row justify-between px-2 py-2">
        {/* Powered by */}
        <div className="flex items-center space-x-2">
          <div>
            <img
              src="/digio_logo.jpg"
              alt="Digio Logo"
              className="w-full h-12"
            />
          </div>
          <div>
            <p className="text-gray-400">Powered By</p>
            <p className="text-blue-700">www.digio.in</p>
          </div>
        </div>
        {/* Steps */}
        <div>
          <p>
            <span>1</span>/ <span>3</span>steps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
