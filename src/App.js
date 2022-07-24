import styled from "@emotion/styled";
import Form from "./components/form";
import TableProducts from "./components/table-products";

const Title = styled.h1`
  font-family: 'MONSERRAT', sans-serif;
  text-align: center;
  padding: 2rem 0;
`

const MainWrapper = styled.div`
  width: 50%;
  min-width: 22.5rem;
  margin: auto;
` 

function App() {
  return (
    <>
      <MainWrapper>
        <Title>MY HEALTH</Title>
        <Form/>
      </MainWrapper>
      <TableProducts/>
    </>
  );
}

export default App;
