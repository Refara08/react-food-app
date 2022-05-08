import * as ReactDOM from "react-dom";
import Card from "./Card";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-30"
      onClick={props.onCloseCart}
    />
  );
};

const Overlay = (props) => {
  return (
    <div className="z-40 fixed top-40 left-1/3 w-[600px] h-[1000px] animate-slide-down">
      <Card>{props.children}</Card>
    </div>
  );
};

const ModalOverlay = (props) => {
  const portalOverlays = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalOverlays
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalOverlays
      )}
    </>
  );
};

export default ModalOverlay;
