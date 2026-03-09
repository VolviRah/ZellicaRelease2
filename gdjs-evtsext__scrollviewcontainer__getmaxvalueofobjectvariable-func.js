
if (typeof gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable !== "undefined") {
  gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable = {};
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.idToCallbackMap = new Map();
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects1= [];
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects2= [];


gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.userFunc0xaf0dd0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Récupérer les arguments passés depuis GDevelop
const variableName = eventsFunctionContext.getArgument("VariableName"); // Nom de la variable

let maxValue = -Infinity;

// Obtenir toutes les instances de l'objet
const instances = eventsFunctionContext.getObjects("ObjectName");

// Parcourir chaque instance et vérifier la valeur de la variable
instances.forEach(instance => {
    const value = instance.getVariables().get(variableName).getAsNumber(); // Correct usage
    if (value > maxValue) {
        maxValue = value; // Mettre à jour la valeur maximale
    } 
});

eventsFunctionContext.returnValue = maxValue;

};
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.userFunc0xaf0dd0(runtimeScene, eventsFunctionContext);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.func = function(runtimeScene, ObjectName, VariableName, parentEventsFunctionContext) {
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

gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects2.length = 0;

gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.GDObjectNameObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ScrollViewContainer__GetMaxValueOfObjectVariable.registeredGdjsCallbacks = [];