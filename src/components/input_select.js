import styled from "@emotion/styled";

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
  border-radius: .5rem;
  border: 1px solid #D3D3D3;
  background-color: white;
  color: #17171C;
  font-family: 'Inter', sans-serif;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export default function Select({ label, name, onChange }){
  function selectLaboratory(e){
    onChange(e)
  }

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <StyledSelect name={name} onChange={selectLaboratory}>
        <option value=" ">-- Select a laboratory --</option>
        <option value="Genfar">Genfar</option>
        <option value="GSK">GSK</option>
        <option value="Hersil">Hersil</option>
        <option value="FarmaIndustria">FarmaIndustria</option>
      </StyledSelect>
    </SelectContainer>
  )
}