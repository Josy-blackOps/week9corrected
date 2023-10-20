import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import ToDoItems from '../components/ToDoItems';
import Events from '../components/Events';
import Contacts from '../components/Contacts';

const HomePage = () => {
return (
<Container maxW="7xl">
<Auth />
<AddTodo />
<TodoList />
<ToDoItems />
<Events />
<Contacts />
</Container>
);
};
export default HomePage;