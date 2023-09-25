import React, { useState } from 'react';
import MotionHoc from "./MotionHoc";
import { Button, Modal, Form } from 'react-bootstrap';
import '../Assets/css/Subjects.css';

const SubjectsComponent = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'History' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState({});
  const [newSubject, setNewSubject] = useState('');

  const handleCloseAdd = () => setShowAddModal(false);
  const handleShowAdd = () => setShowAddModal(true);

  const handleCloseEdit = () => setShowEditModal(false);
  const handleShowEdit = (subject) => {
    setShowEditModal(true);
    setSubjectToEdit(subject);
  };

  const handleAddSubject = () => {
    if (newSubject) {
      const newSubjects = [...subjects, { id: subjects.length + 1, name: newSubject }];
      setSubjects(newSubjects);
      setNewSubject('');
      handleCloseAdd();
    }
  };

  const handleEditSubject = () => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectToEdit.id ? { ...subject, name: newSubject } : subject
    );
    setSubjects(updatedSubjects);
    setNewSubject('');
    handleCloseEdit();
  };

  const handleDeleteSubject = (subjectId) => {
    const updatedSubjects = subjects.filter((subject) => subject.id !== subjectId);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="subjects-container">
      <h1>Subjects Management</h1>
      <Button variant="success" className="firstb1" onClick={handleShowAdd}>
        Add Subject
      </Button>

      <ul className="subjects-list">
        {subjects.map((subject) => (
          <li key={subject.id}>
            {subject.name}
            <div className="actions">
              <Button variant="primary" className="firstb2" onClick={() => handleShowEdit(subject)}>
                Edit
              </Button>
              <Button variant="danger" className="firstb3" onClick={() => handleDeleteSubject(subject.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <Modal show={showAddModal} onHide={handleCloseAdd}>
        <div className="newDiv1">
        <Modal.Header closeButton>
          <Modal.Title>Add Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject name"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="firstb4" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" className="firstb5" onClick={handleAddSubject}>
            Add
          </Button>
        </Modal.Footer>
      </div>
      </Modal>
      <Modal show={showEditModal} onHide={handleCloseEdit}>
      <div className="newDiv2">

        <Modal.Header closeButton>
          <Modal.Title>Edit Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject name"
                value={newSubject || subjectToEdit.name}
                onChange={(e) => setNewSubject(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="firstb6" onClick={handleCloseEdit}>
            Close
          </Button> 
          <Button variant="primary" className="firstb7" onClick={handleEditSubject}>
            Save Changes
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

const Subjects = MotionHoc(SubjectsComponent);

export default Subjects;