import styled from "@emotion/styled";
import Button from "./button";
import Input from "./input";
import Select from "./input_select";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: .75rem
`

export default function Form(){
  return (
    <StyledForm>
      <Input
        name="cod_product"
        label="product code"
      />
      <Input
        name="name"
        label="name"
      />
      <Select
        label="laboratory"
      />
      <Input
        name="quantity"
        label="Quantity"
      />
      <Input
        name="sale_price"
        label="sale price"
      />
      <Button/>
    </StyledForm>
  )
}


