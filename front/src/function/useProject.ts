import {useEffect, useState} from "react"

export type FormantData = {
  labels: string[];
  native: { F1: number[]; F2: number[] };
  prof: { F1: number[]; F2: number[] };
  me: { F1: number[]; F2: number[] };
}; 

export type Project = {
    id:number;
    title:string;
    shortdesc:string;
    longdesc:string[];
    image:string;
    link:string;
    slug:string;
    chartData:FormantData
};


export const useProject = ()=>{
    const [projects,setProjects]=useState<Project[]>([]);

    useEffect(()=>{
        const sheetId = "1RvXJOzg2yUmBSgO6SL-tzuMIj-o_OmWRa3zXksFGttc"; // 여기에 스프레드시트 ID 넣기
        const sheetName = "projectsheet"; // 스프레드시트 시트 이름
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
        fetch(url)
        .then((res) => res.text())
        .then((data)=>{
          const json = JSON.parse(data.substr(47).slice(0, -2));
          const rows = json.table.rows;
          const projectArray: Project[] = rows.map((row: any) => {
          const id = Number(row.c[0]?.v) || 0;
          const title = row.c[1]?.v || "";
          const shortdesc = row.c[2]?.v || "";
          const longdescRaw = row.c[3]?.v ||"[]";
          const image = row.c[4]?.v || "";
          const link = row.c[5]?.v || "";
          const slug = row.c[6]?.v || "";
          const chartRaw = row.c[7]?.v || "{}";
          let chartData: FormantData | null = null;
          let longdesc:string[] = [];
          try {
            chartData = JSON.parse(chartRaw);
            longdesc = JSON.parse(longdescRaw)
          } catch {
            chartData = null;
            longdesc = [];
          }
          return { id, title, longdesc, shortdesc, image, link, slug, chartData };
        });

        setProjects(projectArray);
      })
      .catch((err) => console.error(err));
    },[]);
        return projects
};