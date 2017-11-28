  import React, { Component } from 'react'
  import { addRecipe , removeFromCalendar} from '../actions'
  import {connect} from 'react-redux'
  class App extends Component {
    
    render() {
      console.log('PROPS',this.props);
      return (
        <div>
          hello
        </div>
      )
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      addRecipe:data => dispatch(addRecipe(data)),
      removeFromCalendar: data => dispatch(removeFromCalendar(data))
    }
  }

  function matStateToProps(calendar){
    const daysOrder = ['sunday','monday','tuesday','wednesday','thursday','friday']
    return{
        calendar : daysOrder.map((day)=>({
          day,
          meals: Object.keys(calendar[day]).reduce((meals,meal)=>{
            meals[meal] = calendar[day][meal] ? calendar[day][meal] : null
            return meals;
          },{})
        }))
    };
  }

  export default connect(matStateToProps,mapDispatchToProps)(App)
