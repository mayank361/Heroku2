import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const SignIn = () => {
    return ( 
      <div className="box">
      <form action="">
          <input type="text" class="input-field" placeholder=" E-mail" />
          <input type="password" class="input-field" placeholder=" Password" />
          <Button variant="dark">Submit</Button>{' '}

      </form>
  </div>
        
     );
}
 
export default SignIn;