function Navbar() {
  return (
    <nav>
      <div className="flex justify-between px-3 py-1 bg-[#2554a0] items-center">
        {/* Sign In */}
        <div className="text-white">
          <p className="text-xl font-semibold">Sign document using</p>
          <p>sanket@digio.in</p>
        </div>
        {/* Logo */}
        <div>
          <img
            src="/generic-logo-hi.png"
            alt="Generic Logo"
            className="w-full h-10 bg-white p-1"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
