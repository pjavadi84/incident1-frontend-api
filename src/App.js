import logo from './logo.svg';
import './App.css';

const GET_INCDENTS = gql`
  query GetPosts {
    incidents {
      title
      link
      description
      pubDate
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_INCDENTS);
  return (
    <div className="App">
      <header className="App-header">
       
      </header>

      <body>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Incidents</h1>
              <ul>
                {data.incidents.map((incident, index) => (
                  <li key={index}>
                    <a href={incident.link}>{incident.title}</a>
                    <p>{incident.description}</p>
                    <p>{incident.pubDate}</p>
                  </li>   
                ))}
              </ul>
            </div>
          </div>
        </div>
      </body>

      
    </div>
  );
}

export default App;
