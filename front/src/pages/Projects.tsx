import '../css/project.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useProject } from '../function/useProject.ts';
import type { Project } from '../function/useProject.ts';
const Projects = () => {
const projects = useProject()
const [selectedProject, setSelectedProject] = useState<Project | null>(null);

return(
    <>
        <div className='project_content'>
            <h2>PROJECTS</h2>
                <div className='gallery_content'>
                    <ul className="gallery">
                        {projects.map((project) => (
                        <li key={project.id} className="card">
                        <button onClick={() => setSelectedProject(project)}>
                        <img className='card-img' src={project.image} />
                        <h3 className='card-title'>{project.title}</h3>
                        <p className='card-desc'>{project.shortdesc}</p>
                    </button>
                    </li>
                    ))}
                    </ul>
                </div>
                {selectedProject && (
                    <div className="modal">
                        <div className='modal-content'>
                            <button onClick={()=>setSelectedProject(null)} className='closebtn'> <FontAwesomeIcon icon={faX} /></button>
                            <img className="modal-img" src={selectedProject.image}/>
                            <h2 className='modal-title'>{selectedProject.title}</h2>
                            <p className='modal-desc'>{selectedProject.shortdesc}</p>
                            <a className='morebtn' href={`/projects/${selectedProject.slug}`}
                                target='_blank'
                                rel="noopener noreferrer">
                                    더보기
                                </a>
                        </div>
                    </div>
                )}
        </div>
    </>
  );
}
export default Projects;