import '../css/header.css'
import Toggle from '../function/Toggle';

const Header = () => {
return(
    <>
      <div id='header'>
        <ul className='header_list'>
          <li className='header_link header_name'><a href='#home'>Seongwon Yun</a></li>
          <li className='header_link header_aboutme'><a href='#aboutme'>About Me</a></li>
          <li className='header_link header_cv'><a href='#cv'>CV</a></li>
          <li className='header_link header_research'><a href='#research'>Research</a></li>
          <li className='header_link header_contact'><a href='#contact'>Contact</a></li>
          <li className='header_link header_button'><button className='engbtn'><Toggle/></button></li>
        </ul>
      </div>
    </>
  );
}
export default Header;
