import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { app } from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const signIn = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-4/6 md:w-3/6 lg:w-2/6">
          <h1 className="flex sm:text-base items-center justify-center m-8 lg:text-4xl font-semibold ">
            WELCOME BACK
          </h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              className="w-full p-2 border border-gray-500 bg-gray-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              className="w-full p-2 border border-gray-500 bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-2/4 px-6 py-3 my-6 font-light text-lg text-white bg-red-500 rounded-sm shadow "
                onClick={signIn}
              >
                SIGNIN
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm">
              By signing-in you agree to the You Shop Website Conditions of Use
              & Sale.
            </p>

            <p className="m-6 text-sm">
              <span>Don't have an account? </span>
              <Link to="/accounts/signup" className="hover:text-red-500">
                Create an account here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-8 xl:mx-10 my-[7rem]">{/* <Banner /> */}</div>
    </div>
  );
}

export default Login;
