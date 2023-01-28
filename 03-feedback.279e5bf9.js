document.querySelector(".feedback-form").addEventListener("input",(function(a){const o=a.target;console.log(a.target.value),e.email=o.name,e.message=o.value,t=JSON.stringify(e),localStorage.setItem("feedback-form-state",t)}));const e={email:"",message:""};let t="";
//# sourceMappingURL=03-feedback.279e5bf9.js.map
