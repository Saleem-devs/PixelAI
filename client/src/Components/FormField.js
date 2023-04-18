import React from "react";

function FormField(props) {
  const {
    labelName,
    name,
    type,
    placeholder,
    value,
    handleChange,
    isRandomPrompt,
    handleRandomPrompt,
  } = props;

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 "
        >
          {labelName}
        </label>
        {isRandomPrompt && (
          <button
            type="button"
            onClick={handleRandomPrompt}
            className="py-1 px-2 rounded-md bg-[#ececf1] font-semibold text-xs"
          >
            Get Random Prompt
          </button>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={name}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border outline-none rounded-md"
      />
    </div>
  );
}

export default FormField;
