// ProjectDetail.tsx
import { useParams } from 'react-router-dom';
import { useProject } from '../function/useProject';
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Legend} from 'chart.js';
import {Scatter} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const projects = useProject();
  const project = projects.find(p => p.slug === slug);
  const nativePoints = project?.chartData.labels.map((label, i) => ({
  x: project.chartData.native.F2[i],
  y: project.chartData.native.F1[i],
}));

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;
  return (
    <div className="project-detail">
      <h1 className='detail-title'>{project.title}</h1>
      <div className='chart-content'>
        {project.chartData?.labels && (
  <Scatter className='chart'
    data={{
      labels: project.chartData.labels,
      datasets: [
        {
          label: "Native",
          data: nativePoints,
          pointRadius:6,
          backgroundColor:"red"
        }, 
        {
          label: "Prof",
          data:project.chartData.labels.map((_, i) => ({
          x: project.chartData.prof.F2[i],
          y: project.chartData.prof.F1[i],
        })),
          pointRadius:6,
          backgroundColor:"blue"
        },
        {
          label:"sw",
          data:project.chartData.labels.map((_, i) => ({
          x: project.chartData.me.F2[i],
          y: project.chartData.me.F1[i],
        })),
          pointRadius:6,
          backgroundColor:'green'
        }
      ],
    }}
    options={{
        plugins:{
            datalabels:{
                formatter:(value,context)=>{
                    return project.chartData.labels[context.dataIndex];
                },
                align:'top',
                font:{
                    size:14
                }
            }
        },
        scales:{
            x:{
                title:{
                    display:true,
                    text:"F2"
                }
            },
            y:{
                reverse:true,
                title:{
                    display:true,
                    text:"F1"
                }
            }
        }
    }}
  />
)}
    {project.longdesc.map((text, index) => (
  <p className="desc"
    key={index}>{text}</p>
))}
      </div>
    </div>
  );
};

export default ProjectDetail;