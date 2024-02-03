import React, { useEffect } from "react";

const PopupModal = () => {
   useEffect(() => {
    // Delay the opening of the modal by 1.5 seconds
    const timeoutId = setTimeout(() => {
      // Open the modal after the delay
      document.getElementById("my_modal_4").showModal();
    }, 1500);

    // Cleanup function to close the modal when the component unmounts
    return () => {
      document.getElementById("my_modal_4").close();
      // Clear the timeout to avoid opening the modal after component unmounts
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="modal-overlay text-center">
      {/* No need for the button to open the modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold text-xl pb-4">
            Your Exclusive Pass to Savings! Shop Now and Save Big!!
          </h1>
          {/* Add an image tag here with the source of your image */}
          <img
            src="https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg"
            alt="Modal Image"
            className="w-full h-auto"
          />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PopupModal;
