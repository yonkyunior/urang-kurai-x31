                        $(document).ready(function () {
                                $("#iframe iframe").hide();
                                $("#iframe iframe").fadeIn('1800');
                                $(".download").click(function () {
                                        $("#iframe iframe").hide("22");
                                        $("body").css("background-color", "#252525");
      $("#download").delay('200').fadeIn('200');
                                });
                                $('#loading-overlay').delay(1500).fadeOut('20');
                                $('a.download').fadeIn('20');
                        });

                        
                        Cufon.replace('a#close,header', {
                        textShadow: ' rgba(51, 51, 51, 0.9) -1px -1px'
       });