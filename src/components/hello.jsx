
class Hello extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      clicked: false
    };

  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    //build and return html for the component - will be called by react automatically
  return (
      <div className = {this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
      Hello {this.props.name}
      </div>
    )
  }

}
