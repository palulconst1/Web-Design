var a = Array("Un om  face in medie 2 500 000 de pasi pe an","Miscarea poate preveni efectul yo-yo al dietelor","Abdomenele sunt exercitii create pentru sanatatea coloanei vertebrale");
     var c = 0;
     let date = new Date();
     let h = date.getSeconds();
     c=Number(h)%3;
     var b = document.getElementById('afRn');
     b.innerHTML = a[c];

     function AutoRefresh( t ) {
          setTimeout("location.reload(true);", t);
       }

