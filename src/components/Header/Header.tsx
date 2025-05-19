import { Container } from '@/components/ui';
import Logo from './Logo';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <div className="header__wrapper">
          <div className="header__top">
            <Logo />
          </div>
          <div className="header__bottom">
            <span className="header__title">
              Там, где мир начинается с путешествий
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header;