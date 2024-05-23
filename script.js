// Select the classroom container
const classroomContainer = document.getElementById('classroom');

// Number of desks and chairs
const numberOfDesks = 8;
const chairsPerDesk = 2;

// Unique content for each chair
const chairContents = [
    {
        title: 'Erkin',
        image: 'https://via.placeholder.com/100?text=Chair+1',
        description: 'He is definitely a good person but sometimes can have some problems with people. His famous quote is: "Sanane <insert name>"'
    },
    {
        title: 'Dila',
        image: 'https://via.placeholder.com/100?text=Chair+2',
        description: 'I do not have an idea what to type here.'
    },
    {
        title: 'Giray',
        image: 'https://via.placeholder.com/100?text=Chair+3',
        description: 'He is a newcomer and sometimes can insert noise to the classroom'
    },
    {
        title: 'Öykü',
        image: 'https://via.placeholder.com/100?text=Chair+4',
        description: "She sometimes doesn't speak but communicates with other girls near her."
    },
    {
        title: 'Barış',
        image: 'https://via.placeholder.com/100?text=Chair+5',
        description: 'Barış sometimes makes noise and if he sits with the right peole he can make a decent amount of noise.'
    },
    {
        title: 'Kerem',
        image: 'https://via.placeholder.com/100?text=Chair+6',
        description: 'Kerem is Kerem.'
    },
    {
        title: 'İlke',
        image: 'https://via.placeholder.com/100?text=Chair+7',
        description: 'İlke is the messenger of this class. Anything that hapens she ill sread it around the whole school and sometimes overexaggerate it.'
    },
    {
        title: 'Doruk',
        image: 'https://via.placeholder.com/100?text=Chair+8',
        description: 'A lot of noise comes from this area.'
    },
    {
        title: 'Poyraz',
        image: 'https://via.placeholder.com/100?text=Chair+9',
        description: 'My lawyers have advised me to skip this joke.'
    },
    {
        title: 'Hasan',
        image: 'https://via.placeholder.com/100?text=Chair+10',
        description: 'A person that imo is ool but sometimes even I acknowledge that I am cringe.'
    },
    {
        title: 'Umut',
        image: 'https://via.placeholder.com/100?text=Chair+11',
        description: 'He is a good guy, sometimes abused by Bera'
    },
    {
        title: 'Bera',
        image: 'https://via.placeholder.com/100?text=Chair+12',
        description: "He doesn't make a lot of noise but he is a master at making the teachers angry"
    },
    {
        title: 'Ata',
        image: 'https://via.placeholder.com/100?text=Chair+13',
        description: 'Really quiet and friendly, a really good friend but if you make him angry he will get ANGRY.'
    },
    {
        title: 'Dünya',
        image: 'https://via.placeholder.com/100?text=Chair+14',
        description: "My lawyers have advised me to skip this joke because I have beef with her and I don't know what she can do to my cyber security career."
    },
    {
        title: 'Cevdet',
        image: 'https://via.placeholder.com/100?text=Chair+15',
        description: 'He is a good person when I first got into this class I absolutely despised him but hen I started to sit with him things changed.'
    },
    {
        title: 'Rüzgar',
        image: 'https://via.placeholder.com/100?text=Chair+16',
        description: '"I am Noise"'
    },
];

// Create desks and chairs
for (let i = 0; i < numberOfDesks; i++) {
    // Create a desk element
    const desk = document.createElement('div');
    desk.className = 'desk';

    // Create chairs for each desk
    for (let j = 0; j < chairsPerDesk; j++) {
        const chairIndex = i * chairsPerDesk + j;
        const chairContent = chairContents[chairIndex];

        const chair = document.createElement('div');
        chair.className = 'chair';

        // Create extra information element
        const info = document.createElement('div');
        info.className = 'info';

        // Create an h2 element
        const title = document.createElement('h2');
        title.textContent = chairContent.title;

        // Create an image element
        const img = document.createElement('img');
        img.src = chairContent.image;
        img.alt = chairContent.title;

        // Create a paragraph element
        const paragraph = document.createElement('p');
        paragraph.textContent = chairContent.description;

        // Append the h2, image, and paragraph to the info element
        info.appendChild(title);
        info.appendChild(img);
        info.appendChild(paragraph);

        // Append the info element to the chair
        chair.appendChild(info);

        // Append the chair to the desk
        desk.appendChild(chair);
    }

    // Add the desk to the classroom container
    classroomContainer.appendChild(desk);
}
