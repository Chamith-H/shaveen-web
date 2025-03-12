import "../../styles/shared/SectionTitle.css";

export const SectionTitle = (props) => {
  return (
    <div className="SectionTitle">
      <p>{props.title}</p>
      <h2>{props.description}</h2>
    </div>
  );
};
