import '../css/cv.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { pdfshowing } from '../function/Button';
import { useTranslation } from 'react-i18next';
const Cvpage = () => {
    const {t} = useTranslation();
return(
    <>
        <ul className='cv_content'>
            <li className='cv_title'><h2>CV</h2></li>
            <li className='cv_btn'><button onClick={()=>pdfshowing()}
            >CV<FontAwesomeIcon icon={faFile} /></button></li>
            <li className='cv_notice'><p>{t('cv')}</p></li>
        </ul>
    </>
  );
}
export default Cvpage;