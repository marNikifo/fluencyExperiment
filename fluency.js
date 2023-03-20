/**************** 
 * Fluency Test *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'fluency';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(200, 9999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(consent1RoutineBegin());
flowScheduler.add(consent1RoutineEachFrame());
flowScheduler.add(consent1RoutineEnd());
flowScheduler.add(consent2RoutineBegin());
flowScheduler.add(consent2RoutineEachFrame());
flowScheduler.add(consent2RoutineEnd());
flowScheduler.add(consent3RoutineBegin());
flowScheduler.add(consent3RoutineEachFrame());
flowScheduler.add(consent3RoutineEnd());
flowScheduler.add(instrStartRoutineBegin());
flowScheduler.add(instrStartRoutineEachFrame());
flowScheduler.add(instrStartRoutineEnd());
const instr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_loopLoopBegin(instr_loopLoopScheduler));
flowScheduler.add(instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopEnd);
const attnCheckerLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(attnCheckerLoopBegin(attnCheckerLoopScheduler));
flowScheduler.add(attnCheckerLoopScheduler);
flowScheduler.add(attnCheckerLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(intro2QuestionsRoutineBegin());
flowScheduler.add(intro2QuestionsRoutineEachFrame());
flowScheduler.add(intro2QuestionsRoutineEnd());
flowScheduler.add(ambiguity1RoutineBegin());
flowScheduler.add(ambiguity1RoutineEachFrame());
flowScheduler.add(ambiguity1RoutineEnd());
flowScheduler.add(ambiguity2RoutineBegin());
flowScheduler.add(ambiguity2RoutineEachFrame());
flowScheduler.add(ambiguity2RoutineEnd());
flowScheduler.add(ambiguity3RoutineBegin());
flowScheduler.add(ambiguity3RoutineEachFrame());
flowScheduler.add(ambiguity3RoutineEnd());
flowScheduler.add(ambiguity4RoutineBegin());
flowScheduler.add(ambiguity4RoutineEachFrame());
flowScheduler.add(ambiguity4RoutineEnd());
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(openAnswerRoutineBegin());
flowScheduler.add(openAnswerRoutineEachFrame());
flowScheduler.add(openAnswerRoutineEnd());
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/B09_04.jpg', 'path': 'img/B09_04.jpg'},
    {'name': 'img/B07_03.jpg', 'path': 'img/B07_03.jpg'},
    {'name': 'img/B04_02.jpg', 'path': 'img/B04_02.jpg'},
    {'name': 'img/B05_04.jpg', 'path': 'img/B05_04.jpg'},
    {'name': 'img/B07_05.jpg', 'path': 'img/B07_05.jpg'},
    {'name': 'img/B03_07.jpg', 'path': 'img/B03_07.jpg'},
    {'name': 'img/B09_09.jpg', 'path': 'img/B09_09.jpg'},
    {'name': 'img/B10_00.jpg', 'path': 'img/B10_00.jpg'},
    {'name': 'img/B01_07.jpg', 'path': 'img/B01_07.jpg'},
    {'name': 'img/B09_02.jpg', 'path': 'img/B09_02.jpg'},
    {'name': 'img/B08_03.jpg', 'path': 'img/B08_03.jpg'},
    {'name': 'img/B02_00.jpg', 'path': 'img/B02_00.jpg'},
    {'name': 'img/B04_05.jpg', 'path': 'img/B04_05.jpg'},
    {'name': 'img/B01_02.jpg', 'path': 'img/B01_02.jpg'},
    {'name': 'img/B09_05.jpg', 'path': 'img/B09_05.jpg'},
    {'name': 'img/B01_00.jpg', 'path': 'img/B01_00.jpg'},
    {'name': 'img/B03_06.jpg', 'path': 'img/B03_06.jpg'},
    {'name': 'img/B09_08.jpg', 'path': 'img/B09_08.jpg'},
    {'name': 'img/B08_02.jpg', 'path': 'img/B08_02.jpg'},
    {'name': 'img/B05_05.jpg', 'path': 'img/B05_05.jpg'},
    {'name': 'img/B07_06.jpg', 'path': 'img/B07_06.jpg'},
    {'name': 'img/B05_06.jpg', 'path': 'img/B05_06.jpg'},
    {'name': 'img/B01_06.jpg', 'path': 'img/B01_06.jpg'},
    {'name': 'img/B01_09.jpg', 'path': 'img/B01_09.jpg'},
    {'name': 'img/B04_04.jpg', 'path': 'img/B04_04.jpg'},
    {'name': 'img/B05_07.jpg', 'path': 'img/B05_07.jpg'},
    {'name': 'img/B06_00.jpg', 'path': 'img/B06_00.jpg'},
    {'name': 'img/B10_08.jpg', 'path': 'img/B10_08.jpg'},
    {'name': 'img/B02_03.jpg', 'path': 'img/B02_03.jpg'},
    {'name': 'img/B01_03.jpg', 'path': 'img/B01_03.jpg'},
    {'name': 'img/B02_08.jpg', 'path': 'img/B02_08.jpg'},
    {'name': 'img/B03_05.jpg', 'path': 'img/B03_05.jpg'},
    {'name': 'img/B06_04.jpg', 'path': 'img/B06_04.jpg'},
    {'name': 'img/B10_07.jpg', 'path': 'img/B10_07.jpg'},
    {'name': 'img/B04_03.jpg', 'path': 'img/B04_03.jpg'},
    {'name': 'img/B04_08.jpg', 'path': 'img/B04_08.jpg'},
    {'name': 'img/B05_10.jpg', 'path': 'img/B05_10.jpg'},
    {'name': 'img/B03_00.jpg', 'path': 'img/B03_00.jpg'},
    {'name': 'img/B09_06.jpg', 'path': 'img/B09_06.jpg'},
    {'name': 'img/B10_05.jpg', 'path': 'img/B10_05.jpg'},
    {'name': 'img/B03_01.jpg', 'path': 'img/B03_01.jpg'},
    {'name': 'img/B08_08.jpg', 'path': 'img/B08_08.jpg'},
    {'name': 'img/B02_10.jpg', 'path': 'img/B02_10.jpg'},
    {'name': 'img/B06_03.jpg', 'path': 'img/B06_03.jpg'},
    {'name': 'img/B01_01.jpg', 'path': 'img/B01_01.jpg'},
    {'name': 'img/B05_09.jpg', 'path': 'img/B05_09.jpg'},
    {'name': 'img/B06_07.jpg', 'path': 'img/B06_07.jpg'},
    {'name': 'img/B07_08.jpg', 'path': 'img/B07_08.jpg'},
    {'name': 'img/B08_06.jpg', 'path': 'img/B08_06.jpg'},
    {'name': 'img/B02_01.jpg', 'path': 'img/B02_01.jpg'},
    {'name': 'img/B08_10.jpg', 'path': 'img/B08_10.jpg'},
    {'name': 'img/B09_01.jpg', 'path': 'img/B09_01.jpg'},
    {'name': 'img/B02_06.jpg', 'path': 'img/B02_06.jpg'},
    {'name': 'img/B10_01.jpg', 'path': 'img/B10_01.jpg'},
    {'name': 'img/B05_02.jpg', 'path': 'img/B05_02.jpg'},
    {'name': 'img/B10_03.jpg', 'path': 'img/B10_03.jpg'},
    {'name': 'img/B02_04.jpg', 'path': 'img/B02_04.jpg'},
    {'name': 'img/B06_09.jpg', 'path': 'img/B06_09.jpg'},
    {'name': 'img/B07_00.jpg', 'path': 'img/B07_00.jpg'},
    {'name': 'img/B04_07.jpg', 'path': 'img/B04_07.jpg'},
    {'name': 'img/B06_06.jpg', 'path': 'img/B06_06.jpg'},
    {'name': 'img/B08_00.jpg', 'path': 'img/B08_00.jpg'},
    {'name': 'img/B04_00.jpg', 'path': 'img/B04_00.jpg'},
    {'name': 'img/B02_07.jpg', 'path': 'img/B02_07.jpg'},
    {'name': 'img/B08_09.jpg', 'path': 'img/B08_09.jpg'},
    {'name': 'img/B01_04.jpg', 'path': 'img/B01_04.jpg'},
    {'name': 'img/B07_10.jpg', 'path': 'img/B07_10.jpg'},
    {'name': 'img/B03_08.jpg', 'path': 'img/B03_08.jpg'},
    {'name': 'img/B05_03.jpg', 'path': 'img/B05_03.jpg'},
    {'name': 'img/B03_09.jpg', 'path': 'img/B03_09.jpg'},
    {'name': 'img/B08_07.jpg', 'path': 'img/B08_07.jpg'},
    {'name': 'img/B06_08.jpg', 'path': 'img/B06_08.jpg'},
    {'name': 'img/B07_01.jpg', 'path': 'img/B07_01.jpg'},
    {'name': 'img/B09_03.jpg', 'path': 'img/B09_03.jpg'},
    {'name': 'img/B07_02.jpg', 'path': 'img/B07_02.jpg'},
    {'name': 'img/B05_01.jpg', 'path': 'img/B05_01.jpg'},
    {'name': 'img/B03_02.jpg', 'path': 'img/B03_02.jpg'},
    {'name': 'img/B06_10.jpg', 'path': 'img/B06_10.jpg'},
    {'name': 'img/B06_01.jpg', 'path': 'img/B06_01.jpg'},
    {'name': 'img/B10_02.jpg', 'path': 'img/B10_02.jpg'},
    {'name': 'img/B06_02.jpg', 'path': 'img/B06_02.jpg'},
    {'name': 'img/B05_08.jpg', 'path': 'img/B05_08.jpg'},
    {'name': 'img/B07_07.jpg', 'path': 'img/B07_07.jpg'},
    {'name': 'img/B02_09.jpg', 'path': 'img/B02_09.jpg'},
    {'name': 'img/B04_09.jpg', 'path': 'img/B04_09.jpg'},
    {'name': 'img/B07_04.jpg', 'path': 'img/B07_04.jpg'},
    {'name': 'img/B01_08.jpg', 'path': 'img/B01_08.jpg'},
    {'name': 'img/B08_05.jpg', 'path': 'img/B08_05.jpg'},
    {'name': 'img/B10_04.jpg', 'path': 'img/B10_04.jpg'},
    {'name': 'img/B03_10.jpg', 'path': 'img/B03_10.jpg'},
    {'name': 'img/B10_10.jpg', 'path': 'img/B10_10.jpg'},
    {'name': 'img/B07_09.jpg', 'path': 'img/B07_09.jpg'},
    {'name': 'img/B01_05.jpg', 'path': 'img/B01_05.jpg'},
    {'name': 'img/B01_10.jpg', 'path': 'img/B01_10.jpg'},
    {'name': 'img/B04_10.jpg', 'path': 'img/B04_10.jpg'},
    {'name': 'img/B09_10.jpg', 'path': 'img/B09_10.jpg'},
    {'name': 'img/B04_06.jpg', 'path': 'img/B04_06.jpg'},
    {'name': 'img/B03_03.jpg', 'path': 'img/B03_03.jpg'},
    {'name': 'img/B04_01.jpg', 'path': 'img/B04_01.jpg'},
    {'name': 'img/B10_09.jpg', 'path': 'img/B10_09.jpg'},
    {'name': 'img/B08_04.jpg', 'path': 'img/B08_04.jpg'},
    {'name': 'img/B05_00.jpg', 'path': 'img/B05_00.jpg'},
    {'name': 'img/B03_04.jpg', 'path': 'img/B03_04.jpg'},
    {'name': 'fluency_conditions.xlsx', 'path': 'fluency_conditions.xlsx'},
    {'name': 'img/B09_00.jpg', 'path': 'img/B09_00.jpg'},
    {'name': 'img/B02_02.jpg', 'path': 'img/B02_02.jpg'},
    {'name': 'img/practice_image.jpg', 'path': 'img/practice_image.jpg'},
    {'name': 'img/B02_05.jpg', 'path': 'img/B02_05.jpg'},
    {'name': 'img/B10_06.jpg', 'path': 'img/B10_06.jpg'},
    {'name': 'img/B08_01.jpg', 'path': 'img/B08_01.jpg'},
    {'name': 'img/B09_07.jpg', 'path': 'img/B09_07.jpg'},
    {'name': 'img/B06_05.jpg', 'path': 'img/B06_05.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var helloClock;
var welcome;
var introCont1;
var welc_advance;
var consent1Clock;
var consentText_1;
var introCont2;
var consent_advance;
var consent2Clock;
var consentText_2;
var introCont3;
var consent_advance_2;
var consent3Clock;
var consentText_3;
var iAgree;
var iQuit;
var consentClick;
var quitClick;
var instrStartClock;
var genInstr1;
var IntroCont4;
var instr_advance_3;
var selected_rows;
var specific_instrClock;
var genInstr2;
var specific_instructions;
var definition;
var IntroCont5;
var spec_instr_adv;
var rateInstrClock;
var ratingInstr;
var spec_instr_adv2;
var IntroCont6;
var general_instr2Clock;
var genInstr_2;
var instr_advance_2;
var IntroCont7;
var specific_instr2Clock;
var specific_instructions_2;
var definition_2;
var spec_instr_adv_2;
var IntroCont8;
var rateInstr2Clock;
var ratingInstr_2;
var rate_instr_adv2;
var IntroCont9;
var attnCheck1Clock;
var attnQuestion1;
var attnKeyResp1;
var attnCheck2Clock;
var attnQuestion2;
var attnKeyResp2;
var attnCheck3Clock;
var attnQuestion3;
var attnKeyResp3;
var attnFailedClock;
var attnFailure_continue;
var failureAcknowledged;
var reviewStart;
var attnSuccessClock;
var introducePractice;
var practiceStart;
var practiceStart_button;
var fixationClock;
var fixCross;
var practiceFaceClock;
var practiceResp;
var respIndicator_2;
var practiceImage;
var timesRedone;
var redo_feedbackClock;
var out_of_time_2;
var timeoutReminder;
var redo_keypress;
var ratingScaleClock;
var attractiveness_slider;
var attractiveness_instr;
var notAttractive;
var veryAttractive;
var attrRating;
var introDoneClock;
var attnSuccess_continue;
var key_resp_3;
var faceOnsetClock;
var catResp;
var respIndicator;
var face_image;
var contClock;
var trialPassed;
var fixCross_2;
var reminder;
var contResp;
var contPrompt;
var intro2QuestionsClock;
var qsIntro;
var contResp_2;
var ambiguity1Clock;
var qsInstr;
var questions1;
var respQ1;
var respQ2;
var respQ3;
var respQ4;
var nextButton1;
var nextClick1;
var ambiguity2Clock;
var qsInstr_2;
var questions2;
var respQ5;
var respQ6;
var respQ7;
var respQ8;
var nextButton2;
var nextClick2;
var ambiguity3Clock;
var qsInstr_3;
var questions3;
var respQ9;
var respQ10;
var respQ11;
var respQ12;
var nextButton3;
var nextClick3;
var ambiguity4Clock;
var qsInstr_4;
var questions4;
var respQ13;
var respQ14;
var respQ15;
var respQ16;
var nextButton4;
var nextClick4;
var demographicsClock;
var demographicsInstr;
var age;
var respAge;
var gender;
var genderResp1;
var genderResp2;
var nextButton5;
var demographClick;
var openAnswerClock;
var openPrompt;
var textbox;
var openanswerEnd;
var openanswerClick;
var debriefClock;
var debriefText;
var exitMessage;
var exitKey;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Welcome to the study! Please make sure you are in a quiet environment where you will be able to concentrate on the task. Before we begin, you must review the consent form on the following three screens. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  introCont1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introCont1',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  welc_advance = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  consentText_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentText_1',
    text: 'This form will give you information about the study so you can decide about participating in the research. This study is an investigation of visual perception and categorization. The session will last between 20 and 60 minutes in total. You will receive compensation at a rate of 8 dollars per hour for your time. If you are interested in learning more about this study, we will inform you of our hypotheses immediately after you complete the study. We will not contact you again after you complete the study, although you are free to contact us at any time if you have any additional questions or concerns, or if you would like to learn the outcome of this study.\n\nYou can reach the principal investigator, Jeffrey Starns at jstarns@umass.edu or the Psychological and Brain Sciences Department Chair via Laura Wildman Hanlon at (413) 545-2387 or laurawh@umass.edu. If you have any questions concerning your rights as a research subject, you may contact the University of Massachusetts Amherst Human Research Protection Office (HRPO) at (413) 545-3428 or humansubjects@ora.umass.edu.\n\nPURPOSE: In this study, you will view a sequence of images (abstract shapes, objects, faces, or scenes) about which you will be asked to answer questions. The questions will relate either to perception (e.g., "Is this item part of group A or B?), or to your feelings about the item (e.g., "How attractive is the item?"). Your responses will be made by using your computer keyboard. The material will be either abstract shapes with no particular meaning, or everyday objects, faces, or scenes that are not offensive or provocative. You may also be asked to fill out short questionnaires after the main task. The questionnaires will consist of series of statements to which you will rate your agreement to on a numbered scale. The statements will not be offensive in nature.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  introCont2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introCont2',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consent_advance = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent2"
  consent2Clock = new util.Clock();
  consentText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentText_2',
    text: 'We are not interested in how you perform individually, but whether people in general are able to visually identify or discriminate the images presented more effectively in some conditions than in others. The pattern of results will allow us to determine the processes that people use to identify and discriminate between objects, faces and scenes, and how they respond to them afterwards.\n\nRISKS: There are no expected risks to this study beyond the potential that you may become tired and/or bored with the task. To reduce the possibility that this will occur, the task will be self-paced (you may take breaks when needed). Loss of confidentiality is a risk (i.e., someone may inadvertently gain access to our records).\n\nAt the conclusion of this study, we may publish the results of this study in a scientific journal. Information will be presented in summary format and you will not be identified in any publications or presentations (in fact, we will no longer be able to determine which data files is yours). The data files containing your keyboard responses will be kept for a minimum of 6 years beyond publication of this study. After publication, we may share your data files with other researchers who may wish to re-analyze the results. However, there will no longer be any record of your identity at that time. This disclosure of the data is purely for scientific purposes.\n\nBENEFITS: You may not directly benefit from this research; however, we hope that your participation will provide some educational benefit by experiencing the nature of behavioral research on visual perception and categorization. For this reason, we encourage you to speak with the researcher after conclusion of your participation so that you can learn more about the design and hypotheses of this study. In addition, these results may benefit society in a number of ways, such as by increasing our understanding of how the process of categorization affects the perception of objects.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  introCont3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'introCont3',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consent_advance_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent3"
  consent3Clock = new util.Clock();
  consentText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentText_3',
    text: "PARTICIPATION: Your participation in the experiment is voluntary and you can withdraw at any time without penalty. You will still get payment for the time you have spent participating. You do not have to be in this study if you do not want to. If you agree to be in the study, but later change your mind, you may drop out at any time by pressing the Escape key twice. There are no penalties or consequences of any kind if you decide that you do not want to participate. If you decide to withdraw during today's session, you will still receive 2 dollars per 15 minutes of participation, rounded up to the nearest 15 minutes.\n\nSUBJECT STATEMENT OF CONSENT: By clicking “I agree” I am indicating that I am eligible for this study and am agreeing to voluntarily enter this study. I have had a chance to read this consent form, and it was explained to me in a language which I use and understand. I understand that I can withdraw at any time.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  iAgree = new visual.TextStim({
    win: psychoJS.window,
    name: 'iAgree',
    text: 'I agree \n(click to continue experiment)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  iQuit = new visual.TextStim({
    win: psychoJS.window,
    name: 'iQuit',
    text: 'I do not agree \n(click to exit experiment)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  consentClick = new core.Mouse({
    win: psychoJS.window,
  });
  consentClick.mouseClock = new util.Clock();
  quitClick = new core.Mouse({
    win: psychoJS.window,
  });
  quitClick.mouseClock = new util.Clock();
  // Initialize components for Routine "instrStart"
  instrStartClock = new util.Clock();
  genInstr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'genInstr1',
    text: 'We will now explain the task. You will need to accurately answer questions about the task, so be sure to pay attention! This experiment has two phases. Your input in both phases of the experiment are fully confidential.\n\nIn the first phase, you will complete a series of trials in which a face appears on-screen and you use your keyboard to respond to it. After that, you will rate the face on a scale.\n\nIn the second phase, you will complete a short questionnaire. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.045,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  IntroCont4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont4',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  instr_advance_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from condSelect
  selected_rows = util.range(((expInfo["participant"] % 8) * 110), (((expInfo["participant"] % 8) + 1) * 110));
  
  // Initialize components for Routine "specific_instr"
  specific_instrClock = new util.Clock();
  genInstr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'genInstr2',
    text: 'At the start of each trial, you will be looking at the middle of the screen (marked by a +). After a short time, a face will appear and you will respond within 2 seconds. The length of time before the face appears is random, so stay alert! To respond:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.045,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  specific_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'specific_instructions',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.0425,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  definition = new visual.TextStim({
    win: psychoJS.window,
    name: 'definition',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.0425,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  IntroCont5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont5',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  spec_instr_adv = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rateInstr"
  rateInstrClock = new util.Clock();
  ratingInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'ratingInstr',
    text: 'Once the face is gone, you will rate it on a numeric scale going from 1 (not attractive) to 9 (very attractive), also using your keyboard.\n\nBy "attractive", we simply mean how pleasant the face was to see.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  spec_instr_adv2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  IntroCont6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont6',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "general_instr2"
  general_instr2Clock = new util.Clock();
  genInstr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'genInstr_2',
    text: 'This experiment has two phases. Your inputs in both phases of the experiment are fully confidential.\n\nIn the first phase, you will complete a series of trials in which a face appears onscreen and you use your keyboard to respond to it. After that, you will rate the face on a scale.\n\nIn the second phase, you will complete a short questionnare.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_advance_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  IntroCont7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont7',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "specific_instr2"
  specific_instr2Clock = new util.Clock();
  specific_instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'specific_instructions_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.0425,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  definition_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'definition_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.0425,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spec_instr_adv_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  IntroCont8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont8',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "rateInstr2"
  rateInstr2Clock = new util.Clock();
  ratingInstr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ratingInstr_2',
    text: 'Once the face is gone, you will rate it on a numeric scale going from 1 (not attractive) to 9 (very attractive), also using your keyboard.\n\nBy "attractive", we simply mean how pleasant the face was to see.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.35, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  rate_instr_adv2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  IntroCont9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroCont9',
    text: 'Press the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "attnCheck1"
  attnCheck1Clock = new util.Clock();
  attnQuestion1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'attnQuestion1',
    text: 'Use your keyboard to answer the following question:\n\nWhat will appear at the start of each trial?\n\na) a house\n\nb) a bird\n\nc) a face',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  attnKeyResp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "attnCheck2"
  attnCheck2Clock = new util.Clock();
  attnQuestion2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'attnQuestion2',
    text: 'Use your keyboard to answer the following question:\n\nWhich keys will you use to respond to the face?\n\na) J or K\n\nb) F or C\n\nc) A or D',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  attnKeyResp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "attnCheck3"
  attnCheck3Clock = new util.Clock();
  attnQuestion3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'attnQuestion3',
    text: 'Use your keyboard to answer the following question:\n\nWhat will you rate afterwards?\n\na) the face, based on familiarity\n\nb) this experiment, based on excitement\n\nc) the face, based on attractiveness',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  attnKeyResp3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "attnFailed"
  attnFailedClock = new util.Clock();
  attnFailure_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'attnFailure_continue',
    text: 'You answered one of the questions about this task incorrectly and will need to review the instructions. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  failureAcknowledged = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reviewStart = new visual.TextStim({
    win: psychoJS.window,
    name: 'reviewStart',
    text: 'Press SPACE to repeat instructions.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "attnSuccess"
  attnSuccessClock = new util.Clock();
  introducePractice = new visual.TextStim({
    win: psychoJS.window,
    name: 'introducePractice',
    text: 'You will now do a practice trial.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  practiceStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practiceStart_button = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceStart_button',
    text: 'Press SPACE to begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practiceFace"
  practiceFaceClock = new util.Clock();
  practiceResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  respIndicator_2 = new visual.Rect ({
    win: psychoJS.window, name: 'respIndicator_2', 
    width: [0.41, 0.61][0], height: [0.41, 0.61][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  practiceImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practiceImage', units : undefined, 
    image : 'img/practice_image.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.4, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Run 'Begin Experiment' code from respCheck_2
  timesRedone = 0;
  
  // Initialize components for Routine "redo_feedback"
  redo_feedbackClock = new util.Clock();
  out_of_time_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'out_of_time_2',
    text: 'Oops, out of time! Remember to respond within two seconds of seeing the face - you will need to re-try this trial.\n\n\n\n\nPress SPACE to try again.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  timeoutReminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'timeoutReminder',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  redo_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ratingScale"
  ratingScaleClock = new util.Clock();
  attractiveness_slider = new visual.Slider({
    win: psychoJS.window, name: 'attractiveness_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color(undefined), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  attractiveness_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'attractiveness_instr',
    text: "Use your keyboard's number keys to rate the attractiveness of the face you just saw on this scale from 1 (not attractive) to 9 (very attractive).",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  notAttractive = new visual.TextStim({
    win: psychoJS.window,
    name: 'notAttractive',
    text: 'NOT\nATTRACTIVE',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.61), (- 0.1)], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  veryAttractive = new visual.TextStim({
    win: psychoJS.window,
    name: 'veryAttractive',
    text: 'VERY\nATTRACTIVE',
    font: 'Arial',
    units: undefined, 
    pos: [0.61, (- 0.1)], height: 0.031,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  attrRating = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "introDone"
  introDoneClock = new util.Clock();
  attnSuccess_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'attnSuccess_continue',
    text: 'This concludes the introduction! You may now begin the real task.\n\nPress the SPACE BAR to start the first trial. Be ready to respond to the face!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "faceOnset"
  faceOnsetClock = new util.Clock();
  catResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  respIndicator = new visual.Rect ({
    win: psychoJS.window, name: 'respIndicator', 
    width: [0.41, 0.61][0], height: [0.41, 0.61][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([(- 1.0), 1.0, (- 1.0)]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  face_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.4, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Run 'Begin Experiment' code from respCheck
  timesRedone = 0;
  
  // Initialize components for Routine "cont"
  contClock = new util.Clock();
  trialPassed = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialPassed',
    text: 'Trial complete! Remember:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.175], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixCross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  contResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  contPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'contPrompt',
    text: 'Now, look at the middle of the screen and press the SPACE BAR to move onto the next trial.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "intro2Questions"
  intro2QuestionsClock = new util.Clock();
  qsIntro = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsIntro',
    text: 'Good work! You have finished the first phase of the study. Now you need to answer a set of questions for us; please do your best to do so honestly. You will be using your mouse for this section.\n\nPress the SPACE BAR to continue when you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  contResp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ambiguity1"
  ambiguity1Clock = new util.Clock();
  qsInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsInstr',
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree). If you would prefer not to rate a given statement, select the option on the far left end of the scale.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.325], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions1',
    text: "1. An expert who doesn't come up with a definite answer probably doesn't know too much.\n\n\n\n2. There is really no such thing as a problem that can't be solved\n\n\n\n3. A good job is one where it is always clear what to do and how to do it.\n\n\n\n4. In the long run it is possible to get more done by tackling small, simple problems rather than large and complicated ones.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ1 = new visual.Slider({
    win: psychoJS.window, name: 'respQ1',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.175], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ2 = new visual.Slider({
    win: psychoJS.window, name: 'respQ2',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.04], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ3 = new visual.Slider({
    win: psychoJS.window, name: 'respQ3',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.09)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ4 = new visual.Slider({
    win: psychoJS.window, name: 'respQ4',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.265)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  nextButton1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton1',
    text: 'CLICK TO CONTINUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  nextClick1 = new core.Mouse({
    win: psychoJS.window,
  });
  nextClick1.mouseClock = new util.Clock();
  // Initialize components for Routine "ambiguity2"
  ambiguity2Clock = new util.Clock();
  qsInstr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsInstr_2',
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree).  If you would prefer not to rate a given statement, select the option on the far left end of the scale.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.325], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions2',
    text: '5. What we are used to is always preferable to what is unfamiliar.\n\n\n6. A person who leads an even, regular life in which few surprises or unexpected happenings really has a lot to be grateful for.\n\n\n7. I like parties where I know most of the people more than ones where all or most of the people are complete strangers.\n\n\n8. The sooner we all acquire similar values and ideals the better.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.025], height: 0.03,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ5 = new visual.Slider({
    win: psychoJS.window, name: 'respQ5',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.1725], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ6 = new visual.Slider({
    win: psychoJS.window, name: 'respQ6',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.04], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ7 = new visual.Slider({
    win: psychoJS.window, name: 'respQ7',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.095)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ8 = new visual.Slider({
    win: psychoJS.window, name: 'respQ8',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.2)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  nextButton2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton2',
    text: 'CLICK TO CONTINUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  nextClick2 = new core.Mouse({
    win: psychoJS.window,
  });
  nextClick2.mouseClock = new util.Clock();
  // Initialize components for Routine "ambiguity3"
  ambiguity3Clock = new util.Clock();
  qsInstr_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsInstr_3',
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree).  If you would prefer not to rate a given statement, select the option on the far left end of the scale.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.325], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions3',
    text: "9. I would like to live in a foreign country for a while.\n\n\n10. People who fit their lives to a schedule probably miss most of the joy of living.\n\n\n11. It is more fun to tackle a complicated problem than to solve a simple one.\n\n\n12. Often the most interesting and stimulating people are those who don't mind being different and original.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.04], height: 0.03,  wrapWidth: 1.15, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ9 = new visual.Slider({
    win: psychoJS.window, name: 'respQ9',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.175], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ10 = new visual.Slider({
    win: psychoJS.window, name: 'respQ10',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.074], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ11 = new visual.Slider({
    win: psychoJS.window, name: 'respQ11',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.03)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ12 = new visual.Slider({
    win: psychoJS.window, name: 'respQ12',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.175)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  nextButton3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton3',
    text: 'CLICK TO CONTINUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  nextClick3 = new core.Mouse({
    win: psychoJS.window,
  });
  nextClick3.mouseClock = new util.Clock();
  // Initialize components for Routine "ambiguity4"
  ambiguity4Clock = new util.Clock();
  qsInstr_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsInstr_4',
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree).  If you would prefer not to rate a given statement, select the option on the far left end of the scale.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.325], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions4',
    text: "13. People who insist upon a yes or no answer just don't know how complicated things really are.\n\n\n14. Many of our most important decisions are based upon insufficient information.\n\n\n15. Teachers or supervisors who hand out vague assignments give a chance for one to show initiative and originality.\n\n\n16. A good teacher is one who makes you wonder about your way of looking at things.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.04], height: 0.03,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ13 = new visual.Slider({
    win: psychoJS.window, name: 'respQ13',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.175], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ14 = new visual.Slider({
    win: psychoJS.window, name: 'respQ14',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.074], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ15 = new visual.Slider({
    win: psychoJS.window, name: 'respQ15',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.07)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ16 = new visual.Slider({
    win: psychoJS.window, name: 'respQ16',
    startValue: undefined,
    size: [1, 0.015], pos: [0, (- 0.175)], ori: 0.0, units: 'height',
    labels: ["PREFER NOT TO SAY", 1, 2, 3, 4, 5, 6, 7], fontSize: 0.0175, ticks: [0, 1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  nextButton4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton4',
    text: 'CLICK TO CONTINUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  nextClick4 = new core.Mouse({
    win: psychoJS.window,
  });
  nextClick4.mouseClock = new util.Clock();
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  demographicsInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographicsInstr',
    text: 'Please select the options that describe you most accurately.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  age = new visual.TextStim({
    win: psychoJS.window,
    name: 'age',
    text: 'What age group are you in?',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.4), 0.225], height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respAge = new visual.Slider({
    win: psychoJS.window, name: 'respAge',
    startValue: undefined,
    size: [1, 0.015], pos: [0, 0.15], ori: 0.0, units: 'height',
    labels: ["Prefer not to say", "18-21", "21-30", "31-40", "41-50", "51-60", "Above 60"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  gender = new visual.TextStim({
    win: psychoJS.window,
    name: 'gender',
    text: 'What gender do you identify as?',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.369), 0.025], height: 0.035,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  genderResp1 = new visual.Slider({
    win: psychoJS.window, name: 'genderResp1',
    startValue: undefined,
    size: [0.015, 0.15], pos: [(- 0.5), (- 0.1)], ori: 0.0, units: 'height',
    labels: ["Prefer not to say", "Something else (type in textbox)", "Non-binary", "Man", "Woman"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: true,
  });
  
  genderResp2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'genderResp2',
    text: '',
    font: 'Open Sans',
    pos: [0.11, (- 0.135)], letterHeight: 0.025,
    size: [0.425, 0.04],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center-left',
    depth: -5.0 
  });
  
  nextButton5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton5',
    text: 'CLICK TO CONTINUE',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  demographClick = new core.Mouse({
    win: psychoJS.window,
  });
  demographClick.mouseClock = new util.Clock();
  // Initialize components for Routine "openAnswer"
  openAnswerClock = new util.Clock();
  openPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'openPrompt',
    text: 'When you were responding to the faces, did you find yourself using any kind of strategy to improve your performance on the task? If so, what was it? Please type any thoughts you have about this experiment below:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.05)], letterHeight: 0.025,
    size: [1, 0.25],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 1.0,
    padding: undefined,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  openanswerEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'openanswerEnd',
    text: 'Once you are done, click here to continue!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  openanswerClick = new core.Mouse({
    win: psychoJS.window,
  });
  openanswerClick.mouseClock = new util.Clock();
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debriefText = new visual.TextStim({
    win: psychoJS.window,
    name: 'debriefText',
    text: "What this experiment was for:\n\nWe are investigating how having to categorize a face will affect its percieved attractiveness. Existing research indicates that the harder it is to process a face, the lower the attractiveness ratings given to it.\n\nIf you had to label the face whenever it appeared using J or K, you were in one of our experimental groups; if you simply had to press one of those keys whenever the face appeared, you were in the control group.\n\nWe are also interested in whether a person's tolerance of ambiguous situations affects how they feel about the faces they had a harder time categorizing. This is why we gave you that questionnaire at the end.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.035,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exitMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'exitMessage',
    text: 'Thanks again for participating in the study! You can now exit this experiment by pressing the TAB KEY.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  exitKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _welc_advance_allKeys;
var helloComponents;
function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hello' ---
    t = 0;
    helloClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welc_advance.keys = undefined;
    welc_advance.rt = undefined;
    _welc_advance_allKeys = [];
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(welcome);
    helloComponents.push(introCont1);
    helloComponents.push(welc_advance);
    
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function helloRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hello' ---
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }

    
    // *introCont1* updates
    if (t >= 3 && introCont1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introCont1.tStart = t;  // (not accounting for frame time here)
      introCont1.frameNStart = frameN;  // exact frame index
      
      introCont1.setAutoDraw(true);
    }

    
    // *welc_advance* updates
    if (t >= 3 && welc_advance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welc_advance.tStart = t;  // (not accounting for frame time here)
      welc_advance.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welc_advance.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welc_advance.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welc_advance.clearEvents(); });
    }

    if (welc_advance.status === PsychoJS.Status.STARTED) {
      let theseKeys = welc_advance.getKeys({keyList: ['space'], waitRelease: false});
      _welc_advance_allKeys = _welc_advance_allKeys.concat(theseKeys);
      if (_welc_advance_allKeys.length > 0) {
        welc_advance.keys = _welc_advance_allKeys[_welc_advance_allKeys.length - 1].name;  // just the last key pressed
        welc_advance.rt = _welc_advance_allKeys[_welc_advance_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function helloRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hello' ---
    for (const thisComponent of helloComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welc_advance.corr, level);
    }
    psychoJS.experiment.addData('welc_advance.keys', welc_advance.keys);
    if (typeof welc_advance.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welc_advance.rt', welc_advance.rt);
        routineTimer.reset();
        }
    
    welc_advance.stop();
    // the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _consent_advance_allKeys;
var consent1Components;
function consent1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent1' ---
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    consent_advance.keys = undefined;
    consent_advance.rt = undefined;
    _consent_advance_allKeys = [];
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(consentText_1);
    consent1Components.push(introCont2);
    consent1Components.push(consent_advance);
    
    for (const thisComponent of consent1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent1' ---
    // get current time
    t = consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentText_1* updates
    if (t >= 0.0 && consentText_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText_1.tStart = t;  // (not accounting for frame time here)
      consentText_1.frameNStart = frameN;  // exact frame index
      
      consentText_1.setAutoDraw(true);
    }

    
    // *introCont2* updates
    if (t >= 4 && introCont2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introCont2.tStart = t;  // (not accounting for frame time here)
      introCont2.frameNStart = frameN;  // exact frame index
      
      introCont2.setAutoDraw(true);
    }

    
    // *consent_advance* updates
    if (t >= 4 && consent_advance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_advance.tStart = t;  // (not accounting for frame time here)
      consent_advance.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_advance.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_advance.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_advance.clearEvents(); });
    }

    if (consent_advance.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_advance.getKeys({keyList: ['space'], waitRelease: false});
      _consent_advance_allKeys = _consent_advance_allKeys.concat(theseKeys);
      if (_consent_advance_allKeys.length > 0) {
        consent_advance.keys = _consent_advance_allKeys[_consent_advance_allKeys.length - 1].name;  // just the last key pressed
        consent_advance.rt = _consent_advance_allKeys[_consent_advance_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent1' ---
    for (const thisComponent of consent1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_advance.corr, level);
    }
    psychoJS.experiment.addData('consent_advance.keys', consent_advance.keys);
    if (typeof consent_advance.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_advance.rt', consent_advance.rt);
        routineTimer.reset();
        }
    
    consent_advance.stop();
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _consent_advance_2_allKeys;
var consent2Components;
function consent2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent2' ---
    t = 0;
    consent2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    consent_advance_2.keys = undefined;
    consent_advance_2.rt = undefined;
    _consent_advance_2_allKeys = [];
    // keep track of which components have finished
    consent2Components = [];
    consent2Components.push(consentText_2);
    consent2Components.push(introCont3);
    consent2Components.push(consent_advance_2);
    
    for (const thisComponent of consent2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consent2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent2' ---
    // get current time
    t = consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentText_2* updates
    if (t >= 0.0 && consentText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText_2.tStart = t;  // (not accounting for frame time here)
      consentText_2.frameNStart = frameN;  // exact frame index
      
      consentText_2.setAutoDraw(true);
    }

    
    // *introCont3* updates
    if (t >= 2 && introCont3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introCont3.tStart = t;  // (not accounting for frame time here)
      introCont3.frameNStart = frameN;  // exact frame index
      
      introCont3.setAutoDraw(true);
    }

    
    // *consent_advance_2* updates
    if (t >= 2 && consent_advance_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_advance_2.tStart = t;  // (not accounting for frame time here)
      consent_advance_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_advance_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_advance_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_advance_2.clearEvents(); });
    }

    if (consent_advance_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_advance_2.getKeys({keyList: ['space'], waitRelease: false});
      _consent_advance_2_allKeys = _consent_advance_2_allKeys.concat(theseKeys);
      if (_consent_advance_2_allKeys.length > 0) {
        consent_advance_2.keys = _consent_advance_2_allKeys[_consent_advance_2_allKeys.length - 1].name;  // just the last key pressed
        consent_advance_2.rt = _consent_advance_2_allKeys[_consent_advance_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent2' ---
    for (const thisComponent of consent2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_advance_2.corr, level);
    }
    psychoJS.experiment.addData('consent_advance_2.keys', consent_advance_2.keys);
    if (typeof consent_advance_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_advance_2.rt', consent_advance_2.rt);
        routineTimer.reset();
        }
    
    consent_advance_2.stop();
    // the Routine "consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var consent3Components;
function consent3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent3' ---
    t = 0;
    consent3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the consentClick
    // current position of the mouse:
    consentClick.x = [];
    consentClick.y = [];
    consentClick.leftButton = [];
    consentClick.midButton = [];
    consentClick.rightButton = [];
    consentClick.time = [];
    consentClick.clicked_name = [];
    gotValidClick = false; // until a click is received
    // setup some python lists for storing info about the quitClick
    // current position of the mouse:
    quitClick.x = [];
    quitClick.y = [];
    quitClick.leftButton = [];
    quitClick.midButton = [];
    quitClick.rightButton = [];
    quitClick.time = [];
    quitClick.clicked_name = [];
    gotValidClick = false; // until a click is received
    quitClick.mouseClock.reset();
    // keep track of which components have finished
    consent3Components = [];
    consent3Components.push(consentText_3);
    consent3Components.push(iAgree);
    consent3Components.push(iQuit);
    consent3Components.push(consentClick);
    consent3Components.push(quitClick);
    
    for (const thisComponent of consent3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consent3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent3' ---
    // get current time
    t = consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentText_3* updates
    if (t >= 0.0 && consentText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText_3.tStart = t;  // (not accounting for frame time here)
      consentText_3.frameNStart = frameN;  // exact frame index
      
      consentText_3.setAutoDraw(true);
    }

    
    // *iAgree* updates
    if (t >= 0.0 && iAgree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iAgree.tStart = t;  // (not accounting for frame time here)
      iAgree.frameNStart = frameN;  // exact frame index
      
      iAgree.setAutoDraw(true);
    }

    
    // *iQuit* updates
    if (t >= 0.0 && iQuit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iQuit.tStart = t;  // (not accounting for frame time here)
      iQuit.frameNStart = frameN;  // exact frame index
      
      iQuit.setAutoDraw(true);
    }

    // *consentClick* updates
    if (t >= 0.0 && consentClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentClick.tStart = t;  // (not accounting for frame time here)
      consentClick.frameNStart = frameN;  // exact frame index
      
      consentClick.status = PsychoJS.Status.STARTED;
      consentClick.mouseClock.reset();
      prevButtonState = consentClick.getPressed();  // if button is down already this ISN'T a new click
      }
    if (consentClick.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = consentClick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [iAgree]) {
            if (obj.contains(consentClick)) {
              gotValidClick = true;
              consentClick.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = consentClick.getPos();
          consentClick.x.push(_mouseXYs[0]);
          consentClick.y.push(_mouseXYs[1]);
          consentClick.leftButton.push(_mouseButtons[0]);
          consentClick.midButton.push(_mouseButtons[1]);
          consentClick.rightButton.push(_mouseButtons[2]);
          consentClick.time.push(consentClick.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // *quitClick* updates
    if (t >= 0.0 && quitClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quitClick.tStart = t;  // (not accounting for frame time here)
      quitClick.frameNStart = frameN;  // exact frame index
      
      quitClick.status = PsychoJS.Status.STARTED;
      prevButtonState = quitClick.getPressed();  // if button is down already this ISN'T a new click
      }
    if (quitClick.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = quitClick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [iQuit]) {
            if (obj.contains(quitClick)) {
              gotValidClick = true;
              quitClick.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = quitClick.getPos();
          quitClick.x.push(_mouseXYs[0]);
          quitClick.y.push(_mouseXYs[1]);
          quitClick.leftButton.push(_mouseButtons[0]);
          quitClick.midButton.push(_mouseButtons[1]);
          quitClick.rightButton.push(_mouseButtons[2]);
          quitClick.time.push(quitClick.mouseClock.getTime());
        }
      }
    }
    // Run 'Each Frame' code from quitButton
    if (quitClick.isPressedIn(iQuit)) {
        return quitPsychoJS('Experiment exited. Have a nice day!', false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent3' ---
    for (const thisComponent of consent3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (consentClick.x) {  psychoJS.experiment.addData('consentClick.x', consentClick.x[0])};
    if (consentClick.y) {  psychoJS.experiment.addData('consentClick.y', consentClick.y[0])};
    if (consentClick.leftButton) {  psychoJS.experiment.addData('consentClick.leftButton', consentClick.leftButton[0])};
    if (consentClick.midButton) {  psychoJS.experiment.addData('consentClick.midButton', consentClick.midButton[0])};
    if (consentClick.rightButton) {  psychoJS.experiment.addData('consentClick.rightButton', consentClick.rightButton[0])};
    if (consentClick.time) {  psychoJS.experiment.addData('consentClick.time', consentClick.time[0])};
    if (consentClick.clicked_name) {  psychoJS.experiment.addData('consentClick.clicked_name', consentClick.clicked_name[0])};
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('quitClick.x', quitClick.x);
    psychoJS.experiment.addData('quitClick.y', quitClick.y);
    psychoJS.experiment.addData('quitClick.leftButton', quitClick.leftButton);
    psychoJS.experiment.addData('quitClick.midButton', quitClick.midButton);
    psychoJS.experiment.addData('quitClick.rightButton', quitClick.rightButton);
    psychoJS.experiment.addData('quitClick.time', quitClick.time);
    psychoJS.experiment.addData('quitClick.clicked_name', quitClick.clicked_name);
    
    // the Routine "consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_advance_3_allKeys;
var instrStartComponents;
function instrStartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrStart' ---
    t = 0;
    instrStartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_advance_3.keys = undefined;
    instr_advance_3.rt = undefined;
    _instr_advance_3_allKeys = [];
    // keep track of which components have finished
    instrStartComponents = [];
    instrStartComponents.push(genInstr1);
    instrStartComponents.push(IntroCont4);
    instrStartComponents.push(instr_advance_3);
    
    for (const thisComponent of instrStartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrStartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrStart' ---
    // get current time
    t = instrStartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *genInstr1* updates
    if (t >= 0.0 && genInstr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genInstr1.tStart = t;  // (not accounting for frame time here)
      genInstr1.frameNStart = frameN;  // exact frame index
      
      genInstr1.setAutoDraw(true);
    }

    
    // *IntroCont4* updates
    if (t >= 4 && IntroCont4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont4.tStart = t;  // (not accounting for frame time here)
      IntroCont4.frameNStart = frameN;  // exact frame index
      
      IntroCont4.setAutoDraw(true);
    }

    
    // *instr_advance_3* updates
    if (t >= 4 && instr_advance_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_advance_3.tStart = t;  // (not accounting for frame time here)
      instr_advance_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_advance_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_advance_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_advance_3.clearEvents(); });
    }

    if (instr_advance_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_advance_3.getKeys({keyList: ['space'], waitRelease: false});
      _instr_advance_3_allKeys = _instr_advance_3_allKeys.concat(theseKeys);
      if (_instr_advance_3_allKeys.length > 0) {
        instr_advance_3.keys = _instr_advance_3_allKeys[_instr_advance_3_allKeys.length - 1].name;  // just the last key pressed
        instr_advance_3.rt = _instr_advance_3_allKeys[_instr_advance_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrStartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrStartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrStart' ---
    for (const thisComponent of instrStartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_advance_3.corr, level);
    }
    psychoJS.experiment.addData('instr_advance_3.keys', instr_advance_3.keys);
    if (typeof instr_advance_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_advance_3.rt', instr_advance_3.rt);
        routineTimer.reset();
        }
    
    instr_advance_3.stop();
    // the Routine "instrStart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr_loop;
function instr_loopLoopBegin(instr_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instr_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'fluency_conditions.xlsx', selected_rows),
      seed: undefined, name: 'instr_loop'
    });
    psychoJS.experiment.addLoop(instr_loop); // add the loop to the experiment
    currentLoop = instr_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstr_loop of instr_loop) {
      snapshot = instr_loop.getSnapshot();
      instr_loopLoopScheduler.add(importConditions(snapshot));
      instr_loopLoopScheduler.add(specific_instrRoutineBegin(snapshot));
      instr_loopLoopScheduler.add(specific_instrRoutineEachFrame());
      instr_loopLoopScheduler.add(specific_instrRoutineEnd(snapshot));
      instr_loopLoopScheduler.add(rateInstrRoutineBegin(snapshot));
      instr_loopLoopScheduler.add(rateInstrRoutineEachFrame());
      instr_loopLoopScheduler.add(rateInstrRoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_loopLoopEndIteration(instr_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instr_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instr_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instr_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var attnChecker;
function attnCheckerLoopBegin(attnCheckerLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attnChecker = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'attnChecker'
    });
    psychoJS.experiment.addLoop(attnChecker); // add the loop to the experiment
    currentLoop = attnChecker;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttnChecker of attnChecker) {
      snapshot = attnChecker.getSnapshot();
      attnCheckerLoopScheduler.add(importConditions(snapshot));
      const attnLoopLoopScheduler = new Scheduler(psychoJS);
      attnCheckerLoopScheduler.add(attnLoopLoopBegin(attnLoopLoopScheduler, snapshot));
      attnCheckerLoopScheduler.add(attnLoopLoopScheduler);
      attnCheckerLoopScheduler.add(attnLoopLoopEnd);
      attnCheckerLoopScheduler.add(attnSuccessRoutineBegin(snapshot));
      attnCheckerLoopScheduler.add(attnSuccessRoutineEachFrame());
      attnCheckerLoopScheduler.add(attnSuccessRoutineEnd(snapshot));
      const practiceTrialLoopScheduler = new Scheduler(psychoJS);
      attnCheckerLoopScheduler.add(practiceTrialLoopBegin(practiceTrialLoopScheduler, snapshot));
      attnCheckerLoopScheduler.add(practiceTrialLoopScheduler);
      attnCheckerLoopScheduler.add(practiceTrialLoopEnd);
      attnCheckerLoopScheduler.add(introDoneRoutineBegin(snapshot));
      attnCheckerLoopScheduler.add(introDoneRoutineEachFrame());
      attnCheckerLoopScheduler.add(introDoneRoutineEnd(snapshot));
      attnCheckerLoopScheduler.add(attnCheckerLoopEndIteration(attnCheckerLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var attnLoop;
function attnLoopLoopBegin(attnLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attnLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'attnLoop'
    });
    psychoJS.experiment.addLoop(attnLoop); // add the loop to the experiment
    currentLoop = attnLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttnLoop of attnLoop) {
      snapshot = attnLoop.getSnapshot();
      attnLoopLoopScheduler.add(importConditions(snapshot));
      const reshowInstrLoopScheduler = new Scheduler(psychoJS);
      attnLoopLoopScheduler.add(reshowInstrLoopBegin(reshowInstrLoopScheduler, snapshot));
      attnLoopLoopScheduler.add(reshowInstrLoopScheduler);
      attnLoopLoopScheduler.add(reshowInstrLoopEnd);
      const q1LoopScheduler = new Scheduler(psychoJS);
      attnLoopLoopScheduler.add(q1LoopBegin(q1LoopScheduler, snapshot));
      attnLoopLoopScheduler.add(q1LoopScheduler);
      attnLoopLoopScheduler.add(q1LoopEnd);
      const q2LoopScheduler = new Scheduler(psychoJS);
      attnLoopLoopScheduler.add(q2LoopBegin(q2LoopScheduler, snapshot));
      attnLoopLoopScheduler.add(q2LoopScheduler);
      attnLoopLoopScheduler.add(q2LoopEnd);
      const q3LoopScheduler = new Scheduler(psychoJS);
      attnLoopLoopScheduler.add(q3LoopBegin(q3LoopScheduler, snapshot));
      attnLoopLoopScheduler.add(q3LoopScheduler);
      attnLoopLoopScheduler.add(q3LoopEnd);
      const attnFailureLoopScheduler = new Scheduler(psychoJS);
      attnLoopLoopScheduler.add(attnFailureLoopBegin(attnFailureLoopScheduler, snapshot));
      attnLoopLoopScheduler.add(attnFailureLoopScheduler);
      attnLoopLoopScheduler.add(attnFailureLoopEnd);
      attnLoopLoopScheduler.add(attnLoopLoopEndIteration(attnLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var reshowInstr;
function reshowInstrLoopBegin(reshowInstrLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    reshowInstr = new TrialHandler({
      psychoJS: psychoJS,
      nReps: failure, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'reshowInstr'
    });
    psychoJS.experiment.addLoop(reshowInstr); // add the loop to the experiment
    currentLoop = reshowInstr;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisReshowInstr of reshowInstr) {
      snapshot = reshowInstr.getSnapshot();
      reshowInstrLoopScheduler.add(importConditions(snapshot));
      reshowInstrLoopScheduler.add(general_instr2RoutineBegin(snapshot));
      reshowInstrLoopScheduler.add(general_instr2RoutineEachFrame());
      reshowInstrLoopScheduler.add(general_instr2RoutineEnd(snapshot));
      reshowInstrLoopScheduler.add(specific_instr2RoutineBegin(snapshot));
      reshowInstrLoopScheduler.add(specific_instr2RoutineEachFrame());
      reshowInstrLoopScheduler.add(specific_instr2RoutineEnd(snapshot));
      reshowInstrLoopScheduler.add(rateInstr2RoutineBegin(snapshot));
      reshowInstrLoopScheduler.add(rateInstr2RoutineEachFrame());
      reshowInstrLoopScheduler.add(rateInstr2RoutineEnd(snapshot));
      reshowInstrLoopScheduler.add(reshowInstrLoopEndIteration(reshowInstrLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function reshowInstrLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(reshowInstr);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function reshowInstrLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var q1;
function q1LoopBegin(q1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    q1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'q1'
    });
    psychoJS.experiment.addLoop(q1); // add the loop to the experiment
    currentLoop = q1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQ1 of q1) {
      snapshot = q1.getSnapshot();
      q1LoopScheduler.add(importConditions(snapshot));
      q1LoopScheduler.add(attnCheck1RoutineBegin(snapshot));
      q1LoopScheduler.add(attnCheck1RoutineEachFrame());
      q1LoopScheduler.add(attnCheck1RoutineEnd(snapshot));
      q1LoopScheduler.add(q1LoopEndIteration(q1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function q1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(q1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function q1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var q2;
function q2LoopBegin(q2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    q2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: continueQuestions, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'q2'
    });
    psychoJS.experiment.addLoop(q2); // add the loop to the experiment
    currentLoop = q2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQ2 of q2) {
      snapshot = q2.getSnapshot();
      q2LoopScheduler.add(importConditions(snapshot));
      q2LoopScheduler.add(attnCheck2RoutineBegin(snapshot));
      q2LoopScheduler.add(attnCheck2RoutineEachFrame());
      q2LoopScheduler.add(attnCheck2RoutineEnd(snapshot));
      q2LoopScheduler.add(q2LoopEndIteration(q2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function q2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(q2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function q2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var q3;
function q3LoopBegin(q3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    q3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: continueQuestions, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'q3'
    });
    psychoJS.experiment.addLoop(q3); // add the loop to the experiment
    currentLoop = q3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQ3 of q3) {
      snapshot = q3.getSnapshot();
      q3LoopScheduler.add(importConditions(snapshot));
      q3LoopScheduler.add(attnCheck3RoutineBegin(snapshot));
      q3LoopScheduler.add(attnCheck3RoutineEachFrame());
      q3LoopScheduler.add(attnCheck3RoutineEnd(snapshot));
      q3LoopScheduler.add(q3LoopEndIteration(q3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function q3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(q3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function q3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var attnFailure;
function attnFailureLoopBegin(attnFailureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attnFailure = new TrialHandler({
      psychoJS: psychoJS,
      nReps: failure, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'attnFailure'
    });
    psychoJS.experiment.addLoop(attnFailure); // add the loop to the experiment
    currentLoop = attnFailure;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttnFailure of attnFailure) {
      snapshot = attnFailure.getSnapshot();
      attnFailureLoopScheduler.add(importConditions(snapshot));
      attnFailureLoopScheduler.add(attnFailedRoutineBegin(snapshot));
      attnFailureLoopScheduler.add(attnFailedRoutineEachFrame());
      attnFailureLoopScheduler.add(attnFailedRoutineEnd(snapshot));
      attnFailureLoopScheduler.add(attnFailureLoopEndIteration(attnFailureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function attnFailureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(attnFailure);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function attnFailureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function attnLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(attnLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function attnLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practiceTrial;
function practiceTrialLoopBegin(practiceTrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practiceTrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practiceTrial'
    });
    psychoJS.experiment.addLoop(practiceTrial); // add the loop to the experiment
    currentLoop = practiceTrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracticeTrial of practiceTrial) {
      snapshot = practiceTrial.getSnapshot();
      practiceTrialLoopScheduler.add(importConditions(snapshot));
      const practiceRepeatLoopScheduler = new Scheduler(psychoJS);
      practiceTrialLoopScheduler.add(practiceRepeatLoopBegin(practiceRepeatLoopScheduler, snapshot));
      practiceTrialLoopScheduler.add(practiceRepeatLoopScheduler);
      practiceTrialLoopScheduler.add(practiceRepeatLoopEnd);
      practiceTrialLoopScheduler.add(ratingScaleRoutineBegin(snapshot));
      practiceTrialLoopScheduler.add(ratingScaleRoutineEachFrame());
      practiceTrialLoopScheduler.add(ratingScaleRoutineEnd(snapshot));
      practiceTrialLoopScheduler.add(practiceTrialLoopEndIteration(practiceTrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practiceRepeat;
function practiceRepeatLoopBegin(practiceRepeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practiceRepeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practiceRepeat'
    });
    psychoJS.experiment.addLoop(practiceRepeat); // add the loop to the experiment
    currentLoop = practiceRepeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracticeRepeat of practiceRepeat) {
      snapshot = practiceRepeat.getSnapshot();
      practiceRepeatLoopScheduler.add(importConditions(snapshot));
      practiceRepeatLoopScheduler.add(fixationRoutineBegin(snapshot));
      practiceRepeatLoopScheduler.add(fixationRoutineEachFrame());
      practiceRepeatLoopScheduler.add(fixationRoutineEnd(snapshot));
      practiceRepeatLoopScheduler.add(practiceFaceRoutineBegin(snapshot));
      practiceRepeatLoopScheduler.add(practiceFaceRoutineEachFrame());
      practiceRepeatLoopScheduler.add(practiceFaceRoutineEnd(snapshot));
      const practiceFailedLoopScheduler = new Scheduler(psychoJS);
      practiceRepeatLoopScheduler.add(practiceFailedLoopBegin(practiceFailedLoopScheduler, snapshot));
      practiceRepeatLoopScheduler.add(practiceFailedLoopScheduler);
      practiceRepeatLoopScheduler.add(practiceFailedLoopEnd);
      practiceRepeatLoopScheduler.add(practiceRepeatLoopEndIteration(practiceRepeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practiceFailed;
function practiceFailedLoopBegin(practiceFailedLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practiceFailed = new TrialHandler({
      psychoJS: psychoJS,
      nReps: redo, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practiceFailed'
    });
    psychoJS.experiment.addLoop(practiceFailed); // add the loop to the experiment
    currentLoop = practiceFailed;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracticeFailed of practiceFailed) {
      snapshot = practiceFailed.getSnapshot();
      practiceFailedLoopScheduler.add(importConditions(snapshot));
      practiceFailedLoopScheduler.add(redo_feedbackRoutineBegin(snapshot));
      practiceFailedLoopScheduler.add(redo_feedbackRoutineEachFrame());
      practiceFailedLoopScheduler.add(redo_feedbackRoutineEnd(snapshot));
      practiceFailedLoopScheduler.add(practiceFailedLoopEndIteration(practiceFailedLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceFailedLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practiceFailed);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceFailedLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function practiceRepeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practiceRepeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceRepeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function practiceTrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practiceTrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceTrialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function attnCheckerLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(attnChecker);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function attnCheckerLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'fluency_conditions.xlsx', selected_rows),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      const repeat_loopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(repeat_loopLoopBegin(repeat_loopLoopScheduler, snapshot));
      trialsLoopScheduler.add(repeat_loopLoopScheduler);
      trialsLoopScheduler.add(repeat_loopLoopEnd);
      trialsLoopScheduler.add(ratingScaleRoutineBegin(snapshot));
      trialsLoopScheduler.add(ratingScaleRoutineEachFrame());
      trialsLoopScheduler.add(ratingScaleRoutineEnd(snapshot));
      trialsLoopScheduler.add(contRoutineBegin(snapshot));
      trialsLoopScheduler.add(contRoutineEachFrame());
      trialsLoopScheduler.add(contRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var repeat_loop;
function repeat_loopLoopBegin(repeat_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat_loop'
    });
    psychoJS.experiment.addLoop(repeat_loop); // add the loop to the experiment
    currentLoop = repeat_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeat_loop of repeat_loop) {
      snapshot = repeat_loop.getSnapshot();
      repeat_loopLoopScheduler.add(importConditions(snapshot));
      repeat_loopLoopScheduler.add(fixationRoutineBegin(snapshot));
      repeat_loopLoopScheduler.add(fixationRoutineEachFrame());
      repeat_loopLoopScheduler.add(fixationRoutineEnd(snapshot));
      repeat_loopLoopScheduler.add(faceOnsetRoutineBegin(snapshot));
      repeat_loopLoopScheduler.add(faceOnsetRoutineEachFrame());
      repeat_loopLoopScheduler.add(faceOnsetRoutineEnd(snapshot));
      const redo_feedback_loopLoopScheduler = new Scheduler(psychoJS);
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopBegin(redo_feedback_loopLoopScheduler, snapshot));
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopScheduler);
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopEnd);
      repeat_loopLoopScheduler.add(repeat_loopLoopEndIteration(repeat_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var redo_feedback_loop;
function redo_feedback_loopLoopBegin(redo_feedback_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    redo_feedback_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: redo, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'redo_feedback_loop'
    });
    psychoJS.experiment.addLoop(redo_feedback_loop); // add the loop to the experiment
    currentLoop = redo_feedback_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRedo_feedback_loop of redo_feedback_loop) {
      snapshot = redo_feedback_loop.getSnapshot();
      redo_feedback_loopLoopScheduler.add(importConditions(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineBegin(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineEachFrame());
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineEnd(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedback_loopLoopEndIteration(redo_feedback_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function redo_feedback_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(redo_feedback_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function redo_feedback_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _spec_instr_adv_allKeys;
var specific_instrComponents;
function specific_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'specific_instr' ---
    t = 0;
    specific_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    specific_instructions.setText(instr);
    definition.setText(term);
    spec_instr_adv.keys = undefined;
    spec_instr_adv.rt = undefined;
    _spec_instr_adv_allKeys = [];
    // keep track of which components have finished
    specific_instrComponents = [];
    specific_instrComponents.push(genInstr2);
    specific_instrComponents.push(specific_instructions);
    specific_instrComponents.push(definition);
    specific_instrComponents.push(IntroCont5);
    specific_instrComponents.push(spec_instr_adv);
    
    for (const thisComponent of specific_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function specific_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'specific_instr' ---
    // get current time
    t = specific_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *genInstr2* updates
    if (t >= 0.0 && genInstr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genInstr2.tStart = t;  // (not accounting for frame time here)
      genInstr2.frameNStart = frameN;  // exact frame index
      
      genInstr2.setAutoDraw(true);
    }

    
    // *specific_instructions* updates
    if (t >= 0.0 && specific_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      specific_instructions.tStart = t;  // (not accounting for frame time here)
      specific_instructions.frameNStart = frameN;  // exact frame index
      
      specific_instructions.setAutoDraw(true);
    }

    
    // *definition* updates
    if (t >= 0.0 && definition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      definition.tStart = t;  // (not accounting for frame time here)
      definition.frameNStart = frameN;  // exact frame index
      
      definition.setAutoDraw(true);
    }

    
    // *IntroCont5* updates
    if (t >= 4 && IntroCont5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont5.tStart = t;  // (not accounting for frame time here)
      IntroCont5.frameNStart = frameN;  // exact frame index
      
      IntroCont5.setAutoDraw(true);
    }

    
    // *spec_instr_adv* updates
    if (t >= 4 && spec_instr_adv.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spec_instr_adv.tStart = t;  // (not accounting for frame time here)
      spec_instr_adv.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spec_instr_adv.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv.clearEvents(); });
    }

    if (spec_instr_adv.status === PsychoJS.Status.STARTED) {
      let theseKeys = spec_instr_adv.getKeys({keyList: ['space'], waitRelease: false});
      _spec_instr_adv_allKeys = _spec_instr_adv_allKeys.concat(theseKeys);
      if (_spec_instr_adv_allKeys.length > 0) {
        spec_instr_adv.keys = _spec_instr_adv_allKeys[_spec_instr_adv_allKeys.length - 1].name;  // just the last key pressed
        spec_instr_adv.rt = _spec_instr_adv_allKeys[_spec_instr_adv_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of specific_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function specific_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'specific_instr' ---
    for (const thisComponent of specific_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spec_instr_adv.corr, level);
    }
    psychoJS.experiment.addData('spec_instr_adv.keys', spec_instr_adv.keys);
    if (typeof spec_instr_adv.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spec_instr_adv.rt', spec_instr_adv.rt);
        routineTimer.reset();
        }
    
    spec_instr_adv.stop();
    // the Routine "specific_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spec_instr_adv2_allKeys;
var rateInstrComponents;
function rateInstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rateInstr' ---
    t = 0;
    rateInstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spec_instr_adv2.keys = undefined;
    spec_instr_adv2.rt = undefined;
    _spec_instr_adv2_allKeys = [];
    // keep track of which components have finished
    rateInstrComponents = [];
    rateInstrComponents.push(ratingInstr);
    rateInstrComponents.push(spec_instr_adv2);
    rateInstrComponents.push(IntroCont6);
    
    for (const thisComponent of rateInstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rateInstrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rateInstr' ---
    // get current time
    t = rateInstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ratingInstr* updates
    if (t >= 0.0 && ratingInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ratingInstr.tStart = t;  // (not accounting for frame time here)
      ratingInstr.frameNStart = frameN;  // exact frame index
      
      ratingInstr.setAutoDraw(true);
    }

    
    // *spec_instr_adv2* updates
    if (t >= 2 && spec_instr_adv2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spec_instr_adv2.tStart = t;  // (not accounting for frame time here)
      spec_instr_adv2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spec_instr_adv2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv2.clearEvents(); });
    }

    if (spec_instr_adv2.status === PsychoJS.Status.STARTED) {
      let theseKeys = spec_instr_adv2.getKeys({keyList: ['space'], waitRelease: false});
      _spec_instr_adv2_allKeys = _spec_instr_adv2_allKeys.concat(theseKeys);
      if (_spec_instr_adv2_allKeys.length > 0) {
        spec_instr_adv2.keys = _spec_instr_adv2_allKeys[_spec_instr_adv2_allKeys.length - 1].name;  // just the last key pressed
        spec_instr_adv2.rt = _spec_instr_adv2_allKeys[_spec_instr_adv2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *IntroCont6* updates
    if (t >= 2 && IntroCont6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont6.tStart = t;  // (not accounting for frame time here)
      IntroCont6.frameNStart = frameN;  // exact frame index
      
      IntroCont6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rateInstrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var failure;
function rateInstrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rateInstr' ---
    for (const thisComponent of rateInstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spec_instr_adv2.corr, level);
    }
    psychoJS.experiment.addData('spec_instr_adv2.keys', spec_instr_adv2.keys);
    if (typeof spec_instr_adv2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spec_instr_adv2.rt', spec_instr_adv2.rt);
        routineTimer.reset();
        }
    
    spec_instr_adv2.stop();
    // Run 'End Routine' code from isInstrDone
    instr_loop.finished = true;
    psychoJS.eventManager.getKeys();
    failure = 0;
    
    // the Routine "rateInstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_advance_2_allKeys;
var general_instr2Components;
function general_instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'general_instr2' ---
    t = 0;
    general_instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_advance_2.keys = undefined;
    instr_advance_2.rt = undefined;
    _instr_advance_2_allKeys = [];
    // keep track of which components have finished
    general_instr2Components = [];
    general_instr2Components.push(genInstr_2);
    general_instr2Components.push(instr_advance_2);
    general_instr2Components.push(IntroCont7);
    
    for (const thisComponent of general_instr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function general_instr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'general_instr2' ---
    // get current time
    t = general_instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *genInstr_2* updates
    if (t >= 0.0 && genInstr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genInstr_2.tStart = t;  // (not accounting for frame time here)
      genInstr_2.frameNStart = frameN;  // exact frame index
      
      genInstr_2.setAutoDraw(true);
    }

    
    // *instr_advance_2* updates
    if (t >= 2 && instr_advance_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_advance_2.tStart = t;  // (not accounting for frame time here)
      instr_advance_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_advance_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_advance_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_advance_2.clearEvents(); });
    }

    if (instr_advance_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_advance_2.getKeys({keyList: ['space'], waitRelease: false});
      _instr_advance_2_allKeys = _instr_advance_2_allKeys.concat(theseKeys);
      if (_instr_advance_2_allKeys.length > 0) {
        instr_advance_2.keys = _instr_advance_2_allKeys[_instr_advance_2_allKeys.length - 1].name;  // just the last key pressed
        instr_advance_2.rt = _instr_advance_2_allKeys[_instr_advance_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *IntroCont7* updates
    if (t >= 2 && IntroCont7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont7.tStart = t;  // (not accounting for frame time here)
      IntroCont7.frameNStart = frameN;  // exact frame index
      
      IntroCont7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of general_instr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function general_instr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'general_instr2' ---
    for (const thisComponent of general_instr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_advance_2.corr, level);
    }
    psychoJS.experiment.addData('instr_advance_2.keys', instr_advance_2.keys);
    if (typeof instr_advance_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_advance_2.rt', instr_advance_2.rt);
        routineTimer.reset();
        }
    
    instr_advance_2.stop();
    // the Routine "general_instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _spec_instr_adv_2_allKeys;
var specific_instr2Components;
function specific_instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'specific_instr2' ---
    t = 0;
    specific_instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    specific_instructions_2.setText((instr + '. Be sure to respond within 2 seconds; a green frame around the image will show that your response was registered.'));
    definition_2.setText(term);
    spec_instr_adv_2.keys = undefined;
    spec_instr_adv_2.rt = undefined;
    _spec_instr_adv_2_allKeys = [];
    // keep track of which components have finished
    specific_instr2Components = [];
    specific_instr2Components.push(specific_instructions_2);
    specific_instr2Components.push(definition_2);
    specific_instr2Components.push(spec_instr_adv_2);
    specific_instr2Components.push(IntroCont8);
    
    for (const thisComponent of specific_instr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function specific_instr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'specific_instr2' ---
    // get current time
    t = specific_instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *specific_instructions_2* updates
    if (t >= 0.0 && specific_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      specific_instructions_2.tStart = t;  // (not accounting for frame time here)
      specific_instructions_2.frameNStart = frameN;  // exact frame index
      
      specific_instructions_2.setAutoDraw(true);
    }

    
    // *definition_2* updates
    if (t >= 0.0 && definition_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      definition_2.tStart = t;  // (not accounting for frame time here)
      definition_2.frameNStart = frameN;  // exact frame index
      
      definition_2.setAutoDraw(true);
    }

    
    // *spec_instr_adv_2* updates
    if (t >= 2 && spec_instr_adv_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spec_instr_adv_2.tStart = t;  // (not accounting for frame time here)
      spec_instr_adv_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spec_instr_adv_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spec_instr_adv_2.clearEvents(); });
    }

    if (spec_instr_adv_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = spec_instr_adv_2.getKeys({keyList: ['space'], waitRelease: false});
      _spec_instr_adv_2_allKeys = _spec_instr_adv_2_allKeys.concat(theseKeys);
      if (_spec_instr_adv_2_allKeys.length > 0) {
        spec_instr_adv_2.keys = _spec_instr_adv_2_allKeys[_spec_instr_adv_2_allKeys.length - 1].name;  // just the last key pressed
        spec_instr_adv_2.rt = _spec_instr_adv_2_allKeys[_spec_instr_adv_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *IntroCont8* updates
    if (t >= 2 && IntroCont8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont8.tStart = t;  // (not accounting for frame time here)
      IntroCont8.frameNStart = frameN;  // exact frame index
      
      IntroCont8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of specific_instr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function specific_instr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'specific_instr2' ---
    for (const thisComponent of specific_instr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spec_instr_adv_2.corr, level);
    }
    psychoJS.experiment.addData('spec_instr_adv_2.keys', spec_instr_adv_2.keys);
    if (typeof spec_instr_adv_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spec_instr_adv_2.rt', spec_instr_adv_2.rt);
        routineTimer.reset();
        }
    
    spec_instr_adv_2.stop();
    // the Routine "specific_instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _rate_instr_adv2_allKeys;
var rateInstr2Components;
function rateInstr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rateInstr2' ---
    t = 0;
    rateInstr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rate_instr_adv2.keys = undefined;
    rate_instr_adv2.rt = undefined;
    _rate_instr_adv2_allKeys = [];
    // keep track of which components have finished
    rateInstr2Components = [];
    rateInstr2Components.push(ratingInstr_2);
    rateInstr2Components.push(rate_instr_adv2);
    rateInstr2Components.push(IntroCont9);
    
    for (const thisComponent of rateInstr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rateInstr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rateInstr2' ---
    // get current time
    t = rateInstr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ratingInstr_2* updates
    if (t >= 0.0 && ratingInstr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ratingInstr_2.tStart = t;  // (not accounting for frame time here)
      ratingInstr_2.frameNStart = frameN;  // exact frame index
      
      ratingInstr_2.setAutoDraw(true);
    }

    
    // *rate_instr_adv2* updates
    if (t >= 2 && rate_instr_adv2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rate_instr_adv2.tStart = t;  // (not accounting for frame time here)
      rate_instr_adv2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { rate_instr_adv2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { rate_instr_adv2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { rate_instr_adv2.clearEvents(); });
    }

    if (rate_instr_adv2.status === PsychoJS.Status.STARTED) {
      let theseKeys = rate_instr_adv2.getKeys({keyList: ['space'], waitRelease: false});
      _rate_instr_adv2_allKeys = _rate_instr_adv2_allKeys.concat(theseKeys);
      if (_rate_instr_adv2_allKeys.length > 0) {
        rate_instr_adv2.keys = _rate_instr_adv2_allKeys[_rate_instr_adv2_allKeys.length - 1].name;  // just the last key pressed
        rate_instr_adv2.rt = _rate_instr_adv2_allKeys[_rate_instr_adv2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *IntroCont9* updates
    if (t >= 2 && IntroCont9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroCont9.tStart = t;  // (not accounting for frame time here)
      IntroCont9.frameNStart = frameN;  // exact frame index
      
      IntroCont9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rateInstr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rateInstr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rateInstr2' ---
    for (const thisComponent of rateInstr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(rate_instr_adv2.corr, level);
    }
    psychoJS.experiment.addData('rate_instr_adv2.keys', rate_instr_adv2.keys);
    if (typeof rate_instr_adv2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('rate_instr_adv2.rt', rate_instr_adv2.rt);
        routineTimer.reset();
        }
    
    rate_instr_adv2.stop();
    // Run 'End Routine' code from isInstrDone_2
    reshowInstr.finished = true;
    psychoJS.eventManager.getKeys();
    failure = 0;
    
    // the Routine "rateInstr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _attnKeyResp1_allKeys;
var attnCheck1Components;
function attnCheck1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attnCheck1' ---
    t = 0;
    attnCheck1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    attnKeyResp1.keys = undefined;
    attnKeyResp1.rt = undefined;
    _attnKeyResp1_allKeys = [];
    // Run 'Begin Routine' code from questionsLeft1
    attnQuestion1.alignText = "left";
    attnQuestion1.alignHoriz = "left";
    
    // keep track of which components have finished
    attnCheck1Components = [];
    attnCheck1Components.push(attnQuestion1);
    attnCheck1Components.push(attnKeyResp1);
    
    for (const thisComponent of attnCheck1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attnCheck1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attnCheck1' ---
    // get current time
    t = attnCheck1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attnQuestion1* updates
    if (t >= 0.0 && attnQuestion1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnQuestion1.tStart = t;  // (not accounting for frame time here)
      attnQuestion1.frameNStart = frameN;  // exact frame index
      
      attnQuestion1.setAutoDraw(true);
    }

    
    // *attnKeyResp1* updates
    if (t >= 0.0 && attnKeyResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnKeyResp1.tStart = t;  // (not accounting for frame time here)
      attnKeyResp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attnKeyResp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp1.clearEvents(); });
    }

    if (attnKeyResp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = attnKeyResp1.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _attnKeyResp1_allKeys = _attnKeyResp1_allKeys.concat(theseKeys);
      if (_attnKeyResp1_allKeys.length > 0) {
        attnKeyResp1.keys = _attnKeyResp1_allKeys[_attnKeyResp1_allKeys.length - 1].name;  // just the last key pressed
        attnKeyResp1.rt = _attnKeyResp1_allKeys[_attnKeyResp1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attnCheck1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var keys;
var continueQuestions;
function attnCheck1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attnCheck1' ---
    for (const thisComponent of attnCheck1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(attnKeyResp1.corr, level);
    }
    psychoJS.experiment.addData('attnKeyResp1.keys', attnKeyResp1.keys);
    if (typeof attnKeyResp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attnKeyResp1.rt', attnKeyResp1.rt);
        routineTimer.reset();
        }
    
    attnKeyResp1.stop();
    // Run 'End Routine' code from attnCheck1_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if ((_pj.in_es6("a", keys) || _pj.in_es6("b", keys))) {
        failure = true;
        continueQuestions = 0;
    } else {
        failure = false;
        continueQuestions = 1;
    }
    
    // the Routine "attnCheck1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _attnKeyResp2_allKeys;
var attnCheck2Components;
function attnCheck2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attnCheck2' ---
    t = 0;
    attnCheck2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    attnKeyResp2.keys = undefined;
    attnKeyResp2.rt = undefined;
    _attnKeyResp2_allKeys = [];
    // Run 'Begin Routine' code from questionsLeft2
    attnQuestion2.alignText = "left";
    attnQuestion2.alignHoriz = "left";
    
    // keep track of which components have finished
    attnCheck2Components = [];
    attnCheck2Components.push(attnQuestion2);
    attnCheck2Components.push(attnKeyResp2);
    
    for (const thisComponent of attnCheck2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attnCheck2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attnCheck2' ---
    // get current time
    t = attnCheck2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attnQuestion2* updates
    if (t >= 0.0 && attnQuestion2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnQuestion2.tStart = t;  // (not accounting for frame time here)
      attnQuestion2.frameNStart = frameN;  // exact frame index
      
      attnQuestion2.setAutoDraw(true);
    }

    
    // *attnKeyResp2* updates
    if (t >= 0.0 && attnKeyResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnKeyResp2.tStart = t;  // (not accounting for frame time here)
      attnKeyResp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attnKeyResp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp2.clearEvents(); });
    }

    if (attnKeyResp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = attnKeyResp2.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _attnKeyResp2_allKeys = _attnKeyResp2_allKeys.concat(theseKeys);
      if (_attnKeyResp2_allKeys.length > 0) {
        attnKeyResp2.keys = _attnKeyResp2_allKeys[_attnKeyResp2_allKeys.length - 1].name;  // just the last key pressed
        attnKeyResp2.rt = _attnKeyResp2_allKeys[_attnKeyResp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attnCheck2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attnCheck2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attnCheck2' ---
    for (const thisComponent of attnCheck2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(attnKeyResp2.corr, level);
    }
    psychoJS.experiment.addData('attnKeyResp2.keys', attnKeyResp2.keys);
    if (typeof attnKeyResp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attnKeyResp2.rt', attnKeyResp2.rt);
        routineTimer.reset();
        }
    
    attnKeyResp2.stop();
    // Run 'End Routine' code from attnCheck2_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if ((_pj.in_es6("b", keys) || _pj.in_es6("c", keys))) {
        failure = 1;
        continueQuestions = 0;
    } else {
        failure = 0;
        continueQuestions = 1;
    }
    
    // the Routine "attnCheck2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _attnKeyResp3_allKeys;
var attnCheck3Components;
function attnCheck3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attnCheck3' ---
    t = 0;
    attnCheck3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    attnKeyResp3.keys = undefined;
    attnKeyResp3.rt = undefined;
    _attnKeyResp3_allKeys = [];
    // Run 'Begin Routine' code from questionsLeft3
    attnQuestion3.alignText = "left";
    attnQuestion3.alignHoriz = "left";
    
    // keep track of which components have finished
    attnCheck3Components = [];
    attnCheck3Components.push(attnQuestion3);
    attnCheck3Components.push(attnKeyResp3);
    
    for (const thisComponent of attnCheck3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attnCheck3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attnCheck3' ---
    // get current time
    t = attnCheck3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attnQuestion3* updates
    if (t >= 0.0 && attnQuestion3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnQuestion3.tStart = t;  // (not accounting for frame time here)
      attnQuestion3.frameNStart = frameN;  // exact frame index
      
      attnQuestion3.setAutoDraw(true);
    }

    
    // *attnKeyResp3* updates
    if (t >= 0.0 && attnKeyResp3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnKeyResp3.tStart = t;  // (not accounting for frame time here)
      attnKeyResp3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attnKeyResp3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attnKeyResp3.clearEvents(); });
    }

    if (attnKeyResp3.status === PsychoJS.Status.STARTED) {
      let theseKeys = attnKeyResp3.getKeys({keyList: ['a', 'b', 'c'], waitRelease: false});
      _attnKeyResp3_allKeys = _attnKeyResp3_allKeys.concat(theseKeys);
      if (_attnKeyResp3_allKeys.length > 0) {
        attnKeyResp3.keys = _attnKeyResp3_allKeys[_attnKeyResp3_allKeys.length - 1].name;  // just the last key pressed
        attnKeyResp3.rt = _attnKeyResp3_allKeys[_attnKeyResp3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attnCheck3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attnCheck3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attnCheck3' ---
    for (const thisComponent of attnCheck3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(attnKeyResp3.corr, level);
    }
    psychoJS.experiment.addData('attnKeyResp3.keys', attnKeyResp3.keys);
    if (typeof attnKeyResp3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attnKeyResp3.rt', attnKeyResp3.rt);
        routineTimer.reset();
        }
    
    attnKeyResp3.stop();
    // Run 'End Routine' code from attnCheck3_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if ((_pj.in_es6("a", keys) || _pj.in_es6("b", keys))) {
        failure = 1;
    } else {
        failure = 0;
        attnLoop.finished = true;
    }
    
    // the Routine "attnCheck3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _failureAcknowledged_allKeys;
var attnFailedComponents;
function attnFailedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attnFailed' ---
    t = 0;
    attnFailedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    failureAcknowledged.keys = undefined;
    failureAcknowledged.rt = undefined;
    _failureAcknowledged_allKeys = [];
    // keep track of which components have finished
    attnFailedComponents = [];
    attnFailedComponents.push(attnFailure_continue);
    attnFailedComponents.push(failureAcknowledged);
    attnFailedComponents.push(reviewStart);
    
    for (const thisComponent of attnFailedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attnFailedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attnFailed' ---
    // get current time
    t = attnFailedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attnFailure_continue* updates
    if (t >= 0.0 && attnFailure_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnFailure_continue.tStart = t;  // (not accounting for frame time here)
      attnFailure_continue.frameNStart = frameN;  // exact frame index
      
      attnFailure_continue.setAutoDraw(true);
    }

    
    // *failureAcknowledged* updates
    if (t >= 1 && failureAcknowledged.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      failureAcknowledged.tStart = t;  // (not accounting for frame time here)
      failureAcknowledged.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { failureAcknowledged.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { failureAcknowledged.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { failureAcknowledged.clearEvents(); });
    }

    if (failureAcknowledged.status === PsychoJS.Status.STARTED) {
      let theseKeys = failureAcknowledged.getKeys({keyList: ['space'], waitRelease: false});
      _failureAcknowledged_allKeys = _failureAcknowledged_allKeys.concat(theseKeys);
      if (_failureAcknowledged_allKeys.length > 0) {
        failureAcknowledged.keys = _failureAcknowledged_allKeys[_failureAcknowledged_allKeys.length - 1].name;  // just the last key pressed
        failureAcknowledged.rt = _failureAcknowledged_allKeys[_failureAcknowledged_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *reviewStart* updates
    if (t >= 1 && reviewStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reviewStart.tStart = t;  // (not accounting for frame time here)
      reviewStart.frameNStart = frameN;  // exact frame index
      
      reviewStart.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attnFailedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attnFailedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attnFailed' ---
    for (const thisComponent of attnFailedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(failureAcknowledged.corr, level);
    }
    psychoJS.experiment.addData('failureAcknowledged.keys', failureAcknowledged.keys);
    if (typeof failureAcknowledged.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('failureAcknowledged.rt', failureAcknowledged.rt);
        routineTimer.reset();
        }
    
    failureAcknowledged.stop();
    // the Routine "attnFailed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _practiceStart_allKeys;
var attnSuccessComponents;
function attnSuccessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attnSuccess' ---
    t = 0;
    attnSuccessClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practiceStart.keys = undefined;
    practiceStart.rt = undefined;
    _practiceStart_allKeys = [];
    // keep track of which components have finished
    attnSuccessComponents = [];
    attnSuccessComponents.push(introducePractice);
    attnSuccessComponents.push(practiceStart);
    attnSuccessComponents.push(practiceStart_button);
    
    for (const thisComponent of attnSuccessComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attnSuccessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attnSuccess' ---
    // get current time
    t = attnSuccessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introducePractice* updates
    if (t >= 0.0 && introducePractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introducePractice.tStart = t;  // (not accounting for frame time here)
      introducePractice.frameNStart = frameN;  // exact frame index
      
      introducePractice.setAutoDraw(true);
    }

    
    // *practiceStart* updates
    if (t >= 1 && practiceStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceStart.tStart = t;  // (not accounting for frame time here)
      practiceStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practiceStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practiceStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practiceStart.clearEvents(); });
    }

    if (practiceStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = practiceStart.getKeys({keyList: ['space'], waitRelease: false});
      _practiceStart_allKeys = _practiceStart_allKeys.concat(theseKeys);
      if (_practiceStart_allKeys.length > 0) {
        practiceStart.keys = _practiceStart_allKeys[_practiceStart_allKeys.length - 1].name;  // just the last key pressed
        practiceStart.rt = _practiceStart_allKeys[_practiceStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practiceStart_button* updates
    if (t >= 1 && practiceStart_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceStart_button.tStart = t;  // (not accounting for frame time here)
      practiceStart_button.frameNStart = frameN;  // exact frame index
      
      practiceStart_button.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attnSuccessComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attnSuccessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attnSuccess' ---
    for (const thisComponent of attnSuccessComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practiceStart.corr, level);
    }
    psychoJS.experiment.addData('practiceStart.keys', practiceStart.keys);
    if (typeof practiceStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practiceStart.rt', practiceStart.rt);
        routineTimer.reset();
        }
    
    practiceStart.stop();
    // the Routine "attnSuccess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_duration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from randDuration
    //this function is defined in the "before experiment"
    //tab
    fixation_duration = randomIntFromInterval(1.4, 1.6);
    
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixCross);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixCross* updates
    if (t >= 0.0 && fixCross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixCross.tStart = t;  // (not accounting for frame time here)
      fixCross.frameNStart = frameN;  // exact frame index
      
      fixCross.setAutoDraw(true);
    }

    frameRemains = 0.0 + fixation_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixCross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _practiceResp_allKeys;
var redo;
var practiceFaceComponents;
function practiceFaceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practiceFace' ---
    t = 0;
    practiceFaceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practiceResp.keys = undefined;
    practiceResp.rt = undefined;
    _practiceResp_allKeys = [];
    // Run 'Begin Routine' code from respCheck_2
    redo = 0;
    
    // keep track of which components have finished
    practiceFaceComponents = [];
    practiceFaceComponents.push(practiceResp);
    practiceFaceComponents.push(respIndicator_2);
    practiceFaceComponents.push(practiceImage);
    
    for (const thisComponent of practiceFaceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceFaceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practiceFace' ---
    // get current time
    t = practiceFaceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practiceResp* updates
    if (t >= 0.0 && practiceResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceResp.tStart = t;  // (not accounting for frame time here)
      practiceResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practiceResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practiceResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practiceResp.clearEvents(); });
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceResp.status = PsychoJS.Status.FINISHED;
  }

    if (practiceResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = practiceResp.getKeys({keyList: ['j', 'k'], waitRelease: false});
      _practiceResp_allKeys = _practiceResp_allKeys.concat(theseKeys);
      if (_practiceResp_allKeys.length > 0) {
        practiceResp.keys = _practiceResp_allKeys[_practiceResp_allKeys.length - 1].name;  // just the last key pressed
        practiceResp.rt = _practiceResp_allKeys[_practiceResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *respIndicator_2* updates
    if ((practiceResp.keys) && respIndicator_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respIndicator_2.tStart = t;  // (not accounting for frame time here)
      respIndicator_2.frameNStart = frameN;  // exact frame index
      
      respIndicator_2.setAutoDraw(true);
    }

    if (respIndicator_2.status === PsychoJS.Status.STARTED && Boolean((practiceImage.status == FINISHED))) {
      respIndicator_2.setAutoDraw(false);
    }
    
    // *practiceImage* updates
    if (t >= 0.0 && practiceImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceImage.tStart = t;  // (not accounting for frame time here)
      practiceImage.frameNStart = frameN;  // exact frame index
      
      practiceImage.setAutoDraw(true);
    }

    // Run 'Each Frame' code from endTrial_2
    if ((t > 2)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceFaceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceFaceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practiceFace' ---
    for (const thisComponent of practiceFaceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(practiceResp.corr, level);
    }
    psychoJS.experiment.addData('practiceResp.keys', practiceResp.keys);
    if (typeof practiceResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practiceResp.rt', practiceResp.rt);
        }
    
    practiceResp.stop();
    // Run 'End Routine' code from respCheck_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if ((keys.length > 0)) {
        if ((_pj.in_es6("k", keys) || _pj.in_es6("j", keys))) {
            practiceRepeat.finished = true;
            redo = 0;
        } else {
            redo = 1;
            timesRedone = (timesRedone + 1);
        }
    } else {
        redo = 1;
        timesRedone = (timesRedone + 1);
    }
    psychoJS.experiment.addData("timesRedone", timesRedone);
    
    // the Routine "practiceFace" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _redo_keypress_allKeys;
var redo_feedbackComponents;
function redo_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'redo_feedback' ---
    t = 0;
    redo_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    timeoutReminder.setText(instr);
    redo_keypress.keys = undefined;
    redo_keypress.rt = undefined;
    _redo_keypress_allKeys = [];
    // keep track of which components have finished
    redo_feedbackComponents = [];
    redo_feedbackComponents.push(out_of_time_2);
    redo_feedbackComponents.push(timeoutReminder);
    redo_feedbackComponents.push(redo_keypress);
    
    for (const thisComponent of redo_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function redo_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'redo_feedback' ---
    // get current time
    t = redo_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *out_of_time_2* updates
    if (t >= 0 && out_of_time_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      out_of_time_2.tStart = t;  // (not accounting for frame time here)
      out_of_time_2.frameNStart = frameN;  // exact frame index
      
      out_of_time_2.setAutoDraw(true);
    }

    
    // *timeoutReminder* updates
    if (t >= 0.0 && timeoutReminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      timeoutReminder.tStart = t;  // (not accounting for frame time here)
      timeoutReminder.frameNStart = frameN;  // exact frame index
      
      timeoutReminder.setAutoDraw(true);
    }

    
    // *redo_keypress* updates
    if (t >= 0 && redo_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redo_keypress.tStart = t;  // (not accounting for frame time here)
      redo_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { redo_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { redo_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { redo_keypress.clearEvents(); });
    }

    if (redo_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = redo_keypress.getKeys({keyList: ['space'], waitRelease: false});
      _redo_keypress_allKeys = _redo_keypress_allKeys.concat(theseKeys);
      if (_redo_keypress_allKeys.length > 0) {
        redo_keypress.keys = _redo_keypress_allKeys[_redo_keypress_allKeys.length - 1].name;  // just the last key pressed
        redo_keypress.rt = _redo_keypress_allKeys[_redo_keypress_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of redo_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function redo_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'redo_feedback' ---
    for (const thisComponent of redo_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(redo_keypress.corr, level);
    }
    psychoJS.experiment.addData('redo_keypress.keys', redo_keypress.keys);
    if (typeof redo_keypress.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('redo_keypress.rt', redo_keypress.rt);
        routineTimer.reset();
        }
    
    redo_keypress.stop();
    // Run 'End Routine' code from timeoutResume
    psychoJS.eventManager.getKeys();
    
    // the Routine "redo_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _attrRating_allKeys;
var ratingScaleComponents;
function ratingScaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ratingScale' ---
    t = 0;
    ratingScaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    attractiveness_slider.reset()
    attrRating.keys = undefined;
    attrRating.rt = undefined;
    _attrRating_allKeys = [];
    // keep track of which components have finished
    ratingScaleComponents = [];
    ratingScaleComponents.push(attractiveness_slider);
    ratingScaleComponents.push(attractiveness_instr);
    ratingScaleComponents.push(notAttractive);
    ratingScaleComponents.push(veryAttractive);
    ratingScaleComponents.push(attrRating);
    
    for (const thisComponent of ratingScaleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ratingScaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ratingScale' ---
    // get current time
    t = ratingScaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attractiveness_slider* updates
    if (t >= 0.0 && attractiveness_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attractiveness_slider.tStart = t;  // (not accounting for frame time here)
      attractiveness_slider.frameNStart = frameN;  // exact frame index
      
      attractiveness_slider.setAutoDraw(true);
    }

    
    // *attractiveness_instr* updates
    if (t >= 0.0 && attractiveness_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attractiveness_instr.tStart = t;  // (not accounting for frame time here)
      attractiveness_instr.frameNStart = frameN;  // exact frame index
      
      attractiveness_instr.setAutoDraw(true);
    }

    
    // *notAttractive* updates
    if (t >= 0.0 && notAttractive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notAttractive.tStart = t;  // (not accounting for frame time here)
      notAttractive.frameNStart = frameN;  // exact frame index
      
      notAttractive.setAutoDraw(true);
    }

    
    // *veryAttractive* updates
    if (t >= 0.0 && veryAttractive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      veryAttractive.tStart = t;  // (not accounting for frame time here)
      veryAttractive.frameNStart = frameN;  // exact frame index
      
      veryAttractive.setAutoDraw(true);
    }

    
    // *attrRating* updates
    if (t >= 0.0 && attrRating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attrRating.tStart = t;  // (not accounting for frame time here)
      attrRating.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attrRating.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attrRating.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attrRating.clearEvents(); });
    }

    if (attrRating.status === PsychoJS.Status.STARTED) {
      let theseKeys = attrRating.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], waitRelease: false});
      _attrRating_allKeys = _attrRating_allKeys.concat(theseKeys);
      if (_attrRating_allKeys.length > 0) {
        attrRating.keys = _attrRating_allKeys[_attrRating_allKeys.length - 1].name;  // just the last key pressed
        attrRating.rt = _attrRating_allKeys[_attrRating_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ratingScaleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ratingScaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ratingScale' ---
    for (const thisComponent of ratingScaleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(attrRating.corr, level);
    }
    psychoJS.experiment.addData('attrRating.keys', attrRating.keys);
    if (typeof attrRating.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attrRating.rt', attrRating.rt);
        routineTimer.reset();
        }
    
    attrRating.stop();
    // the Routine "ratingScale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var introDoneComponents;
function introDoneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introDone' ---
    t = 0;
    introDoneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    introDoneComponents = [];
    introDoneComponents.push(attnSuccess_continue);
    introDoneComponents.push(key_resp_3);
    
    for (const thisComponent of introDoneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introDoneRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introDone' ---
    // get current time
    t = introDoneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attnSuccess_continue* updates
    if (t >= 0.0 && attnSuccess_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attnSuccess_continue.tStart = t;  // (not accounting for frame time here)
      attnSuccess_continue.frameNStart = frameN;  // exact frame index
      
      attnSuccess_continue.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introDoneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introDoneRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introDone' ---
    for (const thisComponent of introDoneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "introDone" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _catResp_allKeys;
var faceOnsetComponents;
function faceOnsetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faceOnset' ---
    t = 0;
    faceOnsetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    catResp.keys = undefined;
    catResp.rt = undefined;
    _catResp_allKeys = [];
    face_image.setImage(face_file);
    // Run 'Begin Routine' code from respCheck
    redo = 0;
    
    // keep track of which components have finished
    faceOnsetComponents = [];
    faceOnsetComponents.push(catResp);
    faceOnsetComponents.push(respIndicator);
    faceOnsetComponents.push(face_image);
    
    for (const thisComponent of faceOnsetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function faceOnsetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faceOnset' ---
    // get current time
    t = faceOnsetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *catResp* updates
    if (t >= 0.0 && catResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      catResp.tStart = t;  // (not accounting for frame time here)
      catResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { catResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { catResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { catResp.clearEvents(); });
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (catResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      catResp.status = PsychoJS.Status.FINISHED;
  }

    if (catResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = catResp.getKeys({keyList: ['j', 'k'], waitRelease: false});
      _catResp_allKeys = _catResp_allKeys.concat(theseKeys);
      if (_catResp_allKeys.length > 0) {
        catResp.keys = _catResp_allKeys[_catResp_allKeys.length - 1].name;  // just the last key pressed
        catResp.rt = _catResp_allKeys[_catResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *respIndicator* updates
    if ((catResp.keys) && respIndicator.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respIndicator.tStart = t;  // (not accounting for frame time here)
      respIndicator.frameNStart = frameN;  // exact frame index
      
      respIndicator.setAutoDraw(true);
    }

    if (respIndicator.status === PsychoJS.Status.STARTED && Boolean((face_image.status == FINISHED))) {
      respIndicator.setAutoDraw(false);
    }
    
    // *face_image* updates
    if (t >= 0.0 && face_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_image.tStart = t;  // (not accounting for frame time here)
      face_image.frameNStart = frameN;  // exact frame index
      
      face_image.setAutoDraw(true);
    }

    // Run 'Each Frame' code from endTrial
    if ((t > 2)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of faceOnsetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function faceOnsetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faceOnset' ---
    for (const thisComponent of faceOnsetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(catResp.corr, level);
    }
    psychoJS.experiment.addData('catResp.keys', catResp.keys);
    if (typeof catResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('catResp.rt', catResp.rt);
        }
    
    catResp.stop();
    // Run 'End Routine' code from respCheck
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if ((keys.length > 0)) {
        if ((_pj.in_es6("k", keys) || _pj.in_es6("j", keys))) {
            repeat_loop.finished = true;
            redo = 0;
        } else {
            redo = 1;
            timesRedone = (timesRedone + 1);
        }
    } else {
        redo = 1;
        timesRedone = (timesRedone + 1);
    }
    psychoJS.experiment.addData("timesRedone", timesRedone);
    
    // the Routine "faceOnset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _contResp_allKeys;
var contComponents;
function contRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cont' ---
    t = 0;
    contClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    reminder.setText(instr);
    contResp.keys = undefined;
    contResp.rt = undefined;
    _contResp_allKeys = [];
    // keep track of which components have finished
    contComponents = [];
    contComponents.push(trialPassed);
    contComponents.push(fixCross_2);
    contComponents.push(reminder);
    contComponents.push(contResp);
    contComponents.push(contPrompt);
    
    for (const thisComponent of contComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function contRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cont' ---
    // get current time
    t = contClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialPassed* updates
    if (t >= 0.0 && trialPassed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialPassed.tStart = t;  // (not accounting for frame time here)
      trialPassed.frameNStart = frameN;  // exact frame index
      
      trialPassed.setAutoDraw(true);
    }

    
    // *fixCross_2* updates
    if (t >= 0.0 && fixCross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixCross_2.tStart = t;  // (not accounting for frame time here)
      fixCross_2.frameNStart = frameN;  // exact frame index
      
      fixCross_2.setAutoDraw(true);
    }

    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }

    
    // *contResp* updates
    if (t >= 0.0 && contResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contResp.tStart = t;  // (not accounting for frame time here)
      contResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { contResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { contResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { contResp.clearEvents(); });
    }

    if (contResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = contResp.getKeys({keyList: ['space'], waitRelease: false});
      _contResp_allKeys = _contResp_allKeys.concat(theseKeys);
      if (_contResp_allKeys.length > 0) {
        contResp.keys = _contResp_allKeys[_contResp_allKeys.length - 1].name;  // just the last key pressed
        contResp.rt = _contResp_allKeys[_contResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *contPrompt* updates
    if (t >= 0.0 && contPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contPrompt.tStart = t;  // (not accounting for frame time here)
      contPrompt.frameNStart = frameN;  // exact frame index
      
      contPrompt.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of contComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function contRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cont' ---
    for (const thisComponent of contComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(contResp.corr, level);
    }
    psychoJS.experiment.addData('contResp.keys', contResp.keys);
    if (typeof contResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('contResp.rt', contResp.rt);
        routineTimer.reset();
        }
    
    contResp.stop();
    // the Routine "cont" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _contResp_2_allKeys;
var intro2QuestionsComponents;
function intro2QuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro2Questions' ---
    t = 0;
    intro2QuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    contResp_2.keys = undefined;
    contResp_2.rt = undefined;
    _contResp_2_allKeys = [];
    // keep track of which components have finished
    intro2QuestionsComponents = [];
    intro2QuestionsComponents.push(qsIntro);
    intro2QuestionsComponents.push(contResp_2);
    
    for (const thisComponent of intro2QuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro2QuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro2Questions' ---
    // get current time
    t = intro2QuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qsIntro* updates
    if (t >= 0.0 && qsIntro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qsIntro.tStart = t;  // (not accounting for frame time here)
      qsIntro.frameNStart = frameN;  // exact frame index
      
      qsIntro.setAutoDraw(true);
    }

    
    // *contResp_2* updates
    if (t >= 0.0 && contResp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contResp_2.tStart = t;  // (not accounting for frame time here)
      contResp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { contResp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { contResp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { contResp_2.clearEvents(); });
    }

    if (contResp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = contResp_2.getKeys({keyList: ['space'], waitRelease: false});
      _contResp_2_allKeys = _contResp_2_allKeys.concat(theseKeys);
      if (_contResp_2_allKeys.length > 0) {
        contResp_2.keys = _contResp_2_allKeys[_contResp_2_allKeys.length - 1].name;  // just the last key pressed
        contResp_2.rt = _contResp_2_allKeys[_contResp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro2QuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro2QuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro2Questions' ---
    for (const thisComponent of intro2QuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(contResp_2.corr, level);
    }
    psychoJS.experiment.addData('contResp_2.keys', contResp_2.keys);
    if (typeof contResp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('contResp_2.rt', contResp_2.rt);
        routineTimer.reset();
        }
    
    contResp_2.stop();
    // the Routine "intro2Questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ambiguity1Components;
function ambiguity1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ambiguity1' ---
    t = 0;
    ambiguity1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respQ1.reset()
    respQ2.reset()
    respQ3.reset()
    respQ4.reset()
    // setup some python lists for storing info about the nextClick1
    nextClick1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from leftText1
    questions1.alignText = "left";
    questions1.alignHoriz = "left";
    
    // keep track of which components have finished
    ambiguity1Components = [];
    ambiguity1Components.push(qsInstr);
    ambiguity1Components.push(questions1);
    ambiguity1Components.push(respQ1);
    ambiguity1Components.push(respQ2);
    ambiguity1Components.push(respQ3);
    ambiguity1Components.push(respQ4);
    ambiguity1Components.push(nextButton1);
    ambiguity1Components.push(nextClick1);
    
    for (const thisComponent of ambiguity1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ambiguity1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ambiguity1' ---
    // get current time
    t = ambiguity1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qsInstr* updates
    if (t >= 0.0 && qsInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qsInstr.tStart = t;  // (not accounting for frame time here)
      qsInstr.frameNStart = frameN;  // exact frame index
      
      qsInstr.setAutoDraw(true);
    }

    
    // *questions1* updates
    if (t >= 0.0 && questions1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions1.tStart = t;  // (not accounting for frame time here)
      questions1.frameNStart = frameN;  // exact frame index
      
      questions1.setAutoDraw(true);
    }

    
    // *respQ1* updates
    if (t >= 0.0 && respQ1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ1.tStart = t;  // (not accounting for frame time here)
      respQ1.frameNStart = frameN;  // exact frame index
      
      respQ1.setAutoDraw(true);
    }

    
    // *respQ2* updates
    if (t >= 0.0 && respQ2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ2.tStart = t;  // (not accounting for frame time here)
      respQ2.frameNStart = frameN;  // exact frame index
      
      respQ2.setAutoDraw(true);
    }

    
    // *respQ3* updates
    if (t >= 0.0 && respQ3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ3.tStart = t;  // (not accounting for frame time here)
      respQ3.frameNStart = frameN;  // exact frame index
      
      respQ3.setAutoDraw(true);
    }

    
    // *respQ4* updates
    if (t >= 0.0 && respQ4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ4.tStart = t;  // (not accounting for frame time here)
      respQ4.frameNStart = frameN;  // exact frame index
      
      respQ4.setAutoDraw(true);
    }

    
    // *nextButton1* updates
    if ((((((respQ1.rating + respQ2.rating) + respQ3.rating) + respQ4.rating) > 0)) && nextButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton1.tStart = t;  // (not accounting for frame time here)
      nextButton1.frameNStart = frameN;  // exact frame index
      
      nextButton1.setAutoDraw(true);
    }

    // *nextClick1* updates
    if (t >= 0.0 && nextClick1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextClick1.tStart = t;  // (not accounting for frame time here)
      nextClick1.frameNStart = frameN;  // exact frame index
      
      nextClick1.status = PsychoJS.Status.STARTED;
      nextClick1.mouseClock.reset();
      prevButtonState = nextClick1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextClick1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextClick1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton1]) {
            if (obj.contains(nextClick1)) {
              gotValidClick = true;
              nextClick1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ambiguity1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ambiguity1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ambiguity1' ---
    for (const thisComponent of ambiguity1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respQ1.response', respQ1.getRating());
    psychoJS.experiment.addData('respQ1.rt', respQ1.getRT());
    psychoJS.experiment.addData('respQ2.response', respQ2.getRating());
    psychoJS.experiment.addData('respQ2.rt', respQ2.getRT());
    psychoJS.experiment.addData('respQ3.response', respQ3.getRating());
    psychoJS.experiment.addData('respQ3.rt', respQ3.getRT());
    psychoJS.experiment.addData('respQ4.response', respQ4.getRating());
    psychoJS.experiment.addData('respQ4.rt', respQ4.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = nextClick1.getPos();
    _mouseButtons = nextClick1.getPressed();
    psychoJS.experiment.addData('nextClick1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('nextClick1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('nextClick1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('nextClick1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('nextClick1.rightButton', _mouseButtons[2]);
    if (nextClick1.clicked_name.length > 0) {
      psychoJS.experiment.addData('nextClick1.clicked_name', nextClick1.clicked_name[0]);}
    // the Routine "ambiguity1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ambiguity2Components;
function ambiguity2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ambiguity2' ---
    t = 0;
    ambiguity2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respQ5.reset()
    respQ6.reset()
    respQ7.reset()
    respQ8.reset()
    // setup some python lists for storing info about the nextClick2
    nextClick2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from leftText2
    questions2.alignText = "left";
    questions2.alignHoriz = "left";
    
    // keep track of which components have finished
    ambiguity2Components = [];
    ambiguity2Components.push(qsInstr_2);
    ambiguity2Components.push(questions2);
    ambiguity2Components.push(respQ5);
    ambiguity2Components.push(respQ6);
    ambiguity2Components.push(respQ7);
    ambiguity2Components.push(respQ8);
    ambiguity2Components.push(nextButton2);
    ambiguity2Components.push(nextClick2);
    
    for (const thisComponent of ambiguity2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ambiguity2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ambiguity2' ---
    // get current time
    t = ambiguity2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qsInstr_2* updates
    if (t >= 0.0 && qsInstr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qsInstr_2.tStart = t;  // (not accounting for frame time here)
      qsInstr_2.frameNStart = frameN;  // exact frame index
      
      qsInstr_2.setAutoDraw(true);
    }

    
    // *questions2* updates
    if (t >= 0.0 && questions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions2.tStart = t;  // (not accounting for frame time here)
      questions2.frameNStart = frameN;  // exact frame index
      
      questions2.setAutoDraw(true);
    }

    
    // *respQ5* updates
    if (t >= 0.0 && respQ5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ5.tStart = t;  // (not accounting for frame time here)
      respQ5.frameNStart = frameN;  // exact frame index
      
      respQ5.setAutoDraw(true);
    }

    
    // *respQ6* updates
    if (t >= 0.0 && respQ6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ6.tStart = t;  // (not accounting for frame time here)
      respQ6.frameNStart = frameN;  // exact frame index
      
      respQ6.setAutoDraw(true);
    }

    
    // *respQ7* updates
    if (t >= 0.0 && respQ7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ7.tStart = t;  // (not accounting for frame time here)
      respQ7.frameNStart = frameN;  // exact frame index
      
      respQ7.setAutoDraw(true);
    }

    
    // *respQ8* updates
    if (t >= 0.0 && respQ8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ8.tStart = t;  // (not accounting for frame time here)
      respQ8.frameNStart = frameN;  // exact frame index
      
      respQ8.setAutoDraw(true);
    }

    
    // *nextButton2* updates
    if ((((((respQ5.rating + respQ6.rating) + respQ7.rating) + respQ8.rating) > 0)) && nextButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton2.tStart = t;  // (not accounting for frame time here)
      nextButton2.frameNStart = frameN;  // exact frame index
      
      nextButton2.setAutoDraw(true);
    }

    // *nextClick2* updates
    if (t >= 0.0 && nextClick2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextClick2.tStart = t;  // (not accounting for frame time here)
      nextClick2.frameNStart = frameN;  // exact frame index
      
      nextClick2.status = PsychoJS.Status.STARTED;
      nextClick2.mouseClock.reset();
      prevButtonState = nextClick2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextClick2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextClick2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton2]) {
            if (obj.contains(nextClick2)) {
              gotValidClick = true;
              nextClick2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ambiguity2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ambiguity2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ambiguity2' ---
    for (const thisComponent of ambiguity2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respQ5.response', respQ5.getRating());
    psychoJS.experiment.addData('respQ5.rt', respQ5.getRT());
    psychoJS.experiment.addData('respQ6.response', respQ6.getRating());
    psychoJS.experiment.addData('respQ6.rt', respQ6.getRT());
    psychoJS.experiment.addData('respQ7.response', respQ7.getRating());
    psychoJS.experiment.addData('respQ7.rt', respQ7.getRT());
    psychoJS.experiment.addData('respQ8.response', respQ8.getRating());
    psychoJS.experiment.addData('respQ8.rt', respQ8.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = nextClick2.getPos();
    _mouseButtons = nextClick2.getPressed();
    psychoJS.experiment.addData('nextClick2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('nextClick2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('nextClick2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('nextClick2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('nextClick2.rightButton', _mouseButtons[2]);
    if (nextClick2.clicked_name.length > 0) {
      psychoJS.experiment.addData('nextClick2.clicked_name', nextClick2.clicked_name[0]);}
    // the Routine "ambiguity2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ambiguity3Components;
function ambiguity3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ambiguity3' ---
    t = 0;
    ambiguity3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respQ9.reset()
    respQ10.reset()
    respQ11.reset()
    respQ12.reset()
    // setup some python lists for storing info about the nextClick3
    nextClick3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from leftText3
    questions3.alignText = "left";
    questions3.alignHoriz = "left";
    
    // keep track of which components have finished
    ambiguity3Components = [];
    ambiguity3Components.push(qsInstr_3);
    ambiguity3Components.push(questions3);
    ambiguity3Components.push(respQ9);
    ambiguity3Components.push(respQ10);
    ambiguity3Components.push(respQ11);
    ambiguity3Components.push(respQ12);
    ambiguity3Components.push(nextButton3);
    ambiguity3Components.push(nextClick3);
    
    for (const thisComponent of ambiguity3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ambiguity3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ambiguity3' ---
    // get current time
    t = ambiguity3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qsInstr_3* updates
    if (t >= 0.0 && qsInstr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qsInstr_3.tStart = t;  // (not accounting for frame time here)
      qsInstr_3.frameNStart = frameN;  // exact frame index
      
      qsInstr_3.setAutoDraw(true);
    }

    
    // *questions3* updates
    if (t >= 0.0 && questions3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions3.tStart = t;  // (not accounting for frame time here)
      questions3.frameNStart = frameN;  // exact frame index
      
      questions3.setAutoDraw(true);
    }

    
    // *respQ9* updates
    if (t >= 0.0 && respQ9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ9.tStart = t;  // (not accounting for frame time here)
      respQ9.frameNStart = frameN;  // exact frame index
      
      respQ9.setAutoDraw(true);
    }

    
    // *respQ10* updates
    if (t >= 0.0 && respQ10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ10.tStart = t;  // (not accounting for frame time here)
      respQ10.frameNStart = frameN;  // exact frame index
      
      respQ10.setAutoDraw(true);
    }

    
    // *respQ11* updates
    if (t >= 0.0 && respQ11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ11.tStart = t;  // (not accounting for frame time here)
      respQ11.frameNStart = frameN;  // exact frame index
      
      respQ11.setAutoDraw(true);
    }

    
    // *respQ12* updates
    if (t >= 0.0 && respQ12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ12.tStart = t;  // (not accounting for frame time here)
      respQ12.frameNStart = frameN;  // exact frame index
      
      respQ12.setAutoDraw(true);
    }

    
    // *nextButton3* updates
    if ((((((respQ9.rating + respQ10.rating) + respQ11.rating) + respQ12.rating) > 0)) && nextButton3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton3.tStart = t;  // (not accounting for frame time here)
      nextButton3.frameNStart = frameN;  // exact frame index
      
      nextButton3.setAutoDraw(true);
    }

    // *nextClick3* updates
    if (t >= 0.0 && nextClick3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextClick3.tStart = t;  // (not accounting for frame time here)
      nextClick3.frameNStart = frameN;  // exact frame index
      
      nextClick3.status = PsychoJS.Status.STARTED;
      nextClick3.mouseClock.reset();
      prevButtonState = nextClick3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextClick3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextClick3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton3]) {
            if (obj.contains(nextClick3)) {
              gotValidClick = true;
              nextClick3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ambiguity3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ambiguity3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ambiguity3' ---
    for (const thisComponent of ambiguity3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respQ9.response', respQ9.getRating());
    psychoJS.experiment.addData('respQ9.rt', respQ9.getRT());
    psychoJS.experiment.addData('respQ10.response', respQ10.getRating());
    psychoJS.experiment.addData('respQ10.rt', respQ10.getRT());
    psychoJS.experiment.addData('respQ11.response', respQ11.getRating());
    psychoJS.experiment.addData('respQ11.rt', respQ11.getRT());
    psychoJS.experiment.addData('respQ12.response', respQ12.getRating());
    psychoJS.experiment.addData('respQ12.rt', respQ12.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = nextClick3.getPos();
    _mouseButtons = nextClick3.getPressed();
    psychoJS.experiment.addData('nextClick3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('nextClick3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('nextClick3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('nextClick3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('nextClick3.rightButton', _mouseButtons[2]);
    if (nextClick3.clicked_name.length > 0) {
      psychoJS.experiment.addData('nextClick3.clicked_name', nextClick3.clicked_name[0]);}
    // the Routine "ambiguity3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ambiguity4Components;
function ambiguity4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ambiguity4' ---
    t = 0;
    ambiguity4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respQ13.reset()
    respQ14.reset()
    respQ15.reset()
    respQ16.reset()
    // setup some python lists for storing info about the nextClick4
    nextClick4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from leftText4
    questions4.alignText = "left";
    questions4.alignHoriz = "left";
    
    // keep track of which components have finished
    ambiguity4Components = [];
    ambiguity4Components.push(qsInstr_4);
    ambiguity4Components.push(questions4);
    ambiguity4Components.push(respQ13);
    ambiguity4Components.push(respQ14);
    ambiguity4Components.push(respQ15);
    ambiguity4Components.push(respQ16);
    ambiguity4Components.push(nextButton4);
    ambiguity4Components.push(nextClick4);
    
    for (const thisComponent of ambiguity4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ambiguity4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ambiguity4' ---
    // get current time
    t = ambiguity4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *qsInstr_4* updates
    if (t >= 0.0 && qsInstr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qsInstr_4.tStart = t;  // (not accounting for frame time here)
      qsInstr_4.frameNStart = frameN;  // exact frame index
      
      qsInstr_4.setAutoDraw(true);
    }

    
    // *questions4* updates
    if (t >= 0.0 && questions4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions4.tStart = t;  // (not accounting for frame time here)
      questions4.frameNStart = frameN;  // exact frame index
      
      questions4.setAutoDraw(true);
    }

    
    // *respQ13* updates
    if (t >= 0.0 && respQ13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ13.tStart = t;  // (not accounting for frame time here)
      respQ13.frameNStart = frameN;  // exact frame index
      
      respQ13.setAutoDraw(true);
    }

    
    // *respQ14* updates
    if (t >= 0.0 && respQ14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ14.tStart = t;  // (not accounting for frame time here)
      respQ14.frameNStart = frameN;  // exact frame index
      
      respQ14.setAutoDraw(true);
    }

    
    // *respQ15* updates
    if (t >= 0.0 && respQ15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ15.tStart = t;  // (not accounting for frame time here)
      respQ15.frameNStart = frameN;  // exact frame index
      
      respQ15.setAutoDraw(true);
    }

    
    // *respQ16* updates
    if (t >= 0.0 && respQ16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respQ16.tStart = t;  // (not accounting for frame time here)
      respQ16.frameNStart = frameN;  // exact frame index
      
      respQ16.setAutoDraw(true);
    }

    
    // *nextButton4* updates
    if ((((((respQ13.rating + respQ14.rating) + respQ15.rating) + respQ16.rating) > 0)) && nextButton4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton4.tStart = t;  // (not accounting for frame time here)
      nextButton4.frameNStart = frameN;  // exact frame index
      
      nextButton4.setAutoDraw(true);
    }

    // *nextClick4* updates
    if (t >= 0.0 && nextClick4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextClick4.tStart = t;  // (not accounting for frame time here)
      nextClick4.frameNStart = frameN;  // exact frame index
      
      nextClick4.status = PsychoJS.Status.STARTED;
      nextClick4.mouseClock.reset();
      prevButtonState = nextClick4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextClick4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextClick4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton4]) {
            if (obj.contains(nextClick4)) {
              gotValidClick = true;
              nextClick4.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ambiguity4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ambiguity4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ambiguity4' ---
    for (const thisComponent of ambiguity4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respQ13.response', respQ13.getRating());
    psychoJS.experiment.addData('respQ13.rt', respQ13.getRT());
    psychoJS.experiment.addData('respQ14.response', respQ14.getRating());
    psychoJS.experiment.addData('respQ14.rt', respQ14.getRT());
    psychoJS.experiment.addData('respQ15.response', respQ15.getRating());
    psychoJS.experiment.addData('respQ15.rt', respQ15.getRT());
    psychoJS.experiment.addData('respQ16.response', respQ16.getRating());
    psychoJS.experiment.addData('respQ16.rt', respQ16.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = nextClick4.getPos();
    _mouseButtons = nextClick4.getPressed();
    psychoJS.experiment.addData('nextClick4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('nextClick4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('nextClick4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('nextClick4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('nextClick4.rightButton', _mouseButtons[2]);
    if (nextClick4.clicked_name.length > 0) {
      psychoJS.experiment.addData('nextClick4.clicked_name', nextClick4.clicked_name[0]);}
    // the Routine "ambiguity4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics' ---
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    respAge.reset()
    genderResp1.reset()
    genderResp2.setText('');
    genderResp2.refresh();
    // setup some python lists for storing info about the demographClick
    demographClick.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from demogLeft
    age.alignText = "left";
    age.alignHoriz = "left";
    gender.alignText = "left";
    gender.alignHoriz = "left";
    
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(demographicsInstr);
    demographicsComponents.push(age);
    demographicsComponents.push(respAge);
    demographicsComponents.push(gender);
    demographicsComponents.push(genderResp1);
    demographicsComponents.push(genderResp2);
    demographicsComponents.push(nextButton5);
    demographicsComponents.push(demographClick);
    
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographicsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics' ---
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demographicsInstr* updates
    if (t >= 0.0 && demographicsInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographicsInstr.tStart = t;  // (not accounting for frame time here)
      demographicsInstr.frameNStart = frameN;  // exact frame index
      
      demographicsInstr.setAutoDraw(true);
    }

    
    // *age* updates
    if (t >= 0.0 && age.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age.tStart = t;  // (not accounting for frame time here)
      age.frameNStart = frameN;  // exact frame index
      
      age.setAutoDraw(true);
    }

    
    // *respAge* updates
    if (t >= 0.0 && respAge.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respAge.tStart = t;  // (not accounting for frame time here)
      respAge.frameNStart = frameN;  // exact frame index
      
      respAge.setAutoDraw(true);
    }

    
    // *gender* updates
    if (t >= 0.0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }

    
    // *genderResp1* updates
    if (t >= 0.0 && genderResp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genderResp1.tStart = t;  // (not accounting for frame time here)
      genderResp1.frameNStart = frameN;  // exact frame index
      
      genderResp1.setAutoDraw(true);
    }

    
    // *genderResp2* updates
    if (t >= 0 && genderResp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genderResp2.tStart = t;  // (not accounting for frame time here)
      genderResp2.frameNStart = frameN;  // exact frame index
      
      genderResp2.setAutoDraw(true);
    }

    
    // *nextButton5* updates
    if (((respAge.rating && genderResp1.rating)) && nextButton5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton5.tStart = t;  // (not accounting for frame time here)
      nextButton5.frameNStart = frameN;  // exact frame index
      
      nextButton5.setAutoDraw(true);
    }

    // *demographClick* updates
    if (t >= 0.0 && demographClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographClick.tStart = t;  // (not accounting for frame time here)
      demographClick.frameNStart = frameN;  // exact frame index
      
      demographClick.status = PsychoJS.Status.STARTED;
      demographClick.mouseClock.reset();
      prevButtonState = demographClick.getPressed();  // if button is down already this ISN'T a new click
      }
    if (demographClick.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = demographClick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton5]) {
            if (obj.contains(demographClick)) {
              gotValidClick = true;
              demographClick.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    for (const thisComponent of demographicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('respAge.response', respAge.getRating());
    psychoJS.experiment.addData('respAge.rt', respAge.getRT());
    psychoJS.experiment.addData('genderResp1.response', genderResp1.getRating());
    psychoJS.experiment.addData('genderResp1.rt', genderResp1.getRT());
    psychoJS.experiment.addData('genderResp2.text',genderResp2.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = demographClick.getPos();
    _mouseButtons = demographClick.getPressed();
    psychoJS.experiment.addData('demographClick.x', _mouseXYs[0]);
    psychoJS.experiment.addData('demographClick.y', _mouseXYs[1]);
    psychoJS.experiment.addData('demographClick.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('demographClick.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('demographClick.rightButton', _mouseButtons[2]);
    if (demographClick.clicked_name.length > 0) {
      psychoJS.experiment.addData('demographClick.clicked_name', demographClick.clicked_name[0]);}
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var openAnswerComponents;
function openAnswerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'openAnswer' ---
    t = 0;
    openAnswerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.setText('');
    textbox.refresh();
    // setup some python lists for storing info about the openanswerClick
    // current position of the mouse:
    openanswerClick.x = [];
    openanswerClick.y = [];
    openanswerClick.leftButton = [];
    openanswerClick.midButton = [];
    openanswerClick.rightButton = [];
    openanswerClick.time = [];
    openanswerClick.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    openAnswerComponents = [];
    openAnswerComponents.push(openPrompt);
    openAnswerComponents.push(textbox);
    openAnswerComponents.push(openanswerEnd);
    openAnswerComponents.push(openanswerClick);
    
    for (const thisComponent of openAnswerComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function openAnswerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'openAnswer' ---
    // get current time
    t = openAnswerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *openPrompt* updates
    if (t >= 0.0 && openPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      openPrompt.tStart = t;  // (not accounting for frame time here)
      openPrompt.frameNStart = frameN;  // exact frame index
      
      openPrompt.setAutoDraw(true);
    }

    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *openanswerEnd* updates
    if (t >= 3 && openanswerEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      openanswerEnd.tStart = t;  // (not accounting for frame time here)
      openanswerEnd.frameNStart = frameN;  // exact frame index
      
      openanswerEnd.setAutoDraw(true);
    }

    // *openanswerClick* updates
    if (t >= 3 && openanswerClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      openanswerClick.tStart = t;  // (not accounting for frame time here)
      openanswerClick.frameNStart = frameN;  // exact frame index
      
      openanswerClick.status = PsychoJS.Status.STARTED;
      openanswerClick.mouseClock.reset();
      prevButtonState = openanswerClick.getPressed();  // if button is down already this ISN'T a new click
      }
    if (openanswerClick.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = openanswerClick.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [openanswerEnd]) {
            if (obj.contains(openanswerClick)) {
              gotValidClick = true;
              openanswerClick.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = openanswerClick.getPos();
          openanswerClick.x.push(_mouseXYs[0]);
          openanswerClick.y.push(_mouseXYs[1]);
          openanswerClick.leftButton.push(_mouseButtons[0]);
          openanswerClick.midButton.push(_mouseButtons[1]);
          openanswerClick.rightButton.push(_mouseButtons[2]);
          openanswerClick.time.push(openanswerClick.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of openAnswerComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function openAnswerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'openAnswer' ---
    for (const thisComponent of openAnswerComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    if (openanswerClick.x) {  psychoJS.experiment.addData('openanswerClick.x', openanswerClick.x[0])};
    if (openanswerClick.y) {  psychoJS.experiment.addData('openanswerClick.y', openanswerClick.y[0])};
    if (openanswerClick.leftButton) {  psychoJS.experiment.addData('openanswerClick.leftButton', openanswerClick.leftButton[0])};
    if (openanswerClick.midButton) {  psychoJS.experiment.addData('openanswerClick.midButton', openanswerClick.midButton[0])};
    if (openanswerClick.rightButton) {  psychoJS.experiment.addData('openanswerClick.rightButton', openanswerClick.rightButton[0])};
    if (openanswerClick.time) {  psychoJS.experiment.addData('openanswerClick.time', openanswerClick.time[0])};
    if (openanswerClick.clicked_name) {  psychoJS.experiment.addData('openanswerClick.clicked_name', openanswerClick.clicked_name[0])};
    
    // the Routine "openAnswer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _exitKey_allKeys;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exitKey.keys = undefined;
    exitKey.rt = undefined;
    _exitKey_allKeys = [];
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debriefText);
    debriefComponents.push(exitMessage);
    debriefComponents.push(exitKey);
    
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefText* updates
    if (t >= 0.0 && debriefText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefText.tStart = t;  // (not accounting for frame time here)
      debriefText.frameNStart = frameN;  // exact frame index
      
      debriefText.setAutoDraw(true);
    }

    
    // *exitMessage* updates
    if (t >= 1 && exitMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exitMessage.tStart = t;  // (not accounting for frame time here)
      exitMessage.frameNStart = frameN;  // exact frame index
      
      exitMessage.setAutoDraw(true);
    }

    
    // *exitKey* updates
    if (t >= 1 && exitKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exitKey.tStart = t;  // (not accounting for frame time here)
      exitKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exitKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exitKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exitKey.clearEvents(); });
    }

    if (exitKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = exitKey.getKeys({keyList: ['tab'], waitRelease: false});
      _exitKey_allKeys = _exitKey_allKeys.concat(theseKeys);
      if (_exitKey_allKeys.length > 0) {
        exitKey.keys = _exitKey_allKeys[_exitKey_allKeys.length - 1].name;  // just the last key pressed
        exitKey.rt = _exitKey_allKeys[_exitKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    for (const thisComponent of debriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(exitKey.corr, level);
    }
    psychoJS.experiment.addData('exitKey.keys', exitKey.keys);
    if (typeof exitKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exitKey.rt', exitKey.rt);
        routineTimer.reset();
        }
    
    exitKey.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
