export default function About() {
  return (
    <section id="about" className="container mx-auto py-36 h-screen">
      <div className="flex gap-5 my-auto">
        <div className="w-6/12 my-auto">
          <div className="bg-neutral-900 px-10 py-5 mb-2 tracking-wider inline-block">
            <div className="flex mb-3">
              <span className="border border-red-700 rounded-full w-2 h-2 mr-4 my-auto" />
              <p className="text-red-800 font-semibold">Design</p>
            </div>
            <p className="ml-6">
              design UI/UX web or mobile application beautiful and attractive
            </p>
          </div>
          <div className="bg-neutral-900 px-10 py-5 mb-2 tracking-wider inline-block">
            <div className="flex mb-3">
              <span className="border border-red-700 rounded-full w-2 h-2 mr-4 my-auto" />
              <p className="text-red-800 font-semibold">Design</p>
            </div>
            <p className="ml-6">
              design UI/UX web or mobile application beautiful and attractive
            </p>
          </div>
        </div>
        <div className="w-6/12 bg-neutral-900 text-center px-12 py-6 shadow-3d">
          <h3 className="text-red-700 font-semibold mb-20 text-lg">About me</h3>
          <p className="mb-12">
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
