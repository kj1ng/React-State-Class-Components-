
import React, { Component } from 'react'
import "./App.css"

export class App extends Component {
  

    state  = {
      fullName: "",
      bio: "", 
      imgSrc: "", 
      profession: "",
      shows: false 
     }; 
    
  updateState = () =>{
    this.setState({
    fullName: "Adekunle Joseph",
    bio: "Kj is from Kogi State and a digital normad", 
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHA3y-nJtVInwwAqyAes75O6EDhquq0LU3xOYPkOyW-g&s", 
    profession: "Business Analyst",
    shows: true })
    
 }

  // componentDidMount=()=>{
  //   setInterval(()=>{
  //  this.SetState(Date.getHours()) 
  //   }, 2000)
  
  // }

  render() {
    return (
      <div className = "Profile_Box">
        <p className = "Profile_Display">
 <h2>This is my Profile</h2>
 <h3>FullName: {this.state.fullName}<br/>
    Bio: {this.state.bio}<br/>
    Image Source: {this.state.imgSrc}<br/>
    Profession: {this.state.profession}<br/>
    
    <br/>
 </h3>
        </p>
        <button onClick={this.updateState}>Click to View my Details </button>
      </div>
    )
  }

}
export default App
