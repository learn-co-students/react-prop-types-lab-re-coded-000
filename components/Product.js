const React = require('react');
const options= ['white', 'eggshell-white', 'salmon'];
class Product extends React.Component{
render(){
  return(
    <div className="product" >
    <ul>
     <li>name: {this.props.name}</li>
     <li>producer: {this.props.producer}</li>
     <li>has Watermark:{this.props.hasWatermark ? 'Yes' : 'No'}</li>

     <li>color:  {this.props.color}</li>
     <li>weight: {this.props.weight}</li>
     </ul>
    </div>
  )
}

}
Product.defaultProps={hasWatermark: false,};

Product.propTypes={name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool ,
color: React.PropTypes.oneOf(options).isRequired,
weight: function(props){
  if(props.weight===undefined){
    return 'invalid weight value.';
  }
  else if (isNaN(props.weight)) {
   return 'weight prop should be a number.';
  }
  if(!(props.weight >=80 && props.weight<=300)){
      return 'weight prop should be between 80 and 300.' ;
  }
}
}


module.exports=Product
