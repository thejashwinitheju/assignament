let empolyees=[{"id":1,"first_name":"Cathrin","last_name":"Gravett","email":"cgravett0@360.cn","gender":"Female"},
{"id":2,"first_name":"Hercule","last_name":"Woolfall","email":"hwoolfall1@surveymonkey.com","gender":"Bigender"},
{"id":3,"first_name":"Sher","last_name":"Weldrake","email":"sweldrake2@state.tx.us","gender":"Agender"},
{"id":4,"first_name":"Harriet","last_name":"Coleman","email":"hcoleman3@com.com","gender":"Female"},
{"id":5,"first_name":"Kiley","last_name":"Donnett","email":"kdonnett4@apple.com","gender":"Female"},
{"id":6,"first_name":"Dom","last_name":"Renak","email":"drenak5@taobao.com","gender":"Male"},
{"id":7,"first_name":"Chalmers","last_name":"Guiel","email":"cguiel6@ocn.ne.jp","gender":"Male"},
{"id":8,"first_name":"Shaylyn","last_name":"Marlor","email":"smarlor7@dell.com","gender":"Female"},
{"id":9,"first_name":"Lillian","last_name":"Eliot","email":"leliot8@bloglovin.com","gender":"Female"},
{"id":10,"first_name":"Evelina","last_name":"Moniker","email":"emoniker9@liveinternet.ru","gender":"Female"},
{"id":11,"first_name":"Stefania","last_name":"Brydone","email":"sbrydonea@fda.gov","gender":"Female"},
{"id":12,"first_name":"Marc","last_name":"Dudgeon","email":"mdudgeonb@statcounter.com","gender":"Male"},
{"id":13,"first_name":"Tristam","last_name":"Willerson","email":"twillersonc@jalbum.net","gender":"Male"},
{"id":14,"first_name":"Julietta","last_name":"Hunter","email":"jhunterd@shop-pro.jp","gender":"Non-binary"},
{"id":15,"first_name":"Gretel","last_name":"Wilbore","email":"gwilboree@amazon.de","gender":"Female"},
{"id":16,"first_name":"Barbi","last_name":"Serginson","email":"bserginsonf@gmpg.org","gender":"Female"},
{"id":17,"first_name":"Moses","last_name":"Coonan","email":"mcoonang@jimdo.com","gender":"Male"},
{"id":18,"first_name":"Trudey","last_name":"Rother","email":"trotherh@time.com","gender":"Polygender"},
{"id":19,"first_name":"Reggy","last_name":"Boater","email":"rboateri@free.fr","gender":"Male"},
{"id":20,"first_name":"Gare","last_name":"Dumphrey","email":"gdumphreyj@salon.com","gender":"Male"},
{"id":21,"first_name":"Ceciley","last_name":"Tibbles","email":"ctibblesk@devhub.com","gender":"Female"},
{"id":22,"first_name":"Alley","last_name":"Arnli","email":"aarnlil@fastcompany.com","gender":"Male"},
{"id":23,"first_name":"Nance","last_name":"Pynner","email":"npynnerm@sohu.com","gender":"Female"},
{"id":24,"first_name":"Gracie","last_name":"Gadaud","email":"ggadaudn@businesswire.com","gender":"Female"},
{"id":25,"first_name":"Pryce","last_name":"Youngman","email":"pyoungmano@nydailynews.com","gender":"Male"},
{"id":26,"first_name":"Dani","last_name":"Andrioni","email":"dandrionip@nifty.com","gender":"Genderfluid"},
{"id":27,"first_name":"Whittaker","last_name":"Polgreen","email":"wpolgreenq@a8.net","gender":"Male"},
{"id":28,"first_name":"Albert","last_name":"Lanphere","email":"alanpherer@ycombinator.com","gender":"Male"},
{"id":29,"first_name":"Jacquelyn","last_name":"Bernakiewicz","email":"jbernakiewiczs@nationalgeographic.com","gender":"Female"},
{"id":30,"first_name":"Aluino","last_name":"Felgate","email":"afelgatet@hexun.com","gender":"Male"},
{"id":31,"first_name":"Noah","last_name":"Niese","email":"nnieseu@networkadvertising.org","gender":"Male"},
{"id":32,"first_name":"Jayme","last_name":"Cicculi","email":"jcicculiv@spiegel.de","gender":"Female"},
{"id":33,"first_name":"Binky","last_name":"Crowest","email":"bcrowestw@meetup.com","gender":"Male"},
{"id":34,"first_name":"Franky","last_name":"McLinden","email":"fmclindenx@bing.com","gender":"Male"},
{"id":35,"first_name":"Regine","last_name":"MacGilpatrick","email":"rmacgilpatricky@weibo.com","gender":"Female"},
{"id":36,"first_name":"Anni","last_name":"Dollard","email":"adollardz@com.com","gender":"Genderqueer"},
{"id":37,"first_name":"Mario","last_name":"Klais","email":"mklais10@google.es","gender":"Male"},
{"id":38,"first_name":"Tiffy","last_name":"Menhci","email":"tmenhci11@sakura.ne.jp","gender":"Female"},
{"id":39,"first_name":"Daren","last_name":"Shirlaw","email":"dshirlaw12@stumbleupon.com","gender":"Genderqueer"},
{"id":40,"first_name":"Yetta","last_name":"Matysiak","email":"ymatysiak13@addtoany.com","gender":"Female"},
{"id":41,"first_name":"Melinda","last_name":"Willmot","email":"mwillmot14@cnet.com","gender":"Female"},
{"id":42,"first_name":"Pete","last_name":"Markie","email":"pmarkie15@scientificamerican.com","gender":"Male"},
{"id":43,"first_name":"Jesse","last_name":"Prettyjohn","email":"jprettyjohn16@addtoany.com","gender":"Male"},
{"id":44,"first_name":"Mayor","last_name":"Cluet","email":"mcluet17@wordpress.org","gender":"Male"},
{"id":45,"first_name":"Yoshi","last_name":"Gallegos","email":"ygallegos18@scientificamerican.com","gender":"Female"},
{"id":46,"first_name":"Maurene","last_name":"Keane","email":"mkeane19@mashable.com","gender":"Female"},
{"id":47,"first_name":"Archy","last_name":"Schimpke","email":"aschimpke1a@cargocollective.com","gender":"Male"},
{"id":48,"first_name":"Arden","last_name":"Slimming","email":"aslimming1b@sina.com.cn","gender":"Female"},
{"id":49,"first_name":"Gustaf","last_name":"Blenkensop","email":"gblenkensop1c@pen.io","gender":"Male"},
{"id":50,"first_name":"Filmer","last_name":"Mitchley","email":"fmitchley1d@chicagotribune.com","gender":"Male"}]



function userName(){
    let row= ""
    for(emp of empolyees){
        row= row+`<tr>
        <td>${emp.id}</td>
        <td>${emp.first_name}</td>
        <td>${emp.last_name}</td>
        <td>${emp.email}</td>
        <td>${emp.gender}</td>
        
        </tr>`
    }
    document.getElementById("rajini").innerHTML= row
}


