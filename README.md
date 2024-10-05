🎵 Melody Music App
Melody is a simple and interactive music player built using HTML, CSS, and JavaScript. 
The app provides an elegant interface to browse and play your favorite songs. 
Instead of using APIs, the app uses a local JSON file to store and manage song data.

📝 Features:
🎶 Play, Pause, and Skip: Users can play, pause, and skip through songs.
🎵 Song Information Display: Displays song title, artist, and album artwork.
🔄 Repeat and Shuffle: Options to repeat the current song or shuffle the playlist.
📜 Dynamic Song List: All song data is stored and loaded from a local songs.json file.
📊 Progress Bar: Visual representation of the song's progress and time duration.
🔊 Volume Control: Adjust the volume or mute the sound.
📱 Responsive Design: The app is fully responsive and looks great on all screen sizes.

📁 Project Structure:
The project is organized as follows:
Melody/
│
├── index.html            # Main HTML file for the music app
├── styles.css            # Stylesheet for the app's layout and design
├── script.js             # Main JavaScript file to control the app's behavior
├── songs.json            # JSON file storing song details
├── images/               # Folder containing album artwork and icons
└── README.md             # Project documentation (this file)

📜 Song Data (songs.json)
The songs.json file contains the list of songs available in the app. Each song object includes the following attributes:

[
  {
    "title": "Death Bed",
    "artist": "Powfu",
    "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
    "id": "1",
    "category": "New"
  },
  {
    "title": "Bad Liar",
    
    "artist": "Imagine Dragons",
    "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
    "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
    "id": "2",
    "category": "New"
  },
  {
    "title": "Faded",
    "artist": "Alan Walker",
    "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
    "url": "https://samplesongs.netlify.app/Faded.mp3",
    "id": "3",
    "category": "New"
  }
]

🔧 Technologies Used
HTML: Markup for structuring the app.
CSS: Styling the app layout and appearance.
JavaScript: Implementing app functionality such as song controls and interactions.
JSON: Storing and managing song details.

📚 How It Works
Loading Songs: The song data is loaded from the songs.json file using JavaScript's fetch method or directly from the file.
Creating Playlist: Songs are dynamically added to the playlist based on the JSON data.
Playing Songs: Users can select any song to play, with options to play, pause, and skip.
Updating UI: The app's interface, including song information and progress bar, is updated in real-time as the song plays.

💡 Future Enhancements
🎛️ Add more controls such as an equalizer.
📝 Allow users to create custom playlists.
🔄 Implement song search and filter options.
🌐 Integrate with a backend API for song data (optional).

🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to improve the app.

Fork the project.
Create your feature branch: git checkout -b feature/new-feature
Commit your changes: git commit -m 'Add new feature'
Push to the branch: git push origin feature/new-feature
Open a pull request.

