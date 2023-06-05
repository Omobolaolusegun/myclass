export const useStorage = ()=>{
    const getIt = (key)=>{
        return JSON.parse(localStorage.getItem(key))
    }
    const setIt = (key,value)=>{
        localStorage.setItem('set',JSON.stringify(value))
    }
    return {getIt,setIt}
}