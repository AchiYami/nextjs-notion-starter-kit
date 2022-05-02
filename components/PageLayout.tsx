import { FunctionComponent, ReactNode } from 'react';
import Navbar from './Navbar';
import styles from '../styles/PageLayout.module.scss';

interface IProps {
    noGutter?: boolean;
    children: ReactNode;
}

const PageLayout: FunctionComponent<IProps> = ({ children, noGutter = false }: IProps) => (
    <div>
        <Navbar />
        <div className={(!noGutter && styles.pagecontents)}>
            {children}
        </div>
    </div>
);

export default PageLayout;

PageLayout.defaultProps = {
    noGutter: false,
};
