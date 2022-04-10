import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';

export const IconPlus = ({ size = "md" }: any) => (
    <span className={`k-icon k-icon-${size} k-i-plus-outline `}></span>
);
export const IconEdit = () => <FontAwesomeIcon icon={faPen} />
export const IconDelete = () => <FontAwesomeIcon icon={faTrashCan} />