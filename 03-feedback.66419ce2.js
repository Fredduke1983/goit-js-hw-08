document.querySelector(".feedback-form").addEventListener("input",(function(a){const s=a.target;console.log(a.target.value),"email"===a.target.name?e.email=s.value:"message"===a.target.name&&(e.message=s.value);t=JSON.stringify(e),localStorage.setItem("feedback-form-state",t)}));const e={email:"",message:""};let t="";
//# sourceMappingURL=03-feedback.66419ce2.js.map
