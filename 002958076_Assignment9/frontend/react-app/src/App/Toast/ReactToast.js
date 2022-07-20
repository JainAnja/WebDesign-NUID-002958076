import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.css';

function ReactToast() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Work Preference</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>We understand that work from home is more convenient to you.</Toast.Body>
    </Toast>
  );
}

export default ReactToast;