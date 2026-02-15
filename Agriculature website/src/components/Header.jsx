import { Leaf } from "lucide-react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ title, tagline }) => {
  return (
    <Navbar className="py-3 bg-dark text-light shadow sticky-top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <div className="bg-success rounded-circle p-2 me-3 d-flex align-items-center justify-content-center">
            <Leaf color="white" size={26} />
          </div>
          <div>
            <div className="fw-bold h4 mb-0 text-light" >{title}</div>
            <small className="opacity-75 text-light" style={{fontSize: "14px"}}>{tagline}</small>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
