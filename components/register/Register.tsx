import ImageMotion from "../motion/ImageMotion"
import { FaGoogle, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const Register = () => {
  return (
    <div className="bg-sectionbg pt-12">
      <div className="container py-10 md:py-20">
        <ImageMotion>
          <div className="flex items-center justify-center flex-col">
            <div className="font-aviano-regular uppercase text-center w-full md:max-w-[70%] ">
              <h2 className="text-2xl md:text-4xl font-semibold text-center flex justify-center">Create Account</h2>
              <h2 className="text-base md:text-xl font-semibold mt-3 ">
                Join our exclusive shopping community and get access to the latest trends, special offers, and a
                personalized shopping experience. Create your account now and start your style journey!
              </h2>
            </div>
          </div>
        </ImageMotion>
        <div className="w-full md:max-w-[70%] mx-auto mt-12 flex justify-center">
          <ImageMotion>
            <form className="!w-full font-aviano-regular uppercase">
              <div className="my-6">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="text"
                    id="name"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600 outline-none"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="my-6">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="email"
                    id="email"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600 outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="my-6">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="tel"
                    id="mobile"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600 outline-none"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="my-6">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="password"
                    id="password"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600 outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="mb-6">
                <button className="text-base md:text-lg rounded w-full py-3 outline-none bg-primary text-white hover:bg-primary/80 transition duration-300">
                  Create Account
                </button>
              </div>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  className="flex items-center justify-center text-base md:text-lg rounded w-full py-3 outline-none bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-300"
                >
                  <FaGoogle className="mr-2" /> Continue with Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center text-base md:text-lg rounded w-full py-3 outline-none bg-black text-white hover:bg-black/80 transition duration-300"
                >
                  <FaFacebook className="mr-2" /> Continue with Facebook
                </button>
              </div>

              {/* Login Link Section */}
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  Already have an account?{" "}
                  <Link href="/login" className="text-black font-semibold hover:underline">
                    LOG IN
                  </Link>
                </p>
              </div>
            </form>
          </ImageMotion>
        </div>
      </div>
    </div>
  )
}

export default Register

