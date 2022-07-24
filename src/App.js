import './App.css';

import { gql, useQuery } from '@apollo/client'

const Query = gql`
 query{
  authors{
    name
  }
 }
`

function App() {

  const {data} = useQuery(Query)
  console.log(data)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;