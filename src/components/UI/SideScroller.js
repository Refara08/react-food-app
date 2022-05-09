import classes from "./SideScroller.module.css";

const SideScroller = (props) => {
  const widthSet = {
    width: props.width,
  };
  return (
    <div className={classes["side-scroller"]}>
      <div className={classes["wrapper-outer"]}>
        <div style={widthSet} className={`${classes.wrapper}`}>
          <div style={widthSet} className={`${classes.slide} ${classes.one}`}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideScroller;
