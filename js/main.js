jQuery(function($) {
    // "use strict";

    var game = window.game || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    
    game.Newgame=function(){
        $(".btn-new").click(function() {

            var tempt1=0;
            var tempt2=0;
            var sc1=sc2=0;
            $("#current-1").html(tempt2);
            $("#current-0").html(tempt1);
            $("#score-1").html(sc2);
            $("#score-0").html(sc1);
            $("#name-0").html("player 1");
            $("#name-2").html("player 2");
            $("#dice-1").attr("src","css/image/dice-1.png")
            $("#dice-2").attr("src","css/image/dice-1.png");
            
        });
    }
    game.Roll=function(){
        var random1;
        var random2;
        var sc1=0;
        var sc2=0;
        var check=1; 
        var value;
        var tempt2=0;
        var tempt1=0;
        var flag;
        
        $(".btn-roll").click(function() {
            
            random1=Math.floor(Math.random()*6+1);
            random2=Math.floor(Math.random()*6+1);
            $("#dice-1").attr("src","css/image/dice-"+random1+".png")
            $("#dice-2").attr("src","css/image/dice-"+random2+".png");
            // console.log(random1);
            // console.log(random2);
            if(check==0){
                flag=0;

                tempt2+=random2+random1;
                if(random2==1 || random1==1)
                {

                    tempt2=0;
                    flag=1;
                    $(".player-0-panel").addClass('active');
                    $(".player-1-panel").removeClass('active'); 
                }
                
                
                // console.log(random1);
                // console.log(random2);
                // console.log("2:"+tempt2);
                // console.log("sc2:"+sc2);
                $("#current-1").html(tempt2);
                
                
            }
            if(check==1){

                flag=1;
                tempt1+=random2+random1;
                
                
                if(random2==1 || random1==1)
                {
                    tempt1=0;
                    flag=0;
                    $(".player-1-panel").addClass('active');
                    $(".player-0-panel").removeClass('active');
                }
                
                
                // $(".hold").click(function() {
                //     alert("hi");
                //     tempt1==0;
                // });
                // console.log(random1);
                // console.log(random2);
                // console.log("1:"+tempt1);
                // console.log("sc1:"+sc1);
                $("#current-0").html(tempt1);
            }
            if(flag==0 && check==1)
            {
                check=0;
                // console.log(check);
                
            }
            // console.log("c1:"+check);
            if(flag==1 && check==0)
            {
                check=1;
                // console.log(check);
            }
            
        });
    
        $(".btn-hold").click(function() {
            
            if(check==0 && flag==0)
            {
                $(".player-0-panel").addClass('active');
                $(".player-1-panel").removeClass('active'); 
                sc2+=tempt2;
                if(sc2>=value && sc2 >0)
                {
                    $("#name-1").html("Winner");
                    bool=0;
                    console.log(bool);
                    $(".player-0-panel").removeClass('active');
                    $(".player-1-panel").removeClass('active');
                }
                check=1;
                tempt2=0;
                $("#score-1").html(sc2);
                $("#current-1").html(tempt1);

            }
            if(check==1 && flag==1){
                $(".player-1-panel").addClass('active');
                $(".player-0-panel").removeClass('active');
                sc1+=tempt1;
                if(sc1>=value && sc1>0)
                {

                 $("#name-0").html("Winner");
                 bool=0;
                 console.log(bool);
                 $(".player-0-panel").removeClass('active');
                 $(".player-1-panel").removeClass('active');
             }
             check=0;
             tempt1=0;
             $("#score-0").html(sc1);
             $("#current-0").html(tempt2);

         }
     
     });

        // var value=document.getElementsByClassName("final-score")[0].value;

        $(".final-score").change(function() {
         value=document.getElementsByClassName("final-score")[0].value;
         console.log(value);
     });

    }



    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        game.Roll();
        game.Newgame();
        

    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});