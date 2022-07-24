import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { getProducts } from "../services/products-services"

const TableWrapper = styled.div`
margin: 2.5rem auto;
width: 90%;
display: flex;
justify-content: center;
color: #17171C;
font-family: 'Inter', sans-serif;
` 

const StyledTable = styled.table`
border-collapse: collapse;
`

const StyledTh = styled.th`
border-bottom: 1px solid black;
width: 200px;
padding-bottom: 0.25rem;
`

const StyledTd = styled.td`
padding: 0.25rem 1rem;
`

export default function TableProducts(){
  const [listProducts, setListProducts] = useState([])
  
  useEffect(()=>{
    getProducts()
      .then(setListProducts)
      .catch(console.log)
  }, [])

  return (
    <TableWrapper>
      <StyledTable>
      <thead>
        <tr>
          <StyledTh> Product Code </StyledTh>
          <StyledTh> Name </StyledTh>
          <StyledTh> Laboratory </StyledTh>
          <StyledTh> Quantity </StyledTh>
          <StyledTh> Sale Price </StyledTh>
        </tr>
      </thead>
      
      <tbody>
        { listProducts.map((product) => {
          return (
            <tr key={product.cod_product}>
              <StyledTd> {product.cod_product} </StyledTd>
              <StyledTd> {product.name} </StyledTd>
              <StyledTd> {product.laboratory} </StyledTd>
              <StyledTd> {product.quantity} </StyledTd>
              <StyledTd> {product.sale_price} </StyledTd>
            </tr>
          )
        })}
      </tbody>
    </StyledTable>
  </TableWrapper>
  )
}