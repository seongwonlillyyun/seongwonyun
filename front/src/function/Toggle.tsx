import '../css/togglebtn.css'
import { useLanguagestore } from './LanguageStore';
const Toggle = () => {
    const lang = useLanguagestore((state)=>state.lang);
    const togglelang = useLanguagestore((state)=>state.togglelang)

return(
    <>
        <div className={`toggle_container ${lang === 'en'? "on":''}`}>
            <button className='toggle_switch' onClick={togglelang}>{lang.toUpperCase()}</button>
        </div>
    </>
  );
}
export default Toggle;