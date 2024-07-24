import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

export const ReposLanguages = ({
  languages,
  handleClickLng,
}: {
  languages?: string[];
  handleClickLng: (lng: string) => void;
}) => {
  const [currentLng, setCurrentLng] = useState('')  
  if (!languages) return null;

  return (
    <Fragment>
      {["ALL", ...languages]?.map((lng) => (
        <button
          className={`${currentLng === lng ? 'bg-blue-950' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2`}
          onClick={() => {
            setCurrentLng(lng)
            handleClickLng(lng)
          }}
        >
          {lng}
        </button>
      ))}
    </Fragment>
  );
};
