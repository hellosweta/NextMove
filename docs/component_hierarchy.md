## Component Hierarchy

**HomeContainer**
 - Header
 - Map
 - Sidebar

**LocationDetailContainer**
 - Categories Index (bubble chart)

**:CategoryDetailContainer**
 - Crime
 - Restaurant
 - Transit


## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "HomeContainer" |
| "/search" | "LocationDetailContainer" |
| "/search/:category" | "CategoryDetailContainer" |
