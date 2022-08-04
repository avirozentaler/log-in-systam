import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/module.LogIn.css'
import '../style/Authetication.css';
import axios from 'axios';

export default function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const change = (event) => {

    console.log(event.target.name)
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value); break;
      case 'password':
        setPassword(event.target.value); break;
      default: break;
    }
  }
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const submit = (event) => {
    event.preventDefault();
    if (!(email && password)) {
      alert('please enter email and password');
      return;
    }


    if (!isValidEmail(email)) {
      alert('email is not valid')
    }
    // 
    axios.post('http://localhost:3005/users/log-in', {
      email, password,
    }, { withCredentials: true }).then(res => res.data).then((res) => {
      if (!res) {

        alert('email or password not match');
        return;

      }
      console.log('3');
      navigate('/deshboard');
    })
      .catch((err) => {
        console.log('5');
        console.log(err);

        return;
      })

  }

  const nav = () => {
    navigate('/register');
  }


  return (
    <div className='myPage'>
      <div className='board'>
        <div className="myBoard">
          <h3 className='myDescription'>log in</h3>

          <form action="" className='myForm'>
            <input type="email" pattern='/\S+@\S+\.\S+/' placeholder=" enter your email" name='email' value={email} onChange={change} required />
            <input type="password" placeholder="enter your password" name='password' value={password} onChange={change} required />
            <input className='btn' type="submit" onClick={submit} value='log in' />
          </form>

        </div>
        <div className='bottomOfBoard myBoard'>
          <p>have no account yet? <span className='navigateBtn' onClick={nav}>create accoun</span> here</p>
        </div>
      </div>

    </div>
  )
}

