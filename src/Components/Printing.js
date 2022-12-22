import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { exportComponentAsJPEG,exportComponentAsPDF} from 'react-component-export-image';
import '../CSS/printing.css';

export default function Printing(Pro) {
    const show=Pro.show;
    const handleClose=Pro.handleClose;
    const componentRef1=Pro.componentRef1;
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='modaltitle'>
            <Modal.Title>Download {Pro.vall}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
            <Button onClick={() => exportComponentAsJPEG(componentRef1,{fileName:'magicSquare'})}  className='modal-buttons1 btn-lg' variant="secondary">As Image</Button><br></br>
            <Button onClick={() => exportComponentAsPDF(componentRef1, {fileName:'magicSquare',pdfOptions: {format:[595.28, 841.89],w:350,h:350,unit:'px'} })}  className='modal-buttons2 btn-lg' variant="secondary">As PDF</Button><br></br>
        </Modal.Body>
        <Modal.Footer className='modaltitle'>
        <Button variant="light" onClick={handleClose}>Close</Button>
        <Button variant="light" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
    </Modal>
  );
}

