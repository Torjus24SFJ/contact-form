const formElement = document.querySelector("#contact");
if (formElement === null) {
    throw Error("Hey smartass! The id is wrong!")
}

formElement.addEventListener("submit", async(event) => {
    // prevent refresh
    event.preventdefault();
    
    // get input values
    const contactMessage = {
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };
      
      // send message to serverless function
      const response = await fetch("/api/contact-mail", {
        method: "POST",
        body: JSON.stringify(contactMessage),
      });

      //check if successful
      if (response.ok){
        formElement.reset();
      }
});