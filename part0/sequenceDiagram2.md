
```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate S
    note right of S: Serve the SPA HTML document
    S-->>B: SPA HTML document
    deactivate S

    B->>S: GET /main.css
    activate S
    S-->>B: the CSS file for SPA
    deactivate S

    B->>S: GET /spa.js
    activate S
    note right of S: Serve the JavaScript file for SPA
    S-->>B: the JavaScript file
    deactivate S

    B->>S: GET /data.json
    activate S
    note right of S: Fetch initial data (notes) as JSON
    S-->>B: JSON data
    deactivate S

    Note over B: JavaScript updates the DOM with notes

