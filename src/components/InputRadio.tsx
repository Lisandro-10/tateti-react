export default function InputRadio(props: {
  label: string;
  name: string;
  value: string;
  id: number | string;
}) {
  return (
    <div>
      <label className="radioLabel">{props.label}</label>
      <input
        type="radio"
        className="inputRadio"
        name={props.name}
        value={props.value}
        id={props.value + props.id}
        required
      />
    </div>
  );
}
