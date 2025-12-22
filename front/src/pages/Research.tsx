import '../css/research.css'
import researchimg from'../assets/researchimg.jpg'
import { useTranslation } from 'react-i18next';
const Research = () => {
  const {t} = useTranslation();
return(
    <>
      <div className='research_content'>
        <h2>RESEARCH</h2>
        <img className='research_img' src={researchimg} alt="" />
         <p>{t('research')}</p>
      </div>
       
    </>
  );
}
export default Research;