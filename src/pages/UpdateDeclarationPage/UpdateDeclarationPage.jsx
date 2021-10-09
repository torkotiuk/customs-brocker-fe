import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { MainScreen } from '../../components';
import api from '../../api/api';
import routes from '../../routes';

const UpdateDeclarationPage = ({ match, history }) => {
  const [declNumber, setDeclNumber] = useState('');
  const [declDateFrom, setDateFrom] = useState('');
  const [declDateTo, setDateTo] = useState('');
  const [proformNumber, setProformNumber] = useState('');
  const [ammount, setAmount] = useState('');

  const updateHandler = e => {
    e.preventDefault();
    api.updateDeclaration(
      match.params.id,
      declNumber,
      declDateFrom,
      declDateTo,
      proformNumber,
      ammount,
    );
    history.push(routes.declarations);
  };

  useEffect(() => {
    const fetching = async () => {
      const data = await api.getDeclarationById(match.params.id);
      setDeclNumber(data.declNumber);
      setDateFrom(data.declDateFrom);
      setDateTo(data.declDateTo);
      setProformNumber(data.proformNumber);
      setAmount(data.ammount);
    };

    fetching();
  }, [match]);

  return (
    <MainScreen title="Update declaration">
      <Card>
        <Card.Header>Create a new Declaration</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={declNumber}
                placeholder="Enter the declaration number"
                onChange={e => setDeclNumber(e.target.value)}
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
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                value={declDateTo}
                onChange={e => setDateTo(e.target.value)}
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
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="content"
                value={ammount}
                placeholder="Enter an amount"
                onChange={e => setAmount(e.target.value)}
              />
            </Form.Group>
            {/* {loading && <Loading size={50} />} */}
            <Button type="submit" variant="primary">
              Update Note
            </Button>
            {/* <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Fields
            </Button> */}
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
};

export default UpdateDeclarationPage;
