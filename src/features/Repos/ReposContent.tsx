import { IRepo } from "../../services/repos";
import { useNavigate } from "react-router-dom";

export const ReposContent = ({ repos }: { repos?: IRepo[] }) => {
  const navigate = useNavigate();

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {repos?.map((repo) => (
        <tr
          className="hover:bg-sky-300 cursor-pointer"
          onClick={() => {
            navigate(`/details/${repo.name}`);
          }}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
            {repo.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {repo.desc}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {repo.languages}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {repo.forks}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
