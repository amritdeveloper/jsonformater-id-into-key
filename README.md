
# jsonformater-id-into-key
This is a json converter which convert your json file one format to another it check unique value like id and convert to new array as key and save repeated value as object inside array. please check \"src.json\"and \"result.json\" file to understand format; to run type \"node index.js inputfilename outputfilename\"; note this will not work it the format is different


Input Data
[
  {
    "id": "123",
    "name": "Max",
    "City": "Las Vagas",
    "country": "US"
  },
  {
    "id": "123",
    "name": "Helan",
    "City": "Maxico",
    "country": "Us"
  },
  {
    "id": "123",
    "name": "Mark",
    "City": "LA",
    "country": "Canada"
  },
  {
    "id": "123",
    "name": "Luis",
    "City": "LV",
    "country": "America"
  },
  {
    "id": "124",
    "name": "Ankit",
    "City": "Brijnor",
    "country": "india"
  },
  {
    "id": "125",
    "name": "Khan",
    "City": "Islamabad",
    "country": "Pakistan"
  },
  {
    "id": "125",
    "name": "Hui",
    "City": "London",
    "country": "Uk"
  },
  {
    "id": "125",
    "name": "luis",
    "City": "New York",
    "country": "Us"
  }
]


Output Data
[
  {
    "123": [
      { "name": "Max", "City": "Las Vagas", "country": "US" },
      { "name": "Helan", "City": "Maxico", "country": "Us" },
      { "name": "Mark", "City": "LA", "country": "Canada" },
      { "name": "Luis", "City": "LV", "country": "America" }
    ]
  },
  { "124": [{ "name": "Ankit", "City": "Brijnor", "country": "india" }] },
  {
    "125": [
      { "name": "Khan", "City": "Islamabad", "country": "Pakistan" },
      { "name": "Hui", "City": "London", "country": "Uk" },
      { "name": "luis", "City": "New York", "country": "Us" }
    ]
  }
]
