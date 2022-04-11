import React ,{Component} from "react";

class LifeCycleComp extends Component{
    constructor(props){
        super(props)
        console.log("constructor called");
        this.state={value:10}
    }
    componentDidMount(){
        console.log("componentdid mount")
    }
    componentDidUpdate(){
        console.log("component did update called")
    }
    componentWillUnmount(){
        console.log("componentwillunmount called")
    }
    handleValue = () => {
        this.setState({value:20})
    }
    render(){
        
        console.log("render method called ");
        
        return(
            <React.Fragment>
                <h1>value={this.state.value}</h1>
                <button onClick={this.handleValue}>click</button>
            </React.Fragment>
        )
    }
}
export default LifeCycleComp;
