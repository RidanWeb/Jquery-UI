
  $( function() {
    $( "#resizable" ).resizable({
      animate: true
    });// Animation Resizeable

     $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();  //--- sortable-----

	$( "#accordion" ).accordion({
	      collapsible: true
	    });// Accordion

	 var icons = {
	      header: "ui-icon-circle-arrow-e",
	      activeHeader: "ui-icon-circle-arrow-s"
	    };
	    $( "#accordion" ).accordion({
	      icons: icons
	    });
	    $( "#toggle" ).button().on( "click", function() {
	      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
	        $( "#accordion" ).accordion( "option", "icons", null );
	      } else {
	        $( "#accordion" ).accordion( "option", "icons", icons );
	      }
	    });// Accordion custom icon

		var availableTags = [
	      "ActionScript",
	      "AppleScript",
	      "Asp",
	      "BASIC",
	      "C",
	      "C++",
	      "Clojure",
	      "COBOL",
	      "ColdFusion",
	      "Erlang",
	      "Fortran",
	      "Groovy",
	      "Haskell",
	      "Java",
	      "JavaScript",
	      "Lisp",
	      "Perl",
	      "PHP",
	      "Python",
	      "Ruby",
	      "Scala",
	      "Scheme"
	    ];
	    $( "#tags" ).autocomplete({
	      source: availableTags
	    });// AutoComplete  

		// Datepicker
		 $( "#datepicker" ).datepicker();
	    $( "#anim" ).on( "change", function() {
	      $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
	    });

		// Dialog
 		 $( "#dialog" ).dialog({
		      autoOpen: false,
		      show: {
		        effect: "blind",
		        duration: 1000
		      },
		      hide: {
		        effect: "explode",
		        duration: 1000
		      }
		    });
		 
		    $( "#opener" ).on( "click", function() {
		      $( "#dialog" ).dialog( "open" );
		    });
			// Dialog

			// Progressbar
		 $( "#progressbar" ).progressbar({
		      value: false
		    });
		    $( "button" ).on( "click", function( event ) {
		      var target = $( event.target ),
		        progressbar = $( "#progressbar" ),
		        progressbarValue = progressbar.find( ".ui-progressbar-value" );
		 
		      if ( target.is( "#numButton" ) ) {
		        progressbar.progressbar( "option", {
		          value: Math.floor( Math.random() * 100 )
		        });
		      } else if ( target.is( "#colorButton" ) ) {
		        progressbarValue.css({
		          "background": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
		        });
		      } else if ( target.is( "#falseButton" ) ) {
		        progressbar.progressbar( "option", "value", false );
		      }
		    });
			// Progressbar

			// tabs
			$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    		$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    		// tabs
    		// tooltip
			 $( document ).tooltip({
			      items: "img, [data-geo], [title]",
			      content: function() {
			        var element = $( this );
			        if ( element.is( "[data-geo]" ) ) {
			          var text = element.text();
			          return "<img class='map' alt='" + text +
			            "' src='http://maps.google.com/maps/api/staticmap?" +
			            "zoom=11&size=350x350&maptype=terrain&sensor=false&center=" +
			            text + "'>";
			        }
			        if ( element.is( "[title]" ) ) {
			          return element.attr( "title" );
			        }
			        if ( element.is( "img" ) ) {
			          return element.attr( "alt" );
			        }
			      }
			    });

		// checkboxradio
 		$( "input" ).checkboxradio();

  });
$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
    effect
			 	 $( "#button1" ).on( "click", function() {
			      $( "#effect1" ).toggleClass( "newClass1", 1000 );
			    });
  } );