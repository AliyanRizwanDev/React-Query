
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const fetchTodo = async () =>{
    const response = await  axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  }
  const { data, error, isLoading } = useQuery("todo",fetchTodo);
  return (
    <>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : error ? (
        <h6>Error: {error}</h6>
      ) : (
        data.map((item) => <h6 key={item.id}>{JSON.stringify(item)}</h6>)
      )}
    </>
  );
}

export default App;
