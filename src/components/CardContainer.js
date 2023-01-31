import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import Form from "./Form";
import { useState } from "react";
const CardContainer = () => {
   const [cardDetails, setCardDetails] = useState([])
    // store all inputs in object set it to empty
    const [formData, setFormData] = useState({
        cardHolderName:  "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvv: "",

    })
   // submit the form here
    const handleSubmit = (e) => {
       e.preventDefault()
        console.log(formData)
        const updatedCard = [...cardDetails, formData]
            console.log('submit this',updatedCard)
            setCardDetails(updatedCard)
    }

    // take input from users 
    const handleChange = (e) => {
        const key = e.target.id
        const value = e.target.value
        console.log(value)
        console.log(key)
        setFormData({
            ...formData,
            [key]: value
        })
    }

    console.log(formData)

   


    return ( 
        <div className=" flex mt-9 justify-center place-content-center" >
              
            <div className="   ">
              <FrontSide cardDetails={cardDetails}/>
              <BackSide  cardDetails={cardDetails} />
            </div>
            <Form formData={formData} handleSubmit={handleSubmit} handleChange = {handleChange} />
        </div>
     );
}
export default CardContainer;