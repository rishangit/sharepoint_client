import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const IconPlus = ({ size = "md" }: any) => (
    <span className={`k-icon k-icon-${size} k-i-plus-outline `}></span>
);

export const IconFa = ({ icon }) => <FontAwesomeIcon icon={icon} />
