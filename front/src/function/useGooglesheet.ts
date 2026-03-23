
import {useEffect, useState} from "react"

type Texts = {
    [key:string]:{[lang:string]:string|string[]};
};


export const useGooglesheet  = () => {
    const [texts, setTexts] = useState<Texts>({});
    useEffect(() => {
    const sheetId = "1RvXJOzg2yUmBSgO6SL-tzuMIj-o_OmWRa3zXksFGttc"; // 여기에 스프레드시트 ID 넣기
    const sheetName = "websitesheet"; // 스프레드시트 시트 이름
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
  
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        // JSONP 형식 제거
        const json = JSON.parse(data.substr(47).slice(0, -2));
        const rows = json.table.rows;

        const obj: Texts = {};
        rows.forEach((row: any) => {
          const key = row.c[0]?.v;
         const koRaw = row.c[1]?.v ?? "";
          const enRaw = row.c[2]?.v ?? "";
         let ko: string[] = [];
          let en: string[] = [];
      
          try {
            ko = JSON.parse(koRaw);
          } catch {
            ko = koRaw.split(",").map((s:string)=>s.trim());
          }
          try {
            en = JSON.parse(enRaw)
          } catch (error) {
            en = enRaw.split(",").map((s:string)=>s.trim());
          }
          if(key) obj[key] = {ko,en}
        });
        setTexts(obj);
      })
      .catch((err) => console.error(err));
  }, []);
    return texts;
}

