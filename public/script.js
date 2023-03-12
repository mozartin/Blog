const form = document.querySelector("form");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const messageFeedback = document.getElementById("messageFeedback");
const titleFeedback = document.getElementById("titleFeedback");
const titleFeedbackRequired = document.getElementById("titleFeedbackRequired");
let messageValue = message.value;
let titleValue = title.value;
let isMessageValid = messageValue.length > 0 ? true : false;
let istitleValid = titleValue.length > 0 ? true : false;

let messageValidation = () => {
  if (messageValue.length <= 40 && messageValue.length > 0) {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
    messageFeedback.style.display = "none";
    messageFeedbackRequired.style.display = "none";
    isMessageValid = true;
  } else if (messageValue.length > 40) {
    message.classList.remove("is-valid");
    message.classList.add("is-invalid");
    messageFeedback.style.display = "block";
    messageFeedbackRequired.style.display = "none";
    isMessageValid = false;
  } else if (messageValue.length == 0) {
    message.classList.remove("is-valid");
    message.classList.add("is-invalid");
    messageFeedback.style.display = "none";
    messageFeedbackRequired.style.display = "block";
    isMessageValid = false;
  }
};

let titleValidation = () => {
  if (titleValue.length <= 15 && titleValue.length > 0) {
    title.classList.remove("is-invalid");
    title.classList.add("is-valid");
    titleFeedback.style.display = "none";
    titleFeedbackRequired.style.display = "none";
    istitleValid = true;
  } else if (titleValue.length > 15) {
    title.classList.remove("is-valid");
    title.classList.add("is-invalid");
    titleFeedback.style.display = "block";
    titleFeedbackRequired.style.display = "none";
    istitleValid = false;
  } else if (titleValue.length == 0) {
    title.classList.remove("is-valid");
    title.classList.add("is-invalid");
    titleFeedback.style.display = "none";
    titleFeedbackRequired.style.display = "block";
    istitleValid = false;
  }
};

message.addEventListener("keyup", (e) => {
  messageValue = e.target.value;
  messageValidation();
});

title.addEventListener("keyup", (e) => {
  titleValue = e.target.value;
  titleValidation();
});

form.addEventListener("keyup", () => {
  if (isMessageValid && istitleValid) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "true");
  }
});
