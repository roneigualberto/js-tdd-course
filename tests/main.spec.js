describe('Main', function () {

    // Roda Uma vez, antes do bloco
    before(function () {
        console.log('before');
    });

    // Roda Uma vez, depois do bloco
    after(function () {
        console.log('after');
    });

    // Roda todas as vezes, antes de cada bloco
    beforeEach(function () {
        console.log('beforeEach');
    });
    // Roda todas as vezes, depois de cada bloco
    afterEach(function(){
        console.log('afterEach');
    });

    it('test 1', function(){

    });

    it('test 1', function(){
        
    });





});
