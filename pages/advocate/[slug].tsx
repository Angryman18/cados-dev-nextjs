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
        <section className="pt-36 bg-blueGray-50 border">
          <div className="w-full lg:w-4/12 px-4 mx-auto text-white">
            <div className="relative flex flex-col min-w-0 break-words backdrop-blur-3xl w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6 flex flex-col">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                      <img
                        alt=""
                        src={user.advocate.profile_pic}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px "
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-center mt-12 ">
                      <div className="text-md font-semibold leading-normal mb-2 text-blueGray-700 ">
                        {user.advocate.name}
                        <div>
                          <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            @{user.advocate.username}
                          </div>
                          <div className="mb-2 text-blueGray-600 mt-10">
                            <a href={user.advocate.twitter}>Twitter</a>
                          </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                          <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                {millify(user.advocate.follower_count)}
                              </span>
                              <span className="text-sm text-blueGray-400">
                                Followers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {user.advocate.bio}
                        </p>
                        <a
                          href="javascript:void(0);"
                          className="font-normal text-pink-500"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>hey</p>
      )}
    </>
  );
};

export default Advocate;
