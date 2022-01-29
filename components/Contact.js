export default function Contact() {
  return (
    <section className="container mx-auto relative">
      <div className="mx-4 sm:mx-0 border-2 border-red-700 pt-12">
        <div className="uppercase text-2xl bg-black p-3 absolute -top-7 left-16">
          <p>contact me</p>
        </div>
        <div className="grid mx-3 sm:mx-0 sm:grid-cols-2 sm:gap-4 md:gap-8">
          <div className="lg:p-5 sm:p-3 p-2 grid-cols-1 grid border-red-700 border-2 items-center md:ml-4 mx-5 mb-12 gap-5 relative">
            <input
              className="px-3 bg-neutral-800 outline-none h-12 max-w-sm required:border-red-500 rounded-sm"
              for="name"
              id="name"
              placeholder="Name"
            ></input>
            <input
              className="px-3 bg-neutral-800 outline-none h-12 max-w-sm required:border-red-500 rounded-sm"
              for="name"
              id="name"
              type="email"
              placeholder="Email"
            ></input>
            <textarea
              className="px-3 bg-neutral-800 outline-none h-24 max-w-sm required:border-red-500 rounded-sm mb-12"
              for="name"
              id="name"
              type="text-area"
              placeholder="Somethings here.."
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 rounded-sm max-w-max py-2 px-3 absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-5"
            >
              <img className="sm:w-6 w-5" src="/assets/send.svg" />
            </button>
          </div>
          <div>
            <p className="p-2 bg-neutral-900 max-w-min">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7368754938248!2d111.84701346414357!3d-6.801831168413994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7709dbb9b3eca7%3A0x2632740ff2766c2b!2sKenanti%2C%20Kec.%20Tambakboyo%2C%20Kabupaten%20Tuban%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1643384519068!5m2!1sid!2sid"
                className="md:w-80 sm:w-64"
              ></iframe>
            </p>
            <div className="my-5 mx-2 text-sm tracking-wide text-gray-400">
              <p>Street Bhayangkara 23</p>
              <p>Tambakboyo 62353</p>
              <p>Tuban Jawa Timur</p>
              <p>Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
