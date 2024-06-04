
import { Badge, Container, FormControl, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'

const Header = () => {
  const {state: 
    {cart},
    dispatch
  
  } = CartState()

  return  <Navbar bg='dark' variant='dark' style={{height:85}}>
    <Container>
      <Navbar.Brand>
        
       <Link to='/'>Shopping cart</Link>
        </Navbar.Brand>
       <Navbar.Text className='search'>
         <FormControl style={{width:400}} 
       
         placeholder='Search a product'
         className='m-auto' 
         />
         </Navbar.Text>
         <Nav>
          <Dropdown alignright="true">
            <Dropdown.Toggle variant='success' >
                <FaShoppingCart color='white' fontSize='25px'/>
                <Badge>
                    {cart.length}
                </Badge>
          </Dropdown.Toggle>
          

            <Dropdown.Menu style={{minWidth:370}}>
               {cart.length > 0 ? (
                 <>
                 {cart.map(prod => (
                   <span className='cartitem' key={prod.id}>
                    <img src={prod.image} className='cartItemImg' alt={prod.name} />
                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>₹{prod.price.split('.')[0]}</span>
                    </div>
                    <AiFillDelete 
                    fontSize='20px' 
                    style={{cursor:'pointer'}}
                    onClick={()=>{
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: prod,
                      })
                    }}
                    />
                    </span>
                  ))}

                  <Link to='/cart'>
                    <Button style={{width:'95%', margin:'0 10px'}}>
                      Go to Cart
                      </Button>
                      </Link>
                  </>
                ):(
                  <span style={{padding:10}}>Cart is empty</span>
                )}
              
                    
{/*                   
                <span style={{padding:10}}>Cart</span> */}
                </Dropdown.Menu>
            </Dropdown>
         </Nav>
    </Container>
  </Navbar>
  
}

export default Header
