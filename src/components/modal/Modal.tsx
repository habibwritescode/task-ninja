// const Modal = ({ children, cancel, open }) => {
const Modal = () => {
  return (
    <div>
      {/* {open && ( */}
      <div
        className="fixed bg-black inset-0 z-10 opacity-[40%]"
        // onClick={cancel}
      ></div>
      {/* )} */}

      <div className="bg-white max-h-max p-6 fixed z-20 inset-x-0 bottom-0 rounded-t-3xl">
        {/* {children} */}
      </div>
    </div>
  );
};

export default Modal;
