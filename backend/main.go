package main

import (
  "log"
  "net/http"
  "./v1"
)

func main() {
    router := v1.NewRouter()

    log.Printf("Server listen on localhost:8888")
    log.Fatal(http.ListenAndServe(":8888", router))
}
