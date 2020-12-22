if (import.meta.main) {
    console.log('is meta main');
    console.log('deno args 0', Deno.args[0]);
    console.log('deno args 1', Deno.args[1]);
} else {
    console.log('not meta main')
}