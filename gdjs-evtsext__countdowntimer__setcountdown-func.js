
if (typeof gdjs.evtsExt__CountdownTimer__SetCountdown !== "undefined") {
  gdjs.evtsExt__CountdownTimer__SetCountdown.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CountdownTimer__SetCountdown = {};
gdjs.evtsExt__CountdownTimer__SetCountdown.idToCallbackMap = new Map();


gdjs.evtsExt__CountdownTimer__SetCountdown.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CountdownTimer").getChild("Clocks").getChild(eventsFunctionContext.getArgument("ClockName")).getChild("Time").setNumber(eventsFunctionContext.getArgument("TimeArg"));
}
{runtimeScene.getScene().getVariables().get("__CountdownTimer").getChild("Clocks").getChild(eventsFunctionContext.getArgument("ClockName")).getChild("TimeRestart").setNumber(eventsFunctionContext.getArgument("TimeArg"));
}
}

}


};

gdjs.evtsExt__CountdownTimer__SetCountdown.func = function(runtimeScene, ClockName, TimeArg, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CountdownTimer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CountdownTimer"),
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
if (argName === "ClockName") return ClockName;
if (argName === "TimeArg") return TimeArg;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CountdownTimer__SetCountdown.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CountdownTimer__SetCountdown.registeredGdjsCallbacks = [];