FROM golang:1.23-alpine AS builder
# Install git for fetching dependencies
RUN apk add --no-cache git 

WORKDIR /app

# Copy go.mod and go.sum (if it exists)
COPY go.mod go.sum* ./

# Run go mod tidy to ensure go.sum is created/updated
RUN go mod tidy

# Download dependencies (cached if go.mod and go.sum are unchanged)
RUN go mod download

# Copy the rest of the source code
COPY . .

# Build the binary
RUN go build -o main ./cmd/api/main.go

FROM alpine:latest

RUN apk --no-cache add curl ca-certificates


WORKDIR /app

COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
