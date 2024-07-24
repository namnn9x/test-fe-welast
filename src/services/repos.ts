import axiosInstance from "../axios/axiosConfig";

export interface IRepo {
  name: string;
  desc: string;
  languages: string;
  forks: string;
  commitsUrl: string;
  createdAt: string;
}

export const getRepos = async () => {
  return await axiosInstance.get("/repos/get-list");
};
