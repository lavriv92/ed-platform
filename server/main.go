package main

import (
    "fmt"
    "log"
    "time"
    "net/http"
    "encoding/json"
)

type Todo struct {
  Name      string
  Completed bool
  Due       time.Time
}

type Todos []Todo

func main() {
    http.HandleFunc("/", IndexHandler)
    http.HandleFunc("/todos", TodosHandler)

    log.Fatal(http.ListenAndServe(":8888", nil))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello page, %q", html.EscapeString(r.URL.Path))
}

func TodosHandler(w http.ResponseWriter, r *http.Request) {
  todos := Todos{
    Todo{Name: "Hello todo"},
    Todo{Name: "Hello test todo"},
  }

  json.newEncoder(w).Encode(todos)
}
