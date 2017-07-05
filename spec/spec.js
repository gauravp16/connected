var Connected = require(".././index.js");

describe('Given 10 elements', function(){
	describe('When I find if 1 and 2 are connected', function(){
		it('Should return false', function(){
			var connected = new Connected(10);
			expect(connected.find(1,2)).toBe(false);
		});

		describe('And when I connect 1 and 2', function(){
			var connected = new Connected(10);
			connected.connect(1,2);

			it('Should return true', function(){
				expect(connected.find(1,2)).toBe(true);
			});

			describe('And when I connect 2 and 3', function(){
				connected.connect(2,3);

				describe('And when I connect 5 and 6', function(){
					connected.connect(5,6);					

					describe('And when I connect 2 and 6', function(){
						connected.connect(2,6);			

						describe('And now when I find if 2 and 5 are connected', function(){
							it('Should return true', function(){
								expect(connected.find(2,5)).toBe(true);				
							});								
						});
					});
				});
			});
		});
	});
});