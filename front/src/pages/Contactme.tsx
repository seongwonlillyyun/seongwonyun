import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { useGooglesheet } from '../function/useGooglesheet';
import { useLanguagestore } from '../function/LanguageStore';


const Contactme = () => {
    const {lang}:{lang:string; togglelang:()=>void} = useLanguagestore();
    const texts = useGooglesheet();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message:'',
        company:''
    });

    const handleChange = ( e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        const {name, value} = e.target
        setForm(prev=>({
            ...prev, [name]:value
        }));
    };

    const handleSubmit = () =>{
        if(!form.name){
            alert('이름을 입력 해 주세요')
            nameRef.current?.focus()
            return
        }
        if(!form.email){
            alert('이메일을 입력 해 주세요')
            emailRef.current?.focus()
            return
        }
        if(!form.message){
            alert('메세지를 입력 해 주세요')
            messageRef.current?.focus()
            return
        }
        if(form.company){
            return
        }
        emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name : form.name,
                from_email : form.email,
                message:form.message,
            },
           import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(()=>{
            alert('메일이 전송되었습니다!')
            setForm({name :'', email:'', message:'', company:''});
        })
        .catch(()=>{
            console.log('--- EmailJS 설정 값 확인 ---');
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log('보낼 데이터:', { name: form.name, email: form.email, message: form.message });
            alert('전송이 실패되었습니다!')
        })
    }
return(
    <>
        <ul className='contact_content'>
            <li><h2>CONTACT ME!</h2></li>
            <li><p>{texts.contactme?.[lang]?.[0]}</p></li>
            <li>
                <ul className='contact_sendingbox'>
                    <li>
                        <input className='contact_name' type="text" placeholder='Name'ref={nameRef}
                                value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
                    </li>
                    <li >
                        <input className='contact_email' type="text"  placeholder='Email' ref={emailRef}
                                value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
                    </li>
                    <li>
                        <textarea className='contact_message' placeholder='messeage' ref={messageRef}
                                    value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}/>
                    </li>
                    <li>
                        <input type="text" name='company' style={{position:'absolute', left:'-99999px', height:0, overflow:'hidden'}} value={form.company} onChange={handleChange} />
                    </li>
                    <li className='contact_sendbtn'>
                        <button type='button' onClick={handleSubmit}>{texts.sendbtn?.[lang]?.[0]}<FontAwesomeIcon icon={faPaperPlane} /></button>
                    </li>
                </ul>
            </li>
        </ul>
    </>
  );
}
export default Contactme;