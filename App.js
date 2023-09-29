import React, { Children, useState, Componet, useEffect, useRef } from 'react';

// const App = (props) => { 
//   const list = props.list;
//   const [mainList, setList]=useState(list)
//   const [text,setText]=useState('')
//   const textArea = useRef(null)
//   const handleText = (e) => {
//     setText(e.target.value)
//   }
//   const changeText = () => {
//     textArea.current.focus()
//     const newList = list.concat(textArea.current.value);
//     setList(newList)
//   }
//   return (
//     <div>
//       <input type='text' onChange={handleText} ref={textArea} value={text}/>
//       <button onClick={changeText}>click</button>
//     </div>
//   )
// }

// const List = (props) => {
//   const arr = props.arr
//   const listItem = arr.map(it => <li key={it.toString()}>{it}</li>)
//   const [list, setList] = useState(listItem)
//   const setVal = () => {
//     list.unshift(<li key='!'>!!!</li >)
//     setList(list)
//   }
//   return (<div>
//     <button onClick={setVal}>
//       click
//     </button>
//     <ul>{list.map(it => (<li key={it}>{it}</li>))}</ul>
//     <App/>
//   </div>)
// }

// const PList = () => {
//   return <List arr={[1, 2, 3, 4, 5]} />
// }

class LyfecycleComponet extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }
  render() {
    return <div>
      <button onClick={this.handleClick}>click</button>
    </div>
  }
  componentDidMount() {
    const sendPostRequest = async () => {
      try {
        const response = await fetch("https://todo-redev.herokuapp.com/api-docs/", {
          method: "GET",
          headers: {
            accept: 'application/json',
          }
        })
        const data = await response;
        console.log("data: ", data);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    sendPostRequest()
    console.log('element mount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('update')
    console.log(this.state.count)
  }
  shouldComponentUpdate(nextProps) {
    return this.state.count % 2 !== 0
  }
  componentWillUnmount() {
    console.log('delete')
  }
}
export default LyfecycleComponet



