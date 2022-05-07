const Card = (props) => {
  return (
    <div className="rounded-lg shadow-xl overflow-hidden">{props.children}</div>
  );
};

export default Card;
