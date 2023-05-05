interface props {
  primary: string;
  secondary: string;
}

const TwoToneLine: React.FC<props> = ({ primary, secondary }) => {
  return (
    <>
      <h1 className="text-2xl md:text-7xl font-titan-one text-white">
        {primary}
        <span className="text-orange-500">{secondary}</span>
      </h1>
    </>
  );
};

export default TwoToneLine;
