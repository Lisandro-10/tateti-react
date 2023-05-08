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
        value="circle"
        id={props.id}
      />
      <InputRadio
        label={"Cruz"}
        name={props.name}
        value="cross"
        id={props.id}
      />
    </div>
  );
}
