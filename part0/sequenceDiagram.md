
Post redirect get was used here

```mermaid
sequenceDiagram
    
    participant B as Browser
    participant S as Server

    B->>S: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate S
    note right of S: Render list of notes into a HTML document
    S-->>B: HTML document
    deactivate S

    B->>S: GET /main.css
    activate S
    S-->>B: the CSS file
    deactivate S

    B->>S: POST /new_note with note data
    activate S
    S-->>B: 302 Found /notes
    deactivate S
    
    B->>S: GET /notes
    activate S
    note right of S: Render list of notes into a HTML document
    S-->>B: 200 OK HTML document
    deactivate S




    