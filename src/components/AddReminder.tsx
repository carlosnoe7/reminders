import { ReactElement } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import '../styles/Modal.css'

interface AddReminderProps{ 
    children?:ReactElement | ReactElement[];
}

const AddReminder = ({children}:AddReminderProps) => {
    const {value} = useSelector((state) => (state as any).modal);
    const customStyles = {
        content: {
          top: `50%`,
          left: `50%`,
          right: `auto`,
          marginRight: `-50%`,
          transform: `translate(-50%, -50%)`,
          height: `420px`,
          borderRadius: `7px`,
        },
      }
    return (
        <Modal
        isOpen={value}
        onRequestClose={()=>{}}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
        style={customStyles}
      >
        {children}
      </Modal>
    )
}

export default AddReminder
