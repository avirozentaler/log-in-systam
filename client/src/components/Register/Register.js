import { useState } from 'react';
import '../style/Authetication.css';
import '../style/module.Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const change = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value); break;
      case 'email':
        setEmail(event.target.value); break;
      case 'password':
        setPassword(event.target.value); break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value); break;
      default:
        return;

    }
  }
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const submit = (event) => {
    event.preventDefault();
    if (!(name && email && password && confirmPassword)) {
      alert('please fiil all the fields');
      return;
    }
    if (!isValidEmail(email)) {
      alert('email is not valid')
    }
    if (password !== confirmPassword) {
      alert('confirm password is does not compare to password');
      return;
    }

    axios.post('http://localhost:3005/users/register', {
      name, email, password, confirmPassword,
    }).then(res => res.data.message)
      .then(res => console.log(`${res}`))
      .catch(err => console.log(`error in axios > ${err}`));
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    navigate('/');

  }
  const nav = () => {
    navigate('/');
  }

  return (

    <div className='myPage'>
      <div className='board'>
        <div className="myBoard">
          <h3 className='myDescription'>sign up</h3>

          <form className='myForm'>
            <input type="text" placeholder=" enter your name" name='name' value={name} onChange={change} required />
            <input type="email" placeholder=" enter your email" name='email' value={email} onChange={change} required />
            <input type="password" placeholder="enter your password" name='password' value={password} onChange={change} required />
            <input type="password" placeholder="confirm your password" name='confirmPassword' value={confirmPassword} onChange={change} required />
            <input type="submit" onClick={submit} value='sign up' />
          </form>
        </div>
        <div className='bottomOfBoard myBoard'>
          <p>already have account? <span className='navigateBtn' onClick={nav}>log in</span> here</p>
        </div>
      </div>
    </div>

  )
}


