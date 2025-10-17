import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="scale-90 min-[400px]:scale-100 md:scale-110 lg:scale-120">
        <HashLoader color="#262626" loading size={36} />
      </div>
    </div>
  );
}
