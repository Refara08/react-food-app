const Input = (props) => {
  const inputVal = parseInt(props.value);

  const onChangeHandler = (e) => {
    e.preventDefault();

    props.onChange(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-row max-w-fit items-end gap-2">
      <label htmlFor={props.input.id}>{props.label}</label>
      <button
        type="button"
        className={inputVal <= 0 ? "cursor-not-allowed" : "cursor-default"}
        disabled={inputVal <= 0 ? true : false}
        onClick={props.onLower}
      >
        -
      </button>
      <input
        className="border-b-2 border-neutral-800 w-[3ch] text-center"
        onChange={onChangeHandler}
        value={props.value}
        {...props.input}
      />
      <button
        type="button"
        className={inputVal > 100 ? "cursor-not-allowed" : "cursor-default"}
        disabled={inputVal > 100 ? true : false}
        onClick={props.onRise}
      >
        +
      </button>
    </div>
  );
};

export default Input;
