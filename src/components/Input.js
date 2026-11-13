import React from 'react';
// подключаем стиль 
import './Input.css';

// создаём компонент Input с помощью forwardRef
const Input = React.forwardRef((props, ref) => {
    // ref связывает поле с ссылкой из родительского компонента
    // {...props} передаёт полученные свойства в HTML-элемент input
    return <input ref={ref} className="custom-input" {...props} />;
});

export default Input;