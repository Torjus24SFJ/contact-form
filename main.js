const response = await fetch("/api/contact-mail")
const data = await response.text()
console.log(data)
