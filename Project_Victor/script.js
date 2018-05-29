var ap_radio = document.getElementById('ap-radio'),
  	wifi_radio = document.getElementById('wifi-radio'),
  	combobox_ap = document.getElementById('combobox-ap-id'),
  	combobox_wifi = document.getElementById('combobox-wifi-id')

ap_radio.onchange = function()
{
  combobox_ap.style.visibility = 'visible';
  combobox_wifi.style.visibility = 'hidden';
}

wifi_radio.onchange = function()
{
  combobox_ap.style.visibility = 'hidden';
  combobox_wifi.style.visibility = 'visible';
}