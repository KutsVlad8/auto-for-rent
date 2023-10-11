import { useState } from 'react';
import Select from 'react-select';

import Button from '../Button/Button';
import { Form } from './FilterBar.styled';
import customStyles from './FilterBar.styled';

function FilterBar() {
  // Создайте состояния для выбранных значений для каждого селекта
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  console.log(selectedOption1);
  console.log(selectedOption2);

  // Определите опции для каждого селекта
  const options1 = [
    { value: 'option1', label: 'Porshe' },
    { value: 'option2', label: 'Volvo' },
    { value: 'option3', label: 'Mercedes - Benz' },
    { value: 'option4', label: 'Subaru' },
    { value: 'option5', label: 'Mitsubishi' },
    { value: 'option6', label: 'Nissan' },
    { value: 'option10', label: 'Chevrolet' },
    { value: 'option7', label: 'BMW' },
    { value: 'option8', label: 'Audi' },
    { value: 'option9', label: 'Opel' },
    { value: 'option10', label: 'Bentley' },
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
  ];

  const handleSubmit = event => {
    event.preventDefault();

    console.log('Form submitted!');
    console.log('Selected Option 1:', selectedOption1);
    console.log('Selected Option 2:', selectedOption2);
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <label>
        Car brand
        <Select
          styles={customStyles}
          value={selectedOption1}
          onChange={setSelectedOption1}
          options={options1}
          placeholder="Enter the text"
        />
      </label>
      <label>
        Price/1 hour
        <Select
          styles={customStyles}
          value={selectedOption2}
          onChange={setSelectedOption2}
          options={options2}
          placeholder="TO $"
        />
      </label>

      <Button text={'Search'} width={'136px'} height={'48px'} type={'submit'} />
    </Form>
  );
}

export default FilterBar;
