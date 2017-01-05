package v1

import (
    "net/http"
    "github.com/gorilla/mux"
)

type Route struct {
    Name        string
    Pattern     string
    Method      string
    HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
    router := mux.NewRouter().StrictSlash(true)
    for _, route := range routes {
        var handler http.Handler
        handler = Logger(route.HandlerFunc, route.Name)

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
        Pattern: "/api/v1/coaches",
        Name: "CoachesIndexRoute",
        HandlerFunc: CoachesIndexHandler,
    },
}
