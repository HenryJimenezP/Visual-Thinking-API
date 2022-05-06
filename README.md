# Práctica 5 Code Challenge: Cursos de Visual Thinking API

### Requerimientos:

1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

### Dependencias

En esta practica se utilizaron las siguintes dependencias:

* Jest (27.5.1): Para el uso de las pruebas unitarias

```
npm install --save-dev jest
```

* Expless: Para un servidor local

```
npm install express --save
```

* ESList: Sirve para corregir errores el codigo y darle mejor calidad

```
npm install eslint --save-dev
```


### Diseño de Componentes


```mermaid
flowchart TD
    Reader --> VisualPartnerService
    VisualPartnerService --> VisualPartnerController
    VisualPartnerController --> Server
```


### Endpoint

Consulta de los resultados:

`/v1/students`

![students](https://user-images.githubusercontent.com/99149617/167227427-051853ea-fb34-471b-b87d-d9a81a8bd577.png)


`/v1/students/emails`

![emails](https://user-images.githubusercontent.com/99149617/167227442-b4a92d60-3104-485e-8976-4708b807846e.png)


`/v1/students/credits`

![credits](https://user-images.githubusercontent.com/99149617/167227466-783d32c8-80ec-482b-9db1-1b1921ac640a.png)

