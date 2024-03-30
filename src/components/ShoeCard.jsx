import PropTypes from 'prop-types';

const ShoeCard = ({ imgUrl, changeBingshoImage, bigShoeImage }) => {
    
    const handleClick = () => {
        if (bigShoeImage !== imgUrl.bigShoe) {
            changeBingshoImage(imgUrl.bigShoe)
        }
    }
    
    return (
        <div className={`border-2 rounded-xl 
        ${bigShoeImage === imgUrl.bigShoe ?
        'border-coral-red' 
        : 'border-transparent'}`}
        onClick={handleClick}
        >
            <div className="flex justify-center 
            items-center bg-card bg-center bg-cover sm:w-40 smh-40
            rounded-xl max-sm:p-4">
                <img src={imgUrl.thumbnail} 
                alt="shoe collection" 
                width={127}
                height={103}/>
            </div>
        </div>
    );
}

// Agregar validación de propTypes
ShoeCard.propTypes = {
    imgUrl: PropTypes.object.isRequired,
    changeBingshoImage: PropTypes.func.isRequired,
    bigShoeImage: PropTypes.any.isRequired, // o ajusta el tipo de acuerdo a lo que esperas
};


export default ShoeCard;
