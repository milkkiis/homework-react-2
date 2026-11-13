import React, {useRef} from "react";
// подключаем компоненты кнопку и поля ввода
import Button from './components/Button'
import Input from "./components/Input";
import './App.css'

function App() {
  // создаём ссылку на поле ввода
  const inputRef = useRef(null);

  // функция очистки поля при нажатии на кнопку
  const handleClear = () => {
      if (inputRef.current) {
        // заменяем содержимое поля пустой строкой
        inputRef.current.value = '';
      }
  };

  return (
    <div className="app-container">
      {/* Передаём ссылку в Input, где forwardRef связывает её с HTML-полем */}
      <Input ref = {inputRef} placeholder = "Введите текст..." />

      {/* Передаём кнопке функцию, которая очистит поле при нажатии */}
      <Button onClick={handleClear} />
    </div>
  )
}

export default App;
