import React from "react";
// подключение стиля
import "./Button.css";

const Button = ({ onClick }) => {
    return (
        // при нажатии вызывается переданная функция onClick
        <button className="custom-button" onClick={onClick}>
        Очистить
        </button>
    );
};

// Экспортируем кнопку для использования в других файлах
export default Button;