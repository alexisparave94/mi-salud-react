import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { createProduct, lastProduct } from "../services/products-services";
import Button from "./button";
import Input from "./input";
import Select from "./input_select";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: .75rem
`

export default function Form(){
  const [ product, setProduct ] = useState({
    cod_product: "",
    name: "",
    laboratory: "",
    quantity: 0,
    sale_price: 0
  })

  const [ lastId, setLastId ] = useState(0)
  const [errors, setErrors] = useState({
    cod_product: "",
    name: "",
    laboratory: "",
    quantity: "",
    sale_price: ""
  });

  useEffect(()=>{
    lastProduct().then((product)=>setLastId(product.id)).catch(console.log)
  }, [])

  function getCode(lastId){
    lastId+=1
    if(lastId>0 && lastId <= 9){
      return `CP00${lastId}`
    } else if(lastId >= 10 && lastId <= 99) {
      return `CP0${lastId}`
    } else {
      return `CP${lastId}`
    }
  }

  const code = getCode(lastId)

  function handleChange(e){
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value, cod_product: code })
  }

  const data = {product}

  function handleSubmit(e){
    e.preventDefault()
    console.log(product)
    createProduct(data)
    .then(console.log)
    .catch(alert)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="cod_product"
        label="product code"
        value={code}
        disabled
      />
      <Input
        name="name"
        label="name"
        value={product.name}
        onChange={handleChange}
        error={errors.name.toString()}
      />
      <Select
        label="laboratory"
        name="laboratory"
        onChange={handleChange}
        error={errors.laboratory}
      />
      <Input
        name="quantity"
        label="Quantity"
        value={product.quantity}
        onChange={handleChange}
      />
      <Input
        name="sale_price"
        label="sale price"
        value={product.sale_price}
        onChange={handleChange}
      />
      <Button/>
    </StyledForm>
  )
}


