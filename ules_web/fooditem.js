const foodItem = [
	{
		id: 1,
		name: 'Кусковой',
		category: 'кәуап',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 2,
		name: 'Фарш',
		category: 'кәуап',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 3,
		name: 'Тауық',
		category: 'кәуап',
		rating: 4.3,
		price: 750,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 4,
		name: 'Қабырға',
		category: 'кәуап',
		rating: 4.3,
		price: 950,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 5,
		name: 'Бауыр',
		category: 'кәуап',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 6,
		name: 'Балық',
		category: 'кәуап',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 7,
		name: 'Крылышки',
		category: 'кәуап',
		rating: 4.3,
		price: 850,
		img: 'ulesimg/шашлык.png',
		quantity: 1
	},
	{
		id: 8,
		name: 'Ачи-Чук',
		category: 'салаттар',
		rating: 4.3,
		price: 700,
		img: 'ulesimg/ачичук.png',
		quantity: 1
	},
	{
		id: 9,
		name: 'Фруктовый',
		category: 'салаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/фруктовый.png',
		quantity: 1
	},
	{
		id: 10,
		name: 'Свежый салат',
		category: 'салаттар',
		rating: 4.3,
		price: 1000,
		img: 'ulesimg/свежий.png',
		quantity: 1
	},
	{
		id: 11,
		name: 'Греческий',
		category: 'салаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/греческий.png',
		quantity: 1
	},
	{
		id: 12,
		name: 'Мужской каприз',
		category: 'салаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/мужской.png',
		quantity: 1
	},
	{
		id: 13,
		name: 'Острый Пикантный',
		category: 'салаттар',
		rating: 4.3,
		price: 1500,
		img: 'ulesimg/острый.png',
		quantity: 1
	},
	{
		id: 14,
		name: 'Цезарь',
		category: 'салаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/цезарь.png',
		quantity: 1
	},
	{
		id: 15,
		name: 'Вупи-Пай',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://shaurma-food.kz/storage/1222/vupi-pai-304-1.png',
		quantity: 1
	},
	{
		id: 16,
		name: 'Красный бархат',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://shaurma-food.kz/storage/1025/krasnyi-barkhat-310-1.png',
		quantity: 1
	},
	{
		id: 17,
		name: 'Сникерс',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://darpizza.com/image/cache/catalog/products/deserti/snikers-500x500.png',
		quantity: 1
	},
	{
		id: 18,
		name: 'Трайфл',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://storage.yandexcloud.net/zp-prod-uploads/uploads/6a7d7bc73c9bde966440389937bf0a22.png',
		quantity: 1
	},
	{
		id: 19,
		name: 'Медовый',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://shaurma-food.kz/storage/938/medovyi-306-1.png',
		quantity: 1
	},
	{
		id: 20,
		name: 'Молочная девочка',
		category: 'тәттілер',
		rating: 4.3,
		price: 700,
		img: 'https://shaurma-food.kz/storage/942/molochnaya-devochka-309-1.png',
		quantity: 1
	},
	{
		id: 21,
		name: 'Coca Cola 0.3ML',
		category: 'сусындар',
		rating: 4.3,
		price: 450,
		img: 'ulesimg/кола.png',
		quantity: 1
	},
	{
		id: 22,
		name: 'Coca Cola 0.5ML',
		category: 'сусындар',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/кола.png',
		quantity: 1
	},
	{
		id: 23,
		name: 'Coca Cola 1L',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/кола.png',
		quantity: 1
	},
	{
		id: 24,
		name: 'Coca Cola 1.5L',
		category: 'сусындар',
		rating: 4.3,
		price: 650,
		img: 'ulesimg/кола.png',
		quantity: 1
	},
	{
		id: 25,
		name: 'Coca Cola 2L',
		category: 'сусындар',
		rating: 4.3,
		price: 750,
		img: 'ulesimg/кола.png',
		quantity: 1
	},
	{
		id: 26,
		name: 'Fanta 0.3ML',
		category: 'сусындар',
		rating: 4.3,
		price: 350,
		img: 'ulesimg/фанта.png',
		quantity: 1
	},
	{
		id: 27,
		name: 'Fanta 0.5ML',
		category: 'сусындар',
		rating: 4.3,
		price: 300,
		img: 'ulesimg/фанта.png',
		quantity: 1
	},
	{
		id: 28,
		name: 'Fanta 1L',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/фанта.png',
		quantity: 1
	},
	{
		id: 29,
		name: 'Fanta 2L',
		category: 'сусындар',
		rating: 4.3,
		price: 650,
		img: 'ulesimg/фанта.png',
		quantity: 1
	},
	{
		id: 30,
		name: 'Sprite 1L',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/спрайт.png',
		quantity: 1
	},
	{
		id: 31,
		name: 'Sprite 2L',
		category: 'сусындар',
		rating: 4.3,
		price: 650,
		img: 'ulesimg/спрайт.png',
		quantity: 1
	},
	{
		id: 32,
		name: 'Pepsi 1L',
		category: 'сусындар',
		rating: 4.3,
		price: 450,
		img: 'ulesimg/пепси.png',
		quantity: 1
	},
	{
		id: 33,
		name: 'Fuse tea',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/фманго.png',
		quantity: 1
	},
	{
		id: 34,
		name: 'Fuse tea',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/фромашка.png',
		quantity: 1
	},
	{
		id: 35,
		name: 'Fuse tea',
		category: 'сусындар',
		rating: 4.3,
		price: 550,
		img: 'ulesimg/фперсик.png',
		quantity: 1
	},
	{
		id: 32,
		name: 'Bonaqua',
		category: 'сусындар',
		rating: 4.3,
		price: 250,
		img: 'ulesimg/бонакуа.png',
		quantity: 1
	},
	{
		id: 36,
		name: 'Сарыағаш',
		category: 'сусындар',
		rating: 4.3,
		price: 250,
		img: 'ulesimg/сарыагаш.png',
		quantity: 1
	},
	{
		id: 37,
		name: 'Боржоми',
		category: 'сусындар',
		rating: 4.3,
		price: 500,
		img: 'ulesimg/боржоми.png',
		quantity: 1
	},
	{
		id: 38,
		name: 'Пико морс',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 39,
		name: 'Пико апельсин',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 40,
		name: 'Сочная долина',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 41,
		name: 'Яблока',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 42,
		name: 'Ягодный',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 43,
		name: 'Мультифрукт',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 44,
		name: 'Персик',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 45,
		name: 'Абрикос',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 46,
		name: 'Вишня',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 47,
		name: 'Гранат',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 48,
		name: 'Малина',
		category: 'соктар',
		rating: 4.3,
		price: 600,
		img: 'ulesimg/сок.png',
		quantity: 1
	},
	{
		id: 49,
		name: 'Мохито',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 50,
		name: 'Гранат',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 51,
		name: 'Вишня',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 52,
		name: 'Клубничний',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 53,
		name: 'Лайм',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 54,
		name: 'Маракуйя',
		category: 'лимонаттар',
		rating: 4.3,
		price: 1300,
		img: 'ulesimg/лимонад.png',
		quantity: 1
	},
	{
		id: 55,
		name: 'Ташкентский',
		category: 'шәй',
		rating: 4.3,
		price: 350,
		img: 'ulesimg/ташкенский.png',
		quantity: 1
	},
	{
		id: 56,
		name: 'Черный',
		category: 'шәй',
		rating: 4.3,
		price: 250,
		img: 'ulesimg/черный.png',
		quantity: 1
	},
	{
		id: 57,
		name: 'Зеленый',
		category: 'шәй',
		rating: 4.3,
		price: 250,
		img: 'ulesimg/зеленый.png',
		quantity: 1
	},
	{
		id: 58,
		name: 'С молоком',
		category: 'шәй',
		rating: 4.3,
		price: 400,
		img: 'ulesimg/смолоком.png',
		quantity: 1
	},
	{
		id: 59,
		name: 'Кофе 3/1',
		category: 'шәй',
		rating: 4.3,
		price: 200,
		img: 'ulesimg/кофе.png',
		quantity: 1
	},
]

export { foodItem };