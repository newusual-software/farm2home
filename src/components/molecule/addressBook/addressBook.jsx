import { useState } from 'react';
import { Button, Radio, Typography } from '@material-tailwind/react';
import { TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import Delivery from '../delivery/delivery';

export default function AddressBook({ handleDeliveryPrice, onAddressAdded }) {
  const [showAddressBook, setShowAddressBook] = useState(false);

  const getLocalStorageData = () => {
    const existingData = localStorage.getItem('deliveryData');
    return existingData ? JSON.parse(existingData) : [];
  };

  const [existingArray, setExistingArray] = useState(getLocalStorageData);

  const handleAddAddressClick = () => {
    setShowAddressBook(false);
  };

  const handleDeleteAddress = (index) => {
    // Create a copy of the existingArray
    const newArray = [...existingArray];
    // Remove the item at the specified index
    newArray.splice(index, 1);
    // Update state
    setExistingArray(newArray);
    // Update localStorage
    localStorage.setItem('deliveryData', JSON.stringify(newArray));
    onAddressAdded();
  };
  const handleAddressAdded = () => {
    // Update the existingArray in AddressBook component
    setExistingArray(getLocalStorageData());
    // Notify the parent component that an address has been added
    onAddressAdded();
    // Show the AddressBook component
    setShowAddressBook(true);
  };
  return (
    <div className="flex flex-col gap-8 my-5">
      {showAddressBook ? (
        <>
          {existingArray.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-lg p-3 border-mainGreen"
            >
              <div>
                <Radio
                  name="description"
                  color="green"
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-medium">
                        {item.first_name} {item.last_name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        {item.address}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        {item.phone_number}
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: '-mt-5',
                  }}
                />
              </div>

              <div>
                <TrashIcon
                  className="w-6 h-6 text-red-900 cursor-pointer"
                  
                  onClick={() => handleDeleteAddress(index)}
                />
              </div>
            </div>
          ))}
          <div>
            <Button
              onClick={handleAddAddressClick}
              variant="text"
              className="flex text-mainGreen items-center gap-2 w-[10rem]"
            >
              <PlusIcon className="text-mainGreen w-6 h-5" />
              <div>Add Address</div>
            </Button>
          </div>
        </>
      ) : (
        <Delivery onDeliveryPriceChange={handleDeliveryPrice} onAddressAdded={handleAddressAdded}/>
      )}
    </div>
  );
}
