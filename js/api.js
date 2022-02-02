//POO

class Api {
    artista;
    cancion;

    constructor (artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    async consultarApi() { // en metodo el async va ahi a dif de lo anterior
        const URL = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        
        try {
            const response = await fetch(URL);
            const data = await response.json();
            return data;
            
        } catch (error) {
            throw error;         
        }
    }

    mostrarInformacion () {
        return `Cancion: ${this.cancion} de ${this.artista}`;

    }


}

export default Api;