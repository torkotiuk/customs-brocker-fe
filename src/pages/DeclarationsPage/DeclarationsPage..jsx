import { useEffect, useState } from 'react';
import { MainScreen } from '../../components';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Accordion } from 'react-bootstrap';
import { MyNotesTitle } from './MyNotes.style';
import routes from '../../routes';
import api from '../../api';

const DeclarationPage = ({ search }) => {
  const [notes, setNotes] = useState([]);
  const [articles, setArticles] = useState([]);

  const history = useHistory();

  const fetchDeclarations = async () => {
    const data = await api.decl.getAllDeclarations();
    setNotes(data);
  };

  const fetchArticles = async () => {
    const data = await api.articles.getAllArticles();
    setArticles(data);
  };

  useEffect(() => {
    fetchDeclarations();
    fetchArticles();
  }, []);

  const deleteHandler = id => {
    if (window.confirm('Are you sure you want to delete')) {
      api.decl.removeDecl(id);
    }
  };

  const articleHandler = e => {
    e.preventDefault();
    history.push('/currentarticle');
  };
  return (
    <MainScreen title="Welcome back user123...">
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontSize: '28px' }}>All articles: </span>
        {articles.map(article => {
          return (
            <button
              key={article._id}
              style={{ fontSize: '24px', marginRight: '10px', padding: '3px' }}
              onClick={articleHandler}
            >
              {article.art}
            </button>
          );
        })}
      </div>
      <Link to={routes.createdeclaration}>
        <Button size="lg" style={{ marginLeft: 10, marginBottom: 6 }}>
          Create New Declaration
        </Button>
      </Link>

      {notes
        ?.filter(searchFilteredDecl => {
          return (
            // searchFilteredDecl.declDateFrom.includes(search) ||
            searchFilteredDecl.declNumber.includes(search)
            // searchFilteredDecl.article.includes(search)
          );
        })
        .map(note => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: 'flex' }}>
                <span style={MyNotesTitle}>
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {note.declNumber}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`/declaration/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {/* {articles.map(article => {
                    console.log('note id>>>>', note.article);
                    console.log('article._id', article._id);
                    if (article._id === note.article) {
                      return (
                        <h4 key={article._id}>
                          <Badge variant="success">{article.art}</Badge>
                        </h4>
                      );
                    }
                  })} */}

                  <blockquote className="blockquote mb-0">
                    {note.ammount} EUR{' '}
                    <p>proformNumber - {note.proformNumber}</p>
                    {/* <ReactMarkdown>{note.content}</ReactMarkdown> */}
                    <footer className="blockquote-footer">
                      From{' '}
                      <cite title="Source Title">
                        {note.declDateFrom} to {note.declDateTo}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default DeclarationPage;
