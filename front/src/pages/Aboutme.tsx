import profile from '../assets/profile.jpg'
import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen,faUserGraduate,faSchool } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faNotion} from '@fortawesome/free-brands-svg-icons';
import {link, mail} from '../function/Button';
import { useLanguagestore } from '../function/LanguageStore';
import { useGooglesheet } from '../function/useGooglesheet';

const Aboutme = () => {

const {lang}:{lang:string; togglelang:()=>void} = useLanguagestore();
const texts = useGooglesheet();

 if (!texts || Object.keys(texts).length === 0) return <div>Loading...</div>;

return(
    <>
    <div>
        <ul className='aboutme'>
          <li><img src={profile} alt="profile" className='profile_pic' /></li>
          <li>
            <ul className='introduction'>
              <li className='intro_hi'><h1>{texts.introgreeting[lang]}</h1></li>
               <li className='intro_content'>
                {Array.isArray((texts.intro as { [key: string]: string[] })[lang])
                  ? (texts.intro as { [key: string]: string[] })[lang].map((text: string, index: number) => (
                    <p key={index}>{text}</p>
                    ))
                      : null
                }
               </li> 
                <li>
                  <ul className='intro_sns'>
                    <li><button onClick={()=>mail()}><FontAwesomeIcon icon={faEnvelopeOpen} /></button></li>
                    <li><button onClick={()=>link('https://www.linkedin.com/in/seongwon-yun-3a7148109')}><FontAwesomeIcon icon={faLinkedin} /></button></li>
                    <li><button onClick={()=>link('https://www.notion.so/seongwonlillyyun/Seongwon-Lilly-Yun-270c7a81531044bfbccb635df5911e18?source=copy_link')}><FontAwesomeIcon icon={faNotion} /></button></li>
                  </ul>
                </li>
            </ul>
          </li>
        </ul>
        <ul className='aboutme_edu'>
            <li>
                <h2>EDUCATION</h2>
            </li>
            <li>
                <ul className='edu_content'>
                      <li className='edu_schoolcontent'>
                        <ul className='edu_schoollist'>
                          <li className='edu_school edu_schoolone'><p><FontAwesomeIcon icon={faSchool} /> {texts.edu[lang][0]}</p></li>
                          <li className='edu_school edu_schooltwo'><p><FontAwesomeIcon icon={faUserGraduate} /> {texts.edu[lang][1]}</p></li>
                          <li className='edu_three_activity'><p>{texts.activity[lang][0]}</p></li>
                          <li className='edu_three_activity edu_three_one'><p>{texts.activity[lang][1]}</p></li>
                          <li className='edu_three_activity edu_three_two'><p>{texts.activity[lang][2]}</p></li>
                        </ul>
                      </li>
                </ul>
              </li>
        </ul>
    </div>
    </>
  );
}
export default Aboutme;