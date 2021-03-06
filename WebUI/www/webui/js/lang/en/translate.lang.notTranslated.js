jQuery.extend(true,langJSON, {
  "en" : {
    "comment" : "ATTENTION **** this is translated **** ATTENTION",

    "lblDewPointAlarm" :  "Dew point alarm",
    "stringTableDewPointAlarmFalse" : "No dew point alarm",
    "stringTableDewPointAlarmTrue" :  "Dew point alarm",
    "lblEmergencyOperation" : "Connection failure with room control unit",
    "stringTableEmergencyOperationFalse" :  "Connection with room control unit OK",
    "stringTableEmergencyOperationTrue" : "Connection failure with room control unit",
    "lblExternalClock" :  "Energy-saving temperature mode",
    "stringTableExternalClockFalse" : "Energy-saving temperature mode inactive",
    "stringTableExternalClockTrue" :  "Energy-saving temperature mode active",
    "lblFrostProtection" :  "Frost protection",
    "stringTableFrostProtectionFalse" : "Frost protection inactive",
    "stringTableFrostProtectionTrue" :  "Frost protection active",
    "lblHumidityLimiter" :  "Humidity limit",
    "stringTableHumidityLimiterFalse" : "Operating mode humidity limit inactive",
    "stringTableHumidityLimiterTrue" :  "Operating mode humidity limit active",
    "stringTableChangeOverFalse" :  "Operating mode change over inactive",
    "stringTableChangeOverTrue" : "Operating mode change over active",
    "stringTableTactileSwitchFalse" : "Operating mode push-button inactive",
    "stringTableTactileSwitchTrue" :  "Operating mode push-button active",
    "lblSwitchingStatus" :  "Controlling",
    "stringTableTemperatureLimiterFalse" :  "Operating mode temperature limit inactive",
    "stringTableTemperatureLimiterTrue" : "Operating mode temperature limit active",
    "stringTableHumidityAlarmFalse" : "Humidity not exceeded",
    "stringTableHumidityAlarmTrue" :  "Humidity exceeded",
    "stringTableDateTimeUnknownFalse" : "Correct time known",
    "stringTableDateTimeUnknownTrue" :  "Correct time unknown",
    "stringTableMiobDinConfig" :  "Digital input mode",
    "channelModeChangeOver" : "Change over",
    "channelModeExternalClock" :  "Temperature reduction (eco mode)",
    "channelModeHumidityLimiter" :  "Humidity limiter",
    "channelModeTactileSwitch" :  "Push-button",
    "channelModeTemperatureLimiter" : "Temperature limiter",
    "stringTableAnalogOutputTransceiverLevel" : "Output level",
    "dialogQuestionRemoveInternalLink" :  "<span class='attention'>PLEASE NOTE:</span><br/><br>This is an internal connection of the device. It may occur that the device cannot be operated any more if you delete this connection. In this case, you have to create the connection again.<br/><br/>Do you really want to delete the connection?",
    "chType_CLIMATECONTROL_FLOOR_PUMP_TRANSCEIVER" :  "Pump control<br/>connection partner<br/>room thermostat",
    "chType_CLIMATECONTROL_FLOOR_TRANSCEIVER" : "Floor heating<br/>connection partner<br/>room thermostat",
    "chType_CLIMATECONTROL_HEAT_DEMAND_TRANSMITER" :  "Heat demand channel",
    "chType_CLIMATECONTROL_INPUT_RECEIVER" :  "* CLIMATECONTROL_INPUT_RECEIVER",
    "chType_CLIMATECONTROL_DEHUMIDIFIER_TRANSMITER" : "Humidity control",
    "lblLinkNoDescriptionAvailable" : "There is no description available.<br/>Please enter the description manually.",
    "lblPassed" : "exceeded",
    "lblNotPassed" :  "not exceeded",
    "stringTableClimateControlDehumidifierTitle" :  "Sensor humidity",
    "stringTableClimateControlFloorTransmitterTitle" :  "Room thermostat",
    "stringTableClimateControlFloorTransceiverTitle" :  "Floor heating",
    "stringTableClimateControlFloorPumpTransceiverTitle" :  "Pump control",
    "stringTableClimateControlHeatDemandTransmitterTitle" : "Channel heating demand",
    "stringTableGenericTransmitterTitle" :  "Input channel",
    "stringTableAnalogOutputTransceiverTitle" : "Analogue output",
    "stringTableJalousieRunningTimeSlats" : "Slat adjustment time",
    "stringTableJalousiePositionSaveTime" : "Position saving time",
    "stringTableJalousieOldLevel" : "Last value",
    "stringTableJalousieNoModification" : "No change",
    "stringTableJalousieLevelCombined" :  "Common value: Blind level, slats position",
    "stringTableJalousieSlatsLevel" : "Slats position",
    "stringTableJalousieSlatsOldLevel" :  "Slats position, last value",
    "stringTableJalousieSlatsNoModification" :  "Slats position, no change",
    "stringTable8BitTransmitterTitle" : "8-bit transmitter",
    "lblDigitalStatus" :  "Current value:",
    "stringTableTransmitterState" : "Value of data input",
    "lblDataInputPropertie" : "Data input settings",
    "stringTableTransmitterDataInputPropertie0" : "Input 0",
    "stringTableTransmitterDataInputPropertie1" : "Input 1",
    "stringTableTransmitterDataInputPropertie2" : "Input 2",
    "stringTableTransmitterDataInputPropertie3" : "Input 3",
    "stringTableTransmitterDataInputPropertie4" : "Input 4",
    "stringTableTransmitterDataInputPropertie5" : "Input 5",
    "stringTableTransmitterDataInputPropertie6" : "Input 6",
    "stringTableTransmitterDataInputPropertie7" : "Input 7",
    "stringTableTransmitterDataTransmissionCondition0" :  "Mode 0",
    "stringTableTransmitterDataTransmissionCondition1" :  "Mode 1",
    "stringTableTransmitterDataTransmissionCondition2" :  "Mode 2",
    "stringTableTransmitterDataTransmissionCondition3" :  "Mode 3",
    "stringTableTransmitterDataTransmissionCondition4" :  "Mode 4",
    "stringTableTransmitterDataTransmissionCondition5" :  "Mode 5",
    "stringTableTransmitterDataTransmissionCondition6" :  "Mode 6",
    "stringTableTransmitterDataStabilityFilterTime" : "Data stability filter time before transmission",
    "lblTransmitterDataInputPropertie" :  "Invert data input",
    "lblHeaderHelpTransmitterTransmissionCondition" : "<u>Information about selected data transmission condition!</u>",
    "stringTableTransmitterDataTransmissionCondition" : "Data transmission condition",
    "descriptionTransmitterDataTransmissionCondition0" :  "<b>Mode 0</b><br/><br/>Transmit on level change of data transmission pin (DU30) from HIGH to LOW level.",
    "descriptionTransmitterDataTransmissionCondition1" :  "<b>Mode 1</b><br/><br/>Transmit on level change of data transmission pin (DU30) from LOW to HIGH level.",
    "descriptionTransmitterDataTransmissionCondition2" :  "<b>Mode 2</b><br/><br/>Transmit on level change of data transmission pin (DU30) on every logic level change.",
    "descriptionTransmitterDataTransmissionCondition3" :  "<b>Mode 3</b><br/><br/>Transmit if new logic state on the data inputs is stable for the data stability filter time.<br/><br/>The data input is deactivated, if the data transmission pin (DU30) is on HIGH level (low active).  ",
    "descriptionTransmitterDataTransmissionCondition4" :  "<b>Mode 4</b><br/><br/>Transmit new logic state immediately, afterwards transmit interval lasting from the data stability filter time until the next evaluation of the data input.<br/><br/>The data input is deactivated, if the data transmission pin (DU30) is on HIGH level (low active).",
    "descriptionTransmitterDataTransmissionCondition5" :  "<b>Mode 5</b><br/><br/>Transmit if new logic state on the data inputs is stable for the data stability filter time.<br/><br/>The data input is deactivated, if the data transmission pin (DU30) is on LOW level (high active).",
    "descriptionTransmitterDataTransmissionCondition6" :  "<b>Mode 6</b><br/><br/>Transmit new logic state immediately, afterwards transmit interval lasting from the data stability filter time until the next evaluation of the data input.<br/><br/>The data input is deactivated, if the data transmission pin (DU30) is on LOW level (high active).",
    "stringTableBehaviourStatusMsgResistance" : "Status message can be deleted only via CCU",
    "stringTableStatusMessageTextAligmentLeftAligned" : "Range status message left",
    "dlgEnterMeterReadingsTitle" :  "Configuration of CCU energy meter",
    "FAL230-C6" : "Homematic IP<br/>Floor Heating Actuator",
    "FAL230-C10" : "Homematic IP<br/>Floor Heating Actuator",
    "FAL24-C6" : "Homematic IP<br/>Floor Heating Actuator",
    "FAL24-C10" : "Homematic IP<br/>Floor Heating Actuator",
    "btnSysConfCoupling" :  "Connections<br/>(e.g. OSRAM lightify)",
    "lblSysConfCoupling1" : "DESCRIPTION",
    "couplingDialogTitle" : "Dialogue connections",
    "lblOsramLightify" :  "OSRAM Lightify",
    "enterIPAddress" :  "IP address",
    "btnScanGateway" :  "Search gateway",
    "btnScanDevices" :  "Search devices",
    "lblCheckIpAddress" : "Please check the IP address",
    "lblColorTemperature" : "Colour<br/>temperature",
    "lblKelvin" : "K",
    "lblUnknown" : "unknown",

    "helpOsramLightifyToolTip" :
      "<h1>Please note:</h1>" +
      "<ul>"+
        "<li>Only one OSRAM gateway may be connected to your network.</li>" +
          "<li>The gateway should always receive the same IP address from the DHCP server (WLAN router)!</li>" +
          "<li>To make sure that the OSRAM gateway can be found using the button <b>Start</b>,<br/>" +
            "it has to be available for the "+HMIdentifier.en.CCUShortName+".</li>" +
          "<li>If searching was successful, the IP address of the gateway is displayed and all connected<br/>" +
            "lights and lamps are available as devices in the CCU.</li>" +
      "</ul>",

    "stringTableErrorUpdateTrue" : "Device update OK",
    "stringTableErrorUpdateFalse" : "Device update faulty",
    "timeoutAddNewDevices" : "Timeout addNewDevices",

    "stringTableKeyLCDLevelInterp" : "Text in display",
    "stringTableKeyLCDSymbol" : "Symbol in display",

    "unknownError" : "Unknown Error",

    "helpOsramLightify" : "You can create the pairing between the "+HMIdentifier.en.CCUShortName+" and <b>OSRAM Lightify</b> here. Please find further information here:",

    "stringTableColorTemperature" : "Colour temperature",

    "msgNoGatewayFound" : "No OSRAM Lightify Gateway found",

    "comment" : "ATTENTION **** not yet translated **** ATTENTION",
    "comment" : "not yet extracted",



    "noMoreKeys" : ""
  }
});

