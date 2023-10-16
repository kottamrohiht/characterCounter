import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    userInput: '',
    charList: [],
  }

  onChangeInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onClickAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    const updatedTxt = {id: uuidv4(), userInput}

    if (userInput !== '') {
      this.setState(prevState => ({
        charList: [...prevState.charList, updatedTxt],
        userInput: '',
      }))
    }
  }

  render() {
    const {userInput, charList} = this.state
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'
    return (
      <div className="app-container">
        <div className="count-main-container">
          <h1 className="count-heading">Count the characters like a Boss</h1>

          <div className="char-result-container">
            {charList.length > 0 ? (
              <ul className="list-container">
                {charList.map(each => (
                  <li key={each.id} className="count">
                    <p className="user-input">
                      {each.userInput[0].toUpperCase() +
                        each.userInput.slice(1)}
                      :{each.userInput.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="img-container">
                <img src={imgUrl} alt="no user inputs" className="no-input" />
              </div>
            )}
          </div>
        </div>
        <form onSubmit={this.onClickAdd} className="input-main-container">
          <h1 className="char-input-heading">Character Counter</h1>
          <div className="input-container">
            <input
              type="text"
              onChange={this.onChangeInput}
              value={userInput}
              placeholder="Enter the characters here"
              className="input-el"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
