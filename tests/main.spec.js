describe('Main', function(){

    describe('Method A', function(){

        context('Case I', function(){

            it.skip('should happen blabla', function(){

                throw new Error('Just an error');

            });
        });

        context.only('Case II', function(){

            it('should happen blabla', function(){
                throw new Error('Just an error');
            });

            it('should happen mimimi', function(){

            });
        });

    });


    describe('Method B', function(){

    });
});
