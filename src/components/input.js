import styled from "@emotion/styled";

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: .5rem;
  border: 1px solid #D3D3D3;
  background-color: white;
  color: #17171C;
  font-family: 'Inter', sans-serif;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default Input;