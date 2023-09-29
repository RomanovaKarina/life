import React, { Children, useState, Componet, useEffect, useRef } from 'react';

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



