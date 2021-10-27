import { useState } from 'react';
import { Modal } from '../Modal';

import styles from './styles.module.scss';

export function Button() {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open)
  }

  return (
    <>
      <aside className={styles.container}>
        <button onClick={handleModal}>{open ? 'Close' : 'Configuration'}</button>
      </aside>
      {open ? <Modal /> : false}
    </>
  )
}