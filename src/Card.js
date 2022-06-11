
const Card = (card)=>{
return  `<li>
<img src="${card.avatar_url}" style ="height :70px"/>

<a href ="${card.html_url}">
<h3>${card.name}</h3>
</a>
<p>Public Repos :${card.public_repos}</p>
<p>${card.bio ? `Bio:${card.bio}` :''}</p>


</li>`;
   
   
}

export default Card