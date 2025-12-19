import '../css/research.css'
import researchimg from'../assets/researchimg.jpg'
const Research = () => {
return(
    <>
      <div className='research_content'>
        <h2>RESEARCH</h2>
        <img className='research_img' src={researchimg} alt="" />
         <p>아직 연구 중 입니다! 열심히 하겠습니다...</p>
      </div>
       
    </>
  );
}
export default Research;