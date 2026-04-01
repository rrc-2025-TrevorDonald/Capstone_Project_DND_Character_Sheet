const backBtn = document.getElementById("backBtn");
const saveBtn = document.getElementById("saveBtn");

const charNameHeader = document.getElementById("charNameHeader");
const playerLvlXP = document.getElementById("playerLvlXP");
const lvl = document.getElementById("lvl");
const xp = document.getElementById("xp");
const player = document.getElementById("player");

const classStuff = document.getElementById("class&Stuff");
const theClass = document.getElementById("class");
const race = document.getElementById("race");
const background = document.getElementById("background");
const alignment = document.getElementById("alignment");

const rolls = document.getElementById("rolls");
const str = document.getElementById("str");
const strMod = document.getElementById("strMod");
const dex = document.getElementById("dex");
const dexMod = document.getElementById("dexMod");
const con = document.getElementById("con");
const conMod = document.getElementById("conMod");
const int = document.getElementById("int");
const intMod = document.getElementById("intMod");
const wis = document.getElementById("wis");
const wisMod = document.getElementById("wisMod");
const cha = document.getElementById("cha");
const chaMod = document.getElementById("chaMod");

const inspaProfBonus = document.getElementById("inspa&ProfBonus");
const inspa = document.getElementById("inspa");
const profBonus = document.getElementById("profBonus");

const throws = document.getElementById("throws");
const checkboxStr = document.getElementById("checkboxStr");
const saveStr = document.getElementById("saveStr");
const checkboxDex = document.getElementById("checkboxDex");
const saveDex = document.getElementById("saveDex");
const checkboxCon = document.getElementById("checkboxCon");
const saveCon = document.getElementById("saveCon");
const checkboxInt = document.getElementById("checkboxInt");
const saveInt = document.getElementById("saveInt");
const checkboxWis = document.getElementById("checkboxWis");
const saveWis = document.getElementById("saveWis");
const checkboxCha = document.getElementById("checkboxCha");
const saveCha = document.getElementById("saveCha");

const skills = document.getElementById("skills");
const checkboxAcro = document.getElementById("checkboxAcro");
const acrobatics = document.getElementById("acrobatics");
const checkboxAnimal = document.getElementById("checkboxAnimal");
const animal = document.getElementById("animal");
const checkboxArcana = document.getElementById("checkboxArcana");
const arcana = document.getElementById("arcana");
const checkboxAthl = document.getElementById("checkboxAthl");
const athletics = document.getElementById("athletics");
const checkboxDec = document.getElementById("checkboxDec");
const deception = document.getElementById("deception");
const checkboxHis = document.getElementById("checkboxHis");
const history = document.getElementById("history");
const checkboxInsight = document.getElementById("checkboxInsight");
const insight = document.getElementById("insight");
const checkboxInti = document.getElementById("checkboxInti");
const intimidation = document.getElementById("intimidation");
const checkboxInvest = document.getElementById("checkboxInvest");
const investigation = document.getElementById("investigation");
const checkboxMed = document.getElementById("checkboxMed");
const medicine = document.getElementById("medicine");
const checkboxNat = document.getElementById("checkboxNat");
const nature = document.getElementById("nature");
const checkboxPercep = document.getElementById("checkboxPercep");
const perception = document.getElementById("perception");
const checkboxPerf = document.getElementById("checkboxPerf");
const performance = document.getElementById("performance");
const checkboxPers = document.getElementById("checkboxPers");
const persuasion = document.getElementById("persuasion");
const checkboxRel = document.getElementById("checkboxRel");
const religion = document.getElementById("religion");
const checkboxSleight = document.getElementById("checkboxSleight");
const sleight = document.getElementById("sleight");
const checkboxStealth = document.getElementById("checkboxStealth");
const stealth = document.getElementById("stealth");
const checkboxSurvival = document.getElementById("checkboxSurvival");
const survival = document.getElementById("survival");
const passWis = document.getElementById("passWis");

const acMore = document.getElementById("ac+More");
const ac = document.getElementById("ac");
const initiative = document.getElementById("initiative");
const speed = document.getElementById("speed");
const maxHP = document.getElementById("maxHP");
const currentHP = document.getElementById("currentHP");
const hitDice = document.getElementById("hitDice");
const totalHitDice = document.getElementById("totalHitDice");

const attacks = document.getElementById("attacks");
const slot1Name = document.getElementById("slot1Name");
const slot1ATKBonus = document.getElementById("slot1ATKBonus");
const slot1DMG = document.getElementById("slot1DMG");
const slot2Name = document.getElementById("slot2Name");
const slot2ATKBonus = document.getElementById("slot2ATKBonus");
const slot2DMG = document.getElementById("slot2DMG");
const slot3Name = document.getElementById("slot3Name");
const slot3ATKBonus = document.getElementById("slot3ATKBonus");
const slot3DMG = document.getElementById("slot3DMG");
const atkSpellcast = document.getElementById("atkSpellcast");

const equipmentDiv = document.getElementById("equipmentDiv");
const pp = document.getElementById("pp");
const gp = document.getElementById("gp");
const ep = document.getElementById("ep");
const sp = document.getElementById("sp");
const cp = document.getElementById("cp");
const equipment = document.getElementById("equipment");

const personal = document.getElementById("personal");
const personTraits = document.getElementById("personTraits");
const ideals = document.getElementById("ideals");
const bonds = document.getElementById("bonds");
const flaws = document.getElementById("flaws");

const featsTraitsDiv = document.getElementById("feats&TraitsDiv");
const featsTraits = document.getElementById("featsTraits");

const ageMore = document.getElementById("age&More");
const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const eyes = document.getElementById("eyes");
const skin = document.getElementById("skin");
const hair = document.getElementById("hair");

const backstoryDiv = document.getElementById("backstoryDiv");
const backstory = document.getElementById("backstory");

const alliesOrgsDiv = document.getElementById("allies&OrgsDiv");
const alliesOrgs = document.getElementById("alliesOrgs");

const addFeatsTraitsDiv = document.getElementById("addFeats&TraitsDiv");
const addFeatsTraits = document.getElementById("addFeatsTraits");

const backpackDiv = document.getElementById("backpackDiv");
const backpack = document.getElementById("backpack");

const spellStats = document.getElementById("spellStats");
const spellAbil = document.getElementById("spellAbil");
const spellSaveDC = document.getElementById("spellSaveDC");
const spellATKBonus = document.getElementById("spellATKBonus");

const spellSlots = document.getElementById("spellSlots");
const cantrips = document.getElementById("cantrips");

const total1Slots = document.getElementById("total1Slots");
const slots1Expend = document.getElementById("slots1Expend");

const checkboxlvl101 = document.getElementById("checkboxlvl101");
const lvl101 = document.getElementById("lvl101");
const checkboxlvl102 = document.getElementById("checkboxlvl102");
const lvl102 = document.getElementById("lvl102");
const checkboxlvl103 = document.getElementById("checkboxlvl103");
const lvl103 = document.getElementById("lvl103");
const checkboxlvl104 = document.getElementById("checkboxlvl104");
const lvl104 = document.getElementById("lvl104");
const checkboxlvl105 = document.getElementById("checkboxlvl105");
const lvl105 = document.getElementById("lvl105");
const checkboxlvl106 = document.getElementById("checkboxlvl106");
const lvl106 = document.getElementById("lvl106");
const checkboxlvl107 = document.getElementById("checkboxlvl107");
const lvl107 = document.getElementById("lvl107");
const checkboxlvl108 = document.getElementById("checkboxlvl108");
const lvl108 = document.getElementById("lvl108");
const checkboxlvl109 = document.getElementById("checkboxlvl109");
const lvl109 = document.getElementById("lvl109");
const checkboxlvl1010 = document.getElementById("checkboxlvl1010");
const lvl1010 = document.getElementById("lvl1010");
const checkboxlvl1011 = document.getElementById("checkboxlvl1011");
const lvl1011 = document.getElementById("lvl1011");
const checkboxlvl1012 = document.getElementById("checkboxlvl1012");
const lvl1012 = document.getElementById("lvl1012");
const checkboxlvl1013 = document.getElementById("checkboxlvl1013");
const lvl1013 = document.getElementById("lvl1013");

const total2Slots = document.getElementById("total2Slots");
const slots2Expend = document.getElementById("slots2Expend");

const checkboxlvl201 = document.getElementById("checkboxlvl201");
const lvl201 = document.getElementById("lvl201");
const checkboxlvl202 = document.getElementById("checkboxlvl202");
const lvl202 = document.getElementById("lvl202");
const checkboxlvl203 = document.getElementById("checkboxlvl203");
const lvl203 = document.getElementById("lvl203");
const checkboxlvl204 = document.getElementById("checkboxlvl204");
const lvl204 = document.getElementById("lvl204");
const checkboxlvl205 = document.getElementById("checkboxlvl205");
const lvl205 = document.getElementById("lvl205");
const checkboxlvl206 = document.getElementById("checkboxlvl206");
const lvl206 = document.getElementById("lvl206");
const checkboxlvl207 = document.getElementById("checkboxlvl207");
const lvl207 = document.getElementById("lvl207");
const checkboxlvl208 = document.getElementById("checkboxlvl208");
const lvl208 = document.getElementById("lvl208");
const checkboxlvl209 = document.getElementById("checkboxlvl209");
const lvl209 = document.getElementById("lvl209");
const checkboxlvl2010 = document.getElementById("checkboxlvl2010");
const lvl2010 = document.getElementById("lvl2010");
const checkboxlvl2011 = document.getElementById("checkboxlvl2011");
const lvl2011 = document.getElementById("lvl2011");
const checkboxlvl2012 = document.getElementById("checkboxlvl2012");
const lvl2012 = document.getElementById("lvl2012");
const checkboxlvl2013 = document.getElementById("checkboxlvl2013");
const lvl2013 = document.getElementById("lvl2013");

const total3Slots = document.getElementById("total3Slots");
const slots3Expend = document.getElementById("slots3Expend");

const checkboxlvl301 = document.getElementById("checkboxlvl301");
const lvl301 = document.getElementById("lvl301");
const checkboxlvl302 = document.getElementById("checkboxlvl302");
const lvl302 = document.getElementById("lvl302");
const checkboxlvl303 = document.getElementById("checkboxlvl303");
const lvl303 = document.getElementById("lvl303");
const checkboxlvl304 = document.getElementById("checkboxlvl304");
const lvl304 = document.getElementById("lvl304");
const checkboxlvl305 = document.getElementById("checkboxlvl305");
const lvl305 = document.getElementById("lvl305");
const checkboxlvl306 = document.getElementById("checkboxlvl306");
const lvl306 = document.getElementById("lvl306");
const checkboxlvl307 = document.getElementById("checkboxlvl307");
const lvl307 = document.getElementById("lvl307");
const checkboxlvl308 = document.getElementById("checkboxlvl308");
const lvl308 = document.getElementById("lvl308");
const checkboxlvl309 = document.getElementById("checkboxlvl309");
const lvl309 = document.getElementById("lvl309");
const checkboxlvl3010 = document.getElementById("checkboxlvl3010");
const lvl3010 = document.getElementById("lvl3010");
const checkboxlvl3011 = document.getElementById("checkboxlvl3011");
const lvl3011 = document.getElementById("lvl3011");
const checkboxlvl3012 = document.getElementById("checkboxlvl3012");
const lvl3012 = document.getElementById("lvl3012");
const checkboxlvl3013 = document.getElementById("checkboxlvl3013");
const lvl3013 = document.getElementById("lvl3013");

const total4Slots = document.getElementById("total4Slots");
const slots4Expend = document.getElementById("slots4Expend");

const checkboxlvl401 = document.getElementById("checkboxlvl401");
const lvl401 = document.getElementById("lvl401");
const checkboxlvl402 = document.getElementById("checkboxlvl402");
const lvl402 = document.getElementById("lvl402");
const checkboxlvl403 = document.getElementById("checkboxlvl403");
const lvl403 = document.getElementById("lvl403");
const checkboxlvl404 = document.getElementById("checkboxlvl404");
const lvl404 = document.getElementById("lvl404");
const checkboxlvl405 = document.getElementById("checkboxlvl405");
const lvl405 = document.getElementById("lvl405");
const checkboxlvl406 = document.getElementById("checkboxlvl406");
const lvl406 = document.getElementById("lvl406");
const checkboxlvl407 = document.getElementById("checkboxlvl407");
const lvl407 = document.getElementById("lvl407");
const checkboxlvl408 = document.getElementById("checkboxlvl408");
const lvl408 = document.getElementById("lvl408");
const checkboxlvl409 = document.getElementById("checkboxlvl409");
const lvl409 = document.getElementById("lvl409");
const checkboxlvl4010 = document.getElementById("checkboxlvl4010");
const lvl4010 = document.getElementById("lvl4010");
const checkboxlvl4011 = document.getElementById("checkboxlvl4011");
const lvl4011 = document.getElementById("lvl4011");
const checkboxlvl4012 = document.getElementById("checkboxlvl4012");
const lvl4012 = document.getElementById("lvl4012");
const checkboxlvl4013 = document.getElementById("checkboxlvl4013");
const lvl4013 = document.getElementById("lvl4013");

const total5Slots = document.getElementById("total5Slots");
const slots5Expend = document.getElementById("slots5Expend");

const checkboxlvl501 = document.getElementById("checkboxlvl501");
const lvl501 = document.getElementById("lvl501");
const checkboxlvl502 = document.getElementById("checkboxlvl502");
const lvl502 = document.getElementById("lvl502");
const checkboxlvl503 = document.getElementById("checkboxlvl503");
const lvl503 = document.getElementById("lvl503");
const checkboxlvl504 = document.getElementById("checkboxlvl504");
const lvl504 = document.getElementById("lvl504");
const checkboxlvl505 = document.getElementById("checkboxlvl505");
const lvl505 = document.getElementById("lvl505");
const checkboxlvl506 = document.getElementById("checkboxlvl506");
const lvl506 = document.getElementById("lvl506");
const checkboxlvl507 = document.getElementById("checkboxlvl507");
const lvl507 = document.getElementById("lvl507");
const checkboxlvl508 = document.getElementById("checkboxlvl508");
const lvl508 = document.getElementById("lvl508");
const checkboxlvl509 = document.getElementById("checkboxlvl509");
const lvl509 = document.getElementById("lvl509");
const checkboxlvl5010 = document.getElementById("checkboxlvl5010");
const lvl5010 = document.getElementById("lvl5010");
const checkboxlvl5011 = document.getElementById("checkboxlvl5011");
const lvl5011 = document.getElementById("lvl5011");
const checkboxlvl5012 = document.getElementById("checkboxlvl5012");
const lvl5012 = document.getElementById("lvl5012");
const checkboxlvl5013 = document.getElementById("checkboxlvl5013");
const lvl5013 = document.getElementById("lvl5013");

const total6Slots = document.getElementById("total6Slots");
const slots6Expend = document.getElementById("slots6Expend");

const checkboxlvl601 = document.getElementById("checkboxlvl601");
const lvl601 = document.getElementById("lvl601");
const checkboxlvl602 = document.getElementById("checkboxlvl602");
const lvl602 = document.getElementById("lvl602");
const checkboxlvl603 = document.getElementById("checkboxlvl603");
const lvl603 = document.getElementById("lvl603");
const checkboxlvl604 = document.getElementById("checkboxlvl604");
const lvl604 = document.getElementById("lvl604");
const checkboxlvl605 = document.getElementById("checkboxlvl605");
const lvl605 = document.getElementById("lvl605");
const checkboxlvl606 = document.getElementById("checkboxlvl606");
const lvl606 = document.getElementById("lvl606");
const checkboxlvl607 = document.getElementById("checkboxlvl607");
const lvl607 = document.getElementById("lvl607");
const checkboxlvl608 = document.getElementById("checkboxlvl608");
const lvl608 = document.getElementById("lvl608");
const checkboxlvl609 = document.getElementById("checkboxlvl609");
const lvl609 = document.getElementById("lvl609");
const checkboxlvl6010 = document.getElementById("checkboxlvl6010");
const lvl6010 = document.getElementById("lvl6010");
const checkboxlvl6011 = document.getElementById("checkboxlvl6011");
const lvl6011 = document.getElementById("lvl6011");
const checkboxlvl6012 = document.getElementById("checkboxlvl6012");
const lvl6012 = document.getElementById("lvl6012");
const checkboxlvl6013 = document.getElementById("checkboxlvl6013");
const lvl6013 = document.getElementById("lvl6013");

const total7Slots = document.getElementById("total7Slots");
const slots7Expend = document.getElementById("slots7Expend");

const checkboxlvl701 = document.getElementById("checkboxlvl701");
const lvl701 = document.getElementById("lvl701");
const checkboxlvl702 = document.getElementById("checkboxlvl702");
const lvl702 = document.getElementById("lvl702");
const checkboxlvl703 = document.getElementById("checkboxlvl703");
const lvl703 = document.getElementById("lvl703");
const checkboxlvl704 = document.getElementById("checkboxlvl704");
const lvl704 = document.getElementById("lvl704");
const checkboxlvl705 = document.getElementById("checkboxlvl705");
const lvl705 = document.getElementById("lvl705");
const checkboxlvl706 = document.getElementById("checkboxlvl706");
const lvl706 = document.getElementById("lvl706");
const checkboxlvl707 = document.getElementById("checkboxlvl707");
const lvl707 = document.getElementById("lvl707");
const checkboxlvl708 = document.getElementById("checkboxlvl708");
const lvl708 = document.getElementById("lvl708");
const checkboxlvl709 = document.getElementById("checkboxlvl709");
const lvl709 = document.getElementById("lvl709");
const checkboxlvl7010 = document.getElementById("checkboxlvl7010");
const lvl7010 = document.getElementById("lvl7010");
const checkboxlvl7011 = document.getElementById("checkboxlvl7011");
const lvl7011 = document.getElementById("lvl7011");
const checkboxlvl7012 = document.getElementById("checkboxlvl7012");
const lvl7012 = document.getElementById("lvl7012");
const checkboxlvl7013 = document.getElementById("checkboxlvl7013");
const lvl7013 = document.getElementById("lvl7013");

const total8Slots = document.getElementById("total8Slots");
const slots8Expend = document.getElementById("slots8Expend");

const checkboxlvl801 = document.getElementById("checkboxlvl801");
const lvl801 = document.getElementById("lvl801");
const checkboxlvl802 = document.getElementById("checkboxlvl802");
const lvl802 = document.getElementById("lvl802");
const checkboxlvl803 = document.getElementById("checkboxlvl803");
const lvl803 = document.getElementById("lvl803");
const checkboxlvl804 = document.getElementById("checkboxlvl804");
const lvl804 = document.getElementById("lvl804");
const checkboxlvl805 = document.getElementById("checkboxlvl805");
const lvl805 = document.getElementById("lvl805");
const checkboxlvl806 = document.getElementById("checkboxlvl806");
const lvl806 = document.getElementById("lvl806");
const checkboxlvl807 = document.getElementById("checkboxlvl807");
const lvl807 = document.getElementById("lvl807");
const checkboxlvl808 = document.getElementById("checkboxlvl808");
const lvl808 = document.getElementById("lvl808");
const checkboxlvl809 = document.getElementById("checkboxlvl809");
const lvl809 = document.getElementById("lvl809");
const checkboxlvl8010 = document.getElementById("checkboxlvl8010");
const lvl8010 = document.getElementById("lvl8010");
const checkboxlvl8011 = document.getElementById("checkboxlvl8011");
const lvl8011 = document.getElementById("lvl8011");
const checkboxlvl8012 = document.getElementById("checkboxlvl8012");
const lvl8012 = document.getElementById("lvl8012");
const checkboxlvl8013 = document.getElementById("checkboxlvl8013");
const lvl8013 = document.getElementById("lvl8013");

const total9Slots = document.getElementById("total9Slots");
const slots9Expend = document.getElementById("slots9Expend");

const checkboxlvl901 = document.getElementById("checkboxlvl901");
const lvl901 = document.getElementById("lvl901");
const checkboxlvl902 = document.getElementById("checkboxlvl902");
const lvl902 = document.getElementById("lvl902");
const checkboxlvl903 = document.getElementById("checkboxlvl903");
const lvl903 = document.getElementById("lvl903");
const checkboxlvl904 = document.getElementById("checkboxlvl904");
const lvl904 = document.getElementById("lvl904");
const checkboxlvl905 = document.getElementById("checkboxlvl905");
const lvl905 = document.getElementById("lvl905");
const checkboxlvl906 = document.getElementById("checkboxlvl906");
const lvl906 = document.getElementById("lvl906");
const checkboxlvl907 = document.getElementById("checkboxlvl907");
const lvl907 = document.getElementById("lvl907");
const checkboxlvl908 = document.getElementById("checkboxlvl908");
const lvl908 = document.getElementById("lvl908");
const checkboxlvl909 = document.getElementById("checkboxlvl909");
const lvl909 = document.getElementById("lvl909");
const checkboxlvl9010 = document.getElementById("checkboxlvl9010");
const lvl9010 = document.getElementById("lvl9010");
const checkboxlvl9011 = document.getElementById("checkboxlvl9011");
const lvl9011 = document.getElementById("lvl9011");
const checkboxlvl9012 = document.getElementById("checkboxlvl9012");
const lvl9012 = document.getElementById("lvl9012");
const checkboxlvl9013 = document.getElementById("checkboxlvl9013");
const lvl9013 = document.getElementById("lvl9013");

const deleteBtn = document.getElementById("deleteBtn");
const deleteDiv = document.getElementById("deleteDiv");
const confirmDel = document.getElementById("confirmDel");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const unableMsg = document.getElementById("unableMsg");

const loginEmail = sessionStorage.getItem("user");
const auth = sessionStorage.getItem("auth");

const selectedChar = sessionStorage.getItem("char");

const charsApi = "http://localhost:3000/api/v1/chars/char/";

const checkedYesNoPopulate = (output, input) => {
    if (input ==="1") {
        return output.checked = true;
    } else {
        return output.checked = false;
    };
};

const checkedYesNoSave = (input) => {
    if (!input.checked) {
        return "0";
    } else {
        return "1";
    };
};

const bonusCalculation = (output, input) => {
    if (input === 30) {
        output.innerHTML = "+10";
    } else if (input >= 28) {
        output.innerHTML = "+9";
    } else if (input >= 26) {
        output.innerHTML = "+8";
    } else if (input >= 24) {
        output.innerHTML = "+7";
    } else if (input >= 22) {
        output.innerHTML = "+6";
    } else if (input >= 20) {
        output.innerHTML = "+5";
    } else if (input >= 18) {
        output.innerHTML = "+4";
    } else if (input >= 16) {
        output.innerHTML = "+3";
    } else if (input >= 14) {
        output.innerHTML = "+2";
    } else if (input >= 12) {
        output.innerHTML = "+1";
    } else if (input >= 10) {
        output.innerHTML = "0";
    } else if (input >= 8) {
        output.innerHTML = "-1";
    } else if (input >= 8) {
        output.innerHTML = "-2";
    } else if (input >= 6) {
        output.innerHTML = "-3";
    } else if (input >= 4) {
        output.innerHTML = "-4";
    } else if (input >= 1) {
        output.innerHTML = "-5";
    };
};

const getChar = async (characterName) => {
    try {
        const reqOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            }
        };
        const response = await fetch(charsApi + characterName, reqOptions);
        console.log(response)
        const char = await response.json();

        charNameHeader.innerHTML = char.charName;
        lvl.value = char.level;
        xp.value = char.xp;
        player.value = char.playerName;
        theClass.value = char.class;
        race.value = char.race;
        background.value = char.background;
        alignment.value = char.alignment;
        str.value = char.str;
        bonusCalculation(strMod, char.str);
        dex.value = char.dex;
        bonusCalculation(dexMod, char.dex);
        con.value = char.con;
        bonusCalculation(conMod, char.con);
        wis.value = char.wis;
        bonusCalculation(wisMod, char.wis);
        cha.value = char.cha;
        bonusCalculation(chaMod, char.cha);
        int.value = char.int;
        bonusCalculation(intMod, char.int);
        inspa.value = char.inspiration;
        profBonus.value = char.profBonus;
        checkedYesNoPopulate(checkboxStr, char.checkboxStr);
        saveStr.value = char.saveStr;
        checkedYesNoPopulate(checkboxDex, char.checkboxDex);
        saveDex.value = char.saveDex;
        checkedYesNoPopulate(checkboxCon, char.checkboxCon);
        saveCon.value = char.saveCon;
        checkedYesNoPopulate(checkboxInt, char.checkboxInt);
        saveInt.value = char.saveInt;
        checkedYesNoPopulate(checkboxWis, char.checkboxWis);
        saveWis.value = char.saveWis;
        checkedYesNoPopulate(checkboxCha, char.checkboxCha);
        saveCha.value = char.saveCha;
        checkedYesNoPopulate(checkboxAcro, char.checkboxAcro);
        acrobatics.value = char.acrobatics;
        checkedYesNoPopulate(checkboxAnimal, char.checkboxAnimal);
        animal.value = char.animal;
        checkedYesNoPopulate(checkboxArcana, char.checkboxArcana);
        arcana.value = char.arcana;
        checkedYesNoPopulate(checkboxAthl, char.checkboxAthl);
        athletics.value = char.athletics;
        checkedYesNoPopulate(checkboxDec, char.checkboxDec);
        deception.value = char.deception;
        checkedYesNoPopulate(checkboxHis, char.checkboxHis);
        history.value = char.history;
        checkedYesNoPopulate(checkboxInsight, char.checkboxInsight);
        insight.value = char.insight;
        checkedYesNoPopulate(checkboxInti, char.checkboxInti);
        intimidation.value = char.intimidation;
        checkedYesNoPopulate(checkboxInvest, char.checkboxInvest);
        investigation.value = char.investigation;
        checkedYesNoPopulate(checkboxMed, char.checkboxMed);
        medicine.value = char.medicine;
        checkedYesNoPopulate(checkboxNat, char.checkboxNat);
        nature.value = char.nature;
        checkedYesNoPopulate(checkboxPercep, char.checkboxPercep);
        perception.value = char.perception;
        checkedYesNoPopulate(checkboxPerf, char.checkboxPerf);
        performance.value = char.performance;
        checkedYesNoPopulate(checkboxPers, char.checkboxPers);
        persuasion.value = char.persuasion;
        checkedYesNoPopulate(checkboxRel, char.checkboxRel);
        religion.value = char.religion;
        checkedYesNoPopulate(checkboxSleight, char.checkboxSleight);
        sleight.value = char.sleight;
        checkedYesNoPopulate(checkboxStealth, char.checkboxStealth);
        stealth.value = char.stealth;
        checkedYesNoPopulate(checkboxSurvival, char.checkboxSurvival);
        survival.value = char.survival;
        ac.value = char.ac;
        initiative.value = char.initiative;
        speed.value = char.speed;
        currentHP.value = char.currentHP;
        maxHP.value = char.maxHP;
        hitDice.value = char.hitDice;
        totalHitDice.value = char.totalHitDice;
        slot1Name.value = char.slot1Name;
        slot1ATKBonus.value = char.slot1ATKBonus;
        slot1DMG.value = char.slot1DMG;
        slot2Name.value = char.slot2Name;
        slot2ATKBonus.value = char.slot2ATKBonus;
        slot2DMG.value = char.slot2DMG;
        slot3Name.value = char.slot3Name;
        slot3ATKBonus.value = char.slot3ATKBonus;
        slot3DMG.value = char.slot3DMG;
        atkSpellcast.value = char.atkSpellcast;
        pp.value = char.pp;
        gp.value = char.gp;
        ep.value = char.ep;
        sp.value = char.sp;
        cp.value = char.cp;
        equipment.value = char.equipment;
        personTraits.value = char.personTraits;
        ideals.value = char.ideals;
        bonds.value = char.bonds;
        flaws.value = char.flaws;
        age.value = char.age;
        height.value = char.height;
        weight.value = char.weight;
        eyes.value = char.eyes;
        skin.value = char.skin;
        hair.value = char.hair;
        featsTraits.value = char.featsTraits;
        backstory.value = char.backstory;
        alliesOrgs.innerHTML = char.alliesOrgs;
        addFeatsTraits.value = char.addFeatsTraits;
        backpack.value = char.backpack;
        spellAbil.value = char.spellAbil;
        spellSaveDC.value = char.spellSaveDC;
        spellATKBonus.value = char.spellATKBonus;
        cantrips.value = char.cantrips;
        total1Slots.value = char.total1Slots;
        slots1Expend.value = char.slots1Expend;
        checkedYesNoPopulate(checkboxlvl101, char.checkboxlvl101);
        checkedYesNoPopulate(checkboxlvl102, char.checkboxlvl102);
        checkedYesNoPopulate(checkboxlvl103, char.checkboxlvl103);
        checkedYesNoPopulate(checkboxlvl104, char.checkboxlvl104);
        checkedYesNoPopulate(checkboxlvl105, char.checkboxlvl105);
        checkedYesNoPopulate(checkboxlvl106, char.checkboxlvl106);
        checkedYesNoPopulate(checkboxlvl107, char.checkboxlvl107);
        checkedYesNoPopulate(checkboxlvl108, char.checkboxlvl108);
        checkedYesNoPopulate(checkboxlvl109, char.checkboxlvl109);
        checkedYesNoPopulate(checkboxlvl1010, char.checkboxlvl1010);
        checkedYesNoPopulate(checkboxlvl1011, char.checkboxlvl1011);
        checkedYesNoPopulate(checkboxlvl1012, char.checkboxlvl1012);
        checkedYesNoPopulate(checkboxlvl1013, char.checkboxlvl1013);
        lvl101.value = char.lvl101;
        lvl102.value = char.lvl102;
        lvl103.value = char.lvl103;
        lvl104.value = char.lvl104;
        lvl105.value = char.lvl105;
        lvl106.value = char.lvl106;
        lvl107.value = char.lvl107;
        lvl108.value = char.lvl108;
        lvl109.value = char.lvl109;
        lvl1010.value = char.lvl1010;
        lvl1011.value = char.lvl1011;
        lvl1012.value = char.lvl1012;
        lvl1013.value = char.lvl1013;
        total2Slots.value = char.total2Slots;
        slots2Expend.value = char.slots2Expend;
        checkedYesNoPopulate(checkboxlvl201, char.checkboxlvl201);
        checkedYesNoPopulate(checkboxlvl202, char.checkboxlvl202);
        checkedYesNoPopulate(checkboxlvl203, char.checkboxlvl203);
        checkedYesNoPopulate(checkboxlvl204, char.checkboxlvl204);
        checkedYesNoPopulate(checkboxlvl205, char.checkboxlvl205);
        checkedYesNoPopulate(checkboxlvl206, char.checkboxlvl206);
        checkedYesNoPopulate(checkboxlvl207, char.checkboxlvl207);
        checkedYesNoPopulate(checkboxlvl208, char.checkboxlvl208);
        checkedYesNoPopulate(checkboxlvl209, char.checkboxlvl209);
        checkedYesNoPopulate(checkboxlvl2010, char.checkboxlvl2010);
        checkedYesNoPopulate(checkboxlvl2011, char.checkboxlvl2011);
        checkedYesNoPopulate(checkboxlvl2012, char.checkboxlvl2012);
        checkedYesNoPopulate(checkboxlvl2013, char.checkboxlvl2013);
        lvl201.value = char.lvl201;
        lvl202.value = char.lvl202;
        lvl203.value = char.lvl203;
        lvl204.value = char.lvl204;
        lvl205.value = char.lvl205;
        lvl206.value = char.lvl206;
        lvl207.value = char.lvl207;
        lvl208.value = char.lvl208;
        lvl209.value = char.lvl209;
        lvl2010.value = char.lvl2010;
        lvl2011.value = char.lvl2011;
        lvl2012.value = char.lvl2012;
        lvl2013.value = char.lvl2013;
        total3Slots.value = char.total3Slots;
        slots3Expend.value = char.slots3Expend;
        checkedYesNoPopulate(checkboxlvl301, char.checkboxlvl301);
        checkedYesNoPopulate(checkboxlvl302, char.checkboxlvl302);
        checkedYesNoPopulate(checkboxlvl303, char.checkboxlvl303);
        checkedYesNoPopulate(checkboxlvl304, char.checkboxlvl304);
        checkedYesNoPopulate(checkboxlvl305, char.checkboxlvl305);
        checkedYesNoPopulate(checkboxlvl306, char.checkboxlvl306);
        checkedYesNoPopulate(checkboxlvl307, char.checkboxlvl307);
        checkedYesNoPopulate(checkboxlvl308, char.checkboxlvl308);
        checkedYesNoPopulate(checkboxlvl309, char.checkboxlvl309);
        checkedYesNoPopulate(checkboxlvl3010, char.checkboxlvl3010);
        checkedYesNoPopulate(checkboxlvl3011, char.checkboxlvl3011);
        checkedYesNoPopulate(checkboxlvl3012, char.checkboxlvl3012);
        checkedYesNoPopulate(checkboxlvl3013, char.checkboxlvl3013);
        lvl301.value = char.lvl301;
        lvl302.value = char.lvl302;
        lvl303.value = char.lvl303;
        lvl304.value = char.lvl304;
        lvl305.value = char.lvl305;
        lvl306.value = char.lvl306;
        lvl307.value = char.lvl307;
        lvl308.value = char.lvl308;
        lvl309.value = char.lvl309;
        lvl3010.value = char.lvl3010;
        lvl3011.value = char.lvl3011;
        lvl3012.value = char.lvl3012;
        lvl3013.value = char.lvl3013;
        total4Slots.value = char.total4Slots;
        slots4Expend.value = char.slots4Expend;
        checkedYesNoPopulate(checkboxlvl401, char.checkboxlvl401);
        checkedYesNoPopulate(checkboxlvl402, char.checkboxlvl402);
        checkedYesNoPopulate(checkboxlvl403, char.checkboxlvl403);
        checkedYesNoPopulate(checkboxlvl404, char.checkboxlvl404);
        checkedYesNoPopulate(checkboxlvl405, char.checkboxlvl405);
        checkedYesNoPopulate(checkboxlvl406, char.checkboxlvl406);
        checkedYesNoPopulate(checkboxlvl407, char.checkboxlvl407);
        checkedYesNoPopulate(checkboxlvl408, char.checkboxlvl408);
        checkedYesNoPopulate(checkboxlvl409, char.checkboxlvl409);
        checkedYesNoPopulate(checkboxlvl4010, char.checkboxlvl4010);
        checkedYesNoPopulate(checkboxlvl4011, char.checkboxlvl4011);
        checkedYesNoPopulate(checkboxlvl4012, char.checkboxlvl4012);
        checkedYesNoPopulate(checkboxlvl4013, char.checkboxlvl4013);
        lvl401.value = char.lvl401;
        lvl402.value = char.lvl402;
        lvl403.value = char.lvl403;
        lvl404.value = char.lvl404;
        lvl405.value = char.lvl405;
        lvl406.value = char.lvl406;
        lvl407.value = char.lvl407;
        lvl408.value = char.lvl408;
        lvl409.value = char.lvl409;
        lvl4010.value = char.lvl4010;
        lvl4011.value = char.lvl4011;
        lvl4012.value = char.lvl4012;
        lvl4013.value = char.lvl4013;
        total5Slots.value = char.total5Slots;
        slots5Expend.value = char.slots5Expend;
        checkedYesNoPopulate(checkboxlvl501, char.checkboxlvl501);
        checkedYesNoPopulate(checkboxlvl502, char.checkboxlvl502);
        checkedYesNoPopulate(checkboxlvl503, char.checkboxlvl503);
        checkedYesNoPopulate(checkboxlvl504, char.checkboxlvl504);
        checkedYesNoPopulate(checkboxlvl505, char.checkboxlvl505);
        checkedYesNoPopulate(checkboxlvl506, char.checkboxlvl506);
        checkedYesNoPopulate(checkboxlvl507, char.checkboxlvl507);
        checkedYesNoPopulate(checkboxlvl508, char.checkboxlvl508);
        checkedYesNoPopulate(checkboxlvl509, char.checkboxlvl509);
        checkedYesNoPopulate(checkboxlvl5010, char.checkboxlvl5010);
        checkedYesNoPopulate(checkboxlvl5011, char.checkboxlvl5011);
        checkedYesNoPopulate(checkboxlvl5012, char.checkboxlvl5012);
        checkedYesNoPopulate(checkboxlvl5013, char.checkboxlvl5013);
        lvl501.value = char.lvl501;
        lvl502.value = char.lvl502;
        lvl503.value = char.lvl503;
        lvl504.value = char.lvl504;
        lvl505.value = char.lvl505;
        lvl506.value = char.lvl506;
        lvl507.value = char.lvl507;
        lvl508.value = char.lvl508;
        lvl509.value = char.lvl509;
        lvl5010.value = char.lvl5010;
        lvl5011.value = char.lvl5011;
        lvl5012.value = char.lvl5012;
        lvl5013.value = char.lvl5013;
        total6Slots.value = char.total6Slots;
        slots6Expend.value = char.slots6Expend;
        checkedYesNoPopulate(checkboxlvl601, char.checkboxlvl601);
        checkedYesNoPopulate(checkboxlvl602, char.checkboxlvl602);
        checkedYesNoPopulate(checkboxlvl603, char.checkboxlvl603);
        checkedYesNoPopulate(checkboxlvl604, char.checkboxlvl604);
        checkedYesNoPopulate(checkboxlvl605, char.checkboxlvl605);
        checkedYesNoPopulate(checkboxlvl606, char.checkboxlvl606);
        checkedYesNoPopulate(checkboxlvl607, char.checkboxlvl607);
        checkedYesNoPopulate(checkboxlvl608, char.checkboxlvl608);
        checkedYesNoPopulate(checkboxlvl609, char.checkboxlvl609);
        checkedYesNoPopulate(checkboxlvl6010, char.checkboxlvl6010);
        checkedYesNoPopulate(checkboxlvl6011, char.checkboxlvl6011);
        checkedYesNoPopulate(checkboxlvl6012, char.checkboxlvl6012);
        checkedYesNoPopulate(checkboxlvl6013, char.checkboxlvl6013);
        lvl601.value = char.lvl601;
        lvl602.value = char.lvl602;
        lvl603.value = char.lvl603;
        lvl604.value = char.lvl604;
        lvl605.value = char.lvl605;
        lvl606.value = char.lvl606;
        lvl607.value = char.lvl607;
        lvl608.value = char.lvl608;
        lvl609.value = char.lvl609;
        lvl6010.value = char.lvl6010;
        lvl6011.value = char.lvl6011;
        lvl6012.value = char.lvl6012;
        lvl6013.value = char.lvl6013;
        total7Slots.value = char.total7Slots;
        slots7Expend.value = char.slots7Expend;
        checkedYesNoPopulate(checkboxlvl701, char.checkboxlvl701);
        checkedYesNoPopulate(checkboxlvl702, char.checkboxlvl702);
        checkedYesNoPopulate(checkboxlvl703, char.checkboxlvl703);
        checkedYesNoPopulate(checkboxlvl704, char.checkboxlvl704);
        checkedYesNoPopulate(checkboxlvl705, char.checkboxlvl705);
        checkedYesNoPopulate(checkboxlvl706, char.checkboxlvl706);
        checkedYesNoPopulate(checkboxlvl707, char.checkboxlvl707);
        checkedYesNoPopulate(checkboxlvl708, char.checkboxlvl708);
        checkedYesNoPopulate(checkboxlvl709, char.checkboxlvl709);
        checkedYesNoPopulate(checkboxlvl7010, char.checkboxlvl7010);
        checkedYesNoPopulate(checkboxlvl7011, char.checkboxlvl7011);
        checkedYesNoPopulate(checkboxlvl7012, char.checkboxlvl7012);
        checkedYesNoPopulate(checkboxlvl7013, char.checkboxlvl7013);
        lvl701.value = char.lvl701;
        lvl702.value = char.lvl703;
        lvl703.value = char.lvl703;
        lvl704.value = char.lvl704;
        lvl705.value = char.lvl705;
        lvl706.value = char.lvl706;
        lvl707.value = char.lvl707;
        lvl708.value = char.lvl708;
        lvl709.value = char.lvl709;
        lvl7010.value = char.lvl7010;
        lvl7011.value = char.lvl7011;
        lvl7012.value = char.lvl7012;
        lvl7013.value = char.lvl7013;
        total8Slots.value = char.total8Slots;
        slots8Expend.value = char.slots8Expend;
        checkedYesNoPopulate(checkboxlvl801, char.checkboxlvl801);
        checkedYesNoPopulate(checkboxlvl802, char.checkboxlvl802);
        checkedYesNoPopulate(checkboxlvl803, char.checkboxlvl803);
        checkedYesNoPopulate(checkboxlvl804, char.checkboxlvl804);
        checkedYesNoPopulate(checkboxlvl805, char.checkboxlvl805);
        checkedYesNoPopulate(checkboxlvl806, char.checkboxlvl806);
        checkedYesNoPopulate(checkboxlvl807, char.checkboxlvl807);
        checkedYesNoPopulate(checkboxlvl808, char.checkboxlvl808);
        checkedYesNoPopulate(checkboxlvl809, char.checkboxlvl809);
        checkedYesNoPopulate(checkboxlvl8010, char.checkboxlvl8010);
        checkedYesNoPopulate(checkboxlvl8011, char.checkboxlvl8011);
        checkedYesNoPopulate(checkboxlvl8012, char.checkboxlvl8012);
        checkedYesNoPopulate(checkboxlvl8013, char.checkboxlvl8013);
        lvl801.value = char.lvl801;
        lvl802.value = char.lvl802;
        lvl803.value = char.lvl803;
        lvl804.value = char.lvl804;
        lvl805.value = char.lvl805;
        lvl806.value = char.lvl806;
        lvl807.value = char.lvl807;
        lvl808.value = char.lvl808;
        lvl809.value = char.lvl809;
        lvl8010.value = char.lvl8010;
        lvl8011.value = char.lvl8011;
        lvl8012.value = char.lvl8012;
        lvl8013.value = char.lvl8013;
        total9Slots.value = char.total9Slots;
        slots9Expend.value = char.slots9Expend;
        checkedYesNoPopulate(checkboxlvl901, char.checkboxlvl901);
        checkedYesNoPopulate(checkboxlvl902, char.checkboxlvl902);
        checkedYesNoPopulate(checkboxlvl903, char.checkboxlvl903);
        checkedYesNoPopulate(checkboxlvl904, char.checkboxlvl904);
        checkedYesNoPopulate(checkboxlvl905, char.checkboxlvl905);
        checkedYesNoPopulate(checkboxlvl906, char.checkboxlvl906);
        checkedYesNoPopulate(checkboxlvl907, char.checkboxlvl907);
        checkedYesNoPopulate(checkboxlvl908, char.checkboxlvl908);
        checkedYesNoPopulate(checkboxlvl909, char.checkboxlvl909);
        checkedYesNoPopulate(checkboxlvl9010, char.checkboxlvl9010);
        checkedYesNoPopulate(checkboxlvl9011, char.checkboxlvl9011);
        checkedYesNoPopulate(checkboxlvl9012, char.checkboxlvl9012);
        checkedYesNoPopulate(checkboxlvl9013, char.checkboxlvl9013);
        lvl901.value = char.lvl901;
        lvl902.value = char.lvl902;
        lvl903.value = char.lvl903;
        lvl904.value = char.lvl904;
        lvl905.value = char.lvl905;
        lvl906.value = char.lvl906;
        lvl907.value = char.lvl907;
        lvl908.value = char.lvl908;
        lvl909.value = char.lvl909;
        lvl9010.value = char.lvl9010;
        lvl9011.value = char.lvl9011;
        lvl9012.value = char.lvl9012;
        lvl9013.value = char.lvl9013;
        passWis.value = char.passWis;

    } catch(error) {
        console.log(error)
    };
};

const saveChar = async (characterName) => {
    try {
        const updateCharObject = {
            charName: charNameHeader.value,
            level: lvl.value,
            xp: xp.value,
            playerName: player.value,
            class: theClass.value,
            race: race.value,
            background: background.value,
            alignment: alignment.value,
            str: str.value,
            dex: dex.value,
            con: con.value,
            int: int.value,
            wis: wis.value,
            cha: cha.value,
            inspiration: inspa.value,
            profBonus: profBonus.value,
            checkboxStr: checkedYesNoSave(checkboxStr),
            saveStr: saveStr.value,
            checkboxDex: checkedYesNoSave(checkboxDex),
            saveDex: saveDex.value,
            checkboxCon: checkedYesNoSave(checkboxCon),
            saveCon: saveCon.value,
            checkboxInt: checkedYesNoSave(checkboxInt),
            saveInt: saveInt.value,
            checkboxWis: checkedYesNoSave(checkboxWis),
            saveWis: saveWis.value,
            checkboxCha: checkedYesNoSave(checkboxCha),
            saveCha: saveCha.value,
            checkboxAcro: checkedYesNoSave(checkboxAcro),
            acrobatics: acrobatics.value,
            checkboxAnimal: checkedYesNoSave(checkboxAnimal),
            animal: animal.value,
            checkboxArcana: checkedYesNoSave(checkboxArcana),
            arcana: arcana.value,
            checkboxAthl: checkedYesNoSave(checkboxAthl),
            athletics: athletics.value,
            checkboxDec: checkedYesNoSave(checkboxDec),
            deception: deception.value,
            checkboxHis: checkedYesNoSave(checkboxHis),
            history: history.value,
            checkboxInsight: checkedYesNoSave(checkboxInsight),
            insight: insight.value,
            checkboxInti: checkedYesNoSave(checkboxInti),
            intimidation: intimidation.value,
            checkboxInvest: checkedYesNoSave(checkboxInvest),
            investigation: investigation.value,
            checkboxMed: checkedYesNoSave(checkboxMed),
            medicine: medicine.value,
            checkboxNat: checkedYesNoSave(checkboxNat),
            nature: nature.value,
            checkboxPercep: checkedYesNoSave(checkboxPercep),
            perception: perception.value,
            checkboxPerf: checkedYesNoSave(checkboxPerf),
            performance: performance.value,
            checkboxPers: checkedYesNoSave(checkboxPers),
            persuasion: persuasion.value,
            checkboxRel: checkedYesNoSave(checkboxRel),
            religion: religion.value,
            checkboxSleight: checkedYesNoSave(checkboxSleight),
            sleight: sleight.value,
            checkboxStealth: checkedYesNoSave(checkboxStealth),
            stealth: stealth.value,
            checkboxSurvival: checkedYesNoSave(checkboxSurvival),
            survival: survival.value,
            ac: ac.value,
            initiative: initiative.value,
            speed: speed.value,
            maxHP: maxHP.value,
            currentHP: currentHP.value,
            hitDice: hitDice.value,
            totalHitDice: totalHitDice.value,
            slot1Name: slot1Name.value,
            slot1ATKBonus: slot1ATKBonus.value,
            slot1DMG: slot1DMG.value,
            slot2Name: slot2Name.value,
            slot2ATKBonus: slot2ATKBonus.value,
            slot2DMG: slot2DMG.value,
            slot3Name: slot3Name.value,
            slot3ATKBonus: slot3ATKBonus.value,
            slot3DMG: slot3DMG.value,
            atkSpellcast: atkSpellcast.value,
            pp:  pp.value,
            gp:  gp.value,
            ep:  ep.value,
            sp:  sp.value,
            cp:  cp.value,
            equipment: equipment.value,
            personTraits: personTraits.value,
            ideals: ideals.value,
            bonds: bonds.value,
            flaws: flaws.value,
            age: age.value,
            height: height.value,
            weight: weight.value,
            eyes: eyes.value,
            skin: skin.value,
            hair: hair.value,
            backstory: backstory.value,
            alliesOrgs: alliesOrgs.value,
            featsTraits: featsTraits.value,
            addFeatsTraits: addFeatsTraits.value,
            backpack: backpack.value,
            spellAbil: spellAbil.value,
            spellSaveDC: spellSaveDC.value,
            spellATKBonus: spellATKBonus.value,
            cantrips: cantrips.value,
            total1Slots: total1Slots.value,
            slots1Expend: slots1Expend.value,
            checkboxlvl101: checkedYesNoSave(checkboxlvl101),
            lvl101: lvl101.value,
            checkboxlvl102: checkedYesNoSave(checkboxlvl102),
            lvl102: lvl102.value,
            checkboxlvl103: checkedYesNoSave(checkboxlvl103),
            lvl103: lvl103.value,
            checkboxlvl104: checkedYesNoSave(checkboxlvl104),
            lvl104: lvl104.value,
            checkboxlvl105: checkedYesNoSave(checkboxlvl105),
            lvl105: lvl105.value,
            checkboxlvl106: checkedYesNoSave(checkboxlvl106),
            lvl106: lvl106.value,
            checkboxlvl107: checkedYesNoSave(checkboxlvl107),
            lvl107: lvl107.value,
            checkboxlvl108: checkedYesNoSave(checkboxlvl108),
            lvl108: lvl108.value,
            checkboxlvl109: checkedYesNoSave(checkboxlvl109),
            lvl109: lvl109.value,
            checkboxlvl1010: checkedYesNoSave(checkboxlvl1010),
            lvl1010: lvl1010.value,
            checkboxlvl1011: checkedYesNoSave(checkboxlvl1011),
            lvl1011: lvl1011.value,
            checkboxlvl1012: checkedYesNoSave(checkboxlvl1012),
            lvl1012: lvl1012.value,
            checkboxlvl1013: checkedYesNoSave(checkboxlvl1013),
            lvl1013: lvl1013.value,
            total2Slots: total2Slots.value,
            slots2Expend: slots2Expend.value,
            checkboxlvl201: checkedYesNoSave(checkboxlvl201),
            lvl201: lvl201.value,
            checkboxlvl202: checkedYesNoSave(checkboxlvl202),
            lvl202: lvl202.value,
            checkboxlvl203: checkedYesNoSave(checkboxlvl203),
            lvl203: lvl203.value,
            checkboxlvl204: checkedYesNoSave(checkboxlvl204),
            lvl204: lvl204.value,
            checkboxlvl205: checkedYesNoSave(checkboxlvl205),
            lvl205: lvl205.value,
            checkboxlvl206: checkedYesNoSave(checkboxlvl206),
            lvl206: lvl206.value,
            checkboxlvl207: checkedYesNoSave(checkboxlvl207),
            lvl207: lvl207.value,
            checkboxlvl208: checkedYesNoSave(checkboxlvl208),
            lvl208: lvl208.value,
            checkboxlvl209: checkedYesNoSave(checkboxlvl209),
            lvl209: lvl209.value,
            checkboxlvl2010: checkedYesNoSave(checkboxlvl2010),
            lvl2010: lvl2010.value,
            checkboxlvl2011: checkedYesNoSave(checkboxlvl2011),
            lvl2011: lvl2011.value,
            checkboxlvl2012: checkedYesNoSave(checkboxlvl2012),
            lvl2012: lvl2012.value,
            checkboxlvl2013: checkedYesNoSave(checkboxlvl2013),
            lvl2013: lvl2013.value,
            total3Slots: total3Slots.value,
            slots3Expend: slots3Expend.value,
            checkboxlvl301: checkedYesNoSave(checkboxlvl301),
            lvl301: lvl301.value,
            checkboxlvl302: checkedYesNoSave(checkboxlvl302),
            lvl302: lvl302.value,
            checkboxlvl303: checkedYesNoSave(checkboxlvl303),
            lvl303: lvl303.value,
            checkboxlvl304: checkedYesNoSave(checkboxlvl304),
            lvl304: lvl304.value,
            checkboxlvl305: checkedYesNoSave(checkboxlvl305),
            lvl305: lvl305.value,
            checkboxlvl306: checkedYesNoSave(checkboxlvl306),
            lvl306: lvl306.value,
            checkboxlvl307: checkedYesNoSave(checkboxlvl307),
            lvl307: lvl307.value,
            checkboxlvl308: checkedYesNoSave(checkboxlvl308),
            lvl308: lvl308.value,
            checkboxlvl309: checkedYesNoSave(checkboxlvl309),
            lvl309: lvl309.value,
            checkboxlvl3010: checkedYesNoSave(checkboxlvl3010),
            lvl3010: lvl3010.value,
            checkboxlvl3011: checkedYesNoSave(checkboxlvl3011),
            lvl3011: lvl3011.value,
            checkboxlvl3012: checkedYesNoSave(checkboxlvl3012),
            lvl3012: lvl3012.value,
            checkboxlvl3013: checkedYesNoSave(checkboxlvl3013),
            lvl3013: lvl3013.value,
            total4Slots: total4Slots.value,
            slots4Expend: slots4Expend.value,
            checkboxlvl401: checkedYesNoSave(checkboxlvl401),
            lvl401: lvl401.value,
            checkboxlvl402: checkedYesNoSave(checkboxlvl401),
            lvl402: lvl402.value,
            checkboxlvl403: checkedYesNoSave(checkboxlvl403),
            lvl403: lvl403.value,
            checkboxlvl404: checkedYesNoSave(checkboxlvl404),
            lvl404: lvl404.value,
            checkboxlvl405: checkedYesNoSave(checkboxlvl405),
            lvl405: lvl405.value,
            checkboxlvl406: checkedYesNoSave(checkboxlvl406),
            lvl406: lvl406.value,
            checkboxlvl407: checkedYesNoSave(checkboxlvl407),
            lvl407: lvl407.value,
            checkboxlvl408: checkedYesNoSave(checkboxlvl408),
            lvl408: lvl408.value,
            checkboxlvl409: checkedYesNoSave(checkboxlvl409),
            lvl409: lvl409.value,
            checkboxlvl4010: checkedYesNoSave(checkboxlvl4010),
            lvl4010: lvl4010.value,
            checkboxlvl4011: checkedYesNoSave(checkboxlvl4011),
            lvl4011: lvl4011.value,
            checkboxlvl4012: checkedYesNoSave(checkboxlvl4012),
            lvl4012: lvl4012.value,
            checkboxlvl4013: checkedYesNoSave(checkboxlvl4013),
            lvl4013: lvl4013.value,
            total5Slots: total5Slots.value,
            slots5Expend: slots5Expend.value,
            checkboxlvl501: checkedYesNoSave(checkboxlvl501),
            lvl501: lvl501.value,
            checkboxlvl502: checkedYesNoSave(checkboxlvl502),
            lvl502: lvl502.value,
            checkboxlvl503: checkedYesNoSave(checkboxlvl503),
            lvl503: lvl503.value,
            checkboxlvl504: checkedYesNoSave(checkboxlvl504),
            lvl504: lvl504.value,
            checkboxlvl505: checkedYesNoSave(checkboxlvl505),
            lvl505: lvl505.value,
            checkboxlvl506: checkedYesNoSave(checkboxlvl506),
            lvl506: lvl506.value,
            checkboxlvl507: checkedYesNoSave(checkboxlvl507),
            lvl507: lvl507.value,
            checkboxlvl508: checkedYesNoSave(checkboxlvl508),
            lvl508: lvl508.value,
            checkboxlvl509: checkedYesNoSave(checkboxlvl509),
            lvl509: lvl509.value,
            checkboxlvl5010: checkedYesNoSave(checkboxlvl5010),
            lvl5010: lvl5010.value,
            checkboxlvl5011: checkedYesNoSave(checkboxlvl5011),
            lvl5011: lvl5011.value,
            checkboxlvl5012: checkedYesNoSave(checkboxlvl5012),
            lvl5012: lvl5012.value,
            checkboxlvl5013: checkedYesNoSave(checkboxlvl5013),
            lvl5013: lvl5013.value,
            total6Slots: total6Slots.value,
            slots6Expend: slots6Expend.value,
            checkboxlvl601: checkedYesNoSave(checkboxlvl601),
            lvl601: lvl601.value,
            checkboxlvl602: checkedYesNoSave(checkboxlvl602),
            lvl602: lvl602.value,
            checkboxlvl603: checkedYesNoSave(checkboxlvl603),
            lvl603: lvl603.value,
            checkboxlvl604: checkedYesNoSave(checkboxlvl604),
            lvl604: lvl604.value,
            checkboxlvl605: checkedYesNoSave(checkboxlvl605),
            lvl605: lvl605.value,
            checkboxlvl606: checkedYesNoSave(checkboxlvl606),
            lvl606: lvl606.value,
            checkboxlvl607: checkedYesNoSave(checkboxlvl607),
            lvl607: lvl607.value,
            checkboxlvl608: checkedYesNoSave(checkboxlvl608),
            lvl608: lvl608.value,
            checkboxlvl609: checkedYesNoSave(checkboxlvl609),
            lvl609: lvl609.value,
            checkboxlvl6010: checkedYesNoSave(checkboxlvl6010),
            lvl6010: lvl6010.value,
            checkboxlvl6011: checkedYesNoSave(checkboxlvl6011),
            lvl6011: lvl6011.value,
            checkboxlvl6012: checkedYesNoSave(checkboxlvl6012),
            lvl6012: lvl6012.value,
            checkboxlvl6013: checkedYesNoSave(checkboxlvl6013),
            lvl6013: lvl6013.value,
            total7Slots: total7Slots.value,
            slots7Expend: slots7Expend.value,
            checkboxlvl701: checkedYesNoSave(checkboxlvl701),
            lvl701: lvl701.value,
            checkboxlvl702: checkedYesNoSave(checkboxlvl702),
            lvl702: lvl702.value,
            checkboxlvl703: checkedYesNoSave(checkboxlvl703),
            lvl703: lvl703.value,
            checkboxlvl704: checkedYesNoSave(checkboxlvl704),
            lvl704: lvl704.value,
            checkboxlvl705: checkedYesNoSave(checkboxlvl705),
            lvl705: lvl705.value,
            checkboxlvl706: checkedYesNoSave(checkboxlvl706),
            lvl706: lvl706.value,
            checkboxlvl707: checkedYesNoSave(checkboxlvl707),
            lvl707: lvl707.value,
            checkboxlvl708: checkedYesNoSave(checkboxlvl708),
            lvl708: lvl708.value,
            checkboxlvl709: checkedYesNoSave(checkboxlvl709),
            lvl709: lvl709.value,
            checkboxlvl7010: checkedYesNoSave(checkboxlvl7010),
            lvl7010: lvl7010.value,
            checkboxlvl7011: checkedYesNoSave(checkboxlvl7011),
            lvl7011: lvl7011.value,
            checkboxlvl7012: checkedYesNoSave(checkboxlvl7012),
            lvl7012: lvl7012.value,
            checkboxlvl7013: checkedYesNoSave(checkboxlvl7013),
            lvl7013: lvl7013.value,
            total8Slots: total8Slots.value,
            slots8Expend: slots8Expend.value,
            checkboxlvl801: checkedYesNoSave(checkboxlvl801),
            lvl801: lvl801.value,
            checkboxlvl802: checkedYesNoSave(checkboxlvl802),
            lvl802: lvl802.value,
            checkboxlvl803: checkedYesNoSave(checkboxlvl803),
            lvl803: lvl803.value,
            checkboxlvl804: checkedYesNoSave(checkboxlvl804),
            lvl804: lvl804.value,
            checkboxlvl805: checkedYesNoSave(checkboxlvl805),
            lvl805: lvl805.value,
            checkboxlvl806: checkedYesNoSave(checkboxlvl806),
            lvl806: lvl806.value,
            checkboxlvl807: checkedYesNoSave(checkboxlvl807),
            lvl807: lvl807.value,
            checkboxlvl808: checkedYesNoSave(checkboxlvl808),
            lvl808: lvl808.value,
            checkboxlvl809: checkedYesNoSave(checkboxlvl809),
            lvl809: lvl809.value,
            checkboxlvl8010: checkedYesNoSave(checkboxlvl8010),
            lvl8010: lvl8010.value,
            checkboxlvl8011: checkedYesNoSave(checkboxlvl8011),
            lvl8011: lvl8011.value,
            checkboxlvl8012: checkedYesNoSave(checkboxlvl8012),
            lvl8012: lvl8012.value,
            checkboxlvl8013: checkedYesNoSave(checkboxlvl8013),
            lvl8013: lvl8013.value,
            total9Slots: total9Slots.value,
            slots9Expend: slots9Expend.value,
            checkboxlvl901: checkedYesNoSave(checkboxlvl901),
            lvl901: lvl901.value,
            checkboxlvl902: checkedYesNoSave(checkboxlvl902),
            lvl902: lvl902.value,
            checkboxlvl903: checkedYesNoSave(checkboxlvl903),
            lvl903: lvl903.value,
            checkboxlvl904: checkedYesNoSave(checkboxlvl904),
            lvl904: lvl904.value,
            checkboxlvl905: checkedYesNoSave(checkboxlvl905),
            lvl905: lvl905.value,
            checkboxlvl906: checkedYesNoSave(checkboxlvl906),
            lvl906: lvl906.value,
            checkboxlvl907: checkedYesNoSave(checkboxlvl907),
            lvl907: lvl907.value,
            checkboxlvl908: checkedYesNoSave(checkboxlvl908),
            lvl908: lvl908.value,
            checkboxlvl909: checkedYesNoSave(checkboxlvl909),
            lvl909: lvl909.value,
            checkboxlvl9010: checkedYesNoSave(checkboxlvl9010),
            lvl9010: lvl9010.value,
            checkboxlvl9011: checkedYesNoSave(checkboxlvl9011),
            lvl9011: lvl9011.value,
            checkboxlvl9012: checkedYesNoSave(checkboxlvl9012),
            lvl9012: lvl9012.value,
            checkboxlvl9013: checkedYesNoSave(checkboxlvl9013),
            lvl9013: lvl9013.value,
            passWis: passWis.value
        };

        const reqOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            },
            body: JSON.stringify(updateCharObject)
        };

        const response = await fetch(charsApi + characterName, reqOptions)
        if (!response.ok){
            throw new Error(`HTTP Error: status: ${response.status}`);
        };
    } catch {
        console.log("Error saving character")
    };
};

const deleteChar = async (characterName) => {
    try {
        const reqOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${auth}`
            }
        };

        await fetch(charApi + characterName, reqOptions);

        unableMsg.textContent = "";
        deleteDiv.style.display = "none";
        window.location.href = "../mainScreen/mainScreen.html";

    } catch(error) {
        console.log(error)
    };    
};
document.addEventListener("DOMContentLoaded", () => {
    getChar(selectedChar);

    saveBtn.addEventListener("click", () => {
        saveChar(selectedChar);
        console.log("save");
    });

    backBtn.addEventListener("click", () => {
        window.location.href = "../mainScreen/mainScreen.html";
    });

    deleteBtn.addEventListener("click", () => {
        deleteDiv.style.display = "flex";
    });

    cancelBtn.addEventListener("click", () => {
        deleteDiv.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        if (confirmDel.value === charNameHeader.value) {
            deleteChar(charNameHeader.value);
        } else {
            unableMsg.textContent = "Entered text does not match character name";
        };
    });
});
