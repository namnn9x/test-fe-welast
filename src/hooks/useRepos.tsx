import { useEffect, useRef, useState } from "react";
import { getRepos, IRepo } from "../services/repos";

export const useRepos = () => {
  const [repos, setRepos] = useState<IRepo[]>();
  const [languages, setLanguages] = useState<string[]>();
  const refFilteredByLanguage = useRef(new Map());
  const refRepo = useRef<IRepo[]>([]);

  const handleClickLng = (lng: string) => {
    if (lng === "ALL") {
      setRepos(refRepo.current);
      return
    }

    if (refFilteredByLanguage.current.has(lng)) {
      setRepos(refFilteredByLanguage.current.get(lng));
      return;
    }

    const filteredByLanguage = refRepo.current.filter(
      (repo) => repo.languages === lng
    );
    refFilteredByLanguage.current.set(lng, filteredByLanguage);
    setRepos(filteredByLanguage);
  };

  useEffect(() => {
    void (async () => {
      try {
        const response = await getRepos();
        const languages = response.data
          .filter((repo: IRepo) => !!repo.languages)
          .map((repo: IRepo) => repo.languages);

        setLanguages(Array.from(new Set(languages)));
        setRepos(response.data);
        refRepo.current = response.data;
      } catch (error) {
        console.log("Fetch repos error:", error);
      }
    })();
  }, []);

  return {
    repos,
    languages,
    handleClickLng,
  };
};
