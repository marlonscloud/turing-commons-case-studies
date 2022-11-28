import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-28 p-4"
                        src="logo.png"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Turing Commons</h4>
                    </div>
                    <LoginForm />
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-b from-emerald-500 to-teal-500"
                >
                  <div className="text-white p-12 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      “You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream.”
                    </h4>
                    <p className="text-sm">
                      Michael Dell, founder and CEO of Dell Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
