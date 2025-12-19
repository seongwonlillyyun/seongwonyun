import '../css/cv.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
const Cvpage = () => {
return(
    <>
        <ul className='cv_content'>
            <li className='cv_title'><h2>CV</h2></li>
            <li className='cv_btn'><button>CV<FontAwesomeIcon icon={faFile} /></button></li>
            <li className='cv_notice'><p>위 버튼을 누르시면 제 이력서 확인이 가능합니다!</p></li>
        </ul>
    </>
  );
}
export default Cvpage;