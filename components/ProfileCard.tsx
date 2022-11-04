import { Advocates } from "../types/advocates";
import twitterIcon from "../assets/twitter.png";
import Image from "next/image";
import useCounter from "../hooks/useCounter";
import { useRouter } from "next/router";

interface Props {
  advocate: Advocates;
}

const ProfileCard = ({ advocate }: Props) => {
  const [counter] = useCounter();
  const router = useRouter();

  const handleCardClick = (advocate: Advocates): void => {
    router.push(`/advocate/${advocate.username}`);
  };

  return (
      <div
        onClick={handleCardClick.bind(null, advocate)}
        className="p-3 px-4 m-2 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-[#000000] text-white duration-150 backdrop-blur-2xl  md:w-96 w-full shadow-2xl shadow-[#000000] rounded-xl "
      >
        <div className="flex flex-col  items-center justify-center space-y-5">
          <div className="border rounded-full p-3.5 border-gray-500 hover:border-gray-100">
            <img
              src={advocate.profile_pic}
              alt="profilePic"
              className="w-16 h-16 border-2 border-white rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center">
            <span className="block font-bold text-md">{advocate.name}</span>
            <span className="bg-[#444444] text-x px-2.5 py-0.5 text-sm bg-opacity-50 text-white shadow-md rounded-lg">
              {advocate.username}
            </span>
          </div>
        </div>
        {/* <hr className="my-4 border border-slate-300" /> */}
        <div className="flex flex-col justify-center items-center space-y-6 mt-5">
          <div className="flex text-center text-gray-300  hover:text-white">
            {advocate.bio}
          </div>
          <div className="my-2 flex gap-x-2 items-center">
            <Image
              src={twitterIcon}
              className="w-8 h-8 drop-shadow"
              alt="twitter"
            />
            <span className="font-semibold">
              {counter(advocate.follower_count)}
            </span>
          </div>
        </div>
      </div>
  );
};

export default ProfileCard;
