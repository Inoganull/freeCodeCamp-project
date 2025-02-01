#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.

# Read the CSV file and process data
{
    read header # Skip the header line
    while IFS=',' read -r year round winner opponent winner_goals opponent_goals; do
        # Insert unique teams into the teams table
        for team in "$winner" "$opponent"; do
            team_id=$($PSQL "SELECT team_id FROM teams WHERE name='$team'")
            if [[ -z $team_id ]]; then
                insert_team_result=$($PSQL "INSERT INTO teams(name) VALUES('$team')")
                if [[ $insert_team_result == "INSERT 0 1" ]]; then
                    echo "Inserted team: $team"
                fi
            fi
        done
    done
} < games.csv

# Insert game data into the games table
{
    read header # Skip the header line again
    while IFS=',' read -r year round winner opponent winner_goals opponent_goals; do
        # Get team IDs
        winner_id=$($PSQL "SELECT team_id FROM teams WHERE name='$winner'")
        opponent_id=$($PSQL "SELECT team_id FROM teams WHERE name='$opponent'")
        # Insert game
        insert_game_result=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES($year, '$round', $winner_id, $opponent_id, $winner_goals, $opponent_goals)")
        if [[ $insert_game_result == "INSERT 0 1" ]]; then
            echo "Inserted game: $year $round $winner vs $opponent"
        fi
    done
} < games.csv
