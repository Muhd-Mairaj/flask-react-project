import Form from 'react-bootstrap/Form';

function InputField(
  { name, label, type, placeholder, error, fieldRef }
) {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type || 'text'}
        placeholder={placeholder}
        ref={fieldRef}
      />
      <div className="mx-1"
      <Form.Text className="text-danger text-center text-wrap">{error}</Form.Text>
    </Form.Group>
  );
}

export default InputField;