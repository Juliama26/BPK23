import {Textarea} from "@material-tailwind/react";

const Textarea_ = (props) => {
  const {name, label, value, onChange} = props;
  return (
    <Textarea
      color="blue"
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea_;
