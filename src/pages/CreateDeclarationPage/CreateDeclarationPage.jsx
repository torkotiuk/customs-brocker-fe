import { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import routes from '../../routes';
import { MainScreen } from '../../components';
import axios from 'axios';

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

  const addDeclaration = async (
    declNumber,
    declDateFrom,
    declDateTo,
    proformNumber,
    ammount,
  ) => {
    const token = JSON.parse(localStorage.getItem('userInfo')).token;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `https://customs-brocker.herokuapp.com/api/decl`,
      { declNumber, declDateFrom, declDateTo, proformNumber, ammount },
      config,
    );

    return data;
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

    addDeclaration(
      declNumber,
      declDateFrom,
      declDateTo,
      proformNumber,
      ammount,
    );
    // dispatch(createNoteAction(title, content, category));

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
