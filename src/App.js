import { useEffect, useState } from "react";
import './App.css';
import Question from './components/Question';
import Answer from './components/Answer';
import styled from 'styled-components';
import { useRef } from 'react';
import { ChevronDown } from '@styled-icons/bootstrap';
import Collapsible from 'react-collapsible';



function App() {
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnswers();
    fetchQuestions();
    fetchUsers();
  }, [])

  const fetchAnswers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/answers');
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setLoading(false);
      setAnswer(actualData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setAnswer(null);
    }
  }

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/questions');
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setLoading(false);
      setQuestion(actualData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setQuestion(null);
    }
  }

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      setLoading(false);
      setUser(actualData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  }

  return (
    <div className="App">
      <div className="qa-header">
        <Collapsible tabIndex={1} trigger='Questions & Answers' triggerSibling={<DownArrowIcon />} transitionTime={200}>
          <div className="filter-bar flex">
            <div className="toggle-container">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <div className="toggle-label">
                <p>Show only Answered Questions
                </p>
              </div>
            </div>
            <div className="questions-answers-search">
              <form action="/" method="GET" className="form">
                <input type="search" className="search-field" placeholder="Search Questions & Answers" />
                <span role="presentation"></span>
                <button className="c-button-unstyled search-button" type="submit" aria-label="Search" title="Search">
                  <svg aria-hidden="true" role="img" viewBox="0 0 100 100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m28.15 26.7-7.03-7.02a9.93 9.93 0 1 0-17.6-6.29 9.93 9.93 0 0 0 16.22 7.67l7.03 7.03a.97.97 0 0 0 1.38 0c.38-.38.38-1 0-1.38zM5.48 13.4a7.98 7.98 0 1 1 15.95.02 7.98 7.98 0 0 1-15.95-.02z">
                    </path>
                    </svg>
                  </svg>
                </button>
              </form>
            </div>
            <div className="sort flex align-items-center">
              <label className="sort-by-label">Sort by: </label>
              <div className="options">
                <select autoComplete="off" className="tb-select" id="sort-selections">
                  <option defaultValue="MOST-HELPFUL-ANSWERS">Most helpful</option>
                  <option value="MOST_ANSWERS">Most answers</option>
                  <option value="MOST_RECENT_QUESTIONS">Most recent questions</option>
                  <option value="MOST_RECENT_ANSWERS">Most recent answers</option>
                  <option value="OLDEST_QUESTIONS">Oldest questions</option>
                </select>
              </div>
            </div>
          </div>
          <div className="line-break"></div>
          <div className="button-qa-container">
            <div className="left-buttons">
              <div className="left-buttons-block">
              </div>
              <a className="ask-button left-column-buttons">Ask a Question</a>
              <a className="see-button left-column-buttons">See all Questions</a>
            </div>
            <div className="questions-answers-container">
              {loading && <div>Loading...</div>}
              {question && user && <Question questions={question} users={user} />}
              {answer && user && <Answer answers={answer} users={user} />}
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default App;

const DownArrowIcon = styled(ChevronDown)`
  height: 20px;
  justify-self: flex-end;
`
