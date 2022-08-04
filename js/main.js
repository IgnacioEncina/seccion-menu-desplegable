'use strict'

// Evento LOAD  -   permite cargar el js despues de cargar el html
window.addEventListener('load', () => {

    console.log('js trabajando');

    const menuFeat = document.querySelectorAll('.li-desplegable');
    const menuFeatUl = document.querySelectorAll('.sub-menu-ul');
    const subMenuFeat = document.querySelectorAll('.sub-menu-feat');
    const subMenuComp = document.querySelectorAll('.sub-menu-comp');
    const iconDown = document.querySelectorAll('.icon-down');
    const iconUp = document.querySelectorAll('.icon-up');

    // Menu
    var widthWindow = screen.width;
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const cerrarX = document.querySelector('.cerrar');
    collapsedMenu(widthWindow);
    console.log(widthWindow);
    console.log(nav);


        console.log(subMenuFeat);
        for (let i = 0; i < menuFeatUl.length; i++) {
            const element = menuFeatUl[i];
            element.style.display = 'none';
            element.style.height = '0' ;
            element.style.fontSize = '0' ;
        }
        for (let i = 0; i < subMenuFeat.length; i++) {
            const element = subMenuFeat[i];
            element.style.display = 'none';
        }
        for (let i = 0; i < subMenuComp.length; i++) {
            const element = subMenuComp[i];
            element.style.display = 'none';
        }

        // iconos down y up
        for (let i = 0; i < iconDown.length; i++) {
            const element = iconDown[i];
            element.style.display = 'block';
        }
        for (let i = 0; i < iconUp.length; i++) {
            const element = iconUp[i];
            element.style.display = 'none';
        }



    function mostrar( menu, iconDown, iconUp ){
        console.log(menu);
        var menuVis = menu.style.display;
        console.log(menuVis);
        if (menuVis == 'none') {
            menu.style.display = 'flex';
            menu.style.height = '200px' ;
            menu.style.fontSize = '12px' ;
            iconDown.style.display = 'none';
            iconUp.style.display = 'block';
        }else {
            menu.style.display = 'none';
            menu.style.height = '0' ;
            menu.style.fontSize = '0' ;
            iconDown.style.display = 'block';
            iconUp.style.display = 'none';
        }
        return true;
    }


    // Click
        menuFeat[0].addEventListener('click', function() {
            console.log('click');
            mostrar( menuFeatUl[0], iconDown[0], iconUp[0]  );
            mostrarSubMenuFeat();
        });
        
        menuFeat[1].addEventListener('click', function() {
            console.log('click');
            mostrar( menuFeatUl[1], iconDown[1], iconUp[1] );
            mostrarSubMenuComp();
        });

        burger.addEventListener('click', function(){
            console.log('burger cliked');
            const navNew = document.querySelector('nav');
            const header = document.querySelector('header');
            const div = document.createElement('div.navi');
            console.log(navNew);
            header.before(navNew);
            navNew.style.display = 'none';
            mostrarMenu( navNew );
        })
        
        cerrarX.addEventListener('click', function(){
            console.log('burger cliked');
            const navNew = document.querySelector('nav');
            const headerImg = document.querySelector('header img');
            console.log(headerImg);
            headerImg.after(navNew);
            cerrarMenu( navNew );
        })
        
    
        function mostrarSubMenuFeat(){
            for (let i = 0; i < subMenuFeat.length; i++) {
                const element = subMenuFeat[i].style.display;
                if (element == 'none'){
                    subMenuFeat[i].style.display = 'flex';
                }else {
                    subMenuFeat[i].style.display = 'none';
                }
            }
        }
        
        function mostrarSubMenuComp(){
            for (let i = 0; i < subMenuComp.length; i++) {
                const element = subMenuComp[i].style.display;
                if (element == 'none'){
                    subMenuComp[i].style.display = 'flex';
                }else {
                    subMenuComp[i].style.display = 'none';
                }
            }
        }

        function collapsedMenu( width ) {
            if (width > 786) {
                nav.style.visibility = 'visible';
                // const navNew = document.querySelector('nav');
                const headerImg = document.querySelector('header img');
                // const div = document.createElement('div.navi');
                console.log(headerImg);
                headerImg.after(nav);
            } else {
                nav.style.visibility = 'hidden'
            }
        }

        function mostrarMenu( navNew ) {
            
            if (navNew.style.display == 'none') {
                navNew.style.visibility = 'visible';
                navNew.style.display = 'flex';
            } else {
                navNew.style.visibility = 'hidden';
                navNew.style.display = 'none';
            }
        }
        
        function cerrarMenu( navNew ) {
            
            if (navNew.style.display == 'none') {
                navNew.style.visibility = 'visible';
                navNew.style.display = 'flex';
            } else {
                navNew.style.visibility = 'hidden'
                navNew.style.display = 'none';
            }
        }

        window.addEventListener('resize', function() {
            widthWindow = screen.width;
            collapsedMenu(widthWindow);
            console.log(widthWindow);
        })
    




})