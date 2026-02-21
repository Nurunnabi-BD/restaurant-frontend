import image from "../assets/not.gif";

const Erorr = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={image} alt="Error" className="w-200 mb-4" />
      </div>
    </>
  );
};
export default Erorr;
