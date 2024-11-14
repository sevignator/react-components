import CheckboxInput from './components/CheckboxInput';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';

function App() {
  return (
    <>
      <h1>Custom components</h1>

      <h2>CheckboxInput</h2>
      <CheckboxInput labelText='Test checkbox' />

      <h2>RadioInput</h2>
      <RadioInput labelText='Test checkbox' />

      <h2>SelectInput</h2>
      <SelectInput
        labelText='Test checkbox'
        options={[
          ['first-option', 'First option'],
          ['second-option', 'Second option'],
        ]}
      />
    </>
  );
}

export default App;
