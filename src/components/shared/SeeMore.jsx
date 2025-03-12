import "../../styles/shared/SeeMore.css";

export const SeeMore = (props) => {
  return (
    <div className="SeeMore">
      <a href={props.navigate}>
        Read More <i class="bi bi-arrow-right-circle-fill"></i>
      </a>
    </div>
  );
};
