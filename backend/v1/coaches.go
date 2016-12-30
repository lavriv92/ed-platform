package v1

import (
  "net/http"
  "encoding/json"
)

type Coach struct {
    FirstName  string `json:"firstName"`
    LastName   string `json:"lastName"`
    Speciality string `json:"speciality"`
}

type Coaches []Coach

func CoachesIndexHandler(w http.ResponseWriter, r *http.Request) {
  coaches := Coaches{
    Coach{
      FirstName: "test",
      LastName: "test",
      Speciality: "Computer programming",
    },
  }

  json.NewEncoder(w).Encode(coaches)
}
