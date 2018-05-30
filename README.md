
## 1. Name: Lieblingshaus

2. Keywords: distance, safety, culture, maps, charts, interactive, histogram, piechart, galleries, distance, museums.

3. Description of the datasets and function design
	- [NY_neighborhood_names] ['https://catalog.data.gov/dataset/neighborhood-names-gis'] [area] [coordinates and name] [a lot of] This contains the name of the neighborhoods and its positions.
	- [NY_districts_shapes] ['https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson'] [area] [coordinates] [a lot of] This contains the shape of the borougths.
	- [NY_crimes] ['https://catalog.data.gov/dataset/neighborhood-names-gis'] [safety] [almost all] [a lot of] This contains a list of crimes, its coordinates and usefull information.
	- [NY_housing] ['https://catalog.data.gov/dataset/housing-new-york-units-by-building'] [housing] [almost all] [a lot of] This contains a list of houses, its coordinates and usefull information.
	- [NY_museums] ['https://catalog.data.gov/dataset/neighborhood-names-gis'] [leisure] [almost all] [a lot of] This contains a list of museums, its positions and usefull information.
	- [NY_art_galleries] ['https://catalog.data.gov/dataset/new-york-city-art-galleries'] [leisure] [almost all] [a lot of] This contains a list of galleries, its coordinates and usefull information.
	- [NY_farmers_markets] ['https://catalog.data.gov/dataset/new-york-city-farmers-markets-574c2'] [leisure] [almost all] [a lot of] This contains a list of markets and usefull information.
	
4. Brief Description
	 - Welcome to my Lieblingshaus!. In this project you will find all the things you looked for in previous projects and you didn't find. Things like well-done rankings, aesthetic tables, really interactive maps, and the greatest section of graphs and data analysis you've ever seen in your life. Sit down, take a coffee, and enjoy the result of the most stressful and maybe most productive days of my life.
	 
5. Map View:
	1. [Y] I have two maps, a main one that has its own section, initially it is located in the coordinates of the university, but it changes its location to focus in the best possible way the district in which the user clicks, with doubleclick it returns to its location and original zoom. The second map belongs to the ranking section, like the previous map, at the beginning it is located in the coordinates of the university, but it changes its location to show in the best possible way the result of the rankings requested by the user.
	1. [Y] The main map is covered with the shapes of the districts, grouped by color according to their borougth, the user can customize it in different ways such as: covering it with the names of the neighborhoods, different icons (grouped in clusters according to the zoom to decrease the density of icons on the map) that give information about important places like: houses, art galleries, museums, and the same university. And if you're lucky, maybe a heat map.  
    The secondary map, is covered with markers or medals awarded to the districts according to their position in the ranking, also contains the form of each of the districts of the ranking, and its opacity gives reason on the position they occupied.

6. Data Visualization:
	1. [Y] I mainly use two types of grams: Histograms and pie charts (or donut), which will be displayed according to the user's need for visualization, the histograms will only be shown when the total of districts is equal to or less than 30 (so that the information is not very dense) and the pie chart will only be displayed when there are at least two boroughts.
	3. [Y]
		 - Graphics are in themselves a great interaction, because they change according to the user's clicks.
		 - The colors of both histograms and pie charts change when the user places the mouse over them.
		 
7. Interaction Form:
	1. [Y]
		 - When the user clicks on a district, an infowindow appears that contains relevant information about that district, such as: name of the borought, number of the district, distance to the university, number of museums, galleries, crimes, etc.
	2. [Y]
		 - The user can filter the values shown in the graphs, mainly to find districts with respect to their borougth.
	3. [Y] 
		 - The parameters of the rankings are user inputs.
		 - The parameters for all the information that can be displayed on the map are user inputs.
		 - The parameters about which parameter to use in the diagrams and from which districts or borougths to extract the data are user inputs.
		 - The choice on which tables to visualize are user inputs.
	4. [Y]
		- The markers shown on the map, the zoom, and the location are factors that vary according to the user's clicks. 
		- Although the map can not be moved in a completely free way, the application understands that when a user clicks on a district, the information regarding it is of special interest, so it conforms to the district's form, and it shows in a summarized way the information that it has of the district.
		- The clusters are enlarged according to the part of the map that the user is focusing on, so that the user can better visualize the information without saturating the map with markers. 
		- Likewise, when the map moves away, markers of the same type are grouped by strategically chosen zones.
	5. [Y]
		- Each data displayed in the entire application can be filtered and displayed in different ways (mostly already explained).

8. The application was tested in firefox, chrome and safari, but I kindly ask you to see it in FIREFOX, because there are some features that can not be seen in other browsers due to lack of compatibility (this DOES NOT REPRESENT AN ERROR as the absence of these features has already been fixed).

9. Additional information:
Although this README file has been written with care, to know the application and understand its magnificence it is not enough to read this file, it is necessary to go to the application, and experience that pleasure that is only achieved with the well-made and perfectly designed applications. For this reason I have omitted the description of some of the features, and I have hidden eastereggs between the application, to encourage curiosity and invite people to interact with what I am so proud to call 'my creation'.  

