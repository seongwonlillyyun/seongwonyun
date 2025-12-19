import {create} from 'zustand';

interface LanguageState{
    lang:string;
    togglelang:()=>void;
}

export const useLanguagestore = create<LanguageState>((set)=>({
    lang:'kor',
    togglelang:()=>set((state)=>({
        lang:state.lang ==='kor'?"eng":"kor"
    }))
}))
