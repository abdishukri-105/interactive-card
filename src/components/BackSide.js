import backcard from "../images/bg-card-back.png"

const backSide = ({cardDetails}) => {
    
    const backSideDetails = cardDetails.map(cardDetail => {
        return   <p className="z-20 absolute top-28 right-12 uppercase">{cardDetail.cvv}</p>
    })


    return ( 
        <div className="ml-12 relative">
            <img src={backcard} alt="" />
            {cardDetails.length > 0? backSideDetails:
             <p className="z-20 absolute top-28 right-12 uppercase">cvv</p>
            } 
             
        </div>
     );

        }
export default backSide;