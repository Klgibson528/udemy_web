var movie_db = [{
    title: "Finding Nemo",
    watched: true,
    stars: 5
  },
  {
    title: "The Room",
    watched: true,
    stars: 1
  },
  {
    title: "IT",
    watched: false,
    stars: 3
  }
];

function buildString(movie) {
  var result = "You have ";
  if (movie.watched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.stars + " stars";
  return result;
}


movie_db.forEach(function (movie) {
  console.log(buildString(movie));
})


// for (i in movie_db) {
//   if (movie_db[i].watched == true) {
//     console.log(
//       "You have watched " +
//       movie_db[i].title +
//       " - " +
//       movie_db[i].stars +
//       " stars"
//     );
//   } else {
//     console.log(
//       "You have not watched " +
//       movie_db[i].title +
//       " - " +
//       movie_db[i].stars +
//       " stars"
//     );
//   }
// }