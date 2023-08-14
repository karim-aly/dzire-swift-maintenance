function clearText() {
    document.getElementById("mileage").value = "";
    // ⚡⚓✅✍❌❎⭐🔍🔍🔃🛞⚠️🔧
    document.getElementById("output").innerText = "";
}

async function getRequiredServiceActions() {
    let mileageText = document.getElementById("mileage");
    let outputText = document.getElementById("output");

    var mileage = mileageText.value;
    if (!mileage || !/^\d+$/.test(mileage)) {
        mileageText.value = WrongInputPromptText;
        await new Promise(r => setTimeout(r, 300));
        mileageText.value = "";
        return;
    }

    if (mileage < 5000) {
        outputText.innerHTML = "<h3><strong>⚓" + NoMaintenanceRequiredPromptText + "</strong></h3>";
        return;
    }

    mileage_rounded = mileage - (mileage % 5000);

    var actionsList = "";
    var inspectionsList = "";
    var serviceCost = 0;

    if (mileage >= 5000 && mileage_rounded % 5000 == 0 && mileage_rounded >= 5000) {
        inspectionsList += ServiceActions5KmText;
        serviceCost += 350;
    }

    if (mileage_rounded % 10000 == 0) {
        actionsList += ServiceActions10KmText;
        serviceCost += 1850;
    }
    if (mileage_rounded % 20000 == 0) {
        actionsList += ServiceActions20KmText;
        serviceCost += 2500;
    }
    if (mileage_rounded % 30000 == 0) {
        actionsList += ServiceActions30KmText;
        serviceCost += 800;
    }
    if (mileage_rounded % 40000 == 0) {
        actionsList += ServiceActions40KmText;
        serviceCost += 2700;
    }
    if (mileage_rounded % 60000 == 0) {
        actionsList += ServiceActions60KmText;
        serviceCost += 0;
    }
    if (mileage_rounded % 100000 == 0) {
        actionsList += ServiceActions100KmText;
        serviceCost += 1500;
    }

    if (actionsList && inspectionsList) {
        outputText.innerHTML = "<h3><strong>⚓" + RequiredServicesText + "</strong></h3>    " + actionsList.trimStart() + "\n<h3><strong>⚓" + InspectionsText + "</strong></h3>    " + inspectionsList.trimStart();
    } else if (actionsList) {
        outputText.innerHTML = "<h3><strong>⚓" + RequiredServicesText + "</strong></h3>    " + actionsList.trimStart();
    } else if (inspectionsList) {
        outputText.innerHTML = "<h3><strong>⚓" + InspectionsText + "</strong></h3>    " + inspectionsList.trimStart();
    }

    if (serviceCost > 0) {
        outputText.innerHTML += "\n<h3><strong>⚓" + ServiceCostText + "</strong></h3>    <em>" + ServiceCostDisclaimerText + "</em>\n    💵" + serviceCost + " EGP";
    }
}

// function to detect keypress event
document.getElementById("mileage").addEventListener("keypress", function (event) {
    // detect event key
    if (event.keyCode == 13) {
        console.log("Enter key is pressed");
        let inputText = document.getElementById("mileage").value;
        console.log(inputText);
        getRequiredServiceActions();
    }
});