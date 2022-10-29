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
    router.push(`?username=${advocate.username}`);
  };

  return (
    <div
      onClick={handleCardClick.bind(null, advocate)}
      className='p-2 px-4 m-2 cursor-pointer hover:scale-110 hover:shadow-xl text-white duration-150 bg-gradient-to-r from-blue-600 to-cyan-300  md:w-96 w-full shadow-md rounded-xl'
    >
      <div className='flex flex-row gap-x-4 items-center'>
        <img
          src={advocate.profile_pic}
          alt='profilePic'
          className='w-16 h-16 border-2 border-white rounded-full'
        />
        <div className=''>
          <span className='block font-bold text-lg'>{advocate.name}</span>
          <span className='bg-[#444444] text-x px-2.5 py-0.5 text-sm bg-opacity-50 text-white shadow-md rounded-lg'>
            {advocate.username}
          </span>
        </div>
      </div>
      <hr className='my-4 border border-slate-300' />
      <div>{advocate.bio}</div>
      <div className='my-2 flex gap-x-2 items-center'>
        <Image src={twitterIcon} className='w-8 h-8 drop-shadow' alt='twitter' />
        <span className='font-semibold'>{counter(advocate.follower_count)}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
