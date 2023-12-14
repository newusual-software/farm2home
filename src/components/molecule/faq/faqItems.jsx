const FaqItem = ({ list, handleClick, isOpen }) => {
  return (
    <div className="pt-4">
      <div className="overflow-hidden w-full text-[#000] flex flex-col justify-center items-center">
        <div
          onClick={() => handleClick(list.id)}
          className="flex justify-between cursor-pointer items-center bg-white px-4 py-2 w-[80%] "
        >
          <p className="text-[1.5rem]">{list.question}</p>
          <button className="text-[#000] text-[2rem]">
            {isOpen[list.id] ? "-" : "+"}
          </button>
        </div>
        {isOpen[list.id] ? (
          <p className="text-[1.4rem] bg-white p-4 w-[80%] border-t-2 border-mainGreen ">
            {list.answer}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default FaqItem;
