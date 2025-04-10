
import Link from "next/link"
import ImageMotion from "../motion/ImageMotion"
import { FaGoogle, FaFacebook } from "react-icons/fa"

const Login = () => {
  return (
    <div className="bg-sectionbg pt-12">
      <div className="container py-10 md:py-20">
        <ImageMotion>
          <div className="flex items-center justify-center flex-col">
            <div className="font-aviano-regular uppercase text-center w-full md:max-w-[70%] ">
              <h2 className="text-2xl md:text-4xl font-semibold text-center flex justify-center">Join the Shopping</h2>
              <h2 className="text-base md:text-xl font-semibold mt-3 ">
                Enjoy exclusive VIP benefits that give you access to a trendy and diverse catalog. Be the first to
                discover and adopt the latest market trends, making you a true fashion expert! Start shopping now and
                elevate your style!
              </h2>
            </div>
          </div>
        </ImageMotion>
        <div className=" mt-12 flex justify-center ">
          <ImageMotion>
            <form className="!max-w-4xl font-aviano-regular uppercase">
              <div className="my-6 !w-full">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="text"
                    id="email-address-icon"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600  outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="my-6">
                <div className="!w-full">
                  <input
                    autoComplete="off"
                    type="password"
                    id="password-icon"
                    className="bg-white border border-black text-sm md:text-lg rounded !w-full pl-4 py-3 placeholder-gray-600  outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="mb-6">
                <button className="text-base md:text-lg rounded w-full py-3  outline-none bg-primary text-white hover:bg-primary/80 transition duration-300">
                  Log In
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
              {/* Create Account Section */}
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-black font-semibold hover:underline">
                    CREATE ACCOUNT
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

export default Login

