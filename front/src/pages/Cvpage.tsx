import '../css/cv.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { pdfshowing } from '../function/Button';
import { useLanguagestore } from '../function/LanguageStore';
import { useGooglesheet } from '../function/useGooglesheet';
const Cvpage = () => {
    const {lang}:{lang:string; togglelang:()=>void} = useLanguagestore();
    const texts = useGooglesheet();

return(
    <>
        <ul className='cv_content'>
            <li className='cv_title'><h2>CV</h2></li>
            <li className='cv_btn'><button onClick={()=>pdfshowing()}
            >CV<FontAwesomeIcon icon={faFile} /></button></li>
            <li className='cv_notice'><p>{texts.cv?.[lang]?.[0]}</p></li>
        </ul>
    </>
  );
}
export default Cvpage;