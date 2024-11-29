import React, { useState } from 'react';
import './questionpanel.css';
import avatarpicture from '../../assets/avatarpicture.jpg'; // Import the avatar image

const QuestionPanel = () => {
  // Candidate details
  const candidateName = "Emily Carter"; // Changed from John Doe to a girl's name
  const candidateImage = avatarpicture; // Set the imported image as the candidate image

  // Example question data (you can replace these with actual questions)
  const questions = [
        { id: 1, question: "What is the purpose of the `final` keyword in Java?", options: ["A. To declare constants", "B. To create inheritance", "C. To define loops", "D. To create abstract classes"], answer: "" },
        { id: 2, question: "Which method is used to start a thread in Java?", options: ["A. start()", "B. run()", "C. execute()", "D. begin()"], answer: "" },
        { id: 3, question: "What does JDK stand for?", options: ["A. Java Development Kit", "B. Java Documentation Kit", "C. Java Deployment Kit", "D. Java Design Kit"], answer: "" },
        { id: 4, question: "Which package is automatically imported in every Java program?", options: ["A. java.util", "B. java.lang", "C. java.io", "D. java.net"], answer: "" },
        { id: 5, question: "What is the output type of the `main` method in Java?", options: ["A. void", "B. int", "C. String", "D. boolean"], answer: "" },
      
        // React Questions
        { id: 6, question: "What is a React Hook?", options: ["A. A function that connects two components", "B. A special function to use state and lifecycle in functional components", "C. A tool for fetching APIs", "D. A method to create Redux stores"], answer: "" },
        { id: 7, question: "What does JSX stand for?", options: ["A. JavaScript XML", "B. JavaScript Extra", "C. JSON XML", "D. JavaScript Extension"], answer: "" },
        { id: 8, question: "How do you create a stateful component in React?", options: ["A. Using useState()", "B. Using useEffect()", "C. Using class components", "D. Using Context API"], answer: "" },
        { id: 9, question: "Which method in React is used to update state?", options: ["A. setState()", "B. updateState()", "C. setProps()", "D. changeState()"], answer: "" },
        { id: 10, question: "What is the default port for React apps?", options: ["A. 3000", "B. 8080", "C. 5000", "D. 4200"], answer: "" },
      
        // Spring Boot Questions
        { id: 11, question: "What annotation is used to start a Spring Boot application?", options: ["A. @SpringBootApplication", "B. @RestController", "C. @Service", "D. @Controller"], answer: "" },
        { id: 12, question: "Which tool is commonly used to build and manage Spring Boot projects?", options: ["A. Maven", "B. Gradle", "C. npm", "D. Webpack"], answer: "" },
        { id: 13, question: "What is the default port of a Spring Boot application?", options: ["A. 8080", "B. 3000", "C. 9090", "D. 5000"], answer: "" },
        { id: 14, question: "Which annotation in Spring Boot defines a REST controller?", options: ["A. @RestController", "B. @Controller", "C. @Component", "D. @Service"], answer: "" },
        { id: 15, question: "How does Spring Boot manage dependencies?", options: ["A. Using POM.xml", "B. Using package.json", "C. Using Dockerfile", "D. Using Webpack"], answer: "" },
      
        // CSS Questions
        { id: 16, question: "What does CSS stand for?", options: ["A. Cascading Style Sheets", "B. Creative Style Sheets", "C. Computer Style Sheets", "D. Colorful Style Sheets"], answer: "" },
        { id: 17, question: "How do you apply a background color in CSS?", options: ["A. background-color", "B. bgcolor", "C. color", "D. back-color"], answer: "" },
        { id: 18, question: "Which property is used to change text color?", options: ["A. color", "B. font-color", "C. text-color", "D. text-style"], answer: "" },
        { id: 19, question: "Which CSS property controls the size of text?", options: ["A. font-size", "B. text-size", "C. font-style", "D. text-font"], answer: "" },
        { id: 20, question: "What is the correct syntax for adding a class in CSS?", options: ["A. .classname", "B. #classname", "C. @classname", "D. &classname"], answer: "" },
      
        // Additional Questions
        { id: 21, question: "Which function is used to fetch data in JavaScript?", options: ["A. fetch()", "B. get()", "C. retrieve()", "D. collect()"], answer: "" },
        { id: 22, question: "Which lifecycle method is invoked after a React component is rendered?", options: ["A. componentDidMount", "B. componentDidUpdate", "C. componentWillUnmount", "D. getSnapshotBeforeUpdate"], answer: "" },
        { id: 23, question: "What is the purpose of 'useEffect' in React?", options: ["A. To perform side effects", "B. To update state", "C. To render the component", "D. To create custom hooks"], answer: "" },
        { id: 24, question: "Which HTTP method is used to update data on the server?", options: ["A. PUT", "B. POST", "C. GET", "D. DELETE"], answer: "" },
        { id: 25, question: "What is the correct way to include an external CSS file?", options: ["A. <link>", "B. <style>", "C. <script>", "D. <stylesheet>"], answer: "" },
        { id: 26, question: "What does 'flex' in CSS refer to?", options: ["A. Flexible Box Layout", "B. Float Box Layout", "C. Fluid Layout", "D. Flat Layout"], answer: "" },
        { id: 27, question: "What is the default position value in CSS?", options: ["A. static", "B. relative", "C. absolute", "D. fixed"], answer: "" },
        { id: 28, question: "What is the primary function of Webpack?", options: ["A. Module bundler", "B. Database handler", "C. JavaScript framework", "D. Task runner"], answer: "" },
        { id: 29, question: "Which protocol is used for secure communication over the web?", options: ["A. HTTPS", "B. HTTP", "C. FTP", "D. SMTP"], answer: "" },
        { id: 30, question: "Which tag is used to include JavaScript in an HTML document?", options: ["A. <script>", "B. <js>", "C. <javascript>", "D. <code>"], answer: "" },
      ];
     

  // Set initial question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [markedForReview, setMarkedForReview] = useState([]);

  // Handling the answer change
  const handleAnswerChange = (questionId, selectedOption) => {
    setResponses(prevResponses => {
      const updatedResponses = [...prevResponses];
      updatedResponses[questionId - 1] = selectedOption;
      return updatedResponses;
    });
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Mark question for review
  const handleMarkForReview = () => {
    setMarkedForReview(prevState => {
      const newMarked = [...prevState];
      if (!newMarked.includes(currentQuestionIndex)) {
        newMarked.push(currentQuestionIndex);
      }
      return newMarked;
    });
    handleNextQuestion();
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Clear current response
  const handleClearResponse = () => {
    setResponses(prevResponses => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = "";
      return updatedResponses;
    });
  };

  return (
      <div className="question-panel">
      {/* Section Tabs */}
      {/* <div className="section-tabs">
        <button className="tab active">Section-A</button>
        <button className="tab">Section-B</button>
      </div> */}

      {/* Candidate Info */}
      <div className="candidate-info">
        <img
          src={candidateImage} // Display the avatar image
          alt={`${candidateName}'s Profile`}
          className="candidate-image"
        />
        <span className="candidate-name">{candidateName}</span>
      </div>

      {/* Question Content */}
      <div className="question-content">
        <h3>Question Type: Multiple Choice Question</h3>
        <p>
          <strong>Question No. {questions[currentQuestionIndex].id}:</strong> {questions[currentQuestionIndex].question}
        </p>

        {/* Options */}
        <form className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question-${questions[currentQuestionIndex].id}`}
                value={option}
                checked={responses[currentQuestionIndex] === option}
                onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option)}
              />
              {option}
            </label>
          ))}
        </form>
      </div>

      {/* Actions moved to the bottom */}
      <div className="actions">
        {/* <button className="action mark-review" onClick={handleMarkForReview}>
          Mark for Review & Next
        </button>
        <button className="action clear-response" onClick={handleClearResponse}>
          Clear Response
        </button> */}
        <button className="action previous" onClick={handlePreviousQuestion}>
          Previous
        </button>
        <button className="action save-next" onClick={handleNextQuestion}>
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default QuestionPanel;
