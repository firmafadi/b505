package main

import (
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	var title string = "API Running"
	router.HandleFunc("/books", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode("Hello World")
	})
	router.HandleFunc("/", title).Methods("GET")

	log.Println("API is running!")
	http.ListenAndServe(":4000", router)
}
