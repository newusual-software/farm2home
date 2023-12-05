import { useState } from "react";
import { FaqList } from "../../../data/faqs/faqList";
import FaqItem from "./faqItems";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id]
    });
  };

    return ( 
        <>
        {FaqList.map((list) => (
          <FaqItem
            key={list.id}
            list={list}
            isOpen={isOpen}
            handleClick={handleClick}
          />
        ))}
      </>
     );
}
 
export default Faq;