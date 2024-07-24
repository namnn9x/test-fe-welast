import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ICommitter {
  name: string;
  date: string;
  message: string;
}

export const useRepoDetail = () => {
  const { name } = useParams();
  const [infoCommit, setInfoCommit] = useState<ICommitter>();

  useEffect(() => {
    void (async () => {
      try {
        const urlCommit = `https://api.github.com/repos/freeCodeCamp/${name}/commits`;
        const res = await axios.get(urlCommit);
        if (!res.data) return;

        const { committer, message } = res.data[0].commit;
        setInfoCommit({
          name: committer?.name,
          date: committer?.date,
          message,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return {
    infoCommit,
  };
};
