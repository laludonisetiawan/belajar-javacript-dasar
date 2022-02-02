// untuk membuat function ini kita harus memasukannya ke dalam variable atau parameter.

//function dalam variable
let say = function (name) {
    document.writeln(`hello ${name} ini adalah anonymous function di dalam variable`);
};

say("doni");


//function dalam parameter
function giveMeName(callback) {
    callback("doni");
}
giveMeName(function (name) {
    document.writeln(`<p>hi ${name} ini adalah anonymous di dalam parameter.</p>`);
});
