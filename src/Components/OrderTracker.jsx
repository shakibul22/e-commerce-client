import { MdPending } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiFinishLine } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { FaTruckMoving } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";

export const Stepper = ({ steps, activeStep, onStepChange, activeColor, inactiveColor }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start ml-6 lg:ml-0 lg:items-center gap-8 justify-between mb-4 p-2 sm:border-l-8 lg:border-b-8 border-cyan-500">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === activeStep ? "active" : ""}`}
          style={{ color: index === activeStep ? activeColor : inactiveColor }}
          onClick={() => onStepChange(index)}
        >
          <div className="flex f items-center">
            {step.icon}
            <span className="ml-2">{step.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
 
 
const steps = [
  { name: "Home", icon: <AiFillHome className="size-6" /> },
  { name: "Mirpur 10", icon: <ImLocation2 className="size-6" /> },
  { name: "Order Placed", icon: <GoChecklist className="size-6" /> },
  { name: "Order Accepted", icon: <BsCartCheck className="size-6" /> },
  { name: "Preparing Items", icon: <FaTruckMoving className="size-6" /> },
  { name: "On the Way to You", icon: <GrMapLocation className="size-6" /> },
  { name: "Order Delivered", icon: <GiFinishLine className="size-6" /> },
];

const OrderTracker = () => {
  const [step, setStep] = useState(0);

  const handleStepChange = (index) => {
    setStep(index);
  };

  return (
    <div className="w-full lg:max-w-6xl mx-auto px-2 py-10 pt-16 lg:pt-32">
      <div className="text-center font-bold pt-4 pb-5">OrderTracker</div>
      <div className="font-bold pb-2  flex justify-between mb-8">
        <div>Order ID: #20281e</div>
        <div>Price: 123 BDT</div>
      </div>

      <Stepper
        steps={steps}
        activeStep={step}
        onStepChange={handleStepChange}
        activeColor="#4CAF50"
        inactiveColor="#e0e0e0"
      />

   
    </div>
  );
};

export default OrderTracker;