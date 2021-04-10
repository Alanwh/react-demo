import React from 'react'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  add = async () => {
    // this.setState({
    //   count: this.state.count+1
    // })
    await this.asyncSetState({count: this.state.count+1})
    console.log(this.state.count)
  }

  asyncSetState(data) {
    return new Promise((resolve) => {
      this.setState(data, resolve)
    })
  }

  componentDidMount() {
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(res => {
      return res.json()
    }).then(data => console.log(data))
  }

  render() {
    const {count} = this.state
    return(
      <>
        <div>{count}</div>
        <button onClick={this.add}>增加</button>
      </>
    )
  }
}

export default App;
