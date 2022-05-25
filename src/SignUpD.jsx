import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const SignUp = () => {
    return (
      <div className="box">
      <form action="">
          <input type="text" class="input-field" placeholder=" Name" />
          <input type="email" class="input-field" placeholder=" Email" />
          <input type="password" class="input-field" placeholder=" Password" />
          <Button variant="dark">Submit</Button>{' '}
      </form>
  </div>
     );
}
 
export default SignUp;