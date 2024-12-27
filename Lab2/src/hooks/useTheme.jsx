export const useTheme = (componentTheme, setComponentClass, theme) =>{
    if(!theme){
        setComponentClass(componentTheme == "dark" ? "light" : "dark");
    }else{
        setComponentClass(theme);
    }
}