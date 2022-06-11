import axios from 'axios'
const API_URL ="http://api.github.com/users"
class Form {
    // STEP 1 MAKE A CONSTRUCTOR 
    constructor(addCard,clearCards){
        this.addCard =addCard;
        this.clearCards=clearCards;
       // console.log(addCard);
        this.API_URL='';
        this.searchTerm ='';
        this.searchInput = document.querySelector('input[name="search"]');
        this.submitButton= document.querySelector('button[type="submit"]');
        this.submitButton.disabled =!this.searchTerm;
        
        this.clearButton = document.querySelector('button[type="button"]');
        this.clearButton.addEventListener('click',()=>{this.clearCards();});
        this.form = document.querySelector('form');
        this.form.addEventListener('submit',(e) =>{
            this.handleSubmit(e);
        })
      // 
        //STEP 2 LISTEN ON THE INPUT
        this.searchInput.addEventListener('keyup',(e)=>{
            //step 5 pass an event to the function
            this.handleKeyUp(e);
        })
    }
    //STEP 3 MAKE A FUNCTION TO HANDLE THE INPUT
    handleKeyUp(e){
        this.searchTerm= e.target.value.trim();
        this.API_URL=`${API_URL}/${this.searchTerm}`;
        this.submitButton.disabled =!this.searchTerm;
       // console.log(this.API_URL);
        
    }handleSubmit(e){
        e.preventDefault();
        //console.log(e);
        axios.get(this.API_URL)
         .then(({data})=> this.addCard(data))
         .catch(err =>this.formatError('promise rejected',err));
         this.form.reset();
    }
 formatError(err){
console.log(err);
const errorText =document.createElement('p');
errorText.innerText= 'No user found'
errorText.style.color ="red";
document.querySelector('form').appendChild(errorText);
setTimeout(() =>document.querySelector('form').removeChild(errorText),5000)
    }

}
//STEP 4 EXPRT TO OUR INPUT JS FILE INDEX.JS

export default Form