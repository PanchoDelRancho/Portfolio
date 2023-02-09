import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    
    <Nav href="/home" className='justify-content-center' >
      <Nav.Item>
        <Nav.Link href="/home" className="mx-5">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="mx-5">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="mx-5" placement='left-end'>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    
  );
};

export default Header;
