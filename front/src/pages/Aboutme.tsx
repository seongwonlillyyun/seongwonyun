import profile from '../assets/profile.jpg'
import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faNotion} from '@fortawesome/free-brands-svg-icons';
import {link, mail} from '../function/Button';
import { useTranslation } from 'react-i18next';

const Aboutme = () => {
  const {t} = useTranslation();


return(
    <>
    <div>
        <ul className='aboutme'>
          <li><img src={profile} alt="profile" className='profile_pic' /></li>
          <li>
            <ul className='introduction'>
              <li className='intro_hi'><h1>{t('aboutme.introgreeting')}</h1></li>
               <li className='intro_content'>
                {(t('aboutme.intro', { returnObjects: true })as string[]).map((text: string, index: number) => (
                  <p key={index}>{text}</p>
              ))}
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
                    <li>
                        <ul className='edu_cirlist'>
                          <li className='edu_cir cirone'></li>
                          <li className='edu_cir cirtwo'></li>
                          <li className='edu_cir cirthree'></li>
                        </ul>
                      </li>
                      <li className='edu_schoolcontent'>
                        <ul className='edu_schoollist'>
                          <li className='edu_school edu_schoolone'><p>{t('aboutme.education.0')}</p></li>
                          <li className='edu_school edu_schooltwo'><p>{t('aboutme.education.1')}</p></li>
                          <li className='edu_school edu_schoolthree'><p>{t('aboutme.education.2')}</p></li>
                          <li className='edu_three_activity'><p>{t('aboutme.activity.0')}</p></li>
                          <li className='edu_three_activity edu_three_one'><p>{t('aboutme.activity.1')}</p></li>
                          <li className='edu_three_activity edu_three_two'><p>{t('aboutme.activity.2')}</p></li>
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