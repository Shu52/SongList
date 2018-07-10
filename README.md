#***Story***

As a user, I should be able to list songs on my dashboard

#***Acceptance Criteria***

*Given a user wants to enter a song
When the user performs a gesture on a "New Song" affordance
Then a form should be presented to the user in which the following information can be entered: 

1. Song Title
2. Album
3. Artist

*Given a user has entered in all field values for storing a new song
When the user performs a gesture on the "Save Song" affordance
Then the song should be saved in the database

*Given the database contains saved songs
When a user visits the dashboard
Then all the songs should be displayed

*Given a user wants to mark a song as bought
When the user is viewing their song list
Then there should be a checkbox next to each song that, when clicked, should mark the song as bought in the database

*Given a user wants to edit a song title, artist or album
When the user clicks on the name of a song
Then the user should be able to edit the song title, artist or album
And when the enter key is pressed, the new song information should be saved to the database
And the dashboard should be updated to display the new song info
And each song should have an affordance to delete the song

*Given a user wants to remove a previously stored song
When the user performs a gesture on the delete affordance
Then the song should be deleted