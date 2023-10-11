import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const customStyles = {
  container: provided => ({
    ...provided,
    width: '300px', // Ширина контейнера
  }),
  control: provided => ({
    ...provided,
    border: '1px solid #ccc', // Граница контейнера
    borderRadius: '4px', // Скругление углов контейнера
    padding: '8px', // Внутренний отступ контейнера
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : 'white', // Цвет фона выбранной опции
    color: state.isSelected ? 'white' : 'black', // Цвет текста выбранной опции
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#007bff', // Цвет стрелки выпадающего списка
  }),
  indicatorSeparator: () => ({
    display: 'none', // Убрать разделитель между флажком и стрелкой
  }),
};

export default customStyles;
