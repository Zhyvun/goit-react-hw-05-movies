import { useState } from 'react';
import PropTypes from 'prop-types'; // валідація типів пропсів компонентів
import { Input, SearchForm, Button } from './Form.styled'; //Стилізація компонентів

const Form = ({setParams}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParams(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input // затримка введення тексту (був колись DebounceInput 🙂)
        // minLength={2} // мінумум 2 символа
        // debounceTimeout={300} // 300 мілісекунд
        type="text"
        value={query} // якщо заданий запит → виведеться заголовок "Found movies"
        placeholder={'Enter movies title ...'}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Form;

Form.propTypes = {
	setParams: PropTypes.func.isRequired,
}

//*#info - Форма для формуввання на сторінці Movies 
/*
const Form = ({setParams}) => {...} -  функціональний компонент Form, отримує пропс setParams - поле для введення запиту та кнопку пошуку.
const [query, setQuery] = useState(''); - початковий стан для запиту (query), за замовчуванням порожній, useState - зміна стану
const handleInputChange = event => { ... } - функція-обробник, викликається при зміні значення в полі вводу для встановлення значення query, з видаленням зайвих пробілів та приведення до нижнього регістру
const handleSubmit = event => { ... } - функція-обробник - викликається при відправі, викликає метод setParams з переданим значенням query .
SearchForm onSubmit={handleSubmit}> ... </SearchForm> - форма-обробник подій onSubmit, викликає функцію handleSubmit, коли форма відправляється.
<Input ... /> - поле для вводу
<Button type="submit">Search</Button> - кнопка відправки
Form.propTypes = { ... } - валідаціія пропсів Form очікує setParams як обов'язковий пропс із типом функції.
*/