import s from "./Container.module.scss";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      <h1 className={s.title}>Delivery is your life</h1>
      <div className={s.container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
