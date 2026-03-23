import {create} from 'zustand';

interface LanguageState{
    lang:string;
    togglelang:()=>void;
}

export const useLanguagestore = create<LanguageState>((set) => ({
  lang: 'ko',
  togglelang: () => set((state) => {
    // 1. 로직 처리 (변수 선언)
    const nextLang = state.lang === 'ko' ? "en" : "ko";
  
    // 3. 변경할 상태 객체 반환
    return { lang: nextLang };
  }),
}));