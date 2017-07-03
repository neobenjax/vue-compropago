<template>
	<div class="contenido-serie">

		<div class="portada">
			<div class="imagen-portada">
				<img src="./../assets/img/portada.jpg" alt="">
			</div>
			<div class="sinopsis">
				<h1>Breaking Bad</h1>
				<p>
					Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo de la Química cuya existencia está marcada por una enorme frustración tanto a nivel personal como laboral. 
				</p>

				<p>
					Hundido por una monótona e insulsa relación con su mujer e incapaz de poner a prueba su brillantez trabajando como profesor de instituto, Walter da un giro radical a su forma de vida cuando descubre que tiene un cáncer terminal. Desde entonces, a su manera, decide reafirmar el amor por su familia y por la química montando un laboratorio de metanfetaminas junto a Jesse Pinkman (Aaron Paul), un antiguo y problemático alumno, para dejar a su esposa y a su hijo en buen lugar cuando él falte.
				</p>
				<p>
					La serie explora los límites del ser humano y expone a Walter a situaciones en las que nunca antes podría haberse imaginado estar. Desde muy pronto, la serie muestra a este profesor de química disfrutando este tipo de situaciones, lo que choca directamente con su anterior estilo de vida. No en vano, la traducción más acertada del título original de la serie es: "Portandose mal".
				</p>
				<button class="ver-temporadas" @click="getTemporadas">Ver Temporadas</button>
			</div>
		</div>

		<div class="temporadas" id="temporadas" v-if="$store.state.temporadas && $store.state.temporadas.length">

			<div class="temporada" v-for="temporada of $store.state.temporadas">

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
							<button 
								:class="{ visto: episodio.visto }"
								@click="setVisto(episodio.id)">
								Visto <i class="material-icons">done</i>
							</button>
						</div>

					</div>

				</div>


			</div>

		</div>

	</div>

</template>


<script>

import { mapActions } from 'vuex'

export default {
  name: 'serie',
  methods: mapActions([
    'getTemporadas',
    'setVisto'
  ])

}
</script>