Array.prototype.forEach.call(document.images, function (i) { console.log('image', i.src); });

// class Foo {
//     constructor() {
//         console.log('hey')
//         this.x = 1;
//     }

//     map(y) {
//         return this.x + y;
//     }
// }



for (const img of document.querySelectorAll('img')) {
    console.log('imiage', img.src)
}