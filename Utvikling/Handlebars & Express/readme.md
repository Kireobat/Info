# Handlebars & Express

# Innhold
- [express](#express)
- [hbs](#handlebars)

## Express

### Handler som repsonderer med rendret hbs fil    
```
app.get('/about', (request, response) => {
     response.render(about.hbs", {data: ["A","B"]})
})
```

### HTML-form input
```
app.post('/insertPerson (request,response) => {
    console.log(request.body)
})
```
### Query String input, /insert?id=2&name=Hans
```
app.get('/insert (request,response) => {
    console.log(request.query.id)
    console.log(request.query.name)
})
```

## Handlebars
### Skrive ut en variabel med navnet title
```
{{title}}
```
### Skrive ut alle elementer i tabellen data, der elementene er objekter med objektvariabel name
```
{{#each data}}
    <p>{{this.name}} </p>
{{/each}}
```