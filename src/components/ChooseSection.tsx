import InputPlayer from "./InputPlayer";
import InputRadio from "./InputRadio";

export default function ChooseSection(props: {
  name: string;
  nameLabel: string;
  id: string | number;
}) {
  return (
    <div className="chooseSection">
      <InputPlayer label={props.nameLabel} name="input1" />
      <InputRadio
        label={"Círculo"}
        name={props.name}
        value={"Círculo"}
        id={props.id}
      />
      <InputRadio
        label={"Cruz"}
        name={props.name}
        value={"Cruz"}
        id={props.id}
      />
    </div>
  );
}
