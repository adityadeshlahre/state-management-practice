import ProductListR from "../components/ProductListR";

const RecoilSM = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => {
              window.location.assign("/");
            }}
            className="border-4 border-amber-300 m-2 p-2"
          >
            /normalSM
          </button>
        </div>

        <h1 className="text-2xl text-center">Recoil State Management</h1>
        <div className="flex flex-col">
          <ProductListR />
        </div>
      </div>
    </>
  );
};

export default RecoilSM;
