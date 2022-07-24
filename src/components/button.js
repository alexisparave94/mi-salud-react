import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 100%;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  padding: 0.5rem;
  border-radius: .5rem;
  border: 0;
  background-color: #10B981;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
`

export default function Button(){
  return (
    <StyledButton type="submit">
      Add Product
    </StyledButton>
  )
}