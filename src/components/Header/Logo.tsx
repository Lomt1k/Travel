import { Link } from 'react-router';
import IconLogo from '@/assets/icons/Logo.svg?react';
import './Logo.scss';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <IconLogo width={42} height={30} aria-hidden={true} />
      <span>Travel</span>
    </Link>
  )
}

export default Logo;