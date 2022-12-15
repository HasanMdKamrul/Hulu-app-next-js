import Image from "next/image";
import {
  HiOutlineCollection,
  HiOutlineLightningBolt,
  HiOutlineSearch,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineCheckBadge, HiOutlineHome } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

const itemsHeader = [
  {
    id: 1,
    title: "HOME",
    icon: HiOutlineHome,
  },
  {
    id: 2,
    title: "TRENDING",
    icon: HiOutlineLightningBolt,
  },
  {
    id: 3,
    title: "VERIFIED",
    icon: HiOutlineCheckBadge,
  },
  {
    id: 4,
    title: "COLLECTIONS",
    icon: HiOutlineCollection,
  },
  {
    id: 5,
    title: "SEARCH",
    icon: HiOutlineSearch,
  },
  {
    id: 6,
    title: "ACCOUNT",
    icon: HiOutlineUser,
  },
];

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row  items-center m-5 justify-between">
      <div className="flex md:flex-grow-1  justify-evenly md:max-w-2xl ">
        {itemsHeader?.map((item) => (
          <HeaderItem key={item.id} title={item.title} Icon={item.icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
};

export default Header;
