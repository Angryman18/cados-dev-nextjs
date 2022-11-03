import axios from "axios";
import millify from "millify";
import { requestToBodyStream } from "next/dist/server/body-streams";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAdvocate } from "../../service/advocates.api";

const Advocate = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [user, setuser] = useState<any>(null);

  useEffect((): void => {
    const getInfo = async (): Promise<any> => {
      let result = await getAdvocate(slug);
      setuser(result);
    };
    getInfo();
  }, []);

  console.log(user);
  return (
    <>
      {user ? (
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 text-white">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl backdrop-blur-3xl shadow-[#000] opacity-75 mx-6 lg:mx-0 hover:scale-105 cursor-pointer"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {user.advocate.name}
              </h1>
              <h3 className="text-md font-bold pt-8 lg:pt-0">
                @{user.advocate.username}
              </h3>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold  items-center  lg:justify-start flex space-x-1">
                <h1>Followers:</h1>
                <h2>{millify(user.advocate.follower_count)}</h2>
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"></p>
              <p className="pt-8 text-sm text-gray-300 hover:text-white">{user.advocate.bio}</p>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  href="#"
                  data-tippy-content="@twitter_handle"
                >
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-900"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <Image
              alt=""
              src={user.advocate.profile_pic}
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-full h-[400px]"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button className="js-change-theme focus:outline-none">🌙</button>
          </div>
        </div>
      ) : (
        <p>hey</p>
      )}
    </>
  );
};

export default Advocate;
