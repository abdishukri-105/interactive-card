import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import Form from "./Form";

const CardContainer = () => {
    return ( 
        <div className=" flex mt-9 justify-center place-content-center" >
              
            <div className="   ">
              <FrontSide />
              <BackSide/>
            </div>

            <Form />
        </div>
     );
}
export default CardContainer;