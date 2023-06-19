import { createContext, useState , useEffect} from "react";
const NavigationContext = createContext();

function NavigationProvider({children}) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname); //extract the path of current url
    
    //Handle the user clicking forward and back
    useEffect(()=>{
        const handler = ()=> {
            //whenever the user navigate using the forth and back buttons we need to know what address the user navigated to
            //so we set the current path as follows
            setCurrentPath(window.location.pathname);
        };

        //we need to listen to popState event 
       window.addEventListener('popState', handler);

       //we need to clean up the event listener when the component NavigationProvider 
       //about to removed from the screen this return will be executed automatically
       // when the component NavigationProvider about to removed

        return ()=> {
                window.removeEventListener('popstate', handler); // this called a cleanup function
        }; 
    },[]);
    
    //create a navigate fn, it takes a parameter as the pathname the user wants to navigate to
    const navigate = (to)=> {
        window.history.pushState({},'',to);
        setCurrentPath(to);
    };
    return(
    <NavigationContext.Provider value={{currentPath, navigate}}> 
        {children}
    </NavigationContext.Provider>
    );
}
export {NavigationProvider}; //nammed export, as variable 
export default NavigationContext;