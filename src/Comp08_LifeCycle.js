import React, { Component } from 'react';
import './ComponentCSS.css';


class Comp08_LifeCycle extends Component {
    render() {
        return (
            <div className="ComponentCSS">
                <h1>Life Cycle Component</h1>
                <LifeComp />
            </div>
        );
    }
}

class LifeComp extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        // 컴포넌트 생성시 호출
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        // 컴포넌트가 화면에 출력되기 직전에 호출
        // 서버쪽에서 사용하려고 만들어졌으나 리액트 v16.3에서는 deprecated 됨
        console.log('componentWillMount');
    }
    componentDidMount() {
        // 외부 라이브러리 연동: D3, Masonry, etc
        // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL etc
        // DOM에 관련된 작업: 스크롤 설정, 크기, 읽어오기 등
        console.log('componentDidMount');
    }
    static getDeriveStateFromProps() {
        // v16.3이후 지원
        // props로 받은 값을 state로 동기화 하는 작업이 필요할 때 사용
        // 특정 props가 바뀔 때 설정하고 싶은 state 값을 리턴하는 형태로 사용.
        /*
        if (nextProps.value !== prevState.value){
            return {value : nextProps.value}
        }
        return null // null 을 리턴하면 따로 업데이트할 것이 없다는 의미
        */
        console.log('getDeriveStateFromProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 현재 컴포넌트의 상태가 업데이트 되지 않아도, 부모 컴포넌트가 리렌더링 되면,
        // 자식 컴포넌트도 리렌더링 됨. 렌더링 된다는건 render() 함수 호출을 의미
        // 기본적으로 'true'로 설정
        // false를 반환하면 render()를 호출하지 않음
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        // shouldComponentUpdate에서 true를 반환 했을 때 호출
        // 여기선 주로 애니메이션 효과를 초기화하거나, 이벤트 리스너를 없애는 작업
        // 이 함수 다음에는 render() 호출
        // v16.3 이후 depecate, 기존의 기능은 getSnapshotBeforeUpdate로 대체
        console.log('componentWillUpdate');

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        /*
        *************** getSnapshotBeforeUpdate 호출 순서
        1. render()
        2. getSnapshotBeforeUpdate()
        3. 실제 DOM 변화
        4. componentDidUpdate() // 이 함수에서 return 하는 값을 3번째 인자로 받음

        
        */
        console.log('getSnapshotBeforeUpdate');
    }
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>LifeCycle </h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Comp08_LifeCycle;