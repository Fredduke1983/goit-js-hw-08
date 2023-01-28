!function(){document.querySelector(".feedback-form").addEventListener("input",(function(t){var r=t.target;console.log(t.target.value),"email"===t.target.name?e.email=r.value:"message"===t.target.name&&(e.message=r.value);a=JSON.stringify(e),localStorage.setItem("feedback-form-state",a)}));var e={email:"",message:""},a=""}();
//# sourceMappingURL=03-feedback.6780e070.js.map
