import React from 'react';

const data = [
  {
      "ID Nation": "01000US",
      "Nation": "United States",
      "ID Year": 2016,
      "Year": "2016",
      "Population": 323127515,
      "Slug Nation": "united-states"
  },
  {
      "ID Nation": "01000US",
      "Nation": "United States",
      "ID Year": 2015,
      "Year": "2015",
      "Population": 321418821,
      "Slug Nation": "united-states"
  },
  {
      "ID Nation": "01000US",
      "Nation": "United States",
      "ID Year": 2014,
      "Year": "2014",
      "Population": 318857056,
      "Slug Nation": "united-states"
  },
  {
      "ID Nation": "01000US",
      "Nation": "United States",
      "ID Year": 2013,
      "Year": "2013",
      "Population": 316128839,
      "Slug Nation": "united-states"
  }
];

const PopulationData = ({ Year, Population, Nation }) => {
  return (
      <div>
          <h3>Year: {Year}</h3>
          <p>Population: {Population}</p>
          <p>Nation: {Nation}</p>
      </div>
  );
};

const results = [
  {
      "name": "Luke Skywalker", 
      "height": "172", 
      "mass": "77", 
      "hair_color": "blond", 
      "skin_color": "fair", 
      "eye_color": "blue", 
      "birth_year": "19BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/", 
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/12/", 
          "https://swapi.dev/api/starships/22/"
      ], 
      "created": "2014-12-09T13:50:51.644000Z", 
      "edited": "2014-12-20T21:17:56.891000Z", 
      "url": "https://swapi.dev/api/people/1/"
  }, 
  {
      "name": "C-3PO", 
      "height": "167", 
      "mass": "75", 
      "hair_color": "n/a", 
      "skin_color": "gold", 
      "eye_color": "yellow", 
      "birth_year": "112BBY", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:10:51.357000Z", 
      "edited": "2014-12-20T21:17:50.309000Z", 
      "url": "https://swapi.dev/api/people/2/"
  }, 
  {
      "name": "R2-D2", 
      "height": "96", 
      "mass": "32", 
      "hair_color": "n/a", 
      "skin_color": "white, blue", 
      "eye_color": "red", 
      "birth_year": "33BBY", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/8/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:11:50.376000Z", 
      "edited": "2014-12-20T21:17:50.311000Z", 
      "url": "https://swapi.dev/api/people/3/"
  }, 
  {
      "name": "Darth Vader", 
      "height": "202", 
      "mass": "136", 
      "hair_color": "none", 
      "skin_color": "white", 
      "eye_color": "yellow", 
      "birth_year": "41.9BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [
          "https://swapi.dev/api/starships/13/"
      ], 
      "created": "2014-12-10T15:18:20.704000Z", 
      "edited": "2014-12-20T21:17:50.313000Z", 
      "url": "https://swapi.dev/api/people/4/"
  }, 
  {
      "name": "Leia Organa", 
      "height": "150", 
      "mass": "49", 
      "hair_color": "brown", 
      "skin_color": "light", 
      "eye_color": "brown", 
      "birth_year": "19BBY", 
      "gender": "female", 
      "homeworld": "https://swapi.dev/api/planets/2/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [], 
      "created": "2014-12-10T15:20:09.791000Z", 
      "edited": "2014-12-20T21:17:50.315000Z", 
      "url": "https://swapi.dev/api/people/5/"
  }, 
  {
      "name": "Owen Lars", 
      "height": "178", 
      "mass": "120", 
      "hair_color": "brown, grey", 
      "skin_color": "light", 
      "eye_color": "blue", 
      "birth_year": "52BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:52:14.024000Z", 
      "edited": "2014-12-20T21:17:50.317000Z", 
      "url": "https://swapi.dev/api/people/6/"
  }, 
  {
      "name": "Beru Whitesun lars", 
      "height": "165", 
      "mass": "75", 
      "hair_color": "brown", 
      "skin_color": "light", 
      "eye_color": "blue", 
      "birth_year": "47BBY", 
      "gender": "female", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:53:41.121000Z", 
      "edited": "2014-12-20T21:17:50.319000Z", 
      "url": "https://swapi.dev/api/people/7/"
  }, 
  {
      "name": "R5-D4", 
      "height": "97", 
      "mass": "32", 
      "hair_color": "n/a", 
      "skin_color": "white, red", 
      "eye_color": "red", 
      "birth_year": "unknown", 
      "gender": "n/a", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/"
      ], 
      "species": [
          "https://swapi.dev/api/species/2/"
      ], 
      "vehicles": [], 
      "starships": [], 
      "created": "2014-12-10T15:57:50.959000Z", 
      "edited": "2014-12-20T21:17:50.321000Z", 
      "url": "https://swapi.dev/api/people/8/"
  }, 
  {
      "name": "Biggs Darklighter", 
      "height": "183", 
      "mass": "84", 
      "hair_color": "black", 
      "skin_color": "light", 
      "eye_color": "brown", 
      "birth_year": "24BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/"
      ], 
      "species": [], 
      "vehicles": [], 
      "starships": [
          "https://swapi.dev/api/starships/12/"
      ], 
      "created": "2014-12-10T15:59:50.509000Z", 
      "edited": "2014-12-20T21:17:50.323000Z", 
      "url": "https://swapi.dev/api/people/9/"
  }, 
  {
      "name": "Obi-Wan Kenobi", 
      "height": "182", 
      "mass": "77", 
      "hair_color": "auburn, white", 
      "skin_color": "fair", 
      "eye_color": "blue-gray", 
      "birth_year": "57BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/20/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/4/", 
          "https://swapi.dev/api/films/5/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/38/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/48/", 
          "https://swapi.dev/api/starships/59/", 
          "https://swapi.dev/api/starships/64/", 
          "https://swapi.dev/api/starships/65/", 
          "https://swapi.dev/api/starships/74/"
      ], 
      "created": "2014-12-10T16:16:29.192000Z", 
      "edited": "2014-12-20T21:17:50.325000Z", 
      "url": "https://swapi.dev/api/people/10/"
  }
];

const CharacterStarWars = ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            {hair_color !== "n/a" && hair_color !== "none" && <p>Hair Color: {hair_color}</p>}
            <p>Skin color: {skin_color}</p>
            <p>Eye color: <span style={{color: `${eye_color}`}}>{eye_color}</span></p>
            <p>birth_year: {birth_year}</p>
            {gender !== "n/a" && gender !== "none" && <p>Gender: {gender}</p>}
        </div>
    ); 
  };

const dataRickMorthy = {
      "episodes": {
        "results": [
          {
            "name": "Pilot",
            "air_date": "December 2, 2013",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Bepisian"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Canklanker Thom"
              },
              {
                "name": "Davin"
              },
              {
                "name": "Frank Palicky"
              },
              {
                "name": "Glenn"
              },
              {
                "name": "Hookah Alien"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mrs. Sanchez"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Davin"
              },
              {
                "name": "Greebybobe"
              },
              {
                "name": "Pripudlian"
              }
            ]
          },
          {
            "name": "Lawnmower Dog",
            "air_date": "December 9, 2013",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Bill"
              },
              {
                "name": "Centaur"
              },
              {
                "name": "Creepy Little Girl"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Melissa"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mrs. Pancakes"
              },
              {
                "name": "Scary Brandon"
              },
              {
                "name": "Scary Glenn"
              },
              {
                "name": "Scary Terry"
              },
              {
                "name": "Snuffles (Snowball)"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Scary Teacher"
              },
              {
                "name": "Fido"
              },
              {
                "name": "Accountant dog"
              },
              {
                "name": "Trunkphobic suspenders guy"
              }
            ]
          },
          {
            "name": "Anatomy Park",
            "air_date": "December 16, 2013",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Alexander"
              },
              {
                "name": "Annie"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Bill"
              },
              {
                "name": "Tuberculosis"
              },
              {
                "name": "Gonorrhea"
              },
              {
                "name": "Hepatitis A"
              },
              {
                "name": "Hepatitis C"
              },
              {
                "name": "Bubonic Plague"
              },
              {
                "name": "E. Coli"
              },
              {
                "name": "Dr. Xenon Bloom"
              },
              {
                "name": "Eric McMan"
              },
              {
                "name": "Ethan"
              },
              {
                "name": "Jacob"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Joyce Smith"
              },
              {
                "name": "Leonard Smith"
              },
              {
                "name": "Poncho"
              },
              {
                "name": "Roger"
              },
              {
                "name": "Ruben"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Tom Randolph"
              }
            ]
          },
          {
            "name": "M. Night Shaym-Aliens!",
            "air_date": "January 13, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Cynthia"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "Kevin"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mr. Marklovitz"
              },
              {
                "name": "Prince Nebulon"
              },
              {
                "name": "Stu"
              },
              {
                "name": "Summer Smith"
              }
            ]
          },
          {
            "name": "Meeseeks and Destroy",
            "air_date": "January 20, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Big Boobed Waitress"
              },
              {
                "name": "Dale"
              },
              {
                "name": "Evil Beth Clone"
              },
              {
                "name": "Evil Jerry Clone"
              },
              {
                "name": "Evil Summer Clone"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "King Jellybean"
              },
              {
                "name": "Mr. Booby Buyer"
              },
              {
                "name": "Mr. Meeseeks"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Samantha"
              },
              {
                "name": "Slippery Stair"
              },
              {
                "name": "Stair Goblin"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Tammy Guetermann"
              },
              {
                "name": "Tiny-persons advocacy group lawyer"
              },
              {
                "name": "Giant Judge"
              }
            ]
          },
          {
            "name": "Rick Potion #9",
            "air_date": "January 27, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Brad"
              },
              {
                "name": "Cronenberg Rick"
              },
              {
                "name": "Cronenberg Morty"
              },
              {
                "name": "Davin"
              },
              {
                "name": "Harold"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "MC Haps"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mrs. Sanchez"
              },
              {
                "name": "Nancy"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Tammy Guetermann"
              },
              {
                "name": "Davin"
              }
            ]
          },
          {
            "name": "Raising Gazorpazorp",
            "air_date": "March 10, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Brad Anderson"
              },
              {
                "name": "Gwendolyn"
              },
              {
                "name": "Jackie"
              },
              {
                "name": "Ma-Sha"
              },
              {
                "name": "Morty Jr."
              },
              {
                "name": "Pawnshop Clerk"
              },
              {
                "name": "Snuffles (Snowball)"
              },
              {
                "name": "Veronica Ann Bennet"
              },
              {
                "name": "Morty Jr's interviewer"
              }
            ]
          },
          {
            "name": "Rixty Minutes",
            "air_date": "March 17, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Ants in my Eyes Johnson"
              },
              {
                "name": "Attila Starwar"
              },
              {
                "name": "Baby Legs"
              },
              {
                "name": "Benjamin"
              },
              {
                "name": "Beth Sanchez"
              },
              {
                "name": "Bobby Moynihan"
              },
              {
                "name": "Cynthia"
              },
              {
                "name": "David Letterman"
              },
              {
                "name": "Fulgora"
              },
              {
                "name": "Garmanarnar"
              },
              {
                "name": "Gazorpazorpfield"
              },
              {
                "name": "Glenn"
              },
              {
                "name": "Hamster In Butt"
              },
              {
                "name": "Hole in the Wall Where the Men Can See it All"
              },
              {
                "name": "Celebrity Jerry"
              },
              {
                "name": "Johnny Depp"
              },
              {
                "name": "Jon"
              },
              {
                "name": "Kristen Stewart"
              },
              {
                "name": "Loggins"
              },
              {
                "name": "Man Painted Silver Who Makes Robot Noises"
              },
              {
                "name": "Michael Denny and the Denny Singers"
              },
              {
                "name": "Mrs. Sullivan"
              },
              {
                "name": "Piece of Toast"
              },
              {
                "name": "Real Fake Doors Salesman"
              },
              {
                "name": "Regular Legs"
              },
              {
                "name": "Shmlamantha Shmlicelli"
              },
              {
                "name": "Shmlangela Shmlobinson-Shmlower"
              },
              {
                "name": "Shmlona Shmlobinson"
              },
              {
                "name": "Shmlonathan Shmlower"
              },
              {
                "name": "Shmlony Shmlicelli"
              },
              {
                "name": "Three Unknown Things"
              },
              {
                "name": "Tophat Jones"
              },
              {
                "name": "Trunk Man"
              },
              {
                "name": "Two Guys with Handlebar Mustaches"
              },
              {
                "name": "Unmuscular Michael"
              },
              {
                "name": "Guy from The Bachelor"
              },
              {
                "name": "Corn detective"
              },
              {
                "name": "Michael Jackson"
              },
              {
                "name": "Trunkphobic suspenders guy"
              },
              {
                "name": "Spiderweb teddy bear"
              },
              {
                "name": "Regular Tyrion Lannister"
              },
              {
                "name": "Quick Mystery Presenter"
              },
              {
                "name": "Mr. Sneezy"
              },
              {
                "name": "Two Brothers"
              },
              {
                "name": "Alien Mexican Armada"
              },
              {
                "name": "Giant Cat Monster"
              },
              {
                "name": "Old Women"
              },
              {
                "name": "Trunkphobic guy"
              },
              {
                "name": "Pro trunk people marriage guy"
              },
              {
                "name": "Muscular Mannie"
              },
              {
                "name": "Baby Legs Chief"
              },
              {
                "name": "Mrs. Sullivan's Boyfriend"
              }
            ]
          },
          {
            "name": "Something Ricked This Way Comes",
            "air_date": "March 24, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Cynthia"
              },
              {
                "name": "King Flippy Nips"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mr. Needful"
              },
              {
                "name": "Nancy"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Scroopy Noopers"
              },
              {
                "name": "Plutonian Hostess"
              },
              {
                "name": "Plutonian Host"
              },
              {
                "name": "Rich Plutonian"
              },
              {
                "name": "Rich Plutonian"
              },
              {
                "name": "Butter Robot"
              }
            ]
          },
          {
            "name": "Close Rick-counters of the Rick Kind",
            "air_date": "April 7, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Abradolf Lincler"
              },
              {
                "name": "Alien Morty"
              },
              {
                "name": "Alien Rick"
              },
              {
                "name": "Antenna Morty"
              },
              {
                "name": "Antenna Rick"
              },
              {
                "name": "Aqua Morty"
              },
              {
                "name": "Aqua Rick"
              },
              {
                "name": "Artist Morty"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Blue Shirt Morty"
              },
              {
                "name": "Cowboy Morty"
              },
              {
                "name": "Cowboy Rick"
              },
              {
                "name": "Crab Spider"
              },
              {
                "name": "Cronenberg Rick"
              },
              {
                "name": "Cronenberg Morty"
              },
              {
                "name": "Cult Leader Morty"
              },
              {
                "name": "Cyclops Morty"
              },
              {
                "name": "Cyclops Rick"
              },
              {
                "name": "Doofus Rick"
              },
              {
                "name": "Eric Stoltz Mask Morty"
              },
              {
                "name": "Evil Morty"
              },
              {
                "name": "Evil Rick"
              },
              {
                "name": "Hammerhead Morty"
              },
              {
                "name": "Insurance Rick"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Long Sleeved Morty"
              },
              {
                "name": "Maximums Rickimus"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Mr. Meeseeks"
              },
              {
                "name": "Quantum Rick"
              },
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Ricktiminus Sancheziminius"
              },
              {
                "name": "Riq IV"
              },
              {
                "name": "Robot Morty"
              },
              {
                "name": "Robot Rick"
              },
              {
                "name": "Snuffles (Snowball)"
              },
              {
                "name": "Solicitor Rick"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "The Scientist Formerly Known as Rick"
              },
              {
                "name": "Tortured Morty"
              },
              {
                "name": "Woman Rick"
              },
              {
                "name": "Zeta Alpha Rick"
              },
              {
                "name": "Trunkphobic suspenders guy"
              },
              {
                "name": "Pizza-person"
              },
              {
                "name": "Pizza-person"
              },
              {
                "name": "Greasy Grandma"
              },
              {
                "name": "Phone-person"
              },
              {
                "name": "Phone-person"
              },
              {
                "name": "Chair-person"
              },
              {
                "name": "Chair-person"
              },
              {
                "name": "Chair-homeless"
              },
              {
                "name": "Chair-waiter"
              },
              {
                "name": "Doopidoo"
              },
              {
                "name": "Super Weird Rick"
              },
              {
                "name": "Reggie"
              }
            ]
          },
          {
            "name": "Ricksy Business",
            "air_date": "April 14, 2014",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Abradolf Lincler"
              },
              {
                "name": "Bepisian"
              },
              {
                "name": "Birdperson"
              },
              {
                "name": "Brad"
              },
              {
                "name": "Cynthia"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "Lucy"
              },
              {
                "name": "MC Haps"
              },
              {
                "name": "Nancy"
              },
              {
                "name": "Revolio Clockberg Jr."
              },
              {
                "name": "Riq IV"
              },
              {
                "name": "Scropon"
              },
              {
                "name": "Slippery Stair"
              },
              {
                "name": "Slow Mobius"
              },
              {
                "name": "Squanchy"
              },
              {
                "name": "Stair Goblin"
              },
              {
                "name": "Tammy Guetermann"
              },
              {
                "name": "Traflorkian"
              },
              {
                "name": "Zeta Alpha Rick"
              },
              {
                "name": "Greebybobe"
              },
              {
                "name": "Trunkphobic suspenders guy"
              },
              {
                "name": "Synthetic Laser Eels"
              },
              {
                "name": "Pripudlian"
              },
              {
                "name": "Giant Testicle Monster"
              }
            ]
          },
          {
            "name": "A Rickle in Time",
            "air_date": "July 26, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Albert Einstein"
              },
              {
                "name": "Chris"
              },
              {
                "name": "Mr. Benson"
              },
              {
                "name": "Shleemypants"
              },
              {
                "name": "Michael"
              },
              {
                "name": "Michael's Lawyer"
              },
              {
                "name": "Veterinary"
              },
              {
                "name": "Veterinary Nurse"
              }
            ]
          },
          {
            "name": "Mortynight Run",
            "air_date": "August 2, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Arcade Alien"
              },
              {
                "name": "Attila Starwar"
              },
              {
                "name": "Benjamin"
              },
              {
                "name": "Dr. Schmidt"
              },
              {
                "name": "Fart"
              },
              {
                "name": "Fulgora"
              },
              {
                "name": "Gar Gloonch"
              },
              {
                "name": "Garblovian"
              },
              {
                "name": "Gazorpazorpfield"
              },
              {
                "name": "Jerry 5-126"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Krombopulos Michael"
              },
              {
                "name": "Loggins"
              },
              {
                "name": "Mr. Meeseeks"
              },
              {
                "name": "Paul Fleishman"
              },
              {
                "name": "Revolio Clockberg Jr."
              },
              {
                "name": "Scrotian"
              },
              {
                "name": "Shimshamian"
              },
              {
                "name": "Traflorkian"
              },
              {
                "name": "Zarbadar Gloonch"
              },
              {
                "name": "Roy"
              },
              {
                "name": "Giant Testicle Monster"
              },
              {
                "name": "Bearded Jerry"
              },
              {
                "name": "Shaved Head Jerry"
              },
              {
                "name": "Tank Top Jerry"
              },
              {
                "name": "Pink Polo Shirt Jerry"
              },
              {
                "name": "Jerryboree Keeper"
              },
              {
                "name": "Jerryboree Receptionist"
              },
              {
                "name": "Anchor Gear"
              },
              {
                "name": "Gear Cop"
              },
              {
                "name": "Roy's Mum"
              },
              {
                "name": "Roy's Wife"
              },
              {
                "name": "Roy's Son"
              }
            ]
          },
          {
            "name": "Auto Erotic Assimilation",
            "air_date": "August 9, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Beta-Seven"
              },
              {
                "name": "Blim Blam"
              },
              {
                "name": "Daron Jefferson"
              },
              {
                "name": "Karen Entity"
              },
              {
                "name": "Mrs. Sanchez"
              },
              {
                "name": "Ron Benson"
              },
              {
                "name": "Steven Phillips"
              },
              {
                "name": "Todd Crystal"
              },
              {
                "name": "Unity"
              }
            ]
          },
          {
            "name": "Total Rickall",
            "air_date": "August 16, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Amish Cyborg"
              },
              {
                "name": "Baby Wizard"
              },
              {
                "name": "Bearded Lady"
              },
              {
                "name": "Cousin Nicky"
              },
              {
                "name": "Duck With Muscles"
              },
              {
                "name": "Frankenstein's Monster"
              },
              {
                "name": "Ghost in a Jar"
              },
              {
                "name": "Hamurai"
              },
              {
                "name": "Jacob"
              },
              {
                "name": "Mr. Beauregard"
              },
              {
                "name": "Mr. Poopybutthole"
              },
              {
                "name": "Mrs. Refrigerator"
              },
              {
                "name": "Pencilvester"
              },
              {
                "name": "Photography Raptor"
              },
              {
                "name": "Reverse Giraffe"
              },
              {
                "name": "Sleepy Gary"
              },
              {
                "name": "Snuffles (Snowball)"
              },
              {
                "name": "Tinkles"
              },
              {
                "name": "Uncle Steve"
              }
            ]
          },
          {
            "name": "Get Schwifty",
            "air_date": "August 23, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Armagheadon"
              },
              {
                "name": "Birdperson"
              },
              {
                "name": "Ethan"
              },
              {
                "name": "Father Bob"
              },
              {
                "name": "General Nathan"
              },
              {
                "name": "Hydrogen-F"
              },
              {
                "name": "Ice-T"
              },
              {
                "name": "Jamey"
              },
              {
                "name": "Jim"
              },
              {
                "name": "Larva Alien"
              },
              {
                "name": "Magma-Q"
              },
              {
                "name": "Magnesium-J"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Mr. Marklovitz"
              },
              {
                "name": "Numbericon"
              },
              {
                "name": "Orthodox Jew"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Scrotian"
              },
              {
                "name": "Snuffles (Snowball)"
              },
              {
                "name": "Squanchy"
              },
              {
                "name": "Tammy Guetermann"
              },
              {
                "name": "Terry"
              },
              {
                "name": "President Curtis"
              },
              {
                "name": "Greebybobe"
              },
              {
                "name": "Simon"
              },
              {
                "name": "Arbolian Mentirososian"
              }
            ]
          },
          {
            "name": "The Ricks Must Be Crazy",
            "air_date": "August 30, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Attila Starwar"
              },
              {
                "name": "Benjamin"
              },
              {
                "name": "Chris"
              },
              {
                "name": "Fulgora"
              },
              {
                "name": "Hunter"
              },
              {
                "name": "Hunter's Father"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "Kyle"
              },
              {
                "name": "Loggins"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Piece of Toast"
              },
              {
                "name": "The President of the Miniverse"
              },
              {
                "name": "Tree Person"
              },
              {
                "name": "Zeep Xanflorp"
              },
              {
                "name": "Space Cruiser"
              }
            ]
          },
          {
            "name": "Big Trouble in Little Sanchez",
            "air_date": "September 13, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Beth's Mytholog"
              },
              {
                "name": "Boobloosian"
              },
              {
                "name": "Coach Feratu (Balik Alistane)"
              },
              {
                "name": "Gar Gloonch"
              },
              {
                "name": "Gar's Mytholog"
              },
              {
                "name": "Glexo Slim Slom"
              },
              {
                "name": "Goddess Beth"
              },
              {
                "name": "Ideal Jerry"
              },
              {
                "name": "Jerry's Mytholog"
              },
              {
                "name": "Jessica"
              },
              {
                "name": "Jessica's Friend"
              },
              {
                "name": "Mr. Goldenfold"
              },
              {
                "name": "Principal Vagina"
              },
              {
                "name": "Self-Congratulatory Jerry"
              },
              {
                "name": "Tiny Rick"
              },
              {
                "name": "Toby Matthews"
              },
              {
                "name": "Tophat Jones"
              },
              {
                "name": "Vampire Master"
              },
              {
                "name": "Zarbadar Gloonch"
              },
              {
                "name": "Zarbadar's Mytholog"
              },
              {
                "name": "Vampire Master's Assistant"
              }
            ]
          },
          {
            "name": "Interdimensional Cable 2: Tempting Fate",
            "air_date": "September 20, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Arcade Alien"
              },
              {
                "name": "Bepisian"
              },
              {
                "name": "Blamph"
              },
              {
                "name": "Blue Diplomat"
              },
              {
                "name": "Dr. Glip-Glop"
              },
              {
                "name": "Eyehole Man"
              },
              {
                "name": "Fleeb"
              },
              {
                "name": "Garblovian"
              },
              {
                "name": "Hamster In Butt"
              },
              {
                "name": "Jan-Michael Vincent"
              },
              {
                "name": "Larva Alien"
              },
              {
                "name": "Little Dipper"
              },
              {
                "name": "Michael Jenkins"
              },
              {
                "name": "Michael McLick"
              },
              {
                "name": "Michael Thompson"
              },
              {
                "name": "Octopus Man"
              },
              {
                "name": "Phillip Jacobs"
              },
              {
                "name": "Pibbles Bodyguard"
              },
              {
                "name": "Pichael Thompson"
              },
              {
                "name": "Randy Dicknose"
              },
              {
                "name": "Shlaammi"
              },
              {
                "name": "Shrimply Pibbles"
              },
              {
                "name": "Stealy"
              },
              {
                "name": "Traflorkian"
              },
              {
                "name": "Tumblorkian"
              },
              {
                "name": "Yaarb"
              },
              {
                "name": "Yellow Headed Doctor"
              },
              {
                "name": "Pripudlian"
              },
              {
                "name": "Arbolian Mentirososian"
              },
              {
                "name": "St. Gloopy Noops Nurse"
              },
              {
                "name": "Nano Doctor"
              },
              {
                "name": "Funny Songs Presenter"
              },
              {
                "name": "Tax Attorney"
              },
              {
                "name": "Butthole Ice Cream Guy"
              },
              {
                "name": "Traflorkian Journalist"
              }
            ]
          },
          {
            "name": "Look Who's Purging Now",
            "air_date": "September 27, 2015",
            "characters": [
              {
                "name": "Rick Sanchez"
              },
              {
                "name": "Morty Smith"
              },
              {
                "name": "Summer Smith"
              },
              {
                "name": "Beth Smith"
              },
              {
                "name": "Jerry Smith"
              },
              {
                "name": "Arthricia"
              },
              {
                "name": "General Store Owner"
              },
              {
                "name": "Lighthouse Keeper"
              },
              {
                "name": "Purge Planet Ruler"
              },
              {
                "name": "Taddy Mason"
              }
            ]
          }
        ]
      }
    }

const Episodes = ({ episodes }) => {
    return (
        <div className="episodes">
            {episodes.map((episode, index) => (
                <Episode key={index} episode={episode} />
            ))}
        </div>
    );
};
const Episode = ({ episode }) => {
    return (
        <div className="episode">
            <h2>{episode.name}</h2>
            <p><strong>Air Date:</strong> {episode.air_date}</p>
            <Characters characters={episode.characters} />
        </div>
    );
};
const Characters = ({ characters }) => {
    return (
        <div className="characters">
            {characters.map((character, index) => (
                <Character key={index} character={character} />
            ))}
        </div>
    );
};
const Character = ({ character }) => {
    return (
        <div className="character">
            <p>{character.name}</p>
        </div>
    );
};

const dataRickMorthy2 ={
      "characters": {
        "result": [
          {
            "name": "Rick Sanchez",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
              {
                "name": "Pilot",
                "air_date": "December 2, 2013"
              },
              {
                "name": "Lawnmower Dog",
                "air_date": "December 9, 2013"
              },
              {
                "name": "Anatomy Park",
                "air_date": "December 16, 2013"
              },
              {
                "name": "M. Night Shaym-Aliens!",
                "air_date": "January 13, 2014"
              },
              {
                "name": "Meeseeks and Destroy",
                "air_date": "January 20, 2014"
              },
              {
                "name": "Rick Potion #9",
                "air_date": "January 27, 2014"
              },
              {
                "name": "Raising Gazorpazorp",
                "air_date": "March 10, 2014"
              },
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              },
              {
                "name": "Something Ricked This Way Comes",
                "air_date": "March 24, 2014"
              },
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              },
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              },
              {
                "name": "Mortynight Run",
                "air_date": "August 2, 2015"
              },
              {
                "name": "Auto Erotic Assimilation",
                "air_date": "August 9, 2015"
              },
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              },
              {
                "name": "Get Schwifty",
                "air_date": "August 23, 2015"
              },
              {
                "name": "The Ricks Must Be Crazy",
                "air_date": "August 30, 2015"
              },
              {
                "name": "Big Trouble in Little Sanchez",
                "air_date": "September 13, 2015"
              },
              {
                "name": "Interdimensional Cable 2: Tempting Fate",
                "air_date": "September 20, 2015"
              },
              {
                "name": "Look Who's Purging Now",
                "air_date": "September 27, 2015"
              },
              {
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015"
              },
              {
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017"
              },
              {
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017"
              },
              {
                "name": "Pickle Rick",
                "air_date": "August 6, 2017"
              },
              {
                "name": "Vindicators 3: The Return of Worldender",
                "air_date": "August 13, 2017"
              },
              {
                "name": "The Whirly Dirly Conspiracy",
                "air_date": "August 20, 2017"
              },
              {
                "name": "Rest and Ricklaxation",
                "air_date": "August 27, 2017"
              },
              {
                "name": "The Ricklantis Mixup",
                "air_date": "September 10, 2017"
              },
              {
                "name": "Morty's Mind Blowers",
                "air_date": "September 17, 2017"
              },
              {
                "name": "The ABC's of Beth",
                "air_date": "September 24, 2017"
              },
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              },
              {
                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                "air_date": "November 10, 2019"
              },
              {
                "name": "The Old Man and the Seat",
                "air_date": "November 17, 2019"
              },
              {
                "name": "One Crew Over the Crewcoo's Morty",
                "air_date": "November 24, 2019"
              },
              {
                "name": "Claw and Hoarder: Special Ricktim's Morty",
                "air_date": "December 8, 2019"
              },
              {
                "name": "Rattlestar Ricklactica",
                "air_date": "December 15, 2019"
              },
              {
                "name": "Never Ricking Morty",
                "air_date": "May 3, 2020"
              },
              {
                "name": "Promortyus",
                "air_date": "May 10, 2020"
              },
              {
                "name": "The Vat of Acid Episode",
                "air_date": "May 17, 2020"
              },
              {
                "name": "Childrick of Mort",
                "air_date": "May 24, 2020"
              },
              {
                "name": "Star Mort: Rickturn of the Jerri",
                "air_date": "May 31, 2020"
              },
              {
                "name": "Mort Dinner Rick Andre",
                "air_date": "June 20, 2021"
              },
              {
                "name": "Mortyplicity",
                "air_date": "June 27, 2021"
              },
              {
                "name": "A Rickconvenient Mort",
                "air_date": "July 4, 2021"
              },
              {
                "name": "Rickdependence Spray",
                "air_date": "July 11, 2021"
              },
              {
                "name": "Amortycan Grickfitti",
                "air_date": "July 18, 2021"
              },
              {
                "name": "Rick & Morty's Thanksploitation Spectacular",
                "air_date": "July 25, 2021"
              },
              {
                "name": "Gotron Jerrysis Rickvangelion",
                "air_date": "August 1, 2021"
              },
              {
                "name": "Rickternal Friendshine of the Spotless Mort",
                "air_date": "August 8, 2021"
              },
              {
                "name": "Forgetting Sarick Mortshall",
                "air_date": "September 5, 2021"
              },
              {
                "name": "Rickmurai Jack",
                "air_date": "September 5, 2021"
              }
            ]
          },
          {
            "name": "Morty Smith",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "episode": [
              {
                "name": "Pilot",
                "air_date": "December 2, 2013"
              },
              {
                "name": "Lawnmower Dog",
                "air_date": "December 9, 2013"
              },
              {
                "name": "Anatomy Park",
                "air_date": "December 16, 2013"
              },
              {
                "name": "M. Night Shaym-Aliens!",
                "air_date": "January 13, 2014"
              },
              {
                "name": "Meeseeks and Destroy",
                "air_date": "January 20, 2014"
              },
              {
                "name": "Rick Potion #9",
                "air_date": "January 27, 2014"
              },
              {
                "name": "Raising Gazorpazorp",
                "air_date": "March 10, 2014"
              },
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              },
              {
                "name": "Something Ricked This Way Comes",
                "air_date": "March 24, 2014"
              },
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              },
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              },
              {
                "name": "Mortynight Run",
                "air_date": "August 2, 2015"
              },
              {
                "name": "Auto Erotic Assimilation",
                "air_date": "August 9, 2015"
              },
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              },
              {
                "name": "Get Schwifty",
                "air_date": "August 23, 2015"
              },
              {
                "name": "The Ricks Must Be Crazy",
                "air_date": "August 30, 2015"
              },
              {
                "name": "Big Trouble in Little Sanchez",
                "air_date": "September 13, 2015"
              },
              {
                "name": "Interdimensional Cable 2: Tempting Fate",
                "air_date": "September 20, 2015"
              },
              {
                "name": "Look Who's Purging Now",
                "air_date": "September 27, 2015"
              },
              {
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015"
              },
              {
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017"
              },
              {
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017"
              },
              {
                "name": "Pickle Rick",
                "air_date": "August 6, 2017"
              },
              {
                "name": "Vindicators 3: The Return of Worldender",
                "air_date": "August 13, 2017"
              },
              {
                "name": "The Whirly Dirly Conspiracy",
                "air_date": "August 20, 2017"
              },
              {
                "name": "Rest and Ricklaxation",
                "air_date": "August 27, 2017"
              },
              {
                "name": "The Ricklantis Mixup",
                "air_date": "September 10, 2017"
              },
              {
                "name": "Morty's Mind Blowers",
                "air_date": "September 17, 2017"
              },
              {
                "name": "The ABC's of Beth",
                "air_date": "September 24, 2017"
              },
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              },
              {
                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                "air_date": "November 10, 2019"
              },
              {
                "name": "The Old Man and the Seat",
                "air_date": "November 17, 2019"
              },
              {
                "name": "One Crew Over the Crewcoo's Morty",
                "air_date": "November 24, 2019"
              },
              {
                "name": "Claw and Hoarder: Special Ricktim's Morty",
                "air_date": "December 8, 2019"
              },
              {
                "name": "Rattlestar Ricklactica",
                "air_date": "December 15, 2019"
              },
              {
                "name": "Never Ricking Morty",
                "air_date": "May 3, 2020"
              },
              {
                "name": "Promortyus",
                "air_date": "May 10, 2020"
              },
              {
                "name": "The Vat of Acid Episode",
                "air_date": "May 17, 2020"
              },
              {
                "name": "Childrick of Mort",
                "air_date": "May 24, 2020"
              },
              {
                "name": "Star Mort: Rickturn of the Jerri",
                "air_date": "May 31, 2020"
              },
              {
                "name": "Mort Dinner Rick Andre",
                "air_date": "June 20, 2021"
              },
              {
                "name": "Mortyplicity",
                "air_date": "June 27, 2021"
              },
              {
                "name": "A Rickconvenient Mort",
                "air_date": "July 4, 2021"
              },
              {
                "name": "Rickdependence Spray",
                "air_date": "July 11, 2021"
              },
              {
                "name": "Amortycan Grickfitti",
                "air_date": "July 18, 2021"
              },
              {
                "name": "Rick & Morty's Thanksploitation Spectacular",
                "air_date": "July 25, 2021"
              },
              {
                "name": "Gotron Jerrysis Rickvangelion",
                "air_date": "August 1, 2021"
              },
              {
                "name": "Rickternal Friendshine of the Spotless Mort",
                "air_date": "August 8, 2021"
              },
              {
                "name": "Forgetting Sarick Mortshall",
                "air_date": "September 5, 2021"
              },
              {
                "name": "Rickmurai Jack",
                "air_date": "September 5, 2021"
              }
            ]
          },
          {
            "name": "Summer Smith",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            "episode": [
              {
                "name": "Rick Potion #9",
                "air_date": "January 27, 2014"
              },
              {
                "name": "Raising Gazorpazorp",
                "air_date": "March 10, 2014"
              },
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              },
              {
                "name": "Something Ricked This Way Comes",
                "air_date": "March 24, 2014"
              },
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              },
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              },
              {
                "name": "Auto Erotic Assimilation",
                "air_date": "August 9, 2015"
              },
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              },
              {
                "name": "Get Schwifty",
                "air_date": "August 23, 2015"
              },
              {
                "name": "The Ricks Must Be Crazy",
                "air_date": "August 30, 2015"
              },
              {
                "name": "Big Trouble in Little Sanchez",
                "air_date": "September 13, 2015"
              },
              {
                "name": "Interdimensional Cable 2: Tempting Fate",
                "air_date": "September 20, 2015"
              },
              {
                "name": "Look Who's Purging Now",
                "air_date": "September 27, 2015"
              },
              {
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015"
              },
              {
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017"
              },
              {
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017"
              },
              {
                "name": "Pickle Rick",
                "air_date": "August 6, 2017"
              },
              {
                "name": "Vindicators 3: The Return of Worldender",
                "air_date": "August 13, 2017"
              },
              {
                "name": "The Whirly Dirly Conspiracy",
                "air_date": "August 20, 2017"
              },
              {
                "name": "Rest and Ricklaxation",
                "air_date": "August 27, 2017"
              },
              {
                "name": "Morty's Mind Blowers",
                "air_date": "September 17, 2017"
              },
              {
                "name": "The ABC's of Beth",
                "air_date": "September 24, 2017"
              },
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              },
              {
                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                "air_date": "November 10, 2019"
              },
              {
                "name": "The Old Man and the Seat",
                "air_date": "November 17, 2019"
              },
              {
                "name": "One Crew Over the Crewcoo's Morty",
                "air_date": "November 24, 2019"
              },
              {
                "name": "Claw and Hoarder: Special Ricktim's Morty",
                "air_date": "December 8, 2019"
              },
              {
                "name": "Rattlestar Ricklactica",
                "air_date": "December 15, 2019"
              },
              {
                "name": "Promortyus",
                "air_date": "May 10, 2020"
              },
              {
                "name": "The Vat of Acid Episode",
                "air_date": "May 17, 2020"
              },
              {
                "name": "Childrick of Mort",
                "air_date": "May 24, 2020"
              },
              {
                "name": "Star Mort: Rickturn of the Jerri",
                "air_date": "May 31, 2020"
              },
              {
                "name": "Mort Dinner Rick Andre",
                "air_date": "June 20, 2021"
              },
              {
                "name": "Mortyplicity",
                "air_date": "June 27, 2021"
              },
              {
                "name": "A Rickconvenient Mort",
                "air_date": "July 4, 2021"
              },
              {
                "name": "Rickdependence Spray",
                "air_date": "July 11, 2021"
              },
              {
                "name": "Amortycan Grickfitti",
                "air_date": "July 18, 2021"
              },
              {
                "name": "Rick & Morty's Thanksploitation Spectacular",
                "air_date": "July 25, 2021"
              },
              {
                "name": "Gotron Jerrysis Rickvangelion",
                "air_date": "August 1, 2021"
              },
              {
                "name": "Rickternal Friendshine of the Spotless Mort",
                "air_date": "August 8, 2021"
              },
              {
                "name": "Rickmurai Jack",
                "air_date": "September 5, 2021"
              }
            ]
          },
          {
            "name": "Beth Smith",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            "episode": [
              {
                "name": "Rick Potion #9",
                "air_date": "January 27, 2014"
              },
              {
                "name": "Raising Gazorpazorp",
                "air_date": "March 10, 2014"
              },
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              },
              {
                "name": "Something Ricked This Way Comes",
                "air_date": "March 24, 2014"
              },
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              },
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              },
              {
                "name": "Auto Erotic Assimilation",
                "air_date": "August 9, 2015"
              },
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              },
              {
                "name": "Get Schwifty",
                "air_date": "August 23, 2015"
              },
              {
                "name": "Big Trouble in Little Sanchez",
                "air_date": "September 13, 2015"
              },
              {
                "name": "Interdimensional Cable 2: Tempting Fate",
                "air_date": "September 20, 2015"
              },
              {
                "name": "Look Who's Purging Now",
                "air_date": "September 27, 2015"
              },
              {
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015"
              },
              {
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017"
              },
              {
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017"
              },
              {
                "name": "Pickle Rick",
                "air_date": "August 6, 2017"
              },
              {
                "name": "Vindicators 3: The Return of Worldender",
                "air_date": "August 13, 2017"
              },
              {
                "name": "The Whirly Dirly Conspiracy",
                "air_date": "August 20, 2017"
              },
              {
                "name": "Rest and Ricklaxation",
                "air_date": "August 27, 2017"
              },
              {
                "name": "The Ricklantis Mixup",
                "air_date": "September 10, 2017"
              },
              {
                "name": "Morty's Mind Blowers",
                "air_date": "September 17, 2017"
              },
              {
                "name": "The ABC's of Beth",
                "air_date": "September 24, 2017"
              },
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              },
              {
                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                "air_date": "November 10, 2019"
              },
              {
                "name": "The Old Man and the Seat",
                "air_date": "November 17, 2019"
              },
              {
                "name": "One Crew Over the Crewcoo's Morty",
                "air_date": "November 24, 2019"
              },
              {
                "name": "Claw and Hoarder: Special Ricktim's Morty",
                "air_date": "December 8, 2019"
              },
              {
                "name": "Rattlestar Ricklactica",
                "air_date": "December 15, 2019"
              },
              {
                "name": "Promortyus",
                "air_date": "May 10, 2020"
              },
              {
                "name": "The Vat of Acid Episode",
                "air_date": "May 17, 2020"
              },
              {
                "name": "Childrick of Mort",
                "air_date": "May 24, 2020"
              },
              {
                "name": "Star Mort: Rickturn of the Jerri",
                "air_date": "May 31, 2020"
              },
              {
                "name": "Mort Dinner Rick Andre",
                "air_date": "June 20, 2021"
              },
              {
                "name": "Mortyplicity",
                "air_date": "June 27, 2021"
              },
              {
                "name": "A Rickconvenient Mort",
                "air_date": "July 4, 2021"
              },
              {
                "name": "Rickdependence Spray",
                "air_date": "July 11, 2021"
              },
              {
                "name": "Amortycan Grickfitti",
                "air_date": "July 18, 2021"
              },
              {
                "name": "Rick & Morty's Thanksploitation Spectacular",
                "air_date": "July 25, 2021"
              },
              {
                "name": "Gotron Jerrysis Rickvangelion",
                "air_date": "August 1, 2021"
              },
              {
                "name": "Rickternal Friendshine of the Spotless Mort",
                "air_date": "August 8, 2021"
              },
              {
                "name": "Rickmurai Jack",
                "air_date": "September 5, 2021"
              }
            ]
          },
          {
            "name": "Jerry Smith",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            "episode": [
              {
                "name": "Rick Potion #9",
                "air_date": "January 27, 2014"
              },
              {
                "name": "Raising Gazorpazorp",
                "air_date": "March 10, 2014"
              },
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              },
              {
                "name": "Something Ricked This Way Comes",
                "air_date": "March 24, 2014"
              },
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              },
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              },
              {
                "name": "Mortynight Run",
                "air_date": "August 2, 2015"
              },
              {
                "name": "Auto Erotic Assimilation",
                "air_date": "August 9, 2015"
              },
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              },
              {
                "name": "Get Schwifty",
                "air_date": "August 23, 2015"
              },
              {
                "name": "Big Trouble in Little Sanchez",
                "air_date": "September 13, 2015"
              },
              {
                "name": "Interdimensional Cable 2: Tempting Fate",
                "air_date": "September 20, 2015"
              },
              {
                "name": "Look Who's Purging Now",
                "air_date": "September 27, 2015"
              },
              {
                "name": "The Wedding Squanchers",
                "air_date": "October 4, 2015"
              },
              {
                "name": "The Rickshank Rickdemption",
                "air_date": "April 1, 2017"
              },
              {
                "name": "Rickmancing the Stone",
                "air_date": "July 30, 2017"
              },
              {
                "name": "The Whirly Dirly Conspiracy",
                "air_date": "August 20, 2017"
              },
              {
                "name": "Morty's Mind Blowers",
                "air_date": "September 17, 2017"
              },
              {
                "name": "The ABC's of Beth",
                "air_date": "September 24, 2017"
              },
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              },
              {
                "name": "Edge of Tomorty: Rick, Die, Rickpeat",
                "air_date": "November 10, 2019"
              },
              {
                "name": "The Old Man and the Seat",
                "air_date": "November 17, 2019"
              },
              {
                "name": "Claw and Hoarder: Special Ricktim's Morty",
                "air_date": "December 8, 2019"
              },
              {
                "name": "Rattlestar Ricklactica",
                "air_date": "December 15, 2019"
              },
              {
                "name": "Promortyus",
                "air_date": "May 10, 2020"
              },
              {
                "name": "The Vat of Acid Episode",
                "air_date": "May 17, 2020"
              },
              {
                "name": "Childrick of Mort",
                "air_date": "May 24, 2020"
              },
              {
                "name": "Star Mort: Rickturn of the Jerri",
                "air_date": "May 31, 2020"
              },
              {
                "name": "Mort Dinner Rick Andre",
                "air_date": "June 20, 2021"
              },
              {
                "name": "Mortyplicity",
                "air_date": "June 27, 2021"
              },
              {
                "name": "A Rickconvenient Mort",
                "air_date": "July 4, 2021"
              },
              {
                "name": "Rickdependence Spray",
                "air_date": "July 11, 2021"
              },
              {
                "name": "Amortycan Grickfitti",
                "air_date": "July 18, 2021"
              },
              {
                "name": "Rick & Morty's Thanksploitation Spectacular",
                "air_date": "July 25, 2021"
              },
              {
                "name": "Gotron Jerrysis Rickvangelion",
                "air_date": "August 1, 2021"
              },
              {
                "name": "Rickternal Friendshine of the Spotless Mort",
                "air_date": "August 8, 2021"
              },
              {
                "name": "Forgetting Sarick Mortshall",
                "air_date": "September 5, 2021"
              },
              {
                "name": "Rickmurai Jack",
                "air_date": "September 5, 2021"
              }
            ]
          },
          {
            "name": "Abadango Cluster Princess",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            "episode": [
              {
                "name": "Rest and Ricklaxation",
                "air_date": "August 27, 2017"
              }
            ]
          },
          {
            "name": "Abradolf Lincler",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            "episode": [
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "Ricksy Business",
                "air_date": "April 14, 2014"
              }
            ]
          },
          {
            "name": "Adjudicator Rick",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "episode": [
              {
                "name": "The Ricklantis Mixup",
                "air_date": "September 10, 2017"
              }
            ]
          },
          {
            "name": "Agency Director",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            "episode": [
              {
                "name": "Pickle Rick",
                "air_date": "August 6, 2017"
              }
            ]
          },
          {
            "name": "Alan Rails",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            "episode": [
              {
                "name": "Vindicators 3: The Return of Worldender",
                "air_date": "August 13, 2017"
              }
            ]
          },
          {
            "name": "Albert Einstein",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            "episode": [
              {
                "name": "A Rickle in Time",
                "air_date": "July 26, 2015"
              }
            ]
          },
          {
            "name": "Alexander",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            "episode": [
              {
                "name": "Anatomy Park",
                "air_date": "December 16, 2013"
              }
            ]
          },
          {
            "name": "Alien Googah",
            "gender": "unknown",
            "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            "episode": [
              {
                "name": "The Rickchurian Mortydate",
                "air_date": "October 1, 2017"
              }
            ]
          },
          {
            "name": "Alien Morty",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            "episode": [
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              }
            ]
          },
          {
            "name": "Alien Rick",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            "episode": [
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              }
            ]
          },
          {
            "name": "Amish Cyborg",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            "episode": [
              {
                "name": "Total Rickall",
                "air_date": "August 16, 2015"
              }
            ]
          },
          {
            "name": "Annie",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            "episode": [
              {
                "name": "Anatomy Park",
                "air_date": "December 16, 2013"
              }
            ]
          },
          {
            "name": "Antenna Morty",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            "episode": [
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              },
              {
                "name": "The Ricklantis Mixup",
                "air_date": "September 10, 2017"
              }
            ]
          },
          {
            "name": "Antenna Rick",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            "episode": [
              {
                "name": "Close Rick-counters of the Rick Kind",
                "air_date": "April 7, 2014"
              }
            ]
          },
          {
            "name": "Ants in my Eyes Johnson",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            "episode": [
              {
                "name": "Rixty Minutes",
                "air_date": "March 17, 2014"
              }
            ]
          }
        ]
      }
    }
    const Episode2 = ({ episode }) => {
        return (
          <div className="episode">
            <h3>{episode.name}</h3>
            <p>{episode.air_date}</p>
          </div>
        );
      };

      const EpisodeList = ({ episodes }) => {
        return (
          <div className="episode-list">
            {episodes.map((ep, index) => (
              <Episode2 key={index} episode={ep} />
            ))}
          </div>
        );
      };

      const Character2 = ({ character }) => {
        return (
          <div className="character">
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <img src={character.image} alt={character.name} />
            <EpisodeList episodes={character.episode} />
          </div>
        );
      };
      const CharacterList = ({ characters }) => {
        return (
          <div className="character-list">
            {characters.map((char) => (
              <Character2 key={char.name} character={char} />
            ))}
          </div>
        );
      };

const App = () => {
    return (
        <div >
            <h2> Перше завдання</h2>
            {data.map((item, index) => (
                <PopulationData
                    key={index}
                    Year={item.Year}
                    Population={item.Population}
                    Nation={item.Nation}
                />
            ))}
            <h2>Друге завдання</h2>
            {results.map((character, index) => (
              <CharacterStarWars
                key={index}
                name={character.name}
                height={character.height}
                mass={character.mass}
                hair_color={character.hair_color}
                skin_color={character.skin_color}
                eye_color={character.eye_color}
                birth_year={character.birth_year}
                gender={character.gender}
              />
            ))}
            <h2>Третє завдання</h2>
            <h3>Rick and Morty Episodes</h3>
            <Episodes episodes={dataRickMorthy.episodes.results} />
            <h1>Rick and Morty Characters</h1>
            <CharacterList characters={dataRickMorthy2.characters.result} />
        </div>
    );
};

export default App;
