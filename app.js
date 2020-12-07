// TODO
let GroceryList = (props) => {
  return (
  <ul>
    {props.list.map((item, key) => <GroceryListItem item={item} key={key}/>)}
  </ul>
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }
  onHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render () {
    debugger;
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}




ReactDOM.render(<GroceryList list = {['Milk', 'Eggs', 'Cheese']}/>, document.getElementById('app'));



