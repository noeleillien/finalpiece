(function(){

  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

var sns = [
    {
      team: 'Arizona Cardinals',
      amount: '632404',
      image: 'cardinals.png',
      owner: "William Bidwill $5,321",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Atlanta Falcons',
      amount: '134149',
      image: 'falcons.png',
      owner: "Arthur Blank $281,300",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Baltimore Ravens',
      amount: '111022',
      image: 'ravens.png',
      owner: "Stephen Bisciotti $50,000",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Buffalo Bills',
      amount: '80506',
      image: 'bills.png',
      owner: "Terrence Pegula $187,050",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Carolina Panthers',
      amount: '88451',
      image:'panthers.png',
      owner: "Jerry Richardson $82,500",
      player: " ",
      secondplayer: " "


    },
    {
      team: 'Chicago Bears',
      amount: '74050',
      image: 'bears.png',
      owner: "Virginia McCaskey $57,208",
      player: "Antrel Rolle - $10,000 (Barack Obama (D))",
      secondplayer: " "

    },
        {
      team: 'Cincinnati Bengals',
      amount: '265500',
      image: 'bengals.png',
      owner: "Michael Brown $164,360",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Cleveland Browns',
      amount: '82871',
      image: 'browns.gif',
      owner: "James Haslam $10,000",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Dallas Cowboys',
      amount: '277195',
      image: 'cowboys.png',
      owner: "Jerry Jones $161,800",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Denver Broncos',
      amount: '172225',
      image: 'broncos.png',
      owner: "Patrick Bowlen $46,250",
      player: "Aqib Tablib - $2,500 (Frank Perez (D))",
      secondplayer: " "

    },
      {
      team: 'Detroit Lions',
      amount: '91792',
      image: 'lions.png',
      owner: "William Ford $162,020",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Green Bay Packers',
      amount: '57950',
      image: 'packers.png',
      owner: "n/a",
      player: "Julius Peppers - $4,400 (George Butterfield (D), Kevin Powell (D))",
      secondplayer: " "

    },
    {
      team: 'Houston Texans',
      amount: '7392375',
      image: 'texans.png',
      owner: "Robert McNair $9,008,750",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Indianapolis Colts',
      amount: '267700',
      image: 'colts.png',
      owner: "Jim Irsay $118,500",
      player: " ",
      secondplayer: " "

    },
        {
      team: 'Jacksonville Jaguars',
      amount: '111608',
      image: 'jaguars.png',
      owner: "Shahid Khan $15,200",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Kansas City Chiefs',
      amount: '206250',
      image: 'kansas.png',
      owner: "Clark Hunt $130,700",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Miami Dolphins',
      amount: '114997',
      image: 'dolphins.png',
      owner: "Stephen Ross $37,800",
      player: " ",
      secondplayer: " "

    },
        {
      team: 'Minnesota Vikings',
      amount: '264800',
      image: 'vikings.png',
      owner: "Zygi Wilf $36,900",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'New England Patriots',
      amount: '294050',
      image: 'patriots.png',
      owner: "Robert Kraft $1,267,400",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'New Orleans Saints',
      amount: '397705',
      image: 'saints.png',
      owner: "Tom Benson $264,348",
      player: " ",
      secondplayer: " "


    },
    {
      team: 'New York Giants',
      amount: '79817',
      image: 'giants.svg',
      owner: "John Mara $10,000",
      player: "Victor Cruz - $2,500 (Cory Brooker (D))",
      secondplayer: "Justin Tuck - $10,000 (Cory Brooker (D))"

    },
    {
      team: 'New York Jets',
      amount: '77661',
      image: 'jets.png',
      owner: "Robert Johnson $25,000",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Oakland Raiders',
      amount: '17975',
      image: 'raiders.svg',
      owner: "Al Davis $5,000",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Philadelphia Eagles',
      amount: '229490',
      image: 'eagles.svg',
      owner: "Jeff Lurie $100,000",
      player: "Jason Phillips - $5,000 (Roger Williams (R))",
      secondplayer: "Connor Barwin - $1,000 (Bonnie Coleman (D))"

    },
    {
      team: 'Pittsburgh Steelers',
      amount: '294520',
      image: 'steelers.png',
      owner: "Arthur Rooney $92,130",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'San Diego Chargers',
      amount: '255900',
      image: 'chargers.svg',
      owner: "Alex Spanos $6,034,633",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'San Francisco 49ers',
      amount: '83955',
      image: 'sanfran.png',
      owner: "John York $55,000",
      player: "Vernon Davis - $12,700 (Barack Obama (D), Rohit Khanna (D), Mike Honda (D))",
      secondplayer: " "

    },
    {
      team: 'Seatlle Seahawks',
      amount: '28751',
      image: 'seahawks.png',
      owner: "Paul Allen $14,500",
      player: "Russell Okung - $500 (Barack Obama (D))",
      secondplayer: " "

    },
    {
      team: 'St. Louis Rams',
      amount: '93300',
      image: 'rams.png',
      owner: "Stan Kroenke  $291,001",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Tampa Bay Buccaneers',
      amount: '176699',
      image: 'tampa.png',
      owner: "Malcolm Glazer $1,000",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Tennessee Titans',
      amount: '32100',
      image: 'titans.png',
      owner: "Bud Adams $19,737",
      player: " ",
      secondplayer: " "

    },
    {
      team: 'Washington Redskins',
      amount: '253809',
      image: 'redskins.svg',
      owner: "Daniel Snyder $119,263",
      player: " ",
      secondplayer: " "

    }

  ];

  var formatHelpers = {
    addCommas: function(value){
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    toUpperCase: function(team){
      return team.toUpperCase();
    },

    boldName: function(test){
      return test.bold();
    }

  }


  // Step 1: in the JavaScript, load the html from the template we made in index.html
  var templateHtml = $('#sns-template').html();
  // console.log(templateHtml)
  
  // Step 2: Take our templateHtml and turn it into a template factory
  var templateFactory = _.template(templateHtml);

  // Step 3: Loop through our data and bake out all of our elements
  sns.forEach(function(snsData){
    _.extend(snsData, formatHelpers); 
    //_.extend () merges two keys together 
    // extends through the loop
    
    var all_sns_data = templateFactory(snsData);
    console.log(snsData)
    console.log('-----');
    $('#container').append(all_sns_data);
  });

//accordion

//var collapsible = $( ".selector" ).accordion( "option", "collapsible" );

//$( ".selector" ).accordion({
  //collapsible: true
//});










}).call(this);