export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto sm:py-36 mt-20 sm:mt-16 min-h-max"
    >
      <div className="flex gap-2 sm:gap-3 md:gap-5 my-auto flex-col-reverse sm:flex-row">
        <div className="sm:w-6/12 my-auto flex flex-row sm:flex-col mt-12 sm:mt-0 gap-2 lg:translate-y-10 md:translate-y-12">
          <div className="bg-neutral-900 px-4 md:px-10 py-5 mb-2 tracking-wider inline-block">
            <div className="flex mb-3">
              <span className="border border-red-700 rounded-full w-2 h-2 mr-2 sm:mr-4 my-auto" />
              <p className="text-red-800 font-semibold">Design</p>
            </div>
            <p className="ml-6">
              design UI/UX web or mobile application beautiful and attractive
            </p>
          </div>
          <div className="bg-neutral-900 px-4 md:px-10 py-5 mb-2 tracking-wider inline-block">
            <div className="flex mb-3">
              <span className="border border-red-700 rounded-full w-2 h-2 mr-2 sm:mr-4 my-auto" />
              <p className="text-red-800 font-semibold">Design</p>
            </div>
            <p className="ml-6">
              design UI/UX web or mobile application beautiful and attractive
            </p>
          </div>
        </div>
        <div className="mx-6 sm:mx-0 sm:w-6/12 bg-neutral-900 text-center px-7 sm:px-12 py-6 shadow-3d">
          <h3 className="text-red-700 font-semibold sm:mb-16 mb-7 md:mb-20 text-lg">
            About me
          </h3>
          <p className="md:mb-20">
            I'm Helka, I'm a student at the University of Amikom Yogyakarta and
            I majored in informatics and focused on web development and design.
            I come from Tuban Indonesia. my goal is to become an expert in web
            development
          </p>
        </div>
      </div>
    </section>
  );
}
