		
		var demo = {
		    smoke : function() {
		        console.log('111');
		        return this;
		    },
		    drink : function() {
		        console.log('222');
		        return this;
		    }
		}
		
		demo.drink().smoke().drink().smoke()


