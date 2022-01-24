export default function Works() {
  return (
    <section className="min-h-max relative">
      <div className="border-y-2 border-red-800 border-r-2 h-44 absolute top-0 left-0 translate-y-24 w-56" />
      <div className="container mx-auto">
        <div className="min-h-max">
          <h2 className="text-red-700 font-semibold text-center text-lg">
            What I Do
          </h2>
          <div className="flex gap-3 my-12">
            <div className="w-7/12 z-10 bg-black px-12 my-auto">
              <h3 className="text-center py-5">
                I can create a web application using react and next js with a
                single page application web view. responsive design, both mobile
                and desktop
              </h3>
            </div>
            <div className="w-5/12 border-l-2 border-red-800 px-12 py-10">
              <ul>
                <li className="mb-4">
                  <a href="">Web app with React Next</a>
                </li>
                <li className="mb-4">
                  <a href="">Web app with React Next</a>
                </li>
                <li className="mb-4">
                  <a href="">Web app with React Next</a>
                </li>
                <li>
                  <a href="">Web app with React Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
