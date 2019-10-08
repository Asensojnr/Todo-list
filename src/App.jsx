import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    Todolist: [
      {
        task: "Reasearch on Bently labs",
        time: "20:20",
        completed: "false"
      },
      {
        task: "Send email to Dr. Freddy Blay on the state of chrome",
        time: "17:00",
        completed: "true"
      },
      {
        task: "Play Fortnite",
        time: "16:30",
        completed: "true"
      },
      {
        task: "Prepare research on next artwork",
        time: "10:00",
        completed: "false"
      },
      {
        task: "send roses to Rosina Mensah,birthday",
        time: "05:00",
        completed: "true"
      }
    ]
  }


  render() {

    return (
      <section className="section">
        <div className="container">

          <div className="columns">
            <div className="column">
              <p className="title">Task</p>
              <ul>
                {this.state.Todolist.map(t => (
                  <li>{t.task}</li>
                ))}
              </ul>
            </div>
            <div className="column">
              <p className="title">Time</p>
              <ul>
                {this.state.Todolist.map(t => (
                  <li>{t.time}</li>
                ))}
              </ul>
            </div>


            <div className="column">
              <p className="title">Status</p>
              <ul>
                {this.state.Todolist.map(t => (
                  <li>{t.completed}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}




export default App;
