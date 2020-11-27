import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component{
  state={
    name:'',
    email:'',
    address:{
      street:'',
      postalCode:'',

    },
    loading:false
  }

  orderHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});
        //alert('you continue');
        const order={
          ingredients:this.props.ingredients,
          price:this.props.price,
          customer:{
            name:'Shanti Mal',
            address:{
              steet:'Teststreet 1',
              zipCode:'41351',
              country:'Germany'
            },
            email:'test@test.com'
          },
          deliveryMethod:'fastest'

        }
axios.post('/orders.json',order)
.then(response=>{
  //console.log(response);
  this.setState({loading:false});
  this.props.history.push('/');
})
.catch(error=>{
//  console.log(error);
this.setState({loading:false});
})
  }

  render(){
    let form=(<form>
    <input type="text" className={classes.Input} name="name" placeholder="Your Name" />
    <input type="email" className={classes.Input} name="email" placeholder="Your Name" />
    <input type="text" className={classes.Input} name="street" placeholder="street" />
    <input type="text" className={classes.Input} name="postal" placeholder="Postal Code" />
    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

    </form>);
    if(this.state.loading){
      form= <Spinner />
    }
    return(
<div className={classes.ContactData}>
<h4>Enter your contact data</h4>
{form}
</div>

    )
  }
}

export default ContactData;
