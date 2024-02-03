import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PopupModal = () => {
  useEffect(() => {
    // Delay the opening of the modal by 1.5 seconds
    setTimeout(() => {
      // Open the modal after the delay
      document.getElementById("my_modal_4").showModal();
    }, 1500);

    // Cleanup function to close the modal when the component unmounts
    // return () => {
    //   document.getElementById("my_modal_4").close();
    //   // Clear the timeout to avoid opening the modal after component unmounts
    //   clearTimeout(timeoutId);
    // };
  }, []);

   const imageLink = '/cart' 
   const imageUrl = 'https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg'



  return (
    <div className="modal-overlay text-center">
      {/* No need for the button to open the modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* Add an image tag here with the source of your image */}
          <Link to={imageLink} onClick={()=> document.getElementById("my_modal_4").close()} > 
          <img
            src={imageUrl}
            alt="Modal Image"
            className="w-full h-auto"
          />
           </Link>

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
