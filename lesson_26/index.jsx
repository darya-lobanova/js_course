//Не кричіть, но я полезла дальше в документации ибо первоначальную идею
//не успевала реализовать. Ну а в docs було шось цікаве

import React from 'react'
import ReactDom from 'react-dom'


function FormattedDate(props) {
    return (<div>
            <h2 style={ { color: '#6699ff' } }>Time is { props.date.toLocaleTimeString() }</h2>
            <h2 style={ { color: '#ff80ff' } }>Date is { props.date.toLocaleDateString() }</h2>
    </div> )   
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.currentTimeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.currentTimeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <FormattedDate date={this.state.date} />
  }
}

function Today() {
  return <Time />
}

ReactDom.render(
  <Today />,
  document.getElementById('root'),
)



//Таймер, закомментированный ниже, который я не успела реализовать до конца.
//Это была первоначальная идея


// class Timer extends React.Component {
//     constructor(props) {
//         super(props)
//         this.start = this.start.bind(this)
//         this.state = {
//             timer: null,
//             timeLeft: null
//         }
//     }

//     start() {
//         let timer = setInterval(() => {
//             let left = this.state.timeLeft - 1
//             if (left === 0) {
//                 clearInterval(timer)
//             }
//             this.setState({
//                 left: timeLeft
//             })
//         }, 1000)
//         return this.setState({left: timeLeft, timer: timer})
//     }

//     render () {
//        return (
//            <div>
//                 <h1>Timer</h1>
//                 <Inp />
//                 <Btn start={this.start}/>     
//                 <Display timeLeft = {this.state.timeLeft}/> 
//            </div>
//        )
//     }
// }

// class Inp extends React.Component {
//     render () {
//         return <input />
//     }
// }

// class Btn extends React.Component {
//     render () {
//         return <button>Start</button>

//     }
// }

// class Display extends React.Component {
//     render () {
//         return 
//     }
// }

// ReactDom.render(
//     <Timer />,
//     document.getElementById('root'),
// );





//А это просто другое начало (через const)

// const Timer = () => {
//     return (
//         <div>
//             <h1>Timer</h1>
//             <Inp />
//             <Btn />
//         </div>
//     )
// }

// const Inp = () => {
//     return (
//         <input />
//     )
// }

// const Btn = () => {
//     return (
//         <button />
//     )
// }

// const Display = () => {
//      return
// }

// ReactDom.render(
//     <Timer />,
//     document.getElementById('root'),
// );