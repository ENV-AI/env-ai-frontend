import { FaRegCheckCircle } from "react-icons/fa";

const Prediction = () => {
  return (
    <div className="my-5 text-white">
      <h1 className="mb-1">Prediction</h1>
      <div className="text-gray-400 p-3 bg-slate-900 rounded-lg">
        <div className="flex justify-start items-center gap-2">
          <FaRegCheckCircle className="text-white" />
          <text>Temperature Prediction</text>
        </div>
        <div className="flex justify-start items-center gap-2">
          <FaRegCheckCircle className="text-white" />
          <text>Rain Prediction</text>
        </div>
        <div className="flex justify-start items-center gap-2">
          <FaRegCheckCircle className="text-white" />
          <text>Other Prediction</text>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
