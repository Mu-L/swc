var aString, anAny, c, d, e, i, M, Color, Color1;
for(aString in {
});
for(anAny in {
});
for(var x in {
});
for(var x in []);
for(var x in [
    1,
    2,
    3,
    4,
    5
]);
function fn() {
}
for(var x in fn());
for(var x in /[a-z]/);
for(var x in new Date());
for(var x in c || d);
for(var x in e ? c : d);
for(var x in c);
for(var x in d);
for(var x in d[x]);
for(var x in c[d]);
for(var x in (x)=>x
);
for(var x in function(x, y) {
    return x + y;
});
for(var x in i[42]);
for(var x in (M || (M = {
})).X = class {
}, M);
for(var x in M.X);
for(var x in (Color1 = Color || (Color = {
}))[Color1.Red = 0] = "Red", Color1[Color1.Blue = 1] = "Blue", Color);
for(var x in Color.Blue);