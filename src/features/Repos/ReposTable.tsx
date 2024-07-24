import { IRepo } from "../../services/repos";
import { ReposContent } from "./ReposContent";
import { ReposHeader } from "./ReposHeader";

export const ReposTable = ({ headers, repos }: { headers: string[], repos?: IRepo[] }) => {
  return (
    <table className="divide-y divide-gray-200 min-w-2xl m-auto mt-5">
      <ReposHeader headers={headers} />
      <ReposContent repos={repos} />
    </table>
  );
};


