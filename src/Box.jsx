import React,{Component} from "react";
import PropTypes from 'prop-types'
class Box extends Component {    //const Box = (props) =>
  render() {
    return (
      <>
        <div
          className="mybox"
          style={{
            height: "200px",
            width: "200px",
            backgroundColor: this.props.colorName,
            margin: "30px",
          }}
        >
          {this.props.boxName}
        </div>
      </>
    );
  }
}
export default Box;


Box.propTypes={
    colorName:PropTypes.string,
    boxName:PropTypes.string,
}
Box.defaultProps={
    colorName:"Orange",
    boxName:"myBox"
}