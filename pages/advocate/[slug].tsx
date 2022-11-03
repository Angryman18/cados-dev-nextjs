import axios from "axios";
import { requestToBodyStream } from "next/dist/server/body-streams";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getAdvocate } from "../../service/advocates.api";

const Advocate = () => {
  const router = useRouter();
  const {slug} = router.query;
  useEffect((): void => {
    const getInfo = async (): Promise<any> => {
      return await  getAdvocate(slug);
    };
    getInfo();
    // console.log(slug);
  }, []);
  
  return <div>
     <button >Click</button>
  </div>;
};

export default Advocate;
