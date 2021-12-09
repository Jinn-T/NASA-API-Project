import styles from "./PotdHeader.module.scss";

const PotdHeader = ({ picture }) => {
    return (
        <div className={styles.pictureOtd}>
            <h1 className={styles.pictureOtd_title}>PICTURE OF THE DAY!</h1>
            <h3 className={styles.pictureOtd_title}>{picture.title}</h3>

            <img
                src={picture.hdurl}
                alt={picture.title}
                className={styles.pictureOtd_img}
            />
            <h5 className={styles.pictureOtd_date}>{picture.date}</h5>
            <p className={styles.pictureOtd_info}>{picture.explanation}</p>
        </div>
    );
};

export default PotdHeader;
