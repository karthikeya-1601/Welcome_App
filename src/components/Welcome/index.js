import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {count: false}

  changeState = () => {
    this.setState(prevState => ({count: !prevState.count}))
  }

  authButton = () => {
    const {count} = this.state
    if (count === false) {
      return 'Subscribe'
    }
    return 'Subscribed'
  }

  render() {
    return (
      <div className="cont">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.changeState}>{this.authButton()}</button>
      </div>
    )
  }
}

export default Welcome
