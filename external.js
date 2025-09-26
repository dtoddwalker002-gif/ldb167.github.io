
var webmaps =
[
  ['https://radio.garden/','Radio Garden',"This Website uses web mapping to display an interactive globe, which you use to navigate the world, and interact with various points on the globe, which when interacted with, play the local radio station associated with that area.The website is very simple to use, simply dragging the globe around and centering your screen on a station will begin to play it.The website is arguably limited by its simplicity, as there is no search function, all stations must be found by manually moving the globe."],


["https://www.thetrailsatwolfpencreek.com/", "Trails at Wolf Pen Creek", "This Website uses an embedded google map result to display the location of the apartment complex geographically.It is useful to get a general idea of where it is within the city as well as the greater area around it.It doesn't display much information beyond that, and doesn't filter unnecessary information, its just a google maps result.It just shows a point on the map, which can provide a shortcut to google map users for fast direction finding. It was designed to be used by anyone using the site, so likely parents and students seeking college housing. Most of the use of it is just looking at what is already presented, interacting with it is mostly unnecessary but due to the commonality of google maps, it should be intuitive to navigate."]];





function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
let message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
document.write(welcome());
document.write(message);

function webmap_table()
{
  document.write("<table width=100%>");
    for (var row=0; row < webmaps.length; row++)
{
  document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
{
  document.write("<td>" + webmaps[row][column] + "</td>");
}
  document.write("</tr>");
}
  document.write("</table>");
    return "";
}
