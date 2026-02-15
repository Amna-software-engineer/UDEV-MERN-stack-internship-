import { Sprout } from "lucide-react";
import { Card, Container, ListGroup, Nav } from "react-bootstrap";

const Sidebar = ({ categories,activeCat,setActiveCat }) => {

  
  const onSelect = (category) => {
    setActiveCat(category);
  };
  return (
    <>
     <div className="bg-white p-3 border rounded-3 shadow-sm">
      <h5 className="mb-4 border-bottom pb-2 text-success fw-bold">
        <Sprout className="me-2" size={20} />
        Farming Menu
      </h5>
      <Nav className="flex-column rounded-4">
        {categories.map((cat) => ( <>
          <Nav.Link 
            key={cat.title}
            onClick={() => onSelect(cat.title)}
            className={`mb-2 rounded-3 shadow-sm px-4 transition-all ${
              activeCat === cat.title ? 'bg-success text-white active shadow' : 'text-dark hover-bg-light'
            }`}
            style={{ cursor: 'pointer', transition: '0.3s' }}
          >
            {cat.title}
          </Nav.Link>
          
        </>
        ))}
      </Nav>
    </div>
      <Card className="mt-4 shadow-sm border-0 rounded-4 bg-success text-light d-none d-md-block">
        <Card.Body>
          <h6 className="fw-bold">Quick Tip 🌾</h6>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Always test your soil before sowing crops.
          </p>
        </Card.Body>
      </Card>
       </>

  );
};

export default Sidebar;
