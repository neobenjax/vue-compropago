<template>
	
	<div class="temporada">
	
		<div class="detalle-temporada">
		  <img :src="temporada.image_large">
		  <p class="titulo-temporada">{{temporada.title}}</p>
		  <div class="ficha">
		    <p><strong>Episodios: {{temporada.episodes_count}}</strong></p>
		  </div>
		</div>

		<div class="episodios" v-if="temporada.episodes && temporada.episodes.length">
		  
		  <div class="episodio" v-for="episodio of temporada.episodes">
		    
		    <div class="imagen"><img :src="episodio.image_still"></div>
		    
		    <div class="detalle">
		      <p><strong>{{episodio.episode_number}}. {{episodio.description}}</strong></p>
		      
		      <p><strong>Año:</strong> {{episodio.year}} | {{episodio.rating_code}}</p>
		      
		      <p><strong>Duración:</strong> {{episodio.date}}</p>
		      
		      <div>
		        
		        <span><strong>Calificación:</strong> </span>
		        <ul class="rating">
		          <li v-for="n in parseInt(episodio.votes_average)">
		            <i class="material-icons">star</i>
		          </li>
		        </ul>

		      </div>

		    </div>

		    <div class="visto">
		      <button :class="{ visto: episodio.visto }">Visto <i class="material-icons">done</i></button>
		    </div>

		  </div>

		</div>

		
	</div>


</template>


<script>
export default {
  name: 'temporada',
}
</script>