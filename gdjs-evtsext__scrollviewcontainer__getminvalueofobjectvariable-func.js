
if (typeof gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable !== "undefined") {
  gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable = {};
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects1= [];
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects2= [];


gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.userFunc0x16f67a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Récupérer les arguments passés depuis GDevelop
const variableName = eventsFunctionContext.getArgument("VariableName"); // Nom de la variable

let minValue = Infinity; // Initialiser à l'infini positif

// Obtenir toutes les instances de l'objet
const instances = eventsFunctionContext.getObjects("ObjectName");

// Parcourir chaque instance et vérifier la valeur de la variable
instances.forEach(instance => {
    const value = instance.getVariables().get(variableName).getAsNumber(); // Accéder à la variable
    if (value < minValue) { // Vérifier si la valeur est inférieure à minValue
        minValue = value; // Mettre à jour la valeur minimale
    }
});

// Vérifier si une valeur minimale a été trouvée
if (minValue === Infinity) {
    minValue = null; // Aucune valeur trouvée, retourne null ou une autre valeur par défaut
}

eventsFunctionContext.returnValue = minValue; // Retourner la valeur minimale

};
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.userFunc0x16f67a8(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.func = function(runtimeScene, ObjectName, VariableName, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"ObjectName": ObjectName
},
  _objectArraysMap: {
"ObjectName": gdjs.objectsListsToArray(ObjectName)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollViewContainer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollViewContainer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "VariableName") return VariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects2.length = 0;

gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.GDObjectNameObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ScrollViewContainer__GetMinValueOfObjectVariable.registeredGdjsCallbacks = [];