    const alertFunction = () => {
        let time = setTimeout(() => {
            const customAlert = document.getElementById('customAlert');
            customAlert.style.visibility = 'hidden';
        }, 3000)

    }

    let fetching = () => {

        const input = document.getElementById('pokemon').value.trim().toLowerCase();
        const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${input}`

        if (input) {
            fetch(fetchUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Bad network request');
                    } else {
                        return response.json();
                    }
                })
                .then((data) => {
                    console.log(data.sprites.front_default);
                    console.log(data);
                    document.getElementById('pokemon').value = ''
                    document.getElementById('showInfo').src = data.sprites.other["official-artwork"]["front_default"];
                    showInfo.style.display = 'block';

                    showInfo.setAttribute('alt', `Picture of the cute ${data.name}`);

                    data.types[0].type.name.charAt(0).toLowerCase() === 'a' || data.types[0].type.name.charAt(0).toLowerCase() === 'e' || data.types[0].type.name.charAt(0).toLowerCase() === 'i' || data.types[0].type.name.charAt(0).toLowerCase() === 'o' || data.types[0].type.name.charAt(0).toLowerCase() === 'u'
                        ? figcaption.innerHTML = `<em>The cute ${data.name} is an ${data.types[0].type.name} type of Pokémon. </em> `
                        : figcaption.innerHTML = `<em>The cute ${data.name} is a ${data.types[0].type.name} type of Pokémon. </em> `

                    setTimeout(() => {
                        listOfPokemons.style.display = 'block';
                    }, 1000);
                })
                .catch((err) => {
                    console.log(err);
                })

        } else {
            const customAlert = document.getElementById('customAlert');
            customAlert.style.visibility = 'visible';
            alertFunction();
        }
    }

    window.onload = () => {
        let colorArray = ['#282828', ' #111812', '#191815', ' #130E09', '#051118']
        let randomColor = colorArray[Math.floor(Math.random() * 5)];
        document.body.style.backgroundColor = randomColor
    }
