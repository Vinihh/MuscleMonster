import { Link } from 'react-router-dom';
import './index.scss';

export default function Headerr() {
  return (
    <div className="comp-headerr">
    <div>
      <Link to={'/'}><img className='logo' src='/assets/images/logo.png' alt='' /></Link>

     

      <div className='icons'>
        <Link to='/login' ><img alt='' src='/assets/images/icon-login.png'/></Link>
      </div>
    </div>


    </div>
  );
}


