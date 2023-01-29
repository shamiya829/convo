const chatlogs = document.querySelector("#chatlogs");
const chatform = document.querySelector("#chatform");
const userInput = document.querySelector("#user-input");

// Function to add chat logs to the chatbox
function addChatLog(text, type) {
  const li = document.createElement("li");
  li.innerHTML = `<p>${text}</p>`;
  li.classList.add(type);
  chatlogs.appendChild(li);
  chatlogs.scrollTop = chatlogs.scrollHeight;
}

// Function to get AI response
function getAIResponse(question) {
  // Your AI logic here
  // For example:
  if (question.includes("hello")) {
    return "Hi there!";
  } else if (question.includes("how are you")) {
    return "I'm doing well, thanks for asking.";
  } else if (question.includes("how is life")) {
    return "Life is good. How about you?";
  } else if (question.includes("eat")) {
    return "I love pineapple pizza.";
  } else if (question.includes("school")) {
    return "I'm a student at the University of Toronto. I'm studying Computer Science. What about you? Where do you go to school? What are you studying?";
  } 
  else {
    return "I'm not sure what you're asking. Can you please rephrase your question?";
  }
}

// Event listener for form submit
chatform.addEventListener("submit", (event) => {
  event.preventDefault();
  addChatLog(userInput.value, "user-question");
  addChatLog(getAIResponse(userInput.value), "ai-response");
  userInput.value = "";
});
