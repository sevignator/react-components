import Accordion from './components/Accordion';
import CheckboxInput from './components/CheckboxInput';
import Details from './components/Details';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';

function App() {
  return (
    <>
      <h1>Custom components</h1>

      <h2>Accordion</h2>
      <Accordion labelText='My items' labelTag='h3' isLandmark={true}>
        <Details labelText='Item 1'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at
            dicta, ullam adipisci quis impedit atque voluptate aliquam minus
            quibusdam explicabo consectetur? Quaerat minus, odio deleniti
            laborum impedit animi! Impedit suscipit repellendus voluptatum
            laudantium sint magni, tempora quia beatae saepe nam, praesentium,
            fugiat facilis! Natus facilis et molestias id adipisci.
          </p>
        </Details>
        <Details labelText='Item 2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at
            dicta, ullam adipisci quis impedit atque voluptate aliquam minus
            quibusdam explicabo consectetur? Quaerat minus, odio deleniti
            laborum impedit animi! Impedit suscipit repellendus voluptatum
            laudantium sint magni, tempora quia beatae saepe nam, praesentium,
            fugiat facilis! Natus facilis et molestias id adipisci.
          </p>
        </Details>
      </Accordion>

      <h2>Details</h2>
      <Details labelText='Details label 1'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a nam
          maxime provident molestiae inventore ratione sunt recusandae porro
          consequuntur.
        </p>
        <p>
          Laudantium aliquid dolorum totam expedita explicabo. Deserunt
          obcaecati neque consectetur voluptatem dolores adipisci itaque unde
          eligendi explicabo corporis soluta, delectus, perferendis aspernatur?
          Cum in libero obcaecati odio culpa tenetur blanditiis laboriosam.
        </p>
      </Details>
      <Details labelText='Details label 2 (open by default)' isOpen={true}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a nam
          maxime provident molestiae inventore ratione sunt recusandae porro
          consequuntur.
        </p>
        <p>
          Laudantium aliquid dolorum totam expedita explicabo. Deserunt
          obcaecati neque consectetur voluptatem dolores adipisci itaque unde
          eligendi explicabo corporis soluta, delectus, perferendis aspernatur?
          Cum in libero obcaecati odio culpa tenetur blanditiis laboriosam.
        </p>
      </Details>

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
