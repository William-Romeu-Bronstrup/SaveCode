import styles from './styles.module.scss';

export function Main() {

  function textAreaValue(event: any) {
    localStorage.setItem('textArea', event.target.value)
  };

  let resultCols = localStorage.getItem('inputCols');
  let resultRows = localStorage.getItem('inputRows');
  let textArea = localStorage.getItem('textArea');
  let inputValueColor = localStorage.getItem('inputValueColor');
  let inputColor = localStorage.getItem('inputColor');
    
  let valueCols = Number(resultCols);
  let valueRows = Number(resultRows);
  let valueArea = String(textArea);

  if(valueArea.length === 4) {
    valueArea = 'Enter your first reminders...'
  };
    
  return (
    <main className={styles.container}>
    
      <p>Write here your codes, documentations, examples and notes.
        <br />
        <span>(We use localStorage for save your notes).</span>
      </p>

      <textarea
      cols={valueCols === 0 ? 20 : valueCols }
      rows={valueRows === 0 ? 10 : valueRows}
      defaultValue={valueArea} 
      style={{backgroundColor: `${inputValueColor}`, color: `${inputColor}`}}
      spellCheck="false"
      placeholder="Enter your first reminders..."
      onChange={textAreaValue}
      />

    </main>
  )
}
