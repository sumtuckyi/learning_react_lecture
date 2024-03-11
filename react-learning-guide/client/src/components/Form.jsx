import React from 'https://esm.sh/react';
import AppInput from './AppInput';

function Form(props) {
    return (
        <form action="">
            <AppInput
                id="email"
                label="이메일"
                placeholder="user@gmail.com" />
            <AppInput
                id="password"
                label="비밀번호"
                type="password"
                placeholder="숫자, 영문, 특수문자 혼합 8자리 이상" />
        </form>
    );
}

export default Form;