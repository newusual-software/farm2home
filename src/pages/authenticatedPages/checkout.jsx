import { StepperWithContent } from "../../components/atoms/stepper/stepper";
import DefaultLayout from "../../layouts/defaultLayout";
import { useState } from "react";

export default function Checkout() {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  return (
    <DefaultLayout>
      <div className="text-black text-[40px] text-center my-3 font-bold font-workSans">Checkout</div>
      <div className="mb-20">
        <StepperWithContent/>
      </div>     
      
    </DefaultLayout>
  )
}
