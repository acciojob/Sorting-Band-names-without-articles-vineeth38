
const bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'Pink Floyd', 'The Rolling Stones', 'Nirvana', 'A-ha', 'The Who'];

const sortedBandNames = bandNames.sort(function(a, b) {
// Remove articles from both band names
const regex = /^(a |an |the )/i;
const bandA = a.replace(regex, '').trim();
const bandB = b.replace(regex, '').trim();

// Compare band names
if (bandA < bandB) {
return -1;
} else if (bandA > bandB) {
return 1;
} else {
return 0;
}
});

// Get the unordered list element by ID
const bandList = document.getElementById('band');

// Add each sorted band name to the list as a list item
sortedBandNames.forEach(function(band) {
const li = document.createElement('li');
li.textContent = band;
bandList.appendChild(li);
});





