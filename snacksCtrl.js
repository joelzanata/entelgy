angular
	.module('appSnack')
	.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('pt', {
	    'TITLESITE'				: 'Entelgy - Lucene Lanches',
	    'TITLE'						: 'Lucene Lanches - Pedidos Lanches',
	    'MENU'						: 'Menu Ilustrativo',
	    'HOME'						: 'Home',
	    'ORDER'						: 'Pedidos de Lanches',
	    'VIEW_ORDER'			: 'Visualizar Pedido',
	    'PERSONAL_DATA'		: 'Dados Pessoais',
	    'NAME'						: 'Nome',
	    'ADRESS'					: 'Endereço',
	    'PHONE'						: 'Telefone',
	    'EMAIL'						: 'E-mail',
	    'SELECT_SNACK'		: 'Escolha seu lanches',
	    'ADD'							: 'Adicionar',
	    'PERSONALIZE'			: 'Personalizar',
	    'MOUNT_SNACK'			: 'Monte seu Lanche',
	    'SNACK_NAME'			: 'Nome do Lanche',
	    'TYPE_BREAD'			: 'Tipo de Pão',
	    'TYPE_CHEESE'			: 'Queijo',
	    'FILLING'					: 'Recheio',
	    'SALAD'						: 'Salada',
	    'TYPE_SAUCE'			: 'Molhos',
	    'SPICE'						: 'Temperos',
	    'VALUE_SNACK'			: 'Valor do lanche',
	    'SAVE'						: 'Salvar',
	    'SNACK_SELECT'		: 'Lanches Escolhidos',
	    'VALUE_ORDER'			: 'Valor do Pedido',
	    'SUBMIT'					: 'Finalizar',
	    

	    'DETAIL'					: 'Lucene Lanches - Detalhamento do Pedido',
	    'HELLO'						: 'Olá: ',
	    'DESC_VALUE_ORDER': 'O valor total do seu pedido é de ',
	    'PAYMENT'					: 'Qual a forma de pagamento?',
	    'CREDIT'					: 'Crédito',
	    'DEBIT'						: 'Débito',
	    'MONEY'						: 'Dinheiro',
	    'RETURN'					: 'Precisa de troco?',
	    'YES'							: 'Sim',
	    'NO'							: 'Não',
	    'PROGRESS_ORDER'	: 'Seu pedido já está em andamento',
	    'CALC'						: 'Use nossa calculadora caso queira dividir o valor',
	    'PERSON_QUANTITY'	: 'Quantidade de pessoas',
	    'VALUE_PERSON'		: 'Valor por pessoas',
	    'PERSON'					: 'Pessoa',
	    'VALUE'						: 'Valor',
	    'RELOAD'					: 'Realizar outro pedido',

	    'BT_LING_PT'			: 'Português',
	    'BT_LING_EN'			: 'Inglês',

	    'MSG01'						: 'Este campo é obrigatório.',
	    'MSG01'						: 'Ao menos um lanche deve ser selecionado para o pedido.'


	    
	  });
	 
	  $translateProvider.translations('en', {
	    'TITLESITE'				: 'Entelgy - Lucene Snacks',
	    'TITLE'						: 'Lucene Snacks - Order snacks',
	    'MENU'						: 'Illustrative menu',
	    'HOME'						: 'Home',
	    'ORDER'						: 'Order snacks',
	    'VIEW_ORDER'			: 'View Order',
	    'PERSONAL_DATA'		: 'Personal data',
	    'NAME'						: 'Name',
	    'ADRESS'					: 'Address',
	    'PHONE'						: 'Phone',
	    'EMAIL'						: 'Email',
	    'SELECT_SNACK'		: 'Choose your snacks',
	    'ADD'							: 'Add',
	    'PERSONALIZE'			: 'Customize',
	    'MOUNT_SNACK'			: 'Build your Snack',
	    'SNACK_NAME'			: 'Snack Name',
	    'TYPE_BREAD'			: 'Type of Bread',
	    'TYPE_CHEESE'			: 'Cheese',
	    'FILLING'					: 'Filling',
	    'SALAD'						: 'Salad',
	    'TYPE_SAUCE'			: 'Sauces',
	    'SPICE'						: 'Spices',
	    'VALUE_SNACK'			: 'Snack Value',
	    'SAVE'						: 'Save',
	    'SNACK_SELECT'		: 'Selected Snacks',
	    'VALUE_ORDER'			: 'Value of the Order',
	    'SUBMIT'					: 'Finish',
	    

	    'DETAIL'					: 'Lucene Snacks - Order Detail',
	    'HELLO'						: 'Hello:',
	    'DESC_VALUE_ORDER': 'The total value of your order is ',
	    'PAYMENT'					: 'What is the payment method?',
	    'CREDIT'					: 'Credit',
	    'DEBIT'						: 'Debit',
	    'MONEY'						: 'Money',
	    'RETURN'					: 'Need change?',
	    'YES'							: 'Yes',
	    'NO'							: 'No',
	    'PROGRESS_ORDER'	: 'Your order is already in progress',
	    'CALC'						: 'Use our calculator if you want to split the',
	    'PERSON_QUANTITY'	: 'Amount of people',
	    'VALUE_PERSON'		: 'Value per person',
	    'PERSON'					: 'Person',
	    'VALUE'						: 'Value',
	    'RELOAD'					: 'Make another order',

	    'BT_LING_PT'			: 'Portuguese',
	    'BT_LING_EN'			: 'English',

	    'MSG01'						: 'This fields is required.',
	    'MSG01'						: 'At least one snack must be selected for the order.'
	  });
	 
	  $translateProvider.preferredLanguage('en');
	}])


	.controller('CtrlSnacks', function($scope, snacksService, $mdDialog, $translate){
		$scope.status = '  ';
  	$scope.customFullscreen = false;

		var mappingCategoria = {
			"Tipo de pão" : "bread",
			"Queijo"      : "cheese",
			"Recheio"     : "filling",
			"Saladas"     : "salad",
			"Molhos"      : "sauce",
			"Temperos"    : "spice"
		};

 		$scope.data = {
 			snack: null,
 			bread: null,
			cheese: null,
			filling: null,
 			salad: [],
			sauce: [],
			spice: []
 		};

 		$scope.dataValor = {
	 			bread: 0,
				cheese: 0,
				filling: 0,
	 			salad: 0,
				sauce: 0,
				spice: 0
	 		};

	 	$scope.valueSnack = 0;
 		$scope.list = [];

 		$scope.changeTranslate = function(to) {
 			$translate.use(to);
 		};

 		$scope.add = function(data) {
 			// if ($scope.list.length < 2) {
	 		// 	$scope.list.push(data);
 			// }
 			var _data = data;
 			if (data.ingredientes) {
 				_data = {
					snack: data.nome,
		 			bread:   null,
					cheese:  null,
					filling: null,
		 			salad:   null,
					sauce:   null,
					spice:   null
		 		};

				data.ingredientes.forEach(function(ingrediente) {
	 				var categoria = mappingCategoria[ingrediente.categoria];

					_data[categoria] = ingrediente.nome;
					$scope.dataValor[categoria] = ingrediente.valor;
 				
	 			});
	 			_data.valor = data.total;
 			} else {
	 			_data.valor = $scope.valorTotal;
	 		}


 			$scope.list.push(_data);

 			$scope.valueSnack += _data.valor;

 			//limpa os campos
 			$scope.data = null;
 			$scope.valorTotal = 0;
 		}

 		$scope.remoreItemList = function(idx, data) {
 			$scope.valueSnack -= data.valor;
 			$scope.list.splice(idx, 1);

 		}

		snacksService.getIngredientes().then(function(result) {
			
			$scope.ingredientes = result;

			$scope.breads	= $scope.ingredientes[0].ingredientes;
			$scope.cheeses 	= $scope.ingredientes[1].ingredientes;
			$scope.fillings = $scope.ingredientes[2].ingredientes;
			$scope.salads	= $scope.ingredientes[3].ingredientes;
			$scope.sauces 	= $scope.ingredientes[4].ingredientes;
			$scope.spices 	= $scope.ingredientes[5].ingredientes;
		});


		function calcValue(snack) {
			for (var i = 0 ; i < snack.length ; i++) {
				var total = 0;

				var item = snack[i].ingredientes;
				for (var j = item.length - 1; j >= 0; j--) {
					var valor = snack[i].ingredientes[j].valor;
					total = (total + valor);
				};
				
				snack[i].total = total;
			};

			return snack;
		}

 		snacksService.getSnacks().then(function(result) {
			$scope.snacks = result;

			$scope.snacks = calcValue($scope.snacks);

		});

		$scope.listingredientes = function(data) {

			$scope.data = {
				snack: data.nome,
	 			bread: null,
				cheese: null,
				filling: null,
	 			salad: null,
				sauce: null,
				spice: null
	 		};
	 		$scope.dataValor = {
	 			bread: 0,
				cheese: 0,
				filling: 0,
	 			salad: 0,
				sauce: 0,
				spice: 0
	 		};

 			data.ingredientes.forEach(function(ingrediente) {
 				var categoria = mappingCategoria[ingrediente.categoria];

 				/*if (categoria == 'salad') {
 					$scope.salads.forEach(function(item, idx) {
 						
							$scope.data[categoria][idx] = item.nome == ingrediente.nome;
						
 					});
 				} else {
					$scope.data[categoria] = ingrediente.nome;
 				}*/

					$scope.data[categoria] = ingrediente.nome;
					$scope.dataValor[categoria] = ingrediente.valor;
 				
 			});

 			$scope.calcValueIngredientes();
 		}

 		$scope.valorTotal = 0;
 		$scope.calcValueIngredientes = function(key, data) {
 			if ($scope.dataValor.hasOwnProperty(key)) {
 				$scope.dataValor[key] = data.valor;
 			}

 			$scope.valorTotal = 0;
 			for (keyDta in $scope.dataValor) {
 				$scope.valorTotal += $scope.dataValor[keyDta];
 			}
 		};

 		$scope.valorPessoa = 0;
 		$scope.persons = [];
 		$scope.calcValuePessoa = function(valueSnack, qtdPessoa){

			$scope.valorPessoa = valueSnack / qtdPessoa;
	 		$scope.persons = [];

	 		for (var i = --qtdPessoa; i > -1; i--) {
				$scope.persons.push({
					value: 0,
					percent: 0
				});
			}
 		}


 		$scope.calcPercentPessoa = function(valueSnack, value, percent){

	 		$scope.persons = [];

	 		if (value != 0 && value != '') {
	 			var valueP = (value/100) * valueSnack;
	 		};
	 		if (percent != 0 && percent != '') {
	 			var percentP = ( valueSnack * value ) / 100;
	 		};

	 		console.log(valueP);
	 		
			// $scope.persons.push({
			// 	value: valueP,
			// 	percent: percentP
			// }
 		}




 	$scope.showAdvanced = function(ev, dataList) {
    $mdDialog.show({
      controller: DialogController,
      contentElement: '#DetailOrder',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
      locals: {
      	dataList: dataList
      }
    })
    .then(function() {

    });
  };
 		
	});

 	

 	function DialogController($scope, $mdDialog, dataList) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }