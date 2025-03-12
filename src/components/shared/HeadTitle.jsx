import "../../styles/shared/HeadTitle.css";

export const HeadTitle = (props) => {
  return (
    <div className="HeadTitle">
      <p>{props.title}</p>
      <h2>{props.description}</h2>
    </div>
  );
};
