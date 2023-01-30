import backcard from "../images/bg-card-back.png"

const backSide = () => {
    return ( 
        <div className="ml-12 relative">
            <img src={backcard} alt="" />
            <p className="z-20 absolute top-28 right-12 uppercase">cvv</p>
        </div>
     );
}
 
export default backSide;