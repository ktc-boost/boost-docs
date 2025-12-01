const MainFooter = () => {
  return (
    <footer className="w-full border-t bg-white mt-10">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} BOOST Team. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a
              href="https://github.com/ktc-boost/boost-docs.git"
              target="_blank"
              className="hover:text-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
