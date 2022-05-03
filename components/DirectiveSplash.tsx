import { FunctionComponent } from "react";
import styles from '../styles/DirectiveSplash.module.scss'


const DirectiveSplash: FunctionComponent = () => {

    return (
        <div className={styles.splashImage}>
         <img src="images/starpoint-logo-updated.png" className={styles.logoSplash}/>
            <div className={styles.splashText}>
                <h1>We are Starpoint Studios</h1>
                <h3>(And we are still under construction)</h3>
            </div>
        </div>
    );
};

export default DirectiveSplash;