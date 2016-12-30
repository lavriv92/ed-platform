package main

import (
    "fmt"
    "html"
    "log"
    "time"
    "net/http"
    "encoding/json"
    "github.com/gorilla/mux"
)

type Todo struct {
  Name      string    `json:"name"`
  Completed bool      `json:"completed"`
  Due       time.Time `json:"due"`
}

type Todos []Todo

type Route struct {
  Method      string
  Pattern     string
  Name        string
  HandlerFunc http.HandlerFunc
}

type Routes []Route

func Logger(inner http.Handler, name string) http.Handler {
  return http.HandlerFunc(func (w http.ResponseWriter, r *http.Request) {
    start := time.Now()
    inner.ServeHTTP(w, r)

    log.Printf(
        "%s\t%s\t%s\t%s",
        r.Method,
        r.RequestURI,
        name,
        time.Since(start),
    )
  })
}

func NewRouter() *mux.Router {
  router := mux.NewRouter().StrictSlash(true)

  for _, route := range routes {
    var handler http.Handler
    handler = route.HandlerFunc
    handler = Logger(handler, route.Name)

    router.
      Methods(route.Method).
      Path(route.Pattern).
      Name(route.Name).
      Handler(handler)
  }
  return router
}

var routes = Routes{
  Route{
    Method: "GET",
    Pattern: "/todos",
    Name: "todos",
    HandlerFunc: TodosHandler,
  },
  Route{
    Method: "GET",
    Pattern: "/",
    Name: "index",
    HandlerFunc: IndexHandler,
  },
}

func main() {

    router := NewRouter()

    log.Printf("Server listen on localhost:8888")
    log.Fatal(http.ListenAndServe(":8888", router))
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello page, %q", html.EscapeString(r.URL.Path))
}

func TodosHandler(w http.ResponseWriter, r *http.Request) {
  todos := Todos{
    Todo{Name: "Hello todo"},
    Todo{Name: "Hello test todo"},
  }

  json.NewEncoder(w).Encode(todos)
}
