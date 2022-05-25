import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const SignUpN = () => {
    return ( 
      <div className="sbox">
      <div className="boxd">
      <form action="">
          <input type="text" class="input-field" placeholder=" Name" />
          <input type="email" class="input-field" placeholder=" Email" />
          <input type="password" class="input-field" placeholder=" Password"/>
          <input type="text" class="input-field" placeholder=" Address"/>
          <input type="text" class="input-field" placeholder=" City"/>
          <input type="State" class="input-field" placeholder=" State"/>
          <input type="number" class="input-field" placeholder=" PinCode"/>
          <input type="number" class="input-field" placeholder="Phone"/>
          <input type="number" class="input-field" placeholder="Secondary Phone"/>
          <Button variant="dark">Submit</Button>{' '}

      </form>
  </div>
  </div>
     );
}
 
export default SignUpN;