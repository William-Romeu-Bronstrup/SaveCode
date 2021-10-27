
import styles from './styles.module.scss';

export function Modal() {

  function inputValueCols(event: any) {
    localStorage.setItem('inputCols', event.target.value)
  };
  
  function inputValueRows(event: any) {
    localStorage.setItem('inputRows', event.target.value)
  };

  function inputValueColor(event: any) {
    localStorage.setItem('inputValueColor', event.target.value)
  };
  
  function inputColor(event: any) {
    localStorage.setItem('inputColor', event.target.value)
  };

return (
    <div className={styles.container}>
      <form className={styles.content}>
        <input 
        type="number" 
        placeholder="Set column size, example(140)" 
        onChange={inputValueCols} 
        />

        <input 
        type="number" 
        placeholder="Set line size, example(20)" 
        onChange={inputValueRows} 
        />

        <label htmlFor="inputValueColor">
        Set the color for your Background:

          <input 
          type="color"
          id="inputValueColor"
          onChange={inputValueColor}
          />
        </label>

        <label htmlFor="inputColor">
        set the text color:
          <input
          type="color"
          id="inputColor"
          onChange={inputColor}
          />
        </label>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
   );
}
