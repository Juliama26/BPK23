import {Input} from "@material-tailwind/react";
const Input_ = (props) => {
  const {
    name,
    type,
    label,
    className,
    placeholder,
    multiple,
    value,
    onChange,
    required,
  } = props;
  return (
    <Input
      color="blue"
      id={name}
      name={name}
      className={className}
      type={type}
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete="off"
    />
  );
};

export {Input_};
