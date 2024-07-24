import { useRepoDetail } from "../../hooks/useRepoDetail";
import { CommitDetailsItem } from "./CommitDetailsItem";


const CommitDetails = () => {
  const { infoCommit } = useRepoDetail();
  if (!infoCommit) return null
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Information Commit</h2>
          <CommitDetailsItem name='Name' value={infoCommit?.name}/>
          {infoCommit?.date && <CommitDetailsItem name='Date' value={new Date(infoCommit.date).toString()}/>}
          <CommitDetailsItem name='Message' value={infoCommit?.message}/>
        </div>
      </div>
    </div>
  );
};

export default CommitDetails;
