import "./NavBar.css"
import "./logo-de-pag.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import {NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget'

function Barra() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='md'>
        <div className='container'>
            <NavbarBrand>
                {/* <img src={logo} className='navbar-logo' /> */}
               Talitha Indumentaria 
            </NavbarBrand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Link className='mx-3'>Home</Nav.Link>
                    <NavDropdown title='Partes de arriba' className='mx-3'>
                        <NavDropdown.Item>Tops</NavDropdown.Item>
                        <NavDropdown.Item>Remeras</NavDropdown.Item>
                        <NavDropdown.Item>Buzos</NavDropdown.Item>
                        <NavDropdown.Item>Abrigo</NavDropdown.Item>
                        <NavDropdown.Item>Camisas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas las partes de arriba</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title='Partes de abajo' className='mx-3'>
                        <NavDropdown.Item>Polleras</NavDropdown.Item>
                        <NavDropdown.Item>Pantalones</NavDropdown.Item>
                        <NavDropdown.Item>Shorts</NavDropdown.Item>
                        <NavDropdown.Item>Bodys</NavDropdown.Item>
                        <NavDropdown.Item>Biker</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todas las partes de abajo</NavDropdown.Item>
                    </NavDropdown>
                    
                    <NavDropdown title='Accesorios' className='mx-3'>
                        <NavDropdown.Item>Cinturones</NavDropdown.Item>
                        <NavDropdown.Item>Riñoneras</NavDropdown.Item>
                        <NavDropdown.Item>Mini Bag</NavDropdown.Item>
                        <NavDropdown.Item>Aros</NavDropdown.Item>
                        <NavDropdown.Item>Gafas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Todos los accesorios</NavDropdown.Item>
                    </NavDropdown>  
                    <Nav.Link className='mx-1'>
                      <CartWidget />  
                      Mis compras
                    </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
            
        </div>
        
      </Navbar>
    </>
  );
}

export default Barra;
