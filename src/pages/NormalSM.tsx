import ProductList from "../components/ProductList";

const NormalSM = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => {
              window.location.assign("/recoil");
            }}
            className="border-4 border-amber-300 m-2 p-2"
          >
            /recoilSM
          </button>
        </div>

        <h1 className="text-2xl text-center">Normal State Management</h1>
        <div className="flex flex-col">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default NormalSM;
