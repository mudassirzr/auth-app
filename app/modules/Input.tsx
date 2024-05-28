import { useController, UseControllerProps } from "react-hook-form"
export default function Input(props: any) {
  const { label, id, error, type, ...rest } = props;
  const { field } = useController(rest)
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}
    >
      <label htmlFor={id}>{props?.label}</label>
      <input type={type} {...field} id={id} />
      {error ? <small style={{ color: "red" }}>{error}</small> : null}
    </div>
  );
}
