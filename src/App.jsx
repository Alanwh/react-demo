import React from 'react'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  render() {
    return(
     <div className="jumbotron">
       {this.state.count}
      </div>
    )
  }
}

export default App;
