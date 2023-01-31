import thankyouImg from "../images/icon-complete.svg"

const Form = ({ submitted,  handleSubmit, handleChange, formData}) => {


    return ( 
 <div class=" p-4 rounded-lg ml-16 mt-20 w-80 ">


 {!submitted ? (<form className="" onSubmit={handleSubmit}>
    <div class="form-group mb-3 ">
      <label for="cardholderName" class="form-label  inline-block mb-2 text-gray-700">cardholder name</label>
      <input type="cardholdername" class="  form-control  block  w-full  px-2   py-1 text-base  font-normal  text-gray-700  bg-white bg-clip-padding   border border-solid border-gray-300   rounded   transition    ease-in-out     m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 " 
       id="cardHolderName"
       required
       value={formData.cardHolderName}
       onChange={handleChange}
       aria-describedby="" placeholder="felicia reile"/>
      
    </div>
    <div class="form-group mb-3">
      <label for="cardnumber" class="form-label inline-block mb-2 text-gray-700">card number</label>
      <input type="number" class="form-control block   w-full    px-2    py-1  font-normal  text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded   transition   ease-in-out   m-0  focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
       id="cardNumber"
       required
       value={formData.cardNumber}
       onChange={handleChange}
       placeholder="2443 3433 5566 5656 "/>
    </div>

        <p class=" mb-2 text-gray-700">
          Expiry DATE (MM/YY)  CVV
        </p>
    <div className="flex">
        <div class="mb-4  mr-2">
        <input   class="form-control block w-16  px-2  py-1  font-normal  text-gray-700   bg-white bg-clip-padding   border border-solid border-gray-300   rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
        type="number"
        id="expMonth"
        required
        maxLength="2"
        value={formData.expMonth}
        onChange={handleChange}
        placeholder="MM"
        />
        </div>

        <div class="mb-4 mr-3">
        <input class="form-control w-16 block  px-2 py-1 font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition ease-in-out     m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
        type="number"
        id="expYear"
         required
        minLength="1"
        maxLength="4"
        value={formData.expYear}
        onChange={handleChange}
        placeholder="YY"
        />
        </div>

        <div class="mb-4 ">
        <input class="form-control w-32 block  px-2 py-1 font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition ease-in-out     m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
        type="password"
        id="cvv"
        required
        value={formData.cvv}
        onChange={handleChange}
        placeholder="cvv"
        />
        </div>


    </div>

    
    <button type="submit" class="
      px-6
      py-2.5
      bg-purple-900
      text-white
      font-medium
      text-xs
      leading-tight
      w-full
      uppercase
      rounded
      shadow-md
      hover:bg-purple-600 hover:shadow-lg
      focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-900 active:shadow-lg
      transition
      duration-150
      ease-in-out">confirm</button>
  </form>):(
    <div className="p-2 justify-center ">
        <img src={thankyouImg} alt="tick" className="ml-24 mt-14 mb-3" />
        <h1 className="text-2xl uppercase ml-20 mb-3">thank you</h1>
        <p className="mb-5 ml-8">we've added your card details</p>
        <button type="submit" class=" px-6 py-2.5 bg-purple-900   text-white font-medium text-xs leading-tight w-full uppercase rounded shadow-md hover:bg-purple-600 hover:shadow-lg  focus:bg-purple-900 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-purple-900 active:shadow-lg  transition duration-150 ease-in-out">Continue</button>
    </div>
  )} 
</div>
     );
}
 
export default Form;