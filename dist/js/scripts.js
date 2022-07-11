let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("button");n.innerText=t.name,n.classList.add("list-group-item","list-group-item-action","text-center","text-uppercase"),n.setAttribute("data-toggle","modal"),n.setAttribute("data-target","#pokemonModal"),e.appendChild(n),function(t,e){t.addEventListener("click",function(){!function(t){(function(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=[],e.types.forEach(function(e){t.types.push(e.type.name)})}).catch(function(t){console.error(t)})})(t).then(function(){!function(t){let e=$(".modal-title"),n=$(".modal-body");e.empty(),n.empty();let o=$('<h1 class="text-uppercase">'+t.name+"</h1>");e.append(o);let i=document.createElement("img");i.classList.add("modal-img"),i.src=t.imageUrl;let a=$("<p>Height: "+t.height+"</p>"),c=$("<p>Weight: "+t.weight+"</p>"),r=$('<p class="text-capitalize">Types: '+t.types.join(", ")+"</p>");n.append(i),n.append(a),n.append(c),n.append(r)}(t)})}(e)})}(n,t)}return{getAll:function(){return t},findPokemon:function(e){$(".pokemon-list").empty(),t.forEach(t=>{t.name.toLowerCase().includes(e.toLowerCase())&&n(t)})},addListItem:n,loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(e){e.results.forEach(function(e){!function(e){"object"!=typeof e||Array.isArray(e)||"name"===Object.keys(e)[0]&&"detailsUrl"===Object.keys(e)[1]&&t.push(e)}({name:e.name,detailsUrl:e.url})})}).catch(function(t){console.error(t)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});