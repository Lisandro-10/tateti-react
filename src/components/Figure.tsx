export default function Figure(props: { flag: boolean }) {
  if (props.flag) {
    return <i className="fa-regular fa-circle square-icon"></i>;
  } else {
    return <i className="fa-regular fa-xmark square-icon"></i>;
  }
}
