const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group  flex flex-col items-center hover:cursor-pointer w-12 md:w-20 ">
      <Icon className="h-8 mb-1 group-hover:text-white group-hover:animate-bounce" />
      <p className="tracking-widest group-hover:text-white opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
