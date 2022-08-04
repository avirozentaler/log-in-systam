import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/Authetication.css';
import axios from 'axios';

export default function Deshboard() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3005/users/token',{withCredentials:true})
      .then((res) => {
        if(res.data){
          console.log(res.data);

        }
        else{
          navigate('/')
        }
      }).catch((err) => { console.log(err) })
  }, [])


  return (

    <div className="Deshboard">
      <h1> wellcom! you are loged in</h1>
    </div>
  )
}
