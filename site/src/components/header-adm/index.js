
import { Link } from 'react-router-dom';
import './index.scss';

export default function HeaderAdm() {
  return (
    <div className="comp-header-adm ">
    <div>
      <Link to={'/'}><img src='/assets/images/logo.png' alt='' /></Link>


    </div>
    </div>
  );
}


