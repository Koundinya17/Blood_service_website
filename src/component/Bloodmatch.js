import React, { Component } from 'react'
import axios from 'axios'
export class Bloodmatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         location:"",
         bloodgroup:""
      }
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/details`)
        .then(res=>{
          this.setState({list:res.data})
        })
        .catch()
      }
    submit=()=>{
        const {location,bloodgroup,phoneno}=this.state
        axios.get('http://localhost:3001/details',{
            location:location,
            bloodgroup:bloodgroup,
            phoneno:phoneno
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  render() {
    const {location,bloodgroup}=this.state
    return (
      <div>
        <form className='blood-match'>
            <label>Location</label>
            <select value={location} onChange={(e)=>this.setState({location:e.target.value})}>
            <option>select location</option>
                <option>Kurnool</option>
                <option>Nandyal</option>
                <option>Vijayawada</option>
                <option>Hyderabad</option>
            </select>
            <label>Blood Group</label>
            <select value={bloodgroup} onChange={(e)=>this.setState({bloodgroup:e.target.value})}>
            <option>select bloodgroup</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
            </select>
            <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Bloodmatch
