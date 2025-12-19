import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Contactme = () => {
return(
    <>
        <ul className='contact_content'>
            <li><h2>CONTACT ME!</h2></li>
            <li><p>언제든지 연락 주세요!</p></li>
            <li>
                <ul className='contact_sendingbox'>
                    <li>
                        <input className='contact_name' type="text" placeholder='Name'/>
                    </li>
                    <li >
                        <input className='contact_email' type="text"  placeholder='Email' />
                    </li>
                    <li>
                        <textarea className='contact_message' placeholder='messeage'/>
                    </li>
                    <li className='contact_sendbtn'>
                        <button>전송<FontAwesomeIcon icon={faPaperPlane} /></button>
                    </li>
                </ul>
            </li>
        </ul>
    </>
  );
}
export default Contactme;