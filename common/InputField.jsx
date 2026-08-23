function InputField({ label, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label>{label}</label>

      <input type={type} value={value} onChange={onChange} />

      {error && <p>{error}</p>}
    </div>
  );
}

export default InputField;
