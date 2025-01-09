const contactMessage = {
    email: "kevin@home.alone",
    message: "Deez nuts",
}
const response = await fetch("/api/contact-mail" 
,{ 
     method: "POST",
     body: JSON.stringify(contactMessage),
});
const data = await response.text()
console.log(data)
