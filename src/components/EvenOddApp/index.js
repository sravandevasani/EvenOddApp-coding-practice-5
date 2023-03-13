import {Component} from 'react'
import './index.css'

class EvenOddAdd extends Component {
  state = {count: 0}

  incrementNum = () => {
    this.setState(() => ({count: Math.round(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-type">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button className="button" type="button" onClick={this.incrementNum}>
            Increment
          </button>
          <p className="about">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddAdd
