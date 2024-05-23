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
        description: 'This is the first chair.'
    },
    {
        title: 'Dila',
        image: 'https://via.placeholder.com/100?text=Chair+2',
        description: 'This is the second chair.'
    },
    {
        title: 'Giray',
        image: 'https://via.placeholder.com/100?text=Chair+3',
        description: 'This is the third chair.'
    },
    {
        title: 'Öykü',
        image: 'https://via.placeholder.com/100?text=Chair+4',
        description: 'This is the fourth chair.'
    },
    {
        title: 'Barış',
        image: 'https://via.placeholder.com/100?text=Chair+5',
        description: 'This is the fifth chair.'
    },
    {
        title: 'Kerem',
        image: 'https://via.placeholder.com/100?text=Chair+6',
        description: 'This is the sixth chair.'
    },
    {
        title: 'Chair 7',
        image: 'https://via.placeholder.com/100?text=Chair+7',
        description: 'This is the seventh chair.'
    },
    {
        title: 'Chair 8',
        image: 'https://via.placeholder.com/100?text=Chair+8',
        description: 'This is the eighth chair.'
    },
    {
        title: 'Poyraz',
        image: 'https://via.placeholder.com/100?text=Chair+9',
        description: 'This is the ninth chair.'
    },
    {
        title: 'Hasan',
        image: 'https://via.placeholder.com/100?text=Chair+10',
        description: 'Me'
    },
    {
        title: 'Umut',
        image: 'https://via.placeholder.com/100?text=Chair+11',
        description: 'This is the eleventh chair.'
    },
    {
        title: 'Bera',
        image: 'https://via.placeholder.com/100?text=Chair+12',
        description: 'This is the twelfth chair.'
    },
    {
        title: 'Ata',
        image: 'https://via.placeholder.com/100?text=Chair+13',
        description: 'This is the thirteenth chair.'
    },
    {
        title: 'Dünya',
        image: 'https://via.placeholder.com/100?text=Chair+14',
        description: 'This is the fourteenth chair.'
    },
    {
        title: 'Chair 15',
        image: 'https://via.placeholder.com/100?text=Chair+15',
        description: 'This is the fifteenth chair.'
    },
    {
        title: 'Chair 16',
        image: 'https://via.placeholder.com/100?text=Chair+16',
        description: 'This is the sixteenth chair.'
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
