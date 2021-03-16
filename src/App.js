import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.25rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const App = () => {
  return (
    <Container>
      <Router>
        <NavContainer>
          <Navbar />
        </NavContainer>

        <Container>
          <Switch>
            <Route path="/dashboard"></Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </Container>
      </Router>
    </Container>
  );
};

export default App;
