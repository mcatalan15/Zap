package main

import (
	"log"
	"net/http"

	"zap/backend/internal/handlers"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handlers.HealthHandler)
	// Add more endpoints later for DEX logic (e.g., trades, blockchain integration)

	log.Println("Starting backend on :8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatal(err)
	}
}
