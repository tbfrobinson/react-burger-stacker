import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const ingredients = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]



export default class App extends Component {

  state = {
    stack: []
  }
  
  handleClick = e => {
    console.log(e)
    
    const ingredient = {'name':e.name, 'color':e.color}
    const newBurgerIngredients = [...this.state.stack]
    newBurgerIngredients.unshift(ingredient)
    
    this.setState({
      stack: newBurgerIngredients
    })
    console.log(this.state)
  }

  handleRemoveFromStack = e => {
    console.log('remove')
    this.setState ({
      stack: []
    })
  }

  
  render() {

    return (
      <div style={{display:'flex'}}>
        <IngredientList handleClick={this.handleClick} ingredients={ingredients}/>
        <BurgerPane ingredients={this.state.stack} handleRemoveFromStack={this.handleRemoveFromStack}/>
      </div>
    )
  }
}
