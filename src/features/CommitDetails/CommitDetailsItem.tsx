export const CommitDetailsItem = ({ value, name }: { value?: string, name: string }) => {
  return (
    <div className="text-base leading-3">
      <p className="font-normal text-gray-700">{`${name}: ${value}`}</p>
    </div>
  );
};
