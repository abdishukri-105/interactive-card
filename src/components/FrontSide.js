import frontcard from "../images/bg-card-front.png"
import cardLogo from "../images/card-logo.svg"

const frontSide = ({cardDetails}) => {
    console.log("frontside received this",cardDetails)

    const frontsideDetails = cardDetails.map(cardDetail => {
        return <div>
               <p className="z-20 absolute top-40 left-8 w-64 text-white" >
                 {cardDetail.cardNumber}
                 </p>
                <p className="z-20 absolute bottom-6 left-8 text-white">{cardDetail.cardHolderName}</p>
                <p className="z-20 absolute bottom-6 right-20 text-white">{cardDetail.expMonth}</p>

             </div>
    })


    return (  
        <div className="relative mb-3">
            <div>
                <img src={frontcard} alt="" />
                <img src={cardLogo} alt="" className="z-20 absolute top-4 left-5" />
               {frontsideDetails}
             </div>
        </div>
    );
}
 
export default frontSide;