import { useSelector } from "react-redux";
import { Button, Radio, Typography } from "@material-tailwind/react";
import { PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import Delivery from "../delivery/delivery";
import { useState } from "react";

export default function AddressBook() {
  const { delivery } = useSelector((state) => state.delivery);
  const [showDelivery, setShowDelivery] = useState(false); 
  console.log(delivery);
  let fullName = delivery.first_name + " " + delivery.last_name;
  const handleAddAddressClick = () => {
    setShowDelivery(true); // Set state to true when the button is clicked
  };
  return (
    <div className="flex flex-col gap-8 my-5">
    
{ showDelivery === false ?  (<><div className="flex justify-between items-center border rounded-lg p-3 border-mainGreen">
        <div>
          <Radio
            name="description"
            color="green"
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  {fullName}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {delivery.address}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {delivery.phone_number}
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
        </div>

        <div>
          <PencilSquareIcon className="w-6 h-6 text-mainGreen" />
        </div>
      </div>
      <div>
      <Button onClick={handleAddAddressClick} variant="text" className="flex text-mainGreen  items-center gap-2 w-[10rem]">
        <PlusIcon className=" text-mainGreen w-6 h-5"/>
        <div>
        Add Address
        </div>
      </Button>
      </div></>) : <Delivery/>}
    </div>
  );
}
