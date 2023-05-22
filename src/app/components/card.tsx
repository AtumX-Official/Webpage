interface props {
  children: string | JSX.Element | JSX.Element[];
}

const Card: React.FC<props> = ({ children }) => {
  return (
    <>
      <div className="absolute bg-gray-900 bg-opacity-30 p-4 rounded-r-2xl">
        {children}
      </div>
    </>
  );
};

export default Card;
