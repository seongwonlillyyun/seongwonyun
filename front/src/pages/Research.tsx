import '../css/research.css'
import researchimg from'../assets/researchimg.jpg'
import { useGooglesheet } from '../function/useGooglesheet';
import { useLanguagestore } from '../function/LanguageStore';
const Research = () => {
  const {lang}:{lang:string; togglelang:()=>void} = useLanguagestore();
  const texts = useGooglesheet();

return(
    <>
      <div className='research_content'>
        <h2>RESEARCH</h2>
        <img className='research_img' src={researchimg} alt="image" />
         <p>{texts.research?.[lang]?.[0]}</p>
      </div>
       
    </>
  );
}
export default Research;