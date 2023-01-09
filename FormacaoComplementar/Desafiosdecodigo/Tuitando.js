let tweet = gets();

if(tweet.length >= 1 && tweet.length <= 140){
  print("TWEET")
} else if (tweet.length > 140 && tweet.length <= 500){
  print("MUTE")
}