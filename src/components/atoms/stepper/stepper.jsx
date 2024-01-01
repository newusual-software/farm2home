import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  CheckIcon,
  MapPinIcon,
  PlusIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
 
export function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(1);
  let navigate = useNavigate()
 
  return (
    <div className="w-full px-24 py-4">
      <Stepper
        activeStep={activeStep}
      >
        <Step onClick={() => {setActiveStep(0)
        navigate("/our-store")}}>
          {activeStep === 0 ? <PlusIcon className="h-5 w-5" /> : <CheckIcon className="h-5 w-5" />}
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "black" : "blue-gray"}
              className=" text-xl font-medium font-workSans"
            >
              Add Items
            </Typography>
            
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
        {activeStep === 1 ? <MapPinIcon className="h-5 w-5" /> : <CheckIcon className="h-5 w-5" />}   
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "black" : "blue-gray"}
            >
              Pick Location
            </Typography>
            
          </div>
        </Step>
        <Step>
          
          <ShoppingBagIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "black" : "blue-gray"}
            >
              Place Order
            </Typography>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}