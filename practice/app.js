class App extends React.Component {
  state = {
    availabeProducts: 7,
    shoppingCart: 0,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCard = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  render() {
    return (
      <div>
        <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>

        <span>{this.state.shoppingCart}</span>

        <button disabled={this.state.shoppingCart === this.state.availabeProducts ? true : false} onClick={this.handleAddToCard}>+</button>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));