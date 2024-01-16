/**----------------------
     * product scroller js ---
     --------------------------*/
    // tab Carousel js
    // initialize product scroller
    advanceArrows("citrusAdSEBPO_scroller1_tab1");
    function advanceArrows(idx) {
        var splideElement = "#" + idx;
        var splideDefaultOptions = {
            arrows: true,
            type: "slide",
            start: 0,
            pagination: false,
            rewindSpeed: 500,
            speed: 500,
            pauseOnHover: true,
            perPage: 6,
            perMove: 1,
            gap:20,
            omitEnd: true,
            breakpoints: {
                375: {
                    focus: 0,
                    perPage: 2,
                },
                576: {
                    focus: 0,
                    perPage: 2,
                },
                991: {
                    focus: 0,
                    perPage: 3,
                },
                992: {
                    focus: 0,
                    perPage: 4,
                },
                1024: {
                    focus: 0,
                    perPage: 4,
                },
                1200: {
                    focus: 0,
                    perPage: 5,
                },
                1440: {
                    focus: 0,
                    perPage: 6,
                },
            },
            
        };

        if(document.querySelector(splideElement)){
            new Splide(splideElement, splideDefaultOptions).mount();
        }
    }

    /* ************************************************************************************** */
   //for tabType sweater & loader added
    document.addEventListener("DOMContentLoaded", function () {
        filterProducts("citrusAdSEBPO_scroller1_tab_type1");
    });
    //for tabType sweater & loader added e 
    
    
    //for tab sweater & loader added
    document.addEventListener("DOMContentLoaded", function () {
        filterProducts("citrusAdSEBPO_scroller1_tab1");
    });


    // for dog filter function
    function filterProducts(c) {
        var x, i;
        x = document.getElementsByClassName("citrusAdSEBPO__Product");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "citrusTabShow");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
        }
        advanceArrows(c);
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


    // Add active class to the current button (highlight it)
    document.addEventListener("DOMContentLoaded", function () {
    // for dog active class filter
        var dogBtnContainer = document.getElementById("citrusAdSEBPOTabId");
        var dogBtns = dogBtnContainer.getElementsByClassName("citrusAdSEBPO__tab_item");
        addActiveClass(dogBtns, "citrusAdSEBPO__active_tab"); 
    });

    function filterType(mainTabName) {
        //first hide all cats(2nd btn elements)
        var i, typeTwoBtn, tabtwolinks;
        typeTwoBtn = document.getElementsByClassName("typeTwoBtn");
        for (i = 0; i < typeTwoBtn.length; i++) {
            typeTwoBtn[i].style.display = "none";
        }

        // Show the specific tab content
        document.getElementById(mainTabName).style.display = "flex";

        // var dogTypeItemBtns = document.getElementsByClassName("dogItemBtn");
        // var catTypeItemBtns = document.getElementsByClassName("catItemBtn");

        // if (mainTabName === "typeBtnDog") {   
        //     dogTypeItemBtns.style.display = "flex";
        // } else {            
        //     catTypeItemBtns.style.display = "flex";           
        // }

      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpenTabTwo").click();


      function addActiveClass(element, activeClass) {
        for (var i = 0; i < element.length; i++) {
            element[i].addEventListener("click", function () {
                var current = document.getElementsByClassName(activeClass);
                current[0].className = current[0].className.replace(
                    " " + activeClass,
                    ""
                );
                this.className += " " + activeClass;
            });
        }
    }
    //for Dog best seller tab switcher

    // // Add active class to the current button tab-Type (highlight it)
    // document.addEventListener("DOMContentLoaded", function () {
    //     var tabTypeBtnContainer = document.getElementById("citrusAdSEBPOTabTypeId");
    //     var tabTypeBtns = tabTypeBtnContainer.getElementsByClassName("citrusAdSEBPO__tab_type_item");
    //     addActiveClass(tabTypeBtns, "citrusAdSEBPO__active_tab_type");
    // });

    document.addEventListener("DOMContentLoaded", function () {
        var tabTypeDogBtnContainer = document.getElementById("typeBtnDog");
        var tabTypeDogBtns = tabTypeDogBtnContainer.getElementsByClassName("citrusAdSEBPO__tab_type_item1");
        addActiveClass(tabTypeDogBtns, "citrusAdSEBPO__active_tab_type1");        
    });

    document.addEventListener("DOMContentLoaded", function () {
        var tabTypeCatBtnContainer = document.getElementById("typeBtnCat");
        var tabTypeCatBtns = tabTypeCatBtnContainer.getElementsByClassName("citrusAdSEBPO__tab_type_item");
        addActiveClass(tabTypeCatBtns, "citrusAdSEBPO__active_tab_type");
    });
    
