import Form from './Form'
import CardList from './CardList';
class App {
    constructor(){
        this.cards=[];
        this.addCard = this.addCard.bind(this);
        this.clearCards= this.clearCards.bind(this)
    }
    addCard(data){
        this.cards=[...this.cards ,data];
        console.log(this.cards);
        //creating a new func Cardlist
        CardList(this.cards);
    }

    clearCards(){
       
        this.cards=[];
        CardList(this.cards)
    }
}

export const render=(html,node) =>{
    (node.innerHTML=html);
}

const app = new App();
const form = new Form(app.addCard,app.clearCards);