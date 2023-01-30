import frontcard from "../images/bg-card-front.png"
import cardLogo from "../images/card-logo.svg"

const frontSide = () => {


    return (  
        <div className="relative mb-3">
            <div>
                <img src={frontcard} alt="" />
                <img src={cardLogo} alt="" className="z-20 absolute top-4 left-5" />
                <p className="z-20 absolute top-40 left-8 w-64 text-white">7838 2546 4422 5343</p>
                <p className="z-20 absolute bottom-6 left-8 text-white">felicia reile</p>
                <p className="z-20 absolute bottom-6 right-20 text-white">00/00</p>
             </div>
        </div>
    );
}
 
export default frontSide;