import { useRepos } from "../../hooks/useRepos";
import { ReposLanguages } from "./ReposLanguages";
import { ReposTable } from "./ReposTable";

const theads = ["name", "description", "language", "forks"];
const Repos = () => {
  const { repos, languages, handleClickLng } = useRepos();

  return (
    <div className="mt-8">
      <ReposLanguages languages={languages} handleClickLng={handleClickLng}/>
      <ReposTable headers={theads} repos={repos} />
    </div>
  );
};

export default Repos;
