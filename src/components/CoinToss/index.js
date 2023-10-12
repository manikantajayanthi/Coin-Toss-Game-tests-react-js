import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headCount: 0, tailCount: 0}

  changeToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      const {totalCount, headCount} = this.state
      this.setState({
        isHead: true,
        headCount: headCount + 1,
        totalCount: totalCount + 1,
      })
    } else {
      const {totalCount, tailCount} = this.state
      this.setState({
        isHead: false,
        tailCount: tailCount + 1,
        totalCount: totalCount + 1,
      })
    }
  }

  render() {
    const {isHead, totalCount, headCount, tailCount} = this.state
    const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    const image = isHead ? head : tail
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="head-tail-description">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.changeToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total-count">Total: {totalCount}</p>
            <p className="total-count">Heads: {headCount}</p>
            <p className="total-count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
