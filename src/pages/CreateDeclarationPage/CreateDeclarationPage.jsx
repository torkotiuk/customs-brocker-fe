import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import routes from '../../routes';
import { MainScreen } from '../../components';
import api from '../../api';

const CreateDeclarationPage = ({ history }) => {
  const [declNumber, setDeclNumber] = useState('');
  const [declDateFrom, setDateFrom] = useState('');
  const [declDateTo, setDateTo] = useState('');
  const [proformNumber, setProformNumber] = useState('');
  const [ammount, setAmount] = useState('');

  const resetHandler = () => {
    setDeclNumber('');
    setDateFrom('');
    setDateTo('');
    setProformNumber('');
    setAmount('');
  };

  const submitHandler = e => {
    e.preventDefault();
    if (
      !declNumber ||
      !declDateFrom ||
      !declDateTo ||
      !proformNumber ||
      !ammount
    )
      return;

    api.decl.addDeclaration(
      declNumber,
      declDateFrom,
      declDateTo,
      proformNumber,
      ammount,
    );

    resetHandler();
    history.push(routes.declarations);
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Declaration">
      <Card>
        <Card.Header>Create a new Declaration</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={declNumber}
                placeholder="Enter the declaration number"
                onChange={e => setDeclNumber(e.target.value)}
                required
              />
            </Form.Group>

            {/* declNumber, declDateFrom, declDateTo, proformNumber, ammount */}

            <Form.Group controlId="content">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                value={declDateFrom}
                placeholder="Enter the Category"
                onChange={e => setDateFrom(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                value={declDateTo}
                onChange={e => setDateTo(e.target.value)}
                required
              />
            </Form.Group>
            {/*  */}
            <Form.Group controlId="content">
              <Form.Label>ProformNumb</Form.Label>
              <Form.Control
                type="content"
                value={proformNumber}
                placeholder="Enter a proformNumber"
                onChange={e => setProformNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="content"
                value={ammount}
                placeholder="Enter an amount"
                onChange={e => setAmount(e.target.value)}
                required
              />
            </Form.Group>
            {/* {loading && <Loading size={50} />} */}
            <Button type="submit" variant="primary">
              Create Note
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Fields
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default CreateDeclarationPage;
