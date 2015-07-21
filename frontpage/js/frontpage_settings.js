<!-- Change the witch text for on/off switches -->
<!-- var txt_on = '<img src=icons/on.png>'; -->
<!-- var txt_off = '<img src=icons/off.png>'; -->
var txt_on = 'Aan';
var txt_off = 'Uit';
var txt_zonon = 'Uit'; <!-- Dicht -->
var txt_zonoff = 'In'; <!-- Open -->
var txt_zonstopped = 'Gestopt';
var txt_zonstop = '| |';
<!-- var txt_dim_plus = ' + '; -->
<!-- var txt_dim_min = ' - '; -->

<!-- Change thetText displayed in PopUps -->
var txt_switch_protected = '\'Schakelaar is beveiligd\'';
var txt_switch_on = '\'Inschakelen\'';
var txt_switch_off = '\'Uitschakelen\'';
var txt_blind_up = '\'Zonnescherm openen\'';
var txt_blind_down = '\'Zonnescherm sluiten\'';
var txt_blind_stop = '\'Zonnescherm stoppen\'';

<!-- Change the timeout of the PopUp -->
var switch_protected_timeout = '1500';
var switch_on_timeout = '1500';
var switch_off_timeout = '1500';
var camera_doorbell_timeout = '15400';

<!-- Value for ZWave dimmer when on-->
var z_dimmer = '40';

<!-- Set values so colors can change -->
var temp_freeze = '0';
var temp_freeze_color = ';color:#0090ff;';
var humidity_max = '70';
var humidity_max_color = ';color:#0090ff;';
var CPUmem_max = '95';
var mem_max_color = ';color:red;';
var CPUusage_max = '50';
var cpu_max_color = ';color:red;';
var color_on = ';color:#1B9772;';
var color_off = ';color:#E24E2A;';
var show_sonos_volume = true; <!-- show Sonos volume in desc text -->

<!-- Change idx of special items -->
var idx_CPUmem = '11';
var idx_HDDmem = '13';
var idx_CPUusage = '17';
var idx_CPUtemp = '1100';
var idx_SunState = '66';
var idx_IsDonker = '66'; <!-- for day night css -->
var idx_FibaroWP = '1100';
var idx_Alarm = '109';
var idx_Rainmeter = '39';
var idx_Temp1 = '18';
var idx_Temp2 = '22';
var idx_Temp_buiten = '176';
var idx_Tempf = '154';
var idx_Iphone5s = '10';
var idx_Voordeur = '153';
var idx_Garagedeur = '149';
var idx_WindRichting = '100';
var idx_WindSnelheid = '101';
var idx_BewegingF = '145';
var idx_LuxF = '147';
var idx_ZonV = '110';
var idx_ZonA = '111';
var idx_Barometer = '49';
var idx_Visibility = '53';
var idx_Usage1 = '140';
var idx_Usage2 = '142';

var idx_water_meter = '1100';
var idx_doorbell = '1100';
var idx_electricity_today = '1100';
var idx_gas_today = '1100';
var idx_ram_usage = '1100';
var idx_cpu_usage = '1100';

var IsNight = 'No';

<!-- Text for vdesc -->
var desc_alarm_off = 'Alarm uit';
var desc_alarm_home = 'Alarm aan (thuis)';
var desc_alarm_away = 'Alarm aan (weg)';
var desc_sunrise = 'Zon op';
var desc_sunset = 'Zon onder';
var desc_showsunboth = ''; // used to show sunrise and sunset in vdesc
var txt_sunboth='';
var txt_sunset='Zon onder';
var txt_sunrise='Zon op';
var var_sunrise='';
var var_sunset='';
var desc_protected = '<img src=icons/lock-closed_w.png align=right style="margin:1.5px 3px 0px -10px">'; //shows lock picture if device is protected or when plusmin is 4

<!-- This triggers the camera PopUp when the doorbell is pressed -->
<!-- Text could be 'On', 'Group On' or 'Chime' -->
var doorbell_status = 'On';
var doorbel_idx = '1100';
var doorbel_cmd = "lightbox_open('camera1', 15400);"

// ############################################################################################################
// #### vvvvv   USER VALUES below vvvvv   #######
// ############################################################################################################

$(document).ready(function() {
        $.roomplan=0;	// define roomplan in Domoticz and create items below.
        $.domoticzurl="http://192.168.1.102:8084";
		//format: idx, value, label, description,lastseen(1 when lastseen is wanted, 2 is only time) ,plusmin button or protected (1 for buttons, 2 for volume of Sonos, 4 for protected), [override css], [alarm value]
        $.PageArray = [

	['0','Desc',		'cell1',	'Kamer','0','0'], //Desc means show the sub cells
	['22','Temp',		'cell1a',	'Kamer','1','0'], //Lastseen only from cell_a possible
	['22','Humidity',	'cell1b',	'Kamer','0','0'],
	['0','Desc',		'cell2',	'Garage','0','0'],
	['18','Temp',		'cell2a',	'Garage','1','0'],
	['18','Humidity',	'cell2b',	'Garage','0','0'],
	['0','Data',		'cell3',	'Camera garage','0','0'],
	['0','Desc',		'cell4',	'Buitentemp + vocht','0','0'],
	['176','Data',		'cell4a',	'Buitentemp','1','0'],
	['98','Humidity',	'cell4b',	'Buitenvocht','0','0'],
	['0','Desc',		'cell5',	'Regen + regenkans','0','0'],
	['39','Rain',		'cell5a',	'Regen','1','0'],
	['97','Humidity',	'cell5b',	'Regenkans','0','0'],

	['8','Level',		'cell6',	'Hue kamer bank','1','1'],
	['9','Level',		'cell7',	'Hue kamer gang','1','1'],
	['0','Status',		'cell8',	'Lampen kamer (groep)','1','0'],
	['116','Status',	'cell9',	'Sonos Keuken','1','2'],
	['115','Status',	'cell10',	'Sonos Kantoor','1','2'],

	['24','Level',		'cell11',	'Keuken','1','1'],
	['25','Status',		'cell12',	'Keukenkastjes','1','0'],
	['0','Status',		'cell13',	'Kantoor lamp (25%)','1','0'],
	['171','Level',		'cell14',	'Kantoor','1','5'], //Level using for ZWave dimmer, vplusmin = 5 to start with level from z_dimmer
	['177','Status',	'cell15',	'Tuin','1','0'],

	['153','Status',	'cell16',	'Voordeur','1','4'],
	['149','Status',	'cell17',	'Garagedeur','1','4'],
	['10','Status',		'cell18',	'iPhone 5s','1','4'],
	['71','Data',		'cell19',	'Scherm (V)','1','0'],
	['79','Data',		'cell20',	'Scherm (A)','1','0'],

	['66','Status',		'cell21',	'Zon','2','0'],
	['0','Tijd',		'cell22',	'Tijd','0','0'],
	['109','Data',		'cell23',	'Alarm','1','0'],
	
	['0','Temp',		'cell25',	'Temperatuur buiten (C)','0','0'],
	
	['0','SunBoth',		'cell26',	'Dummy cel voor bepaling zon op en zon onder','0','0'],


	['37','Status',		'cell00',	'IsDonker','0','0'],

	['0','Desc',		'cell2_1',	'Barometer + zicht','0','0'],
	['49','Barometer',	'cell2_1a',	'Barometer','1','0'],
	['53','Visibility',	'cell2_1b',	'Zicht','0','0'],
	['0','Desc',		'cell2_2',	'Windrichting','0','0'],
	['100','Data',		'cell2_2a',	'Windrichting','1','0'],
	['101','Data',		'cell2_2b',	'Windsnelheid','0','0'],
	['49','ForecastStr','cell2_3',	'Weersvoorspelling','0','0'],
	['0','Desc',		'cell2_4',	'NAS CPU + HDD','0','0'],
	['17','Data',		'cell2_4a',	'CPU','1','0'],
	['13','Data',		'cell2_4b',	'HDD','0','0'],
	['0','Desc',		'cell2_5',	'Temp + Lux F','1','0'],
	['154','Data',		'cell2_5a',	'Temperatuur Fibaro','1','0'],
	['147','Data',		'cell2_5b',	'Temperatuur Fibaro','1','0'],

	['43','Level',		'cell2_6',	'Lamp slaapkamer','1','1'],
	['21','Status',		'cell2_7',	'Slaapkamer kast','1','0'],
	['145','Data',		'cell2_8',	'Bewegingssensor F','1','4'],
	['32','Status',		'cell2_9',	'Led gang','1','0'],
	['33','Status',		'cell2_10',	'Led zolder','1','0'],

	['29','Status',		'cell2_11',	'Lamp TV','1','0'],
	['30','Status',		'cell2_12',	'Lamp vensterbank','1','0'],
	['0','Usage',		'cell2_13',	'Cell 2_13','0','0'],
	['45','Status',		'cell2_14',	'Vijver pomp','1','0'],
	['46','Status',		'cell2_15',	'Vijver luchtpomp','1','0'],

	['139','Status',	'cell2_16',	'Droger','1','0'],
	['34','Status',		'cell2_17',	'Garage','1','0'],
	['0','Data',		'cell2_18',	'0','0','0'],
	['0','Data',		'cell2_19',	'0','0','0'],
	['141','Status',	'cell2_20',	'IJskast','1','0'],

	['140','Data',		'cell2_21',	'Verbruik droger','1','0'],
	['0','Tijd',		'cell2_22',	'Tijd','0','0'],
	['142','Data',		'cell2_23',	'Verbruik IJskast','1','0'],
	['73','ForecastStr','cell2_25',	'Weersvoorspelling (FC)','0','0'],
	];
	$.PageArray_Scenes = [
	
	['5','Status',		'cell8',	'Lampen kamer (groep)','1','0'],
	['7','Status',		'cell13',	'Studeerkamer (30%)','1','0'],

	];

// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################

RefreshData();
});


