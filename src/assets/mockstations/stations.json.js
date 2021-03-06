const stations = [
	{
		"id": 1,
		"name": "Zürich, Bahnhof Wiedikon",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			3,
			6
		],
		"stop_lat": 47.3711802915849,
		"stop_lon": 8.52362864194321
	},
	{
		"id": 2,
		"name": "Rümlang, Bäuler",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			248,
			113
		],
		"stop_lat": 47.43490611329371,
		"stop_lon": 8.55728851564386
	},
	{
		"id": 3,
		"name": "Zürich, Werd",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			1,
			122
		],
		"stop_lat": 47.372415289658896,
		"stop_lon": 8.52662901499259
	},
	{
		"id": 4,
		"name": "Zürich, Haldenbach",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			191,
			181
		],
		"stop_lat": 47.38011664476711,
		"stop_lon": 8.548071800827511
	},
	{
		"id": 5,
		"name": "Zürich, Central",
		"reachable_by_bus": [
			45,
			135
		],
		"reachable_by_tram": [
			169,
			184,
			199,
			135,
			45,
			46
		],
		"stop_lat": 47.37679534520039,
		"stop_lon": 8.544074297812621
	},
	{
		"id": 6,
		"name": "Zürich, Schmiede Wiedikon",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			1,
			194
		],
		"stop_lat": 47.37020687370789,
		"stop_lon": 8.518849604631031
	},
	{
		"id": 7,
		"name": "Zürich, Hegianwandweg",
		"reachable_by_bus": [
			59,
			209
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3565467094935,
		"stop_lon": 8.51003713169259
	},
	{
		"id": 8,
		"name": "Zürich, Klosbach",
		"reachable_by_bus": [
			65,
			132
		],
		"reachable_by_tram": [],
		"stop_lat": 47.370334635828506,
		"stop_lon": 8.56362163839778
	},
	{
		"id": 9,
		"name": "Zürich, Röslistrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			140,
			63
		],
		"stop_lat": 47.388461551079295,
		"stop_lon": 8.5405349355927
	},
	{
		"id": 10,
		"name": "Zürich, Schlyfi",
		"reachable_by_bus": [
			128,
			174
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3626987847054,
		"stop_lon": 8.57432057343313
	},
	{
		"id": 11,
		"name": "Zürich, Friesenberg",
		"reachable_by_bus": [
			142,
			121
		],
		"reachable_by_tram": [],
		"stop_lat": 47.36446334252889,
		"stop_lon": 8.50790812446893
	},
	{
		"id": 12,
		"name": "Zürich, Sackzelg",
		"reachable_by_bus": [
			208,
			244
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3740091853096,
		"stop_lon": 8.49521492950256
	},
	{
		"id": 13,
		"name": "Zürich, Lochergut",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			141,
			212
		],
		"stop_lat": 47.375365783732605,
		"stop_lon": 8.517825525206991
	},
	{
		"id": 14,
		"name": "Zürich, Kantonsschule",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			191,
			118
		],
		"stop_lat": 47.3727377228187,
		"stop_lon": 8.550353521649491
	},
	{
		"id": 15,
		"name": "Zürich, Regensbergbrücke",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			249,
			78
		],
		"stop_lat": 47.408515550016006,
		"stop_lon": 8.53907966483222
	},
	{
		"id": 16,
		"name": "Wallisellen, Bahnhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			160,
			210
		],
		"stop_lat": 47.4125582606597,
		"stop_lon": 8.59328400908354
	},
	{
		"id": 17,
		"name": "Zürich, Technopark",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			234,
			155
		],
		"stop_lat": 47.388966339042504,
		"stop_lon": 8.51555278753785
	},
	{
		"id": 18,
		"name": "Zürich, Helvetiaplatz",
		"reachable_by_bus": [
			179,
			60
		],
		"reachable_by_tram": [
			122,
			57
		],
		"stop_lat": 47.376162692991,
		"stop_lon": 8.52607205951636
	},
	{
		"id": 19,
		"name": "Zürich, Post Wollishofen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			40,
			156
		],
		"stop_lat": 47.3446299679502,
		"stop_lon": 8.53301603666357
	},
	{
		"id": 20,
		"name": "Zürich, Kreuzstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			211,
			176
		],
		"stop_lat": 47.36337419139621,
		"stop_lon": 8.54951808843514
	},
	{
		"id": 21,
		"name": "Zürich, Wipkingerplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			119,
			105
		],
		"stop_lat": 47.3924997194205,
		"stop_lon": 8.52369152401311
	},
	{
		"id": 22,
		"name": "Zürich, Schaufelbergerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			53,
			123
		],
		"stop_lat": 47.368892731074894,
		"stop_lon": 8.50154805225648
	},
	{
		"id": 23,
		"name": "Zürich, Auzelg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			207,
			130
		],
		"stop_lat": 47.4163332034833,
		"stop_lon": 8.56899356379756
	},
	{
		"id": 24,
		"name": "Zürich, Aargauerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			154,
			87
		],
		"stop_lat": 47.3922199767694,
		"stop_lon": 8.502715862126
	},
	{
		"id": 25,
		"name": "Schlieren, Zentrum/Bahnhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			158,
			170
		],
		"stop_lat": 47.3977719825142,
		"stop_lon": 8.4487271135429
	},
	{
		"id": 26,
		"name": "Zürich, Mattenhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			218,
			185
		],
		"stop_lat": 47.3988056977355,
		"stop_lon": 8.590750759981969
	},
	{
		"id": 27,
		"name": "Glattbrugg, Lindberghplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			232,
			113
		],
		"stop_lat": 47.4251099631438,
		"stop_lon": 8.56036973706882
	},
	{
		"id": 28,
		"name": "Zürich, Römerhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			34,
			164
		],
		"stop_lat": 47.3680227019655,
		"stop_lon": 8.56036973706882
	},
	{
		"id": 29,
		"name": "Zürich, Werdhölzli",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			54
		],
		"stop_lat": 47.3977902247233,
		"stop_lon": 8.48205461058837
	},
	{
		"id": 30,
		"name": "Zürich, Tierspital",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			127,
			175
		],
		"stop_lat": 47.4018094374629,
		"stop_lon": 8.55210523645377
	},
	{
		"id": 31,
		"name": "Zürich, Birchdörfli",
		"reachable_by_bus": [
			222,
			189
		],
		"reachable_by_tram": [],
		"stop_lat": 47.4072206011409,
		"stop_lon": 8.53089601259275
	},
	{
		"id": 32,
		"name": "Zürich, Rosengartenstrasse",
		"reachable_by_bus": [
			119,
			73
		],
		"reachable_by_tram": [],
		"stop_lat": 47.394366659524,
		"stop_lon": 8.525200693690639
	},
	{
		"id": 33,
		"name": "Zürich, Luchswiesen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			229,
			81
		],
		"stop_lat": 47.4067281474386,
		"stop_lon": 8.58507340738554
	},
	{
		"id": 34,
		"name": "Zürich, Hottingerplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			28,
			118
		],
		"stop_lat": 47.369349034311,
		"stop_lon": 8.55457560348544
	},
	{
		"id": 35,
		"name": "Zürich, Kappeli",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			242,
			102
		],
		"stop_lat": 47.38506779083429,
		"stop_lon": 8.49511611482129
	},
	{
		"id": 36,
		"name": "Zürich, Hardturm",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			136,
			104
		],
		"stop_lat": 47.3941963875977,
		"stop_lon": 8.50444062747175
	},
	{
		"id": 37,
		"name": "Zürich, Albisriederplatz",
		"reachable_by_bus": [
			83,
			213
		],
		"reachable_by_tram": [
			110,
			213,
			141
		],
		"stop_lat": 47.378188369941704,
		"stop_lon": 8.51052222194608
	},
	{
		"id": 38,
		"name": "Zürich, Wollishoferplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			137
		],
		"stop_lat": 47.3383114211963,
		"stop_lon": 8.53079719791148
	},
	{
		"id": 39,
		"name": "Zürich, Sihlcity Nord",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			173,
			62
		],
		"stop_lat": 47.359753667088,
		"stop_lon": 8.52255066360212
	},
	{
		"id": 40,
		"name": "Zch, Bhf.Wollishofen/Staubstr.",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			246,
			19
		],
		"stop_lat": 47.34688206094751,
		"stop_lon": 8.5329172219823
	},
	{
		"id": 41,
		"name": "Zürich, Güterbahnhof",
		"reachable_by_bus": [
			83,
			57
		],
		"reachable_by_tram": [
			83,
			57
		],
		"stop_lat": 47.38022613459721,
		"stop_lon": 8.52012521233466
	},
	{
		"id": 42,
		"name": "Zürich, Freiestrasse",
		"reachable_by_bus": [
			134,
			196
		],
		"reachable_by_tram": [],
		"stop_lat": 47.362869158379794,
		"stop_lon": 8.562876036711861
	},
	{
		"id": 43,
		"name": "Zürich, Lägernstrasse",
		"reachable_by_bus": [
			88,
			126
		],
		"reachable_by_tram": [],
		"stop_lat": 47.39585043445229,
		"stop_lon": 8.5320907719208
	},
	{
		"id": 44,
		"name": "Zürich, Talwiesenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			53,
			194
		],
		"stop_lat": 47.3698175015265,
		"stop_lon": 8.50928254685383
	},
	{
		"id": 45,
		"name": "Zürich, Neumarkt",
		"reachable_by_bus": [
			5,
			118
		],
		"reachable_by_tram": [
			5,
			118
		],
		"stop_lat": 47.372640384714096,
		"stop_lon": 8.54744298012854
	},
	{
		"id": 46,
		"name": "Zürich, Haldenegg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			191,
			5,
			56
		],
		"stop_lat": 47.37914339184,
		"stop_lon": 8.54500854570823
	},
	{
		"id": 47,
		"name": "Zürich, Botanischer Garten",
		"reachable_by_bus": [
			134,
			162
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3591816623693,
		"stop_lon": 8.55749512815923
	},
	{
		"id": 48,
		"name": "Zürich, Lindenplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			75,
			242
		],
		"stop_lat": 47.3877803837547,
		"stop_lon": 8.48634855764706
	},
	{
		"id": 49,
		"name": "Zürich, Helmhaus",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			92,
			98
		],
		"stop_lat": 47.3695619744703,
		"stop_lon": 8.54347242657217
	},
	{
		"id": 50,
		"name": "Wallisellen, Neugut",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			210,
			147
		],
		"stop_lat": 47.4046974872424,
		"stop_lon": 8.60451295013659
	},
	{
		"id": 51,
		"name": "Zürich, Signaustrasse",
		"reachable_by_bus": [
			134,
			166
		],
		"reachable_by_tram": [
			134,
			166
		],
		"stop_lat": 47.36300302302379,
		"stop_lon": 8.55787242057862
	},
	{
		"id": 52,
		"name": "Zürich, Letzibach",
		"reachable_by_bus": [
			149,
			195
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3888751126601,
		"stop_lon": 8.49551137354636
	},
	{
		"id": 53,
		"name": "Zürich, Heuried",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			22,
			44
		],
		"stop_lat": 47.3694342104779,
		"stop_lon": 8.50612047705329
	},
	{
		"id": 54,
		"name": "Zürich, Bändliweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			217,
			29
		],
		"stop_lat": 47.3962700189648,
		"stop_lon": 8.4852346466946
	},
	{
		"id": 55,
		"name": "Zürich, Guggachstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			140,
			175
		],
		"stop_lat": 47.3956132765108,
		"stop_lon": 8.540067811644889
	},
	{
		"id": 56,
		"name": "Zürich, Sonneggstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			63,
			46
		],
		"stop_lat": 47.38275042040279,
		"stop_lon": 8.54349039287786
	},
	{
		"id": 57,
		"name": "Zürich, Bäckeranlage",
		"reachable_by_bus": [
			41,
			60
		],
		"reachable_by_tram": [
			41,
			18
		],
		"stop_lat": 47.3782248679118,
		"stop_lon": 8.52271236035328
	},
	{
		"id": 58,
		"name": "Zürich, Friedhof Enzenbühl",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			64,
			72
		],
		"stop_lat": 47.3509903614489,
		"stop_lon": 8.58056386465863
	},
	{
		"id": 59,
		"name": "Zürich, Im Hagacker",
		"reachable_by_bus": [
			7,
			121
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3595346021838,
		"stop_lon": 8.50738710160407
	},
	{
		"id": 60,
		"name": "Zürich, Militär-/Langstrasse",
		"reachable_by_bus": [
			201,
			146,
			57,
			18
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3796908488222,
		"stop_lon": 8.52750038081831
	},
	{
		"id": 61,
		"name": "Zürich, Rentenanstalt",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			67,
			79
		],
		"stop_lat": 47.3634532925151,
		"stop_lon": 8.53460605471668
	},
	{
		"id": 62,
		"name": "Zürich, Waffenplatzstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			39,
			95
		],
		"stop_lat": 47.3609889327173,
		"stop_lon": 8.524931199105371
	},
	{
		"id": 63,
		"name": "Zürich, Ottikerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			9,
			56
		],
		"stop_lat": 47.3856334327159,
		"stop_lon": 8.542214785174231
	},
	{
		"id": 64,
		"name": "Zürich, Balgrist",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			165,
			58
		],
		"stop_lat": 47.3543558863687,
		"stop_lon": 8.5751380403418
	},
	{
		"id": 65,
		"name": "Zürich, Hölderlinsteig",
		"reachable_by_bus": [
			8,
			196
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3672439224786,
		"stop_lon": 8.56470859989172
	},
	{
		"id": 66,
		"name": "Zürich, Schörlistrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			127,
			231
		],
		"stop_lat": 47.4060472162165,
		"stop_lon": 8.56406181288706
	},
	{
		"id": 67,
		"name": "Zürich, Bürkliplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			183,
			61,
			98
		],
		"stop_lat": 47.3666111556789,
		"stop_lon": 8.54176562753211
	},
	{
		"id": 68,
		"name": "Zürich, Stampfenbachplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			184,
			84
		],
		"stop_lat": 47.3798915816247,
		"stop_lon": 8.54252919552372
	},
	{
		"id": 69,
		"name": "Zürich, Zehntenhausplatz",
		"reachable_by_bus": [
			243,
			163
		],
		"reachable_by_tram": [],
		"stop_lat": 47.4188375250837,
		"stop_lon": 8.50713557332448
	},
	{
		"id": 70,
		"name": "Zürich, Loorenstrasse",
		"reachable_by_bus": [
			82,
			131
		],
		"reachable_by_tram": [],
		"stop_lat": 47.35943723971211,
		"stop_lon": 8.59476622930254
	},
	{
		"id": 71,
		"name": "Zürich, Uetlihof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			209,
			245
		],
		"stop_lat": 47.356589307930605,
		"stop_lon": 8.51381903903926
	},
	{
		"id": 72,
		"name": "Zürich, Rehalp",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			58
		],
		"stop_lat": 47.3508625524751,
		"stop_lon": 8.58299829907894
	},
	{
		"id": 73,
		"name": "Zürich, Bahnhof Wipkingen",
		"reachable_by_bus": [
			129,
			32
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3934727257728,
		"stop_lon": 8.52967430380618
	},
	{
		"id": 74,
		"name": "Zürich, Seebach",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			148
		],
		"stop_lat": 47.4216942513698,
		"stop_lon": 8.54995826292442
	},
	{
		"id": 75,
		"name": "Zürich, Bachmattstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			48,
			203
		],
		"stop_lat": 47.38899066605121,
		"stop_lon": 8.48299784163683
	},
	{
		"id": 76,
		"name": "Zürich, Berninaplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			145,
			171
		],
		"stop_lat": 47.40360308700971,
		"stop_lon": 8.54787417146497
	},
	{
		"id": 77,
		"name": "Zürich, Wetlistrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			125,
			165
		],
		"stop_lat": 47.360039667121896,
		"stop_lon": 8.56858033876681
	},
	{
		"id": 78,
		"name": "Zürich, Bad Allenmoos",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			15,
			189
		],
		"stop_lat": 47.4059499396091,
		"stop_lon": 8.53764236037743
	},
	{
		"id": 79,
		"name": "Zürich, Bahnhof Enge",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			107,
			95,
			61,
			228
		],
		"stop_lat": 47.364080012571705,
		"stop_lon": 8.53147991752751
	},
	{
		"id": 80,
		"name": "Zürich, Felsenrainstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			240,
			148
		],
		"stop_lat": 47.41666144659229,
		"stop_lon": 8.545215158223609
	},
	{
		"id": 81,
		"name": "Zürich, Luegisland",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			192,
			33
		],
		"stop_lat": 47.4059681789866,
		"stop_lon": 8.58094115707802
	},
	{
		"id": 82,
		"name": "Zürich, Zweiackerstrasse",
		"reachable_by_bus": [
			241,
			70
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3569666068716,
		"stop_lon": 8.59806304639572
	},
	{
		"id": 83,
		"name": "Zürich, Hardplatz",
		"reachable_by_bus": [
			41,
			220,
			37,
			225
		],
		"reachable_by_tram": [
			41,
			225
		],
		"stop_lat": 47.3823428932854,
		"stop_lon": 8.51491498368604
	},
	{
		"id": 84,
		"name": "Zürich, Beckenhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			68,
			167
		],
		"stop_lat": 47.3839364888622,
		"stop_lon": 8.54040018830006
	},
	{
		"id": 85,
		"name": "Zürich, Holzerhurd",
		"reachable_by_bus": [
			243
		],
		"reachable_by_tram": [],
		"stop_lat": 47.42377287817099,
		"stop_lon": 8.49664325080451
	},
	{
		"id": 86,
		"name": "Zürich, Limmatplatz",
		"reachable_by_bus": [
			236,
			201
		],
		"reachable_by_tram": [
			89,
			178
		],
		"stop_lat": 47.384489978344405,
		"stop_lon": 8.53176737841847
	},
	{
		"id": 87,
		"name": "Zürich, Sportweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			234,
			24
		],
		"stop_lat": 47.391502369265204,
		"stop_lon": 8.506093527594759
	},
	{
		"id": 88,
		"name": "Zürich, Rotbuchstrasse",
		"reachable_by_bus": [
			129,
			236,
			43,
			140
		],
		"reachable_by_tram": [],
		"stop_lat": 47.390924627310106,
		"stop_lon": 8.53621403907548
	},
	{
		"id": 89,
		"name": "Zürich, Quellenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			86,
			144
		],
		"stop_lat": 47.3866065658351,
		"stop_lon": 8.52891073581457
	},
	{
		"id": 90,
		"name": "Zürich, Hermetschloo",
		"reachable_by_bus": [
			111
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3940626021267,
		"stop_lon": 8.47374519420911
	},
	{
		"id": 91,
		"name": "Zürich Flughafen, Bahnhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			206,
			233
		],
		"stop_lat": 47.45070858804271,
		"stop_lon": 8.563819267760321
	},
	{
		"id": 92,
		"name": "Zürich, Rathaus",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			49,
			199
		],
		"stop_lat": 47.371849505953705,
		"stop_lon": 8.54272682488625
	},
	{
		"id": 93,
		"name": "Zürich, Langmauerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			186,
			139
		],
		"stop_lat": 47.3934484008329,
		"stop_lon": 8.544945663638341
	},
	{
		"id": 94,
		"name": "Zürich, Kinkelstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			186,
			235
		],
		"stop_lat": 47.3888021314405,
		"stop_lon": 8.546382968093129
	},
	{
		"id": 95,
		"name": "Zürich, Bahnhof Enge/Bederstr.",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			228,
			79,
			62
		],
		"stop_lat": 47.364536357443,
		"stop_lon": 8.53022227612957
	},
	{
		"id": 96,
		"name": "Zürich, Glaubtenstrasse",
		"reachable_by_bus": [
			222,
			163
		],
		"reachable_by_tram": [],
		"stop_lat": 47.4139077882063,
		"stop_lon": 8.51978385252665
	},
	{
		"id": 97,
		"name": "Zürich, SBB-Werkstätte",
		"reachable_by_bus": [
			149,
			220
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3866673860586,
		"stop_lon": 8.50281467680727
	},
	{
		"id": 98,
		"name": "Zürich, Bellevue",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			49,
			176,
			223,
			118,
			67
		],
		"stop_lat": 47.3668727813338,
		"stop_lon": 8.54533193921056
	},
	{
		"id": 99,
		"name": "Zürich, Laubiweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			140,
			126
		],
		"stop_lat": 47.394859228784505,
		"stop_lon": 8.53645658420223
	},
	{
		"id": 100,
		"name": "Zürich, Glattwiesen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			185,
			239
		],
		"stop_lat": 47.401693912178494,
		"stop_lon": 8.58158794408267
	},
	{
		"id": 101,
		"name": "Zürich, Seidelhof",
		"reachable_by_bus": [
			195,
			203
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3919037441582,
		"stop_lon": 8.483680561252859
	},
	{
		"id": 102,
		"name": "Zürich, Freihofstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			110,
			35
		],
		"stop_lat": 47.3830180484378,
		"stop_lon": 8.49984125321642
	},
	{
		"id": 103,
		"name": "Zürich, Leutschenbach",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			240,
			221,
			188
		],
		"stop_lat": 47.4142907559401,
		"stop_lon": 8.5514764157548
	},
	{
		"id": 104,
		"name": "Zürich, Hardhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			36,
			138
		],
		"stop_lat": 47.396203128904,
		"stop_lon": 8.497694279687071
	},
	{
		"id": 105,
		"name": "Zürich, Waidfussweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			21,
			177
		],
		"stop_lat": 47.3952362539964,
		"stop_lon": 8.51922689705042
	},
	{
		"id": 106,
		"name": "Zürich, Wartau",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			180,
			198
		],
		"stop_lat": 47.4026667487634,
		"stop_lon": 8.49209777546623
	},
	{
		"id": 107,
		"name": "Zürich, Museum Rietberg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			153,
			79
		],
		"stop_lat": 47.3605264721249,
		"stop_lon": 8.53157873220878
	},
	{
		"id": 108,
		"name": "Zürich, Wildbachstrasse",
		"reachable_by_bus": [
			190,
			172
		],
		"reachable_by_tram": [
			190,
			172
		],
		"stop_lat": 47.3531082936664,
		"stop_lon": 8.55889650000265
	},
	{
		"id": 109,
		"name": "Zürich, Zwinglihaus",
		"reachable_by_bus": [
			212,
			194
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3720746034237,
		"stop_lon": 8.51663974903179
	},
	{
		"id": 110,
		"name": "Zürich, Letzigrund",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			102,
			37
		],
		"stop_lat": 47.381138541005,
		"stop_lon": 8.503784857314251
	},
	{
		"id": 111,
		"name": "Zürich, Micafil",
		"reachable_by_bus": [
			90,
			203
		],
		"reachable_by_tram": [
			203,
			224
		],
		"stop_lat": 47.39289500541779,
		"stop_lon": 8.47481418939736
	},
	{
		"id": 112,
		"name": "Zürich, Kirche Fluntern",
		"reachable_by_bus": [
			238,
			132
		],
		"reachable_by_tram": [],
		"stop_lat": 47.376290440683405,
		"stop_lon": 8.55928277557488
	},
	{
		"id": 113,
		"name": "Glattbrugg, Bahnhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			2,
			27
		],
		"stop_lat": 47.4306281181422,
		"stop_lon": 8.55951633754878
	},
	{
		"id": 114,
		"name": "Zürich, Förrlibuckstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			119,
			116
		],
		"stop_lat": 47.3922199767694,
		"stop_lon": 8.51743924963477
	},
	{
		"id": 115,
		"name": "Zürich, Paradeplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			182,
			237,
			183,
			117
		],
		"stop_lat": 47.3696167303722,
		"stop_lon": 8.53919644581917
	},
	{
		"id": 116,
		"name": "Zürich, Fischerweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			114,
			136
		],
		"stop_lat": 47.3935213756188,
		"stop_lon": 8.51259733025269
	},
	{
		"id": 117,
		"name": "Zürich, Sihlstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			115,
			122
		],
		"stop_lat": 47.372171942572606,
		"stop_lon": 8.5348216503849
	},
	{
		"id": 118,
		"name": "Zürich, Kunsthaus",
		"reachable_by_bus": [
			45,
			143
		],
		"reachable_by_tram": [
			34,
			14,
			45,
			98
		],
		"stop_lat": 47.3705475720085,
		"stop_lon": 8.54904198133449
	},
	{
		"id": 119,
		"name": "Zürich, Escher-Wyss-Platz",
		"reachable_by_bus": [
			155,
			32
		],
		"reachable_by_tram": [
			114,
			21,
			155,
			144
		],
		"stop_lat": 47.3899637371901,
		"stop_lon": 8.52360169248469
	},
	{
		"id": 120,
		"name": "Zürich, Albisrieden",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			151
		],
		"stop_lat": 47.374362025925706,
		"stop_lon": 8.48501006787354
	},
	{
		"id": 121,
		"name": "Zürich, Friesenbergstrasse",
		"reachable_by_bus": [
			59,
			11
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3620720482395,
		"stop_lon": 8.50498859979514
	},
	{
		"id": 122,
		"name": "Zürich, Stauffacher",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			3,
			157,
			18,
			227,
			117,
			193
		],
		"stop_lat": 47.373595507097995,
		"stop_lon": 8.530303124505151
	},
	{
		"id": 123,
		"name": "Zürich, Triemli",
		"reachable_by_bus": [
			214
		],
		"reachable_by_tram": [
			22
		],
		"stop_lat": 47.36774891361279,
		"stop_lon": 8.49534069364235
	},
	{
		"id": 124,
		"name": "Zürich, Albisgütli",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			209
		],
		"stop_lat": 47.3519823920064,
		"stop_lon": 8.50737811845123
	},
	{
		"id": 125,
		"name": "Zürich, Hedwigsteig",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			134,
			77
		],
		"stop_lat": 47.3603074104294,
		"stop_lon": 8.5652116564509
	},
	{
		"id": 126,
		"name": "Zürich, Bucheggplatz",
		"reachable_by_bus": [
			43,
			189
		],
		"reachable_by_tram": [
			189,
			99
		],
		"stop_lat": 47.3980577763979,
		"stop_lon": 8.533384345930111
	},
	{
		"id": 127,
		"name": "Zürich, Waldgarten",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			30,
			66
		],
		"stop_lat": 47.4036213271999,
		"stop_lon": 8.55683935800174
	},
	{
		"id": 128,
		"name": "Zürich, Drusbergstrasse",
		"reachable_by_bus": [
			10,
			159
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3603804310956,
		"stop_lon": 8.578776217242991
	},
	{
		"id": 129,
		"name": "Zürich, Nürenbergstrasse",
		"reachable_by_bus": [
			88,
			73
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3926760781549,
		"stop_lon": 8.53253992956292
	},
	{
		"id": 130,
		"name": "Wallisellen, Herti",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			23,
			160
		],
		"stop_lat": 47.41650340386929,
		"stop_lon": 8.57926130749648
	},
	{
		"id": 131,
		"name": "Zürich, Berghaldenstrasse",
		"reachable_by_bus": [
			161,
			70
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3586826744651,
		"stop_lon": 8.590265669728481
	},
	{
		"id": 132,
		"name": "Zürich, Hofstrasse",
		"reachable_by_bus": [
			8,
			112
		],
		"reachable_by_tram": [],
		"stop_lat": 47.372932398489,
		"stop_lon": 8.56259755897374
	},
	{
		"id": 133,
		"name": "Zürich, Sternen Oerlikon",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			240,
			145,
			188,
			249
		],
		"stop_lat": 47.409670641865205,
		"stop_lon": 8.546248220800491
	},
	{
		"id": 134,
		"name": "Zürich, Hegibachplatz",
		"reachable_by_bus": [
			42,
			51,
			47
		],
		"reachable_by_tram": [
			125,
			51
		],
		"stop_lat": 47.361694785805994,
		"stop_lon": 8.5609177093922
	},
	{
		"id": 135,
		"name": "Zürich, Bahnhofplatz/HB",
		"reachable_by_bus": [
			216,
			5
		],
		"reachable_by_tram": [
			216,
			184,
			5
		],
		"stop_lat": 47.3770812528432,
		"stop_lon": 8.53977136760109
	},
	{
		"id": 136,
		"name": "Zürich, Bernoulli-Häuser",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			36,
			116
		],
		"stop_lat": 47.393819354945705,
		"stop_lon": 8.5088962712816
	},
	{
		"id": 137,
		"name": "Zürich, Butzenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			38,
			156
		],
		"stop_lat": 47.340715966944195,
		"stop_lon": 8.53019532667104
	},
	{
		"id": 138,
		"name": "Zürich, Tüffenwies",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			104,
			217
		],
		"stop_lat": 47.39761388310411,
		"stop_lon": 8.49485560338886
	},
	{
		"id": 139,
		"name": "Zürich, Universität Irchel",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			175,
			93
		],
		"stop_lat": 47.3960936722579,
		"stop_lon": 8.5451073603895
	},
	{
		"id": 140,
		"name": "Zürich, Schaffhauserplatz",
		"reachable_by_bus": [
			88,
			202
		],
		"reachable_by_tram": [
			9,
			99,
			55,
			167
		],
		"stop_lat": 47.392408499153994,
		"stop_lon": 8.53894491753958
	},
	{
		"id": 141,
		"name": "Zürich, Zypressenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			13,
			37
		],
		"stop_lat": 47.376661515558396,
		"stop_lon": 8.51397175263758
	},
	{
		"id": 142,
		"name": "Zürich, Höfliweg",
		"reachable_by_bus": [
			11,
			194
		],
		"reachable_by_tram": [],
		"stop_lat": 47.367615061012,
		"stop_lon": 8.51093544697684
	},
	{
		"id": 143,
		"name": "Zürich, Sprecherstrasse",
		"reachable_by_bus": [
			166,
			118
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3678827658739,
		"stop_lon": 8.55182675871565
	},
	{
		"id": 144,
		"name": "Zürich, Löwenbräu",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			119,
			89
		],
		"stop_lat": 47.388254769072,
		"stop_lon": 8.526278672031731
	},
	{
		"id": 145,
		"name": "Zürich, Salersteig",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			133,
			76
		],
		"stop_lat": 47.40604113643379,
		"stop_lon": 8.54836824487131
	},
	{
		"id": 146,
		"name": "Zürich, Kanonengasse",
		"reachable_by_bus": [
			60,
			157
		],
		"reachable_by_tram": [],
		"stop_lat": 47.378322195708506,
		"stop_lon": 8.5302492255881
	},
	{
		"id": 147,
		"name": "Dübendorf, Giessen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			50,
			197
		],
		"stop_lat": 47.402034407026704,
		"stop_lon": 8.60745942426892
	},
	{
		"id": 148,
		"name": "Zürich, Seebacherplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			74,
			80
		],
		"stop_lat": 47.4197796540743,
		"stop_lon": 8.54815264920309
	},
	{
		"id": 149,
		"name": "Zürich, Letzipark",
		"reachable_by_bus": [
			97,
			52
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3874458787206,
		"stop_lon": 8.50033532662275
	},
	{
		"id": 150,
		"name": "Zürich, Hirzenbach",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			229
		],
		"stop_lat": 47.403128839848,
		"stop_lon": 8.59106517033145
	},
	{
		"id": 151,
		"name": "Zürich, Fellenbergstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			120,
			168
		],
		"stop_lat": 47.375779448057,
		"stop_lon": 8.48823501974398
	},
	{
		"id": 152,
		"name": "Zürich, Alte Trotte",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			226,
			177
		],
		"stop_lat": 47.397492267850396,
		"stop_lon": 8.507773377176301
	},
	{
		"id": 153,
		"name": "Zürich, Brunaustrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			246,
			107
		],
		"stop_lat": 47.35592598550961,
		"stop_lon": 8.532198569754911
	},
	{
		"id": 154,
		"name": "Zürich, Würzgraben",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			215,
			24
		],
		"stop_lat": 47.3920740234923,
		"stop_lon": 8.495098148515611
	},
	{
		"id": 155,
		"name": "Zürich, Schiffbau",
		"reachable_by_bus": [
			119,
			225
		],
		"reachable_by_tram": [
			119,
			17,
			225
		],
		"stop_lat": 47.3879202670485,
		"stop_lon": 8.51978385252665
	},
	{
		"id": 156,
		"name": "Zürich, Morgental",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			137,
			19
		],
		"stop_lat": 47.343260404957704,
		"stop_lon": 8.53036600657505
	},
	{
		"id": 157,
		"name": "Zürich, Sihlpost / HB",
		"reachable_by_bus": [
			216,
			146
		],
		"reachable_by_tram": [
			216,
			122
		],
		"stop_lat": 47.3763391063895,
		"stop_lon": 8.53457012210531
	},
	{
		"id": 158,
		"name": "Schlieren, Wagonsfabrik",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			187,
			25
		],
		"stop_lat": 47.398477343333596,
		"stop_lon": 8.45463802811323
	},
	{
		"id": 159,
		"name": "Zürich, Waserstrasse",
		"reachable_by_bus": [
			128,
			161
		],
		"reachable_by_tram": [],
		"stop_lat": 47.358274961332995,
		"stop_lon": 8.58438170461667
	},
	{
		"id": 160,
		"name": "Wallisellen, Belair",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			16,
			130
		],
		"stop_lat": 47.4142542829426,
		"stop_lon": 8.58589985744705
	},
	{
		"id": 161,
		"name": "Zürich, Zentrum Witikon",
		"reachable_by_bus": [
			159,
			131
		],
		"reachable_by_tram": [],
		"stop_lat": 47.358195852449796,
		"stop_lon": 8.587498858653001
	},
	{
		"id": 162,
		"name": "Zürich, Höschgasse",
		"reachable_by_bus": [
			190,
			47
		],
		"reachable_by_tram": [
			190,
			211
		],
		"stop_lat": 47.3578733303911,
		"stop_lon": 8.55435102466438
	},
	{
		"id": 163,
		"name": "Zürich, Einfangstrasse",
		"reachable_by_bus": [
			69,
			96
		],
		"reachable_by_tram": [],
		"stop_lat": 47.4155065080687,
		"stop_lon": 8.51338784770283
	},
	{
		"id": 164,
		"name": "Zürich, Hölderlinstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			196,
			28
		],
		"stop_lat": 47.365990550098196,
		"stop_lon": 8.562498744292471
	},
	{
		"id": 165,
		"name": "Zürich, Burgwies",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			64,
			77
		],
		"stop_lat": 47.3579159277571,
		"stop_lon": 8.57190410531852
	},
	{
		"id": 166,
		"name": "Zürich, Kreuzplatz",
		"reachable_by_bus": [
			51,
			143
		],
		"reachable_by_tram": [
			51,
			223
		],
		"stop_lat": 47.364785824303596,
		"stop_lon": 8.55424322683027
	},
	{
		"id": 167,
		"name": "Zürich, Kronenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			140,
			84
		],
		"stop_lat": 47.3879263489224,
		"stop_lon": 8.53935814257034
	},
	{
		"id": 168,
		"name": "Zürich, Siemens",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			208,
			151
		],
		"stop_lat": 47.3786020121232,
		"stop_lon": 8.494334580524
	},
	{
		"id": 169,
		"name": "Zürich, Bahnhofstrasse/HB",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			182,
			184,
			5
		],
		"stop_lat": 47.375974112498504,
		"stop_lon": 8.53934017626465
	},
	{
		"id": 170,
		"name": "Schlieren, Geissweid",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			25
		],
		"stop_lat": 47.3978935971223,
		"stop_lon": 8.44481045890359
	},
	{
		"id": 171,
		"name": "Zürich, Hirschwiesenstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			76,
			175
		],
		"stop_lat": 47.4001494972038,
		"stop_lon": 8.543283780362481
	},
	{
		"id": 172,
		"name": "Zürich, Bahnhof Tiefenbrunnen",
		"reachable_by_bus": [
			108
		],
		"reachable_by_tram": [
			108
		],
		"stop_lat": 47.3506130197771,
		"stop_lon": 8.56093567569789
	},
	{
		"id": 173,
		"name": "Zürich, Saalsporthalle",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			39,
			245
		],
		"stop_lat": 47.357964610418996,
		"stop_lon": 8.52034979115572
	},
	{
		"id": 174,
		"name": "Zürich, Kapfstrasse",
		"reachable_by_bus": [
			10,
			196
		],
		"reachable_by_tram": [],
		"stop_lat": 47.361031527567995,
		"stop_lon": 8.57115850363259
	},
	{
		"id": 175,
		"name": "Zürich, Milchbuck",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			55,
			30,
			171,
			139
		],
		"stop_lat": 47.39748010630961,
		"stop_lon": 8.54161291393379
	},
	{
		"id": 176,
		"name": "Zürich, Opernhaus",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			20,
			98
		],
		"stop_lat": 47.3653151769051,
		"stop_lon": 8.54772145786665
	},
	{
		"id": 177,
		"name": "Zürich, Eschergutweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			105,
			152
		],
		"stop_lat": 47.3963247471331,
		"stop_lon": 8.513253100410191
	},
	{
		"id": 178,
		"name": "Zürich, Museum für Gestaltung",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			86,
			247
		],
		"stop_lat": 47.38205093162271,
		"stop_lon": 8.5350552123588
	},
	{
		"id": 179,
		"name": "Zürich, Kernstrasse",
		"reachable_by_bus": [
			18,
			212
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3746540301674,
		"stop_lon": 8.52439220993482
	},
	{
		"id": 180,
		"name": "Zürich, Winzerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			106,
			230
		],
		"stop_lat": 47.4036456474437,
		"stop_lon": 8.48655517016244
	},
	{
		"id": 181,
		"name": "Zürich, Winkelriedstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			235,
			4
		],
		"stop_lat": 47.382999801114906,
		"stop_lon": 8.54817061550877
	},
	{
		"id": 182,
		"name": "Zürich, Rennweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			169,
			115
		],
		"stop_lat": 47.37290198046289,
		"stop_lon": 8.53821728215934
	},
	{
		"id": 183,
		"name": "Zürich, Kantonalbank",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			67,
			115
		],
		"stop_lat": 47.368047038639205,
		"stop_lon": 8.53982526651814
	},
	{
		"id": 184,
		"name": "Zürich, Bahnhofquai/HB",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			169,
			5,
			247,
			135,
			68
		],
		"stop_lat": 47.377379325118,
		"stop_lon": 8.54166681285084
	},
	{
		"id": 185,
		"name": "Zürich, Probstei",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			26,
			100
		],
		"stop_lat": 47.4003866347285,
		"stop_lon": 8.5860795205039
	},
	{
		"id": 186,
		"name": "Zürich, Letzistrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			94,
			93
		],
		"stop_lat": 47.39051108181089,
		"stop_lon": 8.54549363596172
	},
	{
		"id": 187,
		"name": "Schlieren, Gasometerbrücke",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			158,
			224
		],
		"stop_lat": 47.3976017215914,
		"stop_lon": 8.460557925836401
	},
	{
		"id": 188,
		"name": "Zürich, Messe/Hallenstadion",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			133,
			103
		],
		"stop_lat": 47.411220856901295,
		"stop_lon": 8.550281656426751
	},
	{
		"id": 189,
		"name": "Zürich, Radiostudio",
		"reachable_by_bus": [
			126,
			31
		],
		"reachable_by_tram": [
			126,
			78
		],
		"stop_lat": 47.402070888486996,
		"stop_lon": 8.53498334713606
	},
	{
		"id": 190,
		"name": "Zürich, Fröhlichstrasse",
		"reachable_by_bus": [
			108,
			162
		],
		"reachable_by_tram": [
			108,
			162
		],
		"stop_lat": 47.3551105134921,
		"stop_lon": 8.55699207160005
	},
	{
		"id": 191,
		"name": "Zürich, ETH/Universitätsspital",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			4,
			14,
			46
		],
		"stop_lat": 47.3772089983102,
		"stop_lon": 8.54746992958706
	},
	{
		"id": 192,
		"name": "Zürich, Heerenwiesen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			81,
			231
		],
		"stop_lat": 47.404825165788495,
		"stop_lon": 8.57605432193173
	},
	{
		"id": 193,
		"name": "Zürich, Bahnhof Selnau",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			237,
			122
		],
		"stop_lat": 47.3706996687536,
		"stop_lon": 8.53178534472415
	},
	{
		"id": 194,
		"name": "Zürich, Goldbrunnenplatz",
		"reachable_by_bus": [
			109,
			142
		],
		"reachable_by_tram": [
			6,
			44
		],
		"stop_lat": 47.3702920484894,
		"stop_lon": 8.51362140967673
	},
	{
		"id": 195,
		"name": "Zürich, Bahnhof Altstetten",
		"reachable_by_bus": [
			101,
			52
		],
		"reachable_by_tram": [],
		"stop_lat": 47.390669202531996,
		"stop_lon": 8.48925909916802
	},
	{
		"id": 196,
		"name": "Zürich, Klusplatz",
		"reachable_by_bus": [
			65,
			42,
			174
		],
		"reachable_by_tram": [
			164
		],
		"stop_lat": 47.3640374201824,
		"stop_lon": 8.56620878641641
	},
	{
		"id": 197,
		"name": "Dübendorf, Ringwiesen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			218,
			147
		],
		"stop_lat": 47.3973584907472,
		"stop_lon": 8.60412667456437
	},
	{
		"id": 198,
		"name": "Zürich, Zwielplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			106,
			219
		],
		"stop_lat": 47.402162092027396,
		"stop_lon": 8.49662528449882
	},
	{
		"id": 199,
		"name": "Zürich, Rudolf-Brun-Brücke",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			5,
			92
		],
		"stop_lat": 47.373753678562096,
		"stop_lon": 8.54275377434478
	},
	{
		"id": 200,
		"name": "Zürich, Vogelsangstrasse",
		"reachable_by_bus": [
			205,
			235
		],
		"reachable_by_tram": [],
		"stop_lat": 47.38354113567411,
		"stop_lon": 8.54923062754418
	},
	{
		"id": 201,
		"name": "Zürich, Röntgenstrasse",
		"reachable_by_bus": [
			60,
			86
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3820691792739,
		"stop_lon": 8.52932396084532
	},
	{
		"id": 202,
		"name": "Zürich, Scheuchzerstrasse",
		"reachable_by_bus": [
			140,
			235
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3880783955424,
		"stop_lon": 8.54364310647618
	},
	{
		"id": 203,
		"name": "Zürich, Farbhof",
		"reachable_by_bus": [
			101,
			111
		],
		"reachable_by_tram": [
			75,
			111
		],
		"stop_lat": 47.3902495734235,
		"stop_lon": 8.478910507093518
	},
	{
		"id": 204,
		"name": "Zürich, Bethanien",
		"reachable_by_bus": [
			205,
			238
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3808830688024,
		"stop_lon": 8.55605782370444
	},
	{
		"id": 205,
		"name": "Zürich, Spyriplatz",
		"reachable_by_bus": [
			200,
			204
		],
		"reachable_by_tram": [],
		"stop_lat": 47.38214825235661,
		"stop_lon": 8.55203337123103
	},
	{
		"id": 206,
		"name": "Zürich Flughafen, Fracht",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			91
		],
		"stop_lat": 47.4525613162346,
		"stop_lon": 8.57216461675095
	},
	{
		"id": 207,
		"name": "Zürich, Fernsehstudio",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			232,
			23
		],
		"stop_lat": 47.418375571806095,
		"stop_lon": 8.561420765951379
	},
	{
		"id": 208,
		"name": "Zürich, Hubertus",
		"reachable_by_bus": [
			12,
			213
		],
		"reachable_by_tram": [
			213,
			168
		],
		"stop_lat": 47.3774097405616,
		"stop_lon": 8.49916751675323
	},
	{
		"id": 209,
		"name": "Zürich, Strassenverkehrsamt",
		"reachable_by_bus": [
			7
		],
		"reachable_by_tram": [
			124,
			71
		],
		"stop_lat": 47.353144808993704,
		"stop_lon": 8.511097143728
	},
	{
		"id": 210,
		"name": "Wallisellen, Glatt (Tram)",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			16,
			50
		],
		"stop_lat": 47.409184290489904,
		"stop_lon": 8.59806304639572
	},
	{
		"id": 211,
		"name": "Zürich, Feldeggstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			20,
			162
		],
		"stop_lat": 47.3604899619055,
		"stop_lon": 8.55204235438387
	},
	{
		"id": 212,
		"name": "Zürich,Kalkbreite/Bhf.Wiedikon",
		"reachable_by_bus": [
			179,
			109
		],
		"reachable_by_tram": [
			227,
			13
		],
		"stop_lat": 47.374495861403894,
		"stop_lon": 8.52128403905133
	},
	{
		"id": 213,
		"name": "Zürich, Altes Krematorium",
		"reachable_by_bus": [
			208,
			37
		],
		"reachable_by_tram": [
			208,
			37
		],
		"stop_lat": 47.3777321431841,
		"stop_lon": 8.50760269727229
	},
	{
		"id": 214,
		"name": "Zürich, In der Ey",
		"reachable_by_bus": [
			244,
			123
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3695680584622,
		"stop_lon": 8.49188217979801
	},
	{
		"id": 215,
		"name": "Zürich, Bahnhof Altstetten N",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			154
		],
		"stop_lat": 47.3920253723101,
		"stop_lon": 8.49048080795459
	},
	{
		"id": 216,
		"name": "Zürich, Löwenplatz",
		"reachable_by_bus": [
			157,
			135
		],
		"reachable_by_tram": [
			157,
			135
		],
		"stop_lat": 47.3760775276908,
		"stop_lon": 8.53747168047342
	},
	{
		"id": 217,
		"name": "Zürich, Grünaustrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			54,
			138
		],
		"stop_lat": 47.3950355796226,
		"stop_lon": 8.48994181878404
	},
	{
		"id": 218,
		"name": "Zürich, Bahnhof Stettbach",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			197,
			26
		],
		"stop_lat": 47.3969267532335,
		"stop_lon": 8.59567352773963
	},
	{
		"id": 219,
		"name": "Zürich, Meierhofplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			226,
			198
		],
		"stop_lat": 47.401815517734,
		"stop_lon": 8.49995803420337
	},
	{
		"id": 220,
		"name": "Zürich, Herdernstrasse",
		"reachable_by_bus": [
			83,
			97
		],
		"reachable_by_tram": [],
		"stop_lat": 47.385311078409,
		"stop_lon": 8.50772846141208
	},
	{
		"id": 221,
		"name": "Zürich, Oerlikerhus",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			232,
			103
		],
		"stop_lat": 47.4174698884865,
		"stop_lon": 8.55369525450688
	},
	{
		"id": 222,
		"name": "Zürich, Neuaffoltern",
		"reachable_by_bus": [
			31,
			96
		],
		"reachable_by_tram": [],
		"stop_lat": 47.411536973582,
		"stop_lon": 8.525362390441801
	},
	{
		"id": 223,
		"name": "Zürich, Bahnhof Stadelhofen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			166,
			98
		],
		"stop_lat": 47.3661122380425,
		"stop_lon": 8.54812569974456
	},
	{
		"id": 224,
		"name": "Schlieren, Mülligen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			187,
			111
		],
		"stop_lat": 47.3957896248255,
		"stop_lon": 8.46705274534149
	},
	{
		"id": 225,
		"name": "Zürich, Bahnhof Hardbrücke",
		"reachable_by_bus": [
			83,
			155
		],
		"reachable_by_tram": [
			83,
			155
		],
		"stop_lat": 47.3853049962333,
		"stop_lon": 8.5173404349535
	},
	{
		"id": 226,
		"name": "Zürich, Schwert",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			219,
			152
		],
		"stop_lat": 47.3996448163545,
		"stop_lon": 8.50492571772524
	},
	{
		"id": 227,
		"name": "Zürich, Bezirksgebäude",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			122,
			212
		],
		"stop_lat": 47.373948350481996,
		"stop_lon": 8.52587443015382
	},
	{
		"id": 228,
		"name": "Zürich, Tunnelstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			237,
			79,
			95
		],
		"stop_lat": 47.366197419436396,
		"stop_lon": 8.532620777938499
	},
	{
		"id": 229,
		"name": "Zürich, Altried",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			150,
			33
		],
		"stop_lat": 47.405542591864204,
		"stop_lon": 8.59136161437525
	},
	{
		"id": 230,
		"name": "Zürich, Frankental",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			180
		],
		"stop_lat": 47.405414915057,
		"stop_lon": 8.481767149697419
	},
	{
		"id": 231,
		"name": "Zürich, Schwamendingerplatz",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			192,
			66,
			239
		],
		"stop_lat": 47.404879885070706,
		"stop_lon": 8.57148189713492
	},
	{
		"id": 232,
		"name": "Glattpark",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			207,
			221,
			27
		],
		"stop_lat": 47.420259829461095,
		"stop_lon": 8.55691122322447
	},
	{
		"id": 233,
		"name": "Kloten Balsberg, Bahnhof",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			91,
			248
		],
		"stop_lat": 47.4414986492587,
		"stop_lon": 8.56827491157017
	},
	{
		"id": 234,
		"name": "Zürich, Toni-Areal",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			17,
			87
		],
		"stop_lat": 47.390091451443396,
		"stop_lon": 8.51087256490694
	},
	{
		"id": 235,
		"name": "Zürich, Seilbahn Rigiblick",
		"reachable_by_bus": [
			202,
			200
		],
		"reachable_by_tram": [
			94,
			181
		],
		"stop_lat": 47.3857003361929,
		"stop_lon": 8.54844011009405
	},
	{
		"id": 236,
		"name": "Zürich, Nordstrasse",
		"reachable_by_bus": [
			88,
			86
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3880662318289,
		"stop_lon": 8.53610624124137
	},
	{
		"id": 237,
		"name": "Zürich, Stockerstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			115,
			193,
			228
		],
		"stop_lat": 47.3677306610054,
		"stop_lon": 8.53495639767754
	},
	{
		"id": 238,
		"name": "Zürich, Toblerplatz",
		"reachable_by_bus": [
			112,
			204
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3791920549131,
		"stop_lon": 8.5594354891732
	},
	{
		"id": 239,
		"name": "Zürich, Roswiesen",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			231,
			100
		],
		"stop_lat": 47.403128839848,
		"stop_lon": 8.57670110893638
	},
	{
		"id": 240,
		"name": "Zürich, Bahnhof Oerlikon Ost",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			133,
			103,
			80
		],
		"stop_lat": 47.4132755814091,
		"stop_lon": 8.54597872621522
	},
	{
		"id": 241,
		"name": "Zürich, Kienastenwies",
		"reachable_by_bus": [
			82
		],
		"reachable_by_tram": [],
		"stop_lat": 47.3552200552421,
		"stop_lon": 8.60082087431835
	},
	{
		"id": 242,
		"name": "Zürich, Grimselstrasse",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			48,
			35
		],
		"stop_lat": 47.3868985022676,
		"stop_lon": 8.49031911120342
	},
	{
		"id": 243,
		"name": "Zürich, Hungerbergstrasse",
		"reachable_by_bus": [
			85,
			69
		],
		"reachable_by_tram": [],
		"stop_lat": 47.42091626467629,
		"stop_lon": 8.50216788980261
	},
	{
		"id": 244,
		"name": "Zürich, Schulhaus Altweg",
		"reachable_by_bus": [
			12,
			214
		],
		"reachable_by_tram": [],
		"stop_lat": 47.372640384714096,
		"stop_lon": 8.494154917467151
	},
	{
		"id": 245,
		"name": "Zürich, Laubegg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			71,
			173
		],
		"stop_lat": 47.3587861235647,
		"stop_lon": 8.51722365396655
	},
	{
		"id": 246,
		"name": "Zürich, Billoweg",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			153,
			40
		],
		"stop_lat": 47.351440733461,
		"stop_lon": 8.53191110886395
	},
	{
		"id": 247,
		"name": "Zürich, Sihlquai/HB",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			184,
			178
		],
		"stop_lat": 47.379763842657006,
		"stop_lon": 8.53739981525068
	},
	{
		"id": 248,
		"name": "Glattbrugg, Unterriet",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			2,
			233
		],
		"stop_lat": 47.4379928596955,
		"stop_lon": 8.56242687906973
	},
	{
		"id": 249,
		"name": "Zürich, Bahnhof Oerlikon",
		"reachable_by_bus": [],
		"reachable_by_tram": [
			133,
			15
		],
		"stop_lat": 47.4115248152832,
		"stop_lon": 8.54502651201392
	}
];

export default stations;