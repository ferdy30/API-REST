const express = require('express')
const app = express()


//SETTINGS

app.set("name", "api-rest");
app.set ("port", process.env.port || 3500);

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/doble/:num", (req, res) =>{
  console.log(req.params);
  const doble = {
    "num": req.params.num,
    "resultado": req.params.num*2,
  }
  res.json(doble)
})

app.get("/estudiantes", (req, res) =>{
  const estudiantes = [
    {
      "nombre": "Pedro Campos",
      "Correo":  "pedro@correo.d"
    },
    {
      "nombre": "Jimena Mora",
      "Correo":  "Jimena@correo.d"
    },
  ]
  res.json(estudiantes);
});

app.post("/estudiantes", (req, res) =>{
  const {nombre, correo} = req.body;
  console.log(nombre);

  res.json("Datos recibidos");
});

app.put("/estudiantes/:id", (req, res) =>{
  const id = req.params.id;
  console.log(id);
  res.json("Datos recibidos para actualizar");
});

app.delete("/estudiantes/:id", (req, res) =>{
  const id = req.params.id;
  console.log(id);
res.json("Id recibido para eliminar documento");
});

module.exports = app;