#!/bin/bash

# element.sh - PostgreSQL version

DB="periodic_table"
USER="freecodecamp"     # Replace with your PostgreSQL username

if [[ -z $1 ]]; then
  echo "Please provide an element as an argument."
  exit 0
fi

QUERY="
SELECT 
  e.atomic_number,
  e.name,
  e.symbol,
  t.type,
  p.atomic_mass,
  p.melting_point_celsius,
  p.boiling_point_celsius
FROM elements e
JOIN properties p ON e.atomic_number = p.atomic_number
JOIN types t ON p.type_id = t.type_id
WHERE e.atomic_number::text = '$1'
   OR LOWER(e.symbol) = LOWER('$1')
   OR LOWER(e.name) = LOWER('$1')
LIMIT 1;
"

RESULT=$(psql -d "$DB" -U "$USER" -t -A -F '|' -c "$QUERY")

if [[ -z $RESULT ]]; then
  echo "I could not find that element in the database."
  exit 0
fi

IFS='|' read -r ATOMIC_NUMBER NAME SYMBOL TYPE MASS MP BP <<< "$RESULT"
echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $MASS amu. $NAME has a melting point of $MP celsius and a boiling point of $BP celsius."
