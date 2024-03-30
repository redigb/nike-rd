import PropTypes from 'prop-types';

const Buttons = ({label,  iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
    return (
     <button className={`flex justify-center items-center
        gap-2 px-7 py-4 border font-monstserrat text-lg
        leading-none 
        ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && 'w-full'}`}>
        {label}
        {iconUrl && <img src={iconUrl} alt="arrow right icon" 
        className="ml-2 rounded-full w-5 h-5"/>}
     </button>
    );
}

Buttons.propTypes = {
    label: PropTypes.string.isRequired,
    iconUrl: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    fullWidth: PropTypes.string
};


export default Buttons;
