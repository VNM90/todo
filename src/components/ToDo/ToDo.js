import React from "react";
import Form from "./Form";
import List from "./List";
import Container from "../Container";
import Search from "./Search";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: "Umyj psa", uid: "1", isCompleted: false },
        { name: "Umyj ręce", uid: "2", isCompleted: false },
        { name: "Umyj się", uid: "3", isCompleted: false }
      ],
      newTaskName: "New task",
      searchPhrase: ""
    };
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("TO-DO", JSON.stringify(nextState.tasks));
  }

  componentWillMount() {
    localStorage.getItem("TO-DO") &&
      this.setState({
        tasks: JSON.parse(localStorage.getItem("TO-DO"))
      });
  }

  componentDidMount() {
    const lastState = JSON.parse(localStorage.getItem("TO-DO"));

    if (lastState === null) return;

    this.setState(this.lastState);
  }

  componentWillUnmount() {
    localStorage.setItem("TO-DO", JSON.stringify(this.state.tasks));
  }
  searchPhraseChangeHandler = (event, newValue) => {
    this.setState({
      searchPhrase: newValue
    });
  };

  onNewTaskChange = (event, newValue) =>
    this.setState({
      newTaskName: newValue
    });

  addTask = () => {
    const newTaskName = this.state.newTaskName;
    if (newTaskName === "") return;
    const newTask = {
      name: this.state.newTaskName,
      uid: Date.now()
    };

    const newTasks = this.state.tasks.concat(newTask);
    this.setState({
      tasks: newTasks
    });
  };

  deleteTask = taskUid => {
    const newTasks = this.state.tasks.filter(task => taskUid !== task.uid);

    this.setState({
      tasks: newTasks
    });
  };

  render() {
    const searchNamesInNewArray = array => {
      let searchNames = [];

      if (this.state.searchPhrase === "") {
        searchNames = [];
      } else {
        searchNames = array
          .map(element => element)
          .filter(
            element =>
              element.name.toUpperCase().indexOf(this.state.searchPhrase) >=
                0 ||
              element.name.toLowerCase().indexOf(this.state.searchPhrase) >= 0
          );
      }

      return searchNames;
    };

    return (
      <div>
        <Container>
          <Form
            onNewTaskChangeProp={this.onNewTaskChange}
            newTaskNameProp={this.state.newTaskName}
            addTaskProp={this.addTask}
          />
        </Container>
        <Container>
          <Search
            searchPhraseChangeHandler={this.searchPhraseChangeHandler}
            searchPhrase={this.state.searchPhrase}
          />
          <List
            tasksProp={searchNamesInNewArray(this.state.tasks)}
            deleteTaskProp={this.deleteTask}
          />
        </Container>
        <Container>
          <List tasksProp={this.state.tasks} deleteTaskProp={this.deleteTask} />
        </Container>
      </div>
    );
  }
}

export default ToDo;
