        var i = -1;
        var backgroundImg = ["Athletic_Imgs/Track1.jpg", "Athletic_Imgs/Football1.jpg", "Athletic_Imgs/TG1.jpg", "Athletic_Imgs/TG2.jpg", "Athletic_Imgs/TG3.jpg", "Athletic_Imgs/TG4.jpg", "Athletic_Imgs/TG5.jpg", "Athletic_Imgs/TG6.jpg", "Athletic_Imgs/TG7.jpg", "Athletic_Imgs/TG8.jpg", "Athletic_Imgs/TG9.jpg", "Athletic_Imgs/TG10.jpg", "Athletic_Imgs/TG11.jpg", "Athletic_Imgs/TG12.jpg", "Athletic_Imgs/TG13.jpg", "Athletic_Imgs/TG14.jpg", "Athletic_Imgs/TG15.jpg", "Athletic_Imgs/TG16.jpg", "Athletic_Imgs/TG17.jpg", "Athletic_Imgs/TG18.jpg", "Athletic_Imgs/TG19.jpg", "Athletic_Imgs/TG20.jpg", "Athletic_Imgs/TG21.jpg", "Athletic_Imgs/TG22.jpg", "Athletic_Imgs/TG23.jpg", "Athletic_Imgs/TG24.jpg", "Athletic_Imgs/TG25.jpg", "Athletic_Imgs/TG26.jpg", "Athletic_Imgs/TG27.jpg"];
        window.onload = function() {
            // Array of Images
            setTimeout(changeImage, 4000);
        };

        function changeImage() {
            if (i < backgroundImg.length) {
                i += 1;
            }
            else {
                i = 0;
            }
            document.body.style.backgroundImage = "url('" + backgroundImg[i] + "')";
            setTimeout(changeImage, 4000);
        }
        // document.getElementById("middle").addEventListener("click", changeImage());
        