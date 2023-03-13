import Form from 'react-bootstrap/Form';

function InputField({ name, label, type, value, onChange, min, placeholder, error, fieldRef, class_name }) {

  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label className={class_name}>{label}</Form.Label>}
      {(value && onChange) && }
      <Form.Control
        type={type || 'text'}
        min={min || ""}
        placeholder={placeholder}
        ref={fieldRef}
        className={class_name}
      />
      <div className="mx-1">
        <Form.Text className="text-danger text-center">{error}</Form.Text>
      </div>
    </Form.Group>
  );
}

export default InputField;