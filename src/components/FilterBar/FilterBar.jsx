// import React, { useState } from 'react';
import Select from 'react-select';
import Button from '../Button/Button';
import { FilterContainer } from './FilterBar.styled';
import customStyles from './FilterBar.styled';

function FilterBar() {
  // Создайте состояния для выбранных значений для каждого селекта
  // const [selectedOption1, setSelectedOption1] = useState(null);
  // const [selectedOption2, setSelectedOption2] = useState(null);
  // const [selectedOption3, setSelectedOption3] = useState(null);

  // Определите опции для каждого селекта
  const options1 = [
    { value: 'option1', label: 'Опция 1' },
    { value: 'option2', label: 'Опция 2' },
    // Добавьте другие опции по вашему усмотрению
  ];

  const options2 = [
    { value: 'optionA', label: ' 10$' },
    { value: 'optionB', label: ' 20$' },
    { value: 'optionB', label: ' 30$' },
    { value: 'optionB', label: ' 40$' },
    { value: 'optionB', label: ' 50$' },
    { value: 'optionB', label: ' 60$' },
    { value: 'optionB', label: ' 70$' },
    { value: 'optionB', label: ' 80$' },
    { value: 'optionB', label: ' 90$' },
    // Добавьте другие опции по вашему усмотрению
  ];

  return (
    <FilterContainer>
      <label>
        Car brand
        <Select
          styles={customStyles}
          // value={selectedOption1}
          // onChange={setSelectedOption1}
          options={options1}
          placeholder="Enter the text"
        />
      </label>
      <label>
        Price/1 hour
        <Select
          styles={customStyles}
          // value={selectedOption2}
          // onChange={setSelectedOption2}
          options={options2}
          placeholder="TO $"
        />
      </label>

      <Button text={'Search'} width={'136px'} height={'48px'} type={'submit'} />
    </FilterContainer>
  );
}

export default FilterBar;
