 //custom validation to our props using prop-types
 import PropTypes from 'prop-types'; //not used in  this component
 import className from 'classnames';

 //this Button component called Wrapper as it just used to return button
function Button({
    //Component <Button /> related props
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    //plaintext <button /> element props
    ...rest //...rest means take all the remaining properties and assign them to the variable rest
}) {

    //call function className() from classnames library to build our className spring based on the props values
    const classes = className(
        'flex items-center px-3 py-1.5 border', //default style for all buttons types,
        rest.className, //pass className prop
        { //an object that will have a bunch of key-value pairs 
            'border-blue-500 bg-blue-500 text-white': primary, //if primary===true, the key 'border-blue-500 bg-blue-500 text' will be added to final className string 
            'border-gray-900 bg-gray-900 text-white': secondary, 
            'border-green-500 bg-green-500 text-white': success, 
            'border-yellow-400 bg-yellow-400 text-white': warning, 
            'border-red-500 bg-red-500 trxt-white': danger, 
            'rounded-full':rounded,
            'bg-white':outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger,
        }
    ); 
    //px, py to control the spacing (width) of padding
  return <button {...rest} className={classes}>{children}</button> //button called underline wrapped element that is the plain jsx element that is created by Button component
}

//custom validator
Button.propTypes = {
 checkVariationValue: ({primary, secondary, success, warning, danger})=> {
   const count = Number(!!primary)
    + Number(!!secondary)
    + Number(!!warning)
    + Number(!!success)
    + Number(!!danger) 

    if (count > 1) {
        console.log(Number(!!danger));
        console.log(!!danger);
     throw new Error('only one of primary, secondary, success, warning, danger can be true');
    }
 } 

};

export default Button;