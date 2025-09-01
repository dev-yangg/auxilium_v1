interface InputField {
  type?: "text" | "email" | "password";
  inputName: string;
  id: string;
  label: string;
}

export default function InputField({
  type = "text",
  inputName,
  id,
  label,
}: InputField) {
  return (
    <fieldset className="flex outline rounded-sm input-field-container ">
      <input
        id={id}
        type={type}
        placeholder=""
        name={inputName}
        className="outline-none w-full h-full px-3 z-10"
      />
      <label
        htmlFor={id}
        className="bg-primary flex items-center text-regular left-1.5 px-1.5">
        {label}
      </label>
    </fieldset>
  );
}
