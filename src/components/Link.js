import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({to, children, className, activeClassName}){

    const {navigate, currentPath} = useNavigation();

    const classes = classNames(
        'text-blue-500',
        className, 
        currentPath === to && activeClassName);

    const handleClick = (event)=> {

        if(event.ctrlkey || event.metakey) { //normal navigation behavior for windows and mac 
            return ;
        }
        
        //event.preventDefault(); //do not want to refresh the page (avoid normal navigation)
        //Navigate where we want to
        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;