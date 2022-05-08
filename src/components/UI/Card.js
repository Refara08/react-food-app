const Card = (props) => {
  return (
    <div className="rounded-lg shadow-xl overflow-hidden bg-white">
      {props.children}
    </div>
  );
};

export default Card;
