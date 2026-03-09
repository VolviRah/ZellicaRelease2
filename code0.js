gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.localVariables = [];
gdjs.Start_32ScreenCode.idToCallbackMap = new Map();
gdjs.Start_32ScreenCode.GDMainObjects1= [];
gdjs.Start_32ScreenCode.GDMainObjects2= [];
gdjs.Start_32ScreenCode.GDMainObjects3= [];
gdjs.Start_32ScreenCode.GDMainObjects4= [];
gdjs.Start_32ScreenCode.GDMainObjects5= [];
gdjs.Start_32ScreenCode.GDMainObjects6= [];
gdjs.Start_32ScreenCode.GDMainGunObjects1= [];
gdjs.Start_32ScreenCode.GDMainGunObjects2= [];
gdjs.Start_32ScreenCode.GDMainGunObjects3= [];
gdjs.Start_32ScreenCode.GDMainGunObjects4= [];
gdjs.Start_32ScreenCode.GDMainGunObjects5= [];
gdjs.Start_32ScreenCode.GDMainGunObjects6= [];
gdjs.Start_32ScreenCode.GDLogoObjects1= [];
gdjs.Start_32ScreenCode.GDLogoObjects2= [];
gdjs.Start_32ScreenCode.GDLogoObjects3= [];
gdjs.Start_32ScreenCode.GDLogoObjects4= [];
gdjs.Start_32ScreenCode.GDLogoObjects5= [];
gdjs.Start_32ScreenCode.GDLogoObjects6= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects1= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects2= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects3= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects4= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects5= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects6= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects1= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects2= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects3= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects4= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects5= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects6= [];
gdjs.Start_32ScreenCode.GDVersionObjects1= [];
gdjs.Start_32ScreenCode.GDVersionObjects2= [];
gdjs.Start_32ScreenCode.GDVersionObjects3= [];
gdjs.Start_32ScreenCode.GDVersionObjects4= [];
gdjs.Start_32ScreenCode.GDVersionObjects5= [];
gdjs.Start_32ScreenCode.GDVersionObjects6= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects1= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects2= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects3= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects4= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects5= [];
gdjs.Start_32ScreenCode.GDFallingMCObjects6= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects1= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects2= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects3= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects4= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects5= [];
gdjs.Start_32ScreenCode.GDFallingGunObjects6= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects3= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects4= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects5= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects6= [];


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Start_32ScreenCode.asyncCallback40089804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.idToCallbackMap.set(40089804, gdjs.Start_32ScreenCode.asyncCallback40089804);
gdjs.Start_32ScreenCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback40089804(runtimeScene, asyncObjectsList)), 40089804, asyncObjectsList);
}
}

}


};gdjs.Start_32ScreenCode.asyncCallback40089020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FallingGun"), gdjs.Start_32ScreenCode.GDFallingGunObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("FallingMC"), gdjs.Start_32ScreenCode.GDFallingMCObjects4);

{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-quick-bomb-drop-explosion-1697.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDFallingGunObjects4.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDFallingGunObjects4[i].getBehavior("Tween").addObjectScaleTween3("Fade3", 0.1, "linear", 2.4, false, true);
}
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDFallingMCObjects4.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDFallingMCObjects4[i].getBehavior("Tween").addObjectScaleTween3("Fade3", 0.1, "linear", 2, false, true);
}
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.idToCallbackMap.set(40089020, gdjs.Start_32ScreenCode.asyncCallback40089020);
gdjs.Start_32ScreenCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
for (const obj of gdjs.Start_32ScreenCode.GDFallingGunObjects3) asyncObjectsList.addObject("FallingGun", obj);
for (const obj of gdjs.Start_32ScreenCode.GDFallingMCObjects3) asyncObjectsList.addObject("FallingMC", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback40089020(runtimeScene, asyncObjectsList)), 40089020, asyncObjectsList);
}
}

}


};gdjs.Start_32ScreenCode.asyncCallback40088652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("FallingGun"), gdjs.Start_32ScreenCode.GDFallingGunObjects3);
gdjs.copyArray(runtimeScene.getObjects("FallingMC"), gdjs.Start_32ScreenCode.GDFallingMCObjects3);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDFallingMCObjects3.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDFallingMCObjects3[i].getBehavior("Tween").addObjectPositionTween2("Fade2", 642, 1083, "linear", 3, false);
}
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDFallingGunObjects3.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDFallingGunObjects3[i].getBehavior("Tween").addObjectPositionTween2("Fade2", 642, 1083, "linear", 3.2, false);
}
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.idToCallbackMap.set(40088652, gdjs.Start_32ScreenCode.asyncCallback40088652);
gdjs.Start_32ScreenCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback40088652(runtimeScene, asyncObjectsList)), 40088652, asyncObjectsList);
}
}

}


};gdjs.Start_32ScreenCode.asyncCallback40087780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Start_32ScreenCode.GDBlackOverlayObjects2);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDBlackOverlayObjects2.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDBlackOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Fade1", 255, "linear", 2, false);
}
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.idToCallbackMap.set(40087780, gdjs.Start_32ScreenCode.asyncCallback40087780);
gdjs.Start_32ScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback40087780(runtimeScene, asyncObjectsList)), 40087780, asyncObjectsList);
}
}

}


};gdjs.Start_32ScreenCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MainGun"), gdjs.Start_32ScreenCode.GDMainGunObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDMainGunObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDMainGunObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 10, 10, 5, 0.08, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBTN"), gdjs.Start_32ScreenCode.GDPlayBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDPlayBTNObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32ScreenCode.GDPlayBTNObjects1[k] = gdjs.Start_32ScreenCode.GDPlayBTNObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 1, 1.5);
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Start_32ScreenCode.GDBlackOverlayObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDBlackOverlayObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game Scene");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "11 Risk-Reward.wav", 1, false, 100, 1);
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "mixkit-quick-bomb-drop-explosion-1697.wav");
}
}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDMainObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects3.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects4.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects5.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects6.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects3.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects4.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects5.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects6.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects3.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects4.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects5.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects6.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects3.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects4.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects5.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects6.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects3.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects4.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects5.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects6.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects1.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects2.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects3.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects4.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects5.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects6.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects4.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects5.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects6.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects4.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects5.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects6.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects3.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects4.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects5.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects6.length = 0;

gdjs.Start_32ScreenCode.eventsList5(runtimeScene);
gdjs.Start_32ScreenCode.GDMainObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects3.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects4.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects5.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects6.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects3.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects4.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects5.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects6.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects3.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects4.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects5.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects6.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects3.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects4.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects5.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects6.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects3.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects4.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects5.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects6.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects1.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects2.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects3.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects4.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects5.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects6.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects4.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects5.length = 0;
gdjs.Start_32ScreenCode.GDFallingMCObjects6.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects3.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects4.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects5.length = 0;
gdjs.Start_32ScreenCode.GDFallingGunObjects6.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects3.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects4.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects5.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects6.length = 0;


return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
