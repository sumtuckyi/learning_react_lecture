import React from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom/client';


//React 컴포넌트 타입
// react component는 리액트 엘리먼트(리액트 마크업)를 반환하는 자바스크립트 함수
//1. class (Legacy API)
//2. function (React v16.8+, 2019)

// class Button {
//     render() {
//         return (
//             <button type='button'>click me</button>
//         )
//     }
// }

// 1. class
class Button extends React.Component {
    render() {
        return (
            <span className="buttonWrapper">
                <button type='button'>click me</button>
            </span>
        );
    }
}

// 2. function
function AppButton() {
    return (
        <span className="appButton">
            <button type='button'>click me</button>
        </span>
    );
}
function App() {
    return (
        <div id='App'>
            <Button></Button>
            <AppButton />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);