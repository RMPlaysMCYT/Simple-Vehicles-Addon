scoreboard players operation @p[r=5,tag=ride] speed = @s speed
scoreboard players operation @p[r=5,tag=ride] oil = @s oil
scoreboard players add @s[tag=move] tick 1
scoreboard players remove @s[scores={tick=10..,oil=1..}] oil 1

scoreboard players set @s[scores={tick=10..}] tick 0
scoreboard players add @s speed 0
scoreboard players add @s oil 0

tag @s[tag=!car,type=!player] add car

scoreboard players remove @s[tag=!move,scores={speed=1..}] speed 7

scoreboard players set @s[scores={speed=..-1}] speed 0
scoreboard players set @s[tag=car,scores={oil=0}] speed 0

effect @s[tag=car,scores={oil=0}] slowness 3 255 true
effect @s[tag=car,scores={speed=..10}] slowness 20 3 true
effect @s[tag=car,scores={speed=..20}] slowness 20 2 true
effect @s[tag=car,scores={speed=..25}] slowness 20 1 true
effect @s[tag=car,scores={speed=26..}] slowness 0 0 true
effect @s[tag=car,scores={speed=0..}] speed 0 0 true
effect @s[tag=car,scores={speed=26..50}] slowness 20 1 true
effect @s[tag=car,scores={speed=51..75}] slowness 20 0 true
effect @s[tag=car,scores={speed=101..125}] speed 20 0 true
effect @s[tag=car,scores={speed=126..150}] speed 20 1 true
effect @s[tag=car,scores={speed=151..175}] speed 20 2 true
effect @s[tag=car,scores={speed=176..200}] speed 20 3 true
effect @s[tag=car,scores={speed=201..225}] speed 20 4 true
effect @s[tag=car,scores={speed=226..250}] speed 20 5 true
effect @s[tag=car,scores={speed=251..275}] speed 20 6 true
effect @s[tag=car,scores={speed=276..300}] speed 20 7 true
effect @s[tag=car,scores={speed=301..325}] speed 20 8 true
effect @s[tag=car,scores={speed=326..350}] speed 20 9 true
effect @s[tag=car,scores={speed=351..375}] speed 20 10 true
effect @s[tag=car,scores={speed=376..400}] speed 20 11 true
effect @s[tag=car,scores={speed=401..450}] speed 20 12 true
effect @s[tag=car,scores={speed=451..500}] speed 20 13 true
effect @s[tag=car,scores={speed=501..550}] speed 20 14 true
effect @s[tag=car,scores={speed=551..600}] speed 20 15 true
effect @s[tag=car,scores={speed=601..650}] speed 20 16 true
effect @s[tag=car,scores={speed=651..700}] speed 20 17 true
effect @s[tag=car,scores={speed=701..750}] speed 20 18 true
effect @s[tag=car,scores={speed=751..800}] speed 20 19 true
effect @s[tag=car,scores={speed=801..850}] speed 20 20 true
effect @s[tag=car,scores={speed=851..900}] speed 20 21 true
effect @s[tag=car,scores={speed=901..950}] speed 20 22 true
effect @s[tag=car,scores={speed=951..990}] speed 20 23 true
effect @s[tag=car,scores={speed=1000..}] speed 20 24 true
 

scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ae86,scores={speed=..172,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ambulance,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:apv,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:bus_2,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:bus,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:car,scores={speed=..150,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:car4x4,scores={speed=..225,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:corolla,scores={speed=..215,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:fire_truck,scores={speed=..215,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ev_4,scores={speed=..215,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:fire_truck,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:jeep_ph,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:modern_jeep_ph,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:limmo,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:car_lowrider,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:mini_bus,scores={speed=..150,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ford_mustang_blue,scores={speed=..350,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:motor_bike,scores={speed=..190,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:helicopter,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ob_van,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:pajero,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:pick_up_truck,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:plane,scores={speed=..241,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:police_car,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:taxi,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:tesla_truck,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:travis,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:truck,scores={speed=..320,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:van,scores={speed=..320,oil=1..}] speed 1



scoreboard players add @s[c=1,tag=move,type=simple_vehicles:cadillac_dts_2010,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:honda_accord_2019,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:ice_cream_truck,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:opel_astral,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:opel_corsa,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:volkswagen_beetle,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:volt_bike,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:hyundai_starex,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:hyundai_starex_casket,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[c=1,tag=move,type=simple_vehicles:speedboat_two,scores={speed=..400,oil=1..}] speed 1




scoreboard players add @s[tag=move,type=simple_vehicles:century,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:container_van,scores={speed=..270,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:double_deck_bus,scores={speed=..230,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:hafei_zhongyi,scores={speed=..240,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:scooter,scores={speed=..150,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:van_v2,scores={speed=..280,oil=1..}] speed 1




scoreboard players add @s[tag=move,type=simple_vehicles:armored_truck,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:grummanllv,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:jetmax,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:land_cruiser,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:motorcycle,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:rancher,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:sabre,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:school_bus,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:submarine,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tricycle,scores={speed=..400,oil=1..}] speed 1





scoreboard players add @s[tag=move,type=simple_vehicles:lowrider_v2,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:train_locomotive,scores={speed=..80,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:ford_rancherogt_sass,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:isuzu_dmax,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:jeep_wrangler,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:minicar,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:mit_aerojp,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:mitsubishi_montero,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:rally_car,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tentmushi,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:vespa_primavera,scores={speed=..400,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:go_kart_v2,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:go_kart_withnumbers,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:go_kart_withnumbers,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:rocket_v,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:asphalt_paving_truck,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:bulldozer,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:dump_truck,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:mixer_truck,scores={speed=..400,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:roller_truck,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:multicab,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:pickup_flash_express,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:golf_cart_street_legal,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:golf_cart,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:quad_bike,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tamarraw_fx,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:isuzu_erga,scores={speed=..200,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:shenhaoq5,scores={speed=..160,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tricycle_cargo,scores={speed=..400,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tricycle_cont,scores={speed=..130,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tuktukthai,scores={speed=..100,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:bajajre,scores={speed=..120,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:lightermax,scores={speed=..180,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:rally_car_2_0,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:dragster,scores={speed=..250,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:f1_car,scores={speed=..300,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:monster_truck,scores={speed=..120,oil=1..}] speed 1

scoreboard players add @s[tag=move,type=simple_vehicles:farm_truck,scores={speed=..50,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tractor_seeder,scores={speed=..34,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tractor_small,scores={speed=..29,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tractor_sprinkler,scores={speed=..25,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tractor_plow,scores={speed=..25,oil=1..}] speed 1

scoreboard players add @s[tag=move,type=simple_vehicles:biplane,scores={speed=..95,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:blimp,scores={speed=..67,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:gliding_plane,scores={speed=..80,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:hot_air_balloon,scores={speed=..60,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:monoplane,scores={speed=..70,oil=1..}] speed 1

scoreboard players add @s[tag=move,type=simple_vehicles:gyroplane,scores={speed=..70,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:private_plane,scores={speed=..70,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:seaplane,scores={speed=..70,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:tiltrotor,scores={speed=..70,oil=1..}] speed 1

scoreboard players add @s[tag=move,type=simple_vehicles:vintage_van_a,scores={speed=..220,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:vintage_van_b,scores={speed=..230,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:vintage_bus_a,scores={speed=..230,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:chrysler_windsor,scores={speed=..270,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:mitsubishi_minivan,scores={speed=..270,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:mitsubishi_minivan_trucktype,scores={speed=..270,oil=1..}] speed 1
scoreboard players add @s[tag=move,type=simple_vehicles:auv_car_b,scores={speed=..270,oil=1..}] speed 1
