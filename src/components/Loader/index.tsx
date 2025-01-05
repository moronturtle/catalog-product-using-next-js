import styles from './styles.module.scss'

const index = () => {
    return (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      );
}

export default index