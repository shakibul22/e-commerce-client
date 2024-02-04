import { MdPending } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { GiFinishLine } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { FaTruckMoving } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { ImLocation2 } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";

const OrderTracker = () => {
  return (
    <div className=" w-full lg:max-w-6xl mx-auto px-2 py-10 ">
      <div className="text-center font-bold pt-4">OrderTracker</div>
      <div className="font-bold pb-2 border-b-2 border-cyan-500 flex justify-between">
        <div>Order ID: #20281e</div>
        <div>Price : 123 BDT</div>
      </div>
      <div className="flex px-10 items-start= mt-6 py-10">
        <div className="h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
          <AiFillHome className="size-6" />
          Home
        </div>
        <div className="px-4 py-2">--------------------------------</div>
        <div className="h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
          <ImLocation2 className="size-6" />
          Mirpur 10
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="flex flex-col px-5 items-center mt-6">
          <div className=" h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
            <GoChecklist className="size-6 " />
          </div>
          <div className=" pt-3">Order Placed</div>
        </div>
        <div className="py-10">----------</div>

        <div className="flex flex-col px-5 items-center mt-6">
          <div className=" h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
            <BsCartCheck className="size-6" />
          </div>
          <div className=" flex flex-row  gap-2 pt-3 ">
            Order Acepted
            <button>
              <AiFillCheckCircle className="mr-2 size-5  text-cyan-500" />
            </button>
            <button>
              <MdPending className="mr-2 size-5  text-cyan-500" />
            </button>
          </div>
        </div>
        <div className="py-10">---------</div>
        <div className="flex flex-col px-5 items-center mt-6">
          <div className=" h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
            <FaTruckMoving className="size-6" />
          </div>
          <div className="pt-3">Preparing Items </div>
        </div>

        <div className="py-10">----------</div>

        <div className="flex flex-col px-5 items-center mt-6">
          <div className=" h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
            <GrMapLocation className="size-6" />
          </div>
          <div className="pt-3">Order is on the Way to you!</div>
        </div>

        <div className="py-10">----------</div>

        <div className="flex flex-col px-5 items-center mt-6">
          <div className=" h-10 w-30 bg-cyan-200 rounded px-1 pt-2 pb-2 flex items-center">
            <GiFinishLine className="size-6" />
          </div>
          <div className="pt-3">Order Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;
