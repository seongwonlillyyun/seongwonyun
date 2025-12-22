import {create} from 'zustand';
import i18n from '../locales/i18n';

interface LanguageState{
    lang:string;
    togglelang:()=>void;
}

export const useLanguagestore = create<LanguageState>((set) => ({
  lang: 'ko',
  togglelang: () => set((state) => {
    // 1. 로직 처리 (변수 선언)
    const nextLang = state.lang === 'ko' ? "en" : "ko";
    const i18nLang = nextLang === 'ko' ? 'ko' : 'en';
    
    // 2. 외부 라이브러리(i18n) 실행
    i18n.changeLanguage(i18nLang);

    // 3. 변경할 상태 객체 반환
    return { lang: nextLang };
  }),
}));