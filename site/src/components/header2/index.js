import { Link } from 'react-router-dom';
import './index.scss';

export default function Headerr() {
  return (
    <div className="comp-headerr">
    <div>
      <img className='logo' src='/assets/images/logo.png' alt='' />

     

      <div className='icons'>
        <Link to='/meuperfil' ><img alt='' src='/assets/images/icon-login.png'/></Link>
      </div>
    </div>


    </div>
  );
}


