/**************** 
 * Fluency Test *
 ****************/


// store info about the experiment session:
let expName = 'fluency';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
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
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(general_instrRoutineBegin());
flowScheduler.add(general_instrRoutineEachFrame());
flowScheduler.add(general_instrRoutineEnd());
const instr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instr_loopLoopBegin(instr_loopLoopScheduler));
flowScheduler.add(instr_loopLoopScheduler);
flowScheduler.add(instr_loopLoopEnd);
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
flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/B08_10.jpg', 'path': 'img/B08_10.jpg'},
    {'name': 'img/B09_05.jpg', 'path': 'img/B09_05.jpg'},
    {'name': 'img/B10_10.jpg', 'path': 'img/B10_10.jpg'},
    {'name': 'img/B01_10.jpg', 'path': 'img/B01_10.jpg'},
    {'name': 'img/B02_10.jpg', 'path': 'img/B02_10.jpg'},
    {'name': 'fluency_conditions.xlsx', 'path': 'fluency_conditions.xlsx'},
    {'name': 'img/B05_03.jpg', 'path': 'img/B05_03.jpg'},
    {'name': 'img/B02_03.jpg', 'path': 'img/B02_03.jpg'},
    {'name': 'img/B10_03.jpg', 'path': 'img/B10_03.jpg'},
    {'name': 'img/B02_00.jpg', 'path': 'img/B02_00.jpg'},
    {'name': 'img/B01_07.jpg', 'path': 'img/B01_07.jpg'},
    {'name': 'img/B02_07.jpg', 'path': 'img/B02_07.jpg'},
    {'name': 'img/B04_02.jpg', 'path': 'img/B04_02.jpg'},
    {'name': 'img/B02_04.jpg', 'path': 'img/B02_04.jpg'},
    {'name': 'img/B07_00.jpg', 'path': 'img/B07_00.jpg'},
    {'name': 'img/B10_02.jpg', 'path': 'img/B10_02.jpg'},
    {'name': 'img/B08_05.jpg', 'path': 'img/B08_05.jpg'},
    {'name': 'img/B05_04.jpg', 'path': 'img/B05_04.jpg'},
    {'name': 'img/B06_03.jpg', 'path': 'img/B06_03.jpg'},
    {'name': 'img/B01_06.jpg', 'path': 'img/B01_06.jpg'},
    {'name': 'img/B08_09.jpg', 'path': 'img/B08_09.jpg'},
    {'name': 'img/B06_07.jpg', 'path': 'img/B06_07.jpg'},
    {'name': 'img/B08_01.jpg', 'path': 'img/B08_01.jpg'},
    {'name': 'img/B05_10.jpg', 'path': 'img/B05_10.jpg'},
    {'name': 'img/B08_02.jpg', 'path': 'img/B08_02.jpg'},
    {'name': 'img/B04_08.jpg', 'path': 'img/B04_08.jpg'},
    {'name': 'img/B08_06.jpg', 'path': 'img/B08_06.jpg'},
    {'name': 'img/B07_10.jpg', 'path': 'img/B07_10.jpg'},
    {'name': 'img/B04_09.jpg', 'path': 'img/B04_09.jpg'},
    {'name': 'img/B01_09.jpg', 'path': 'img/B01_09.jpg'},
    {'name': 'img/B05_07.jpg', 'path': 'img/B05_07.jpg'},
    {'name': 'img/B01_01.jpg', 'path': 'img/B01_01.jpg'},
    {'name': 'img/B02_02.jpg', 'path': 'img/B02_02.jpg'},
    {'name': 'img/B08_00.jpg', 'path': 'img/B08_00.jpg'},
    {'name': 'img/B04_07.jpg', 'path': 'img/B04_07.jpg'},
    {'name': 'img/B06_05.jpg', 'path': 'img/B06_05.jpg'},
    {'name': 'img/B05_09.jpg', 'path': 'img/B05_09.jpg'},
    {'name': 'img/B04_04.jpg', 'path': 'img/B04_04.jpg'},
    {'name': 'img/B03_03.jpg', 'path': 'img/B03_03.jpg'},
    {'name': 'img/B07_02.jpg', 'path': 'img/B07_02.jpg'},
    {'name': 'img/B01_05.jpg', 'path': 'img/B01_05.jpg'},
    {'name': 'img/B09_02.jpg', 'path': 'img/B09_02.jpg'},
    {'name': 'img/B09_08.jpg', 'path': 'img/B09_08.jpg'},
    {'name': 'img/B06_10.jpg', 'path': 'img/B06_10.jpg'},
    {'name': 'img/B02_05.jpg', 'path': 'img/B02_05.jpg'},
    {'name': 'img/B03_07.jpg', 'path': 'img/B03_07.jpg'},
    {'name': 'img/B10_01.jpg', 'path': 'img/B10_01.jpg'},
    {'name': 'img/B09_06.jpg', 'path': 'img/B09_06.jpg'},
    {'name': 'img/B01_03.jpg', 'path': 'img/B01_03.jpg'},
    {'name': 'img/B10_09.jpg', 'path': 'img/B10_09.jpg'},
    {'name': 'img/B04_10.jpg', 'path': 'img/B04_10.jpg'},
    {'name': 'img/B09_00.jpg', 'path': 'img/B09_00.jpg'},
    {'name': 'img/B03_10.jpg', 'path': 'img/B03_10.jpg'},
    {'name': 'img/B05_05.jpg', 'path': 'img/B05_05.jpg'},
    {'name': 'img/B09_04.jpg', 'path': 'img/B09_04.jpg'},
    {'name': 'img/B09_10.jpg', 'path': 'img/B09_10.jpg'},
    {'name': 'img/B06_06.jpg', 'path': 'img/B06_06.jpg'},
    {'name': 'img/B07_08.jpg', 'path': 'img/B07_08.jpg'},
    {'name': 'img/B06_04.jpg', 'path': 'img/B06_04.jpg'},
    {'name': 'img/B03_05.jpg', 'path': 'img/B03_05.jpg'},
    {'name': 'img/B07_07.jpg', 'path': 'img/B07_07.jpg'},
    {'name': 'img/B03_06.jpg', 'path': 'img/B03_06.jpg'},
    {'name': 'img/B07_06.jpg', 'path': 'img/B07_06.jpg'},
    {'name': 'img/B07_04.jpg', 'path': 'img/B07_04.jpg'},
    {'name': 'img/B02_01.jpg', 'path': 'img/B02_01.jpg'},
    {'name': 'img/B03_01.jpg', 'path': 'img/B03_01.jpg'},
    {'name': 'img/B05_01.jpg', 'path': 'img/B05_01.jpg'},
    {'name': 'img/B04_00.jpg', 'path': 'img/B04_00.jpg'},
    {'name': 'img/B04_06.jpg', 'path': 'img/B04_06.jpg'},
    {'name': 'img/B10_04.jpg', 'path': 'img/B10_04.jpg'},
    {'name': 'img/B02_09.jpg', 'path': 'img/B02_09.jpg'},
    {'name': 'img/B10_05.jpg', 'path': 'img/B10_05.jpg'},
    {'name': 'img/B08_08.jpg', 'path': 'img/B08_08.jpg'},
    {'name': 'img/B07_01.jpg', 'path': 'img/B07_01.jpg'},
    {'name': 'img/B10_06.jpg', 'path': 'img/B10_06.jpg'},
    {'name': 'img/B03_04.jpg', 'path': 'img/B03_04.jpg'},
    {'name': 'img/B09_09.jpg', 'path': 'img/B09_09.jpg'},
    {'name': 'img/B08_07.jpg', 'path': 'img/B08_07.jpg'},
    {'name': 'img/B10_00.jpg', 'path': 'img/B10_00.jpg'},
    {'name': 'img/B02_06.jpg', 'path': 'img/B02_06.jpg'},
    {'name': 'img/B09_03.jpg', 'path': 'img/B09_03.jpg'},
    {'name': 'img/B07_05.jpg', 'path': 'img/B07_05.jpg'},
    {'name': 'img/B03_02.jpg', 'path': 'img/B03_02.jpg'},
    {'name': 'img/B01_00.jpg', 'path': 'img/B01_00.jpg'},
    {'name': 'img/B03_00.jpg', 'path': 'img/B03_00.jpg'},
    {'name': 'img/B07_03.jpg', 'path': 'img/B07_03.jpg'},
    {'name': 'img/B09_07.jpg', 'path': 'img/B09_07.jpg'},
    {'name': 'img/B03_08.jpg', 'path': 'img/B03_08.jpg'},
    {'name': 'img/B04_01.jpg', 'path': 'img/B04_01.jpg'},
    {'name': 'img/B06_00.jpg', 'path': 'img/B06_00.jpg'},
    {'name': 'img/B10_08.jpg', 'path': 'img/B10_08.jpg'},
    {'name': 'img/B05_00.jpg', 'path': 'img/B05_00.jpg'},
    {'name': 'img/B04_03.jpg', 'path': 'img/B04_03.jpg'},
    {'name': 'img/B06_08.jpg', 'path': 'img/B06_08.jpg'},
    {'name': 'img/B06_02.jpg', 'path': 'img/B06_02.jpg'},
    {'name': 'img/B01_02.jpg', 'path': 'img/B01_02.jpg'},
    {'name': 'img/B01_08.jpg', 'path': 'img/B01_08.jpg'},
    {'name': 'img/B04_05.jpg', 'path': 'img/B04_05.jpg'},
    {'name': 'img/B05_08.jpg', 'path': 'img/B05_08.jpg'},
    {'name': 'img/B09_01.jpg', 'path': 'img/B09_01.jpg'},
    {'name': 'img/B03_09.jpg', 'path': 'img/B03_09.jpg'},
    {'name': 'img/B05_02.jpg', 'path': 'img/B05_02.jpg'},
    {'name': 'img/B05_06.jpg', 'path': 'img/B05_06.jpg'},
    {'name': 'img/B06_09.jpg', 'path': 'img/B06_09.jpg'},
    {'name': 'img/B06_01.jpg', 'path': 'img/B06_01.jpg'},
    {'name': 'img/B02_08.jpg', 'path': 'img/B02_08.jpg'},
    {'name': 'img/B01_04.jpg', 'path': 'img/B01_04.jpg'},
    {'name': 'img/B10_07.jpg', 'path': 'img/B10_07.jpg'},
    {'name': 'img/B07_09.jpg', 'path': 'img/B07_09.jpg'},
    {'name': 'img/B08_04.jpg', 'path': 'img/B08_04.jpg'},
    {'name': 'img/B08_03.jpg', 'path': 'img/B08_03.jpg'}
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
var welc_advance;
var consentClock;
var consentText;
var iAgree;
var consentClick;
var general_instrClock;
var genInstr;
var instr_advance;
var selected_rows;
var specific_instrClock;
var specific_instructions;
var fixCross_3;
var spec_instr_adv;
var definition;
var fixationClock;
var fixCross;
var trialClock;
var key_resp;
var respIndicator;
var face_image;
var redo_feedbackClock;
var out_of_time_2;
var redo_keypress;
var rating_scaleClock;
var attractiveness_slider;
var attractiveness_instr;
var contClock;
var contPrompt;
var fixCross_2;
var reminder;
var contResp;
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
var respQ5;
var respQ6;
var respQ7;
var respQ8;
var nextButton1;
var nextClick1;
var ambiguity2Clock;
var qsInstr_2;
var questions2;
var respQ9;
var respQ10;
var respQ11;
var respQ12;
var respQ13;
var respQ14;
var respQ15;
var respQ16;
var nextButton2;
var nextClick2;
var byeClock;
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
    text: 'Welcome to the study! Please make sure you are in a quiet environment where you will be able to concentrate on the task. Before we begin, you must review the consent form on the following screen. \n\nPress the SPACE BAR whenever you are ready.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  welc_advance = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consentText = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentText',
    text: 'This form will give you information about the study so you can decide about participating in the research. This study is an investigation of visual perception and categorization. The session will last between 20 and 60 minutes in total. You will receive compensation at a rate of 8 per hour for your time. If you are interested in learning more about this study, we will inform you of our hypotheses immediately after you complete the study. We will not contact you again after you complete the study, although you are free to contact us at any time if you have any additional questions or concerns, or if you would like to learn the outcome of this study.\n\nYou can reach the principal investigator, Jeffrey Starns at jstarns@umass.edu or the Psychological and Brain Sciences Department Chair via Laura Wildman Hanlon at (413) 545-2387 or laurawh@umass.edu. If you have any questions concerning your rights as a research subject, you may contact the University of Massachusetts Amherst Human Research Protection Office (HRPO) at (413) 545-3428 or humansubjects@ora.umass.edu.\n\nPURPOSE: In this study, you will view a sequence of images (abstract shapes, objects, faces, or scenes) about which you will be asked to answer questions. The questions will relate either to perception (e.g., "Is this item part of group A or B?), or to your feelings about the item (e.g., "How attractive is the item?"). Your responses will be made by using your computer keyboard. The material will be either abstract shapes with no particular meaning, or everyday objects, faces, or scenes that are not offensive or provocative. You may also be asked to fill out short questionnaires after the main task. The questionnaires will consist of series of statements to which you will rate your agreement to on a numbered scale. The statements will not be offensive in nature.\n\nWe are not interested in how you perform individually, but whether people in general are able to visually identify or discriminate the images presented more effectively in some conditions than in others. The pattern of results will allow us to determine the processes that people use to identify and discriminate between objects, faces and scenes, and how they respond to them afterwards.\nRISKS: There are no expected risks to this study beyond the potential that you may become tired and/or bored with the task. To reduce the possibility that this will occur, the task will be self-paced (you may take breaks when needed). Loss of confidentiality is a risk (i.e., someone may inadvertently gain access to our records).\n\nAt the conclusion of this study, we may publish the results of this study in a scientific journal. Information will be presented in summary format and you will not be identified in any publications or presentations (in fact, we will no longer be able to determine which data files is yours). The data files containing your keyboard responses will be kept for a minimum of 6 years beyond publication of this study. After publication, we may share your data files with other researchers who may wish to re-analyze the results. However, there will no longer be any record of your identity at that time. This disclosure of the data is purely for scientific purposes.\n\nBENEFITS: You may not directly benefit from this research; however, we hope that your participation will provide some educational benefit by experiencing the nature of behavioral research on visual perception and categorization. For this reason, we encourage you to speak with the researcher after conclusion of your participation so that you can learn more about the design and hypotheses of this study. In addition, these results may benefit society in a number of ways, such as by increasing our understanding of how the process of categorization affects the perception of objects.\n\nPARTICIPATION: Your participation in the experiment is voluntary and you can withdraw at any time without penalty. You will still get payment for the time you have spent participating. You do not have to be in this study if you do not want to. If you agree to be in the study, but later change your mind, you may drop out at any time. There are no penalties or consequences of any kind if you decide that you do not want to participate. If you decide to withdraw during today\'s session, you will still receive 2 dollars per 15 minutes of participation, rounded up to the nearest 15 minutes.\n\nSUBJECT STATEMENT OF CONSENT: By clicking “I agree” I am indicating that I am eligible for this study and am agreeing to voluntarily enter this study. I have had a chance to read this consent form, and it was explained to me in a language which I use and understand. I understand that I can withdraw at any time.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.02,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  iAgree = new visual.TextStim({
    win: psychoJS.window,
    name: 'iAgree',
    text: 'I Agree',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.425)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consentClick = new core.Mouse({
    win: psychoJS.window,
  });
  consentClick.mouseClock = new util.Clock();
  // Initialize components for Routine "general_instr"
  general_instrClock = new util.Clock();
  genInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'genInstr',
    text: 'Thank you for participating! This experiment has two parts: \n\nIn the first half, you will complete a series of trials in which you will look at the middle of the screen and respond to a photo of a face as soon as it appears. The length of time before the face appears is random, so stay alert! After that, you will rate how attractive the face had been.\n\nIn the second half, you will answer a series of questions about yourself. Your inputs in both halves of the experiment are fully confidential.\n\nPress the SPACE BAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_advance = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from condSelect
  selected_rows = util.range(((expInfo["participant"] % 8) * 110), (((expInfo["participant"] % 8) + 1) * 110));
  
  // Initialize components for Routine "specific_instr"
  specific_instrClock = new util.Clock();
  specific_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'specific_instructions',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.0425,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixCross_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixCross_3',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spec_instr_adv = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  definition = new visual.TextStim({
    win: psychoJS.window,
    name: 'definition',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.0425,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
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
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  // Initialize components for Routine "redo_feedback"
  redo_feedbackClock = new util.Clock();
  out_of_time_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'out_of_time_2',
    text: 'Oops, out of time! Remember to respond as soon as you see a face - you will need to re-try this trial.\n\nPress SPACE to try again.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  redo_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "rating_scale"
  rating_scaleClock = new util.Clock();
  attractiveness_slider = new visual.Slider({
    win: psychoJS.window, name: 'attractiveness_slider',
    startValue: undefined,
    size: [1.0, 0.05], pos: [0, (- 0.1)], ori: 0.0, units: 'height',
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  attractiveness_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'attractiveness_instr',
    text: 'Rate the attractiveness of the face you just saw on this scale from 1 (not attractive) to 9 (very attractive).',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "cont"
  contClock = new util.Clock();
  contPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'contPrompt',
    text: 'Well done! Remember:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.045,  wrapWidth: undefined, ori: 0.0,
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
    pos: [0, (- 0.15)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  contResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "intro2Questions"
  intro2QuestionsClock = new util.Clock();
  qsIntro = new visual.TextStim({
    win: psychoJS.window,
    name: 'qsIntro',
    text: 'Good work! You have finished the first part of the study. Now you need to answers a set of questions for us; please do your best to do so honestly.\n\nPress the SPACE BAR to continue when you are ready.',
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
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions1',
    text: "1. An expert who doesn't come up with a definite answer probably doesn't know too much\n\n\n2. There is really no such thing as a problem that can't be solved\n\n\n3. A good job is one where what is to be done and how it is to be done are always clear.\n\n\n4. In the long run it is possible to get more done by tackling small, simple problems rather than large and complicated ones\n\n\n5. What we are used to is always preferable to what is unfamiliar\n\n\n6. A person who leads an even, regular life in which few surprises or unexpected happenings really has a lot to be grateful for\n\n\n7. I like parties where I know most of the people more than ones where all or most of the people are complete strangers\n\n\n8. The sooner we all acquire similar values and ideals the better.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.01], height: 0.025,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ1 = new visual.Slider({
    win: psychoJS.window, name: 'respQ1',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.2675], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ2 = new visual.Slider({
    win: psychoJS.window, name: 'respQ2',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.185], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ3 = new visual.Slider({
    win: psychoJS.window, name: 'respQ3',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.11], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ4 = new visual.Slider({
    win: psychoJS.window, name: 'respQ4',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.0285], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  respQ5 = new visual.Slider({
    win: psychoJS.window, name: 'respQ5',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.055)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  respQ6 = new visual.Slider({
    win: psychoJS.window, name: 'respQ6',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.145)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  respQ7 = new visual.Slider({
    win: psychoJS.window, name: 'respQ7',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.225)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  respQ8 = new visual.Slider({
    win: psychoJS.window, name: 'respQ8',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.315)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  nextButton1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton1',
    text: 'NEXT',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.375)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
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
    text: ' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.03,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions2',
    text: "9. I would like to live in a foreign country for a while\n\n\n10. People who fit their lives to a schedule probably miss most of the joy of living\n\n\n11. It is more fun to tackle a complicated problem than to solve a simple one\n\n\n12. Often the most interesting and stimulating people are those who don't mind being different and original\n\n\n13. People who insist upon a yes or no answer just don't know how complicated things really are\n\n\n14. Many of our most important decisions are based upon insufficient information\n\n\n15. Teachers or supervisors who hand out vague assignments give a chance for one to show initiative and originality\n\n\n16. A good teacher is one who makes you wonder about your way of looking at things",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.01], height: 0.025,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  respQ9 = new visual.Slider({
    win: psychoJS.window, name: 'respQ9',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.2675], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  respQ10 = new visual.Slider({
    win: psychoJS.window, name: 'respQ10',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.185], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  respQ11 = new visual.Slider({
    win: psychoJS.window, name: 'respQ11',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.11], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  respQ12 = new visual.Slider({
    win: psychoJS.window, name: 'respQ12',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, 0.0285], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  respQ13 = new visual.Slider({
    win: psychoJS.window, name: 'respQ13',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.055)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  respQ14 = new visual.Slider({
    win: psychoJS.window, name: 'respQ14',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.145)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  respQ15 = new visual.Slider({
    win: psychoJS.window, name: 'respQ15',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.225)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  respQ16 = new visual.Slider({
    win: psychoJS.window, name: 'respQ16',
    startValue: undefined,
    size: [0.9, 0.015], pos: [0, (- 0.315)], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  nextButton2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton2',
    text: 'NEXT',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.375)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  nextClick2 = new core.Mouse({
    win: psychoJS.window,
  });
  nextClick2.mouseClock = new util.Clock();
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  exitMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'exitMessage',
    text: 'Thanks again for participating in the study! You can now exit this routine by pressing the TAB KEY.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
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
    helloComponents.push(welc_advance);
    
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *welc_advance* updates
    if (t >= 0.0 && welc_advance.status === PsychoJS.Status.NOT_STARTED) {
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
    helloComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    helloComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var gotValidClick;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
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
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consentText);
    consentComponents.push(iAgree);
    consentComponents.push(consentClick);
    
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentText* updates
    if (t >= 0.0 && consentText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText.tStart = t;  // (not accounting for frame time here)
      consentText.frameNStart = frameN;  // exact frame index
      
      consentText.setAutoDraw(true);
    }

    
    // *iAgree* updates
    if (t >= 0.0 && iAgree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iAgree.tStart = t;  // (not accounting for frame time here)
      iAgree.frameNStart = frameN;  // exact frame index
      
      iAgree.setAutoDraw(true);
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
    consentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    consentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (consentClick.x) {  psychoJS.experiment.addData('consentClick.x', consentClick.x[0])};
    if (consentClick.y) {  psychoJS.experiment.addData('consentClick.y', consentClick.y[0])};
    if (consentClick.leftButton) {  psychoJS.experiment.addData('consentClick.leftButton', consentClick.leftButton[0])};
    if (consentClick.midButton) {  psychoJS.experiment.addData('consentClick.midButton', consentClick.midButton[0])};
    if (consentClick.rightButton) {  psychoJS.experiment.addData('consentClick.rightButton', consentClick.rightButton[0])};
    if (consentClick.time) {  psychoJS.experiment.addData('consentClick.time', consentClick.time[0])};
    if (consentClick.clicked_name) {  psychoJS.experiment.addData('consentClick.clicked_name', consentClick.clicked_name[0])};
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _instr_advance_allKeys;
var general_instrComponents;
function general_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'general_instr' ---
    t = 0;
    general_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_advance.keys = undefined;
    instr_advance.rt = undefined;
    _instr_advance_allKeys = [];
    // keep track of which components have finished
    general_instrComponents = [];
    general_instrComponents.push(genInstr);
    general_instrComponents.push(instr_advance);
    
    general_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function general_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'general_instr' ---
    // get current time
    t = general_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *genInstr* updates
    if (t >= 0.0 && genInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      genInstr.tStart = t;  // (not accounting for frame time here)
      genInstr.frameNStart = frameN;  // exact frame index
      
      genInstr.setAutoDraw(true);
    }

    
    // *instr_advance* updates
    if (t >= 0.0 && instr_advance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_advance.tStart = t;  // (not accounting for frame time here)
      instr_advance.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_advance.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_advance.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_advance.clearEvents(); });
    }

    if (instr_advance.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_advance.getKeys({keyList: ['space'], waitRelease: false});
      _instr_advance_allKeys = _instr_advance_allKeys.concat(theseKeys);
      if (_instr_advance_allKeys.length > 0) {
        instr_advance.keys = _instr_advance_allKeys[_instr_advance_allKeys.length - 1].name;  // just the last key pressed
        instr_advance.rt = _instr_advance_allKeys[_instr_advance_allKeys.length - 1].rt;
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
    general_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function general_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'general_instr' ---
    general_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_advance.corr, level);
    }
    psychoJS.experiment.addData('instr_advance.keys', instr_advance.keys);
    if (typeof instr_advance.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_advance.rt', instr_advance.rt);
        routineTimer.reset();
        }
    
    instr_advance.stop();
    // the Routine "general_instr" was not non-slip safe, so reset the non-slip timer
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
    instr_loop.forEach(function() {
      snapshot = instr_loop.getSnapshot();
    
      instr_loopLoopScheduler.add(importConditions(snapshot));
      instr_loopLoopScheduler.add(specific_instrRoutineBegin(snapshot));
      instr_loopLoopScheduler.add(specific_instrRoutineEachFrame());
      instr_loopLoopScheduler.add(specific_instrRoutineEnd(snapshot));
      instr_loopLoopScheduler.add(instr_loopLoopEndIteration(instr_loopLoopScheduler, snapshot));
    });
    
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
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      const repeat_loopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(repeat_loopLoopBegin(repeat_loopLoopScheduler, snapshot));
      trialsLoopScheduler.add(repeat_loopLoopScheduler);
      trialsLoopScheduler.add(repeat_loopLoopEnd);
      trialsLoopScheduler.add(rating_scaleRoutineBegin(snapshot));
      trialsLoopScheduler.add(rating_scaleRoutineEachFrame());
      trialsLoopScheduler.add(rating_scaleRoutineEnd(snapshot));
      trialsLoopScheduler.add(contRoutineBegin(snapshot));
      trialsLoopScheduler.add(contRoutineEachFrame());
      trialsLoopScheduler.add(contRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
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
    repeat_loop.forEach(function() {
      snapshot = repeat_loop.getSnapshot();
    
      repeat_loopLoopScheduler.add(importConditions(snapshot));
      repeat_loopLoopScheduler.add(fixationRoutineBegin(snapshot));
      repeat_loopLoopScheduler.add(fixationRoutineEachFrame());
      repeat_loopLoopScheduler.add(fixationRoutineEnd(snapshot));
      repeat_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      repeat_loopLoopScheduler.add(trialRoutineEachFrame());
      repeat_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      const redo_feedback_loopLoopScheduler = new Scheduler(psychoJS);
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopBegin(redo_feedback_loopLoopScheduler, snapshot));
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopScheduler);
      repeat_loopLoopScheduler.add(redo_feedback_loopLoopEnd);
      repeat_loopLoopScheduler.add(repeat_loopLoopEndIteration(repeat_loopLoopScheduler, snapshot));
    });
    
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
    redo_feedback_loop.forEach(function() {
      snapshot = redo_feedback_loop.getSnapshot();
    
      redo_feedback_loopLoopScheduler.add(importConditions(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineBegin(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineEachFrame());
      redo_feedback_loopLoopScheduler.add(redo_feedbackRoutineEnd(snapshot));
      redo_feedback_loopLoopScheduler.add(redo_feedback_loopLoopEndIteration(redo_feedback_loopLoopScheduler, snapshot));
    });
    
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
    specific_instructions.setText((instr + ". A green frame around the image will show that your response was registered. Keep your eyes on the middle of the screen (as marked by the +) during the task. Press the SPACE BAR to begin when you are ready."));
    spec_instr_adv.keys = undefined;
    spec_instr_adv.rt = undefined;
    _spec_instr_adv_allKeys = [];
    definition.setText(term);
    // keep track of which components have finished
    specific_instrComponents = [];
    specific_instrComponents.push(specific_instructions);
    specific_instrComponents.push(fixCross_3);
    specific_instrComponents.push(spec_instr_adv);
    specific_instrComponents.push(definition);
    
    specific_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *specific_instructions* updates
    if (t >= 0.0 && specific_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      specific_instructions.tStart = t;  // (not accounting for frame time here)
      specific_instructions.frameNStart = frameN;  // exact frame index
      
      specific_instructions.setAutoDraw(true);
    }

    
    // *fixCross_3* updates
    if (t >= 0.0 && fixCross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixCross_3.tStart = t;  // (not accounting for frame time here)
      fixCross_3.frameNStart = frameN;  // exact frame index
      
      fixCross_3.setAutoDraw(true);
    }

    
    // *spec_instr_adv* updates
    if (t >= 0.0 && spec_instr_adv.status === PsychoJS.Status.NOT_STARTED) {
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
    
    
    // *definition* updates
    if (t >= 0.0 && definition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      definition.tStart = t;  // (not accounting for frame time here)
      definition.frameNStart = frameN;  // exact frame index
      
      definition.setAutoDraw(true);
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
    specific_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    specific_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    // Run 'End Routine' code from isInstrDone
    instr_loop.finished = true;
    psychoJS.eventManager.getKeys();
    
    // the Routine "specific_instr" was not non-slip safe, so reset the non-slip timer
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
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var redo;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    face_image.setImage(face_file);
    // Run 'Begin Routine' code from respCheck
    redo = 0;
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp);
    trialComponents.push(respIndicator);
    trialComponents.push(face_image);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['d', 'k'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
      }
    }
    
    
    // *respIndicator* updates
    if ((key_resp.keys) && respIndicator.status === PsychoJS.Status.NOT_STARTED) {
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
    if ((t > 1.999)) {
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
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
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
        if ((_pj.in_es6("k", keys) || _pj.in_es6("d", keys))) {
            repeat_loop.finished = true;
            redo = 0;
        } else {
            redo = 1;
        }
    } else {
        redo = 1;
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
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
    redo_keypress.keys = undefined;
    redo_keypress.rt = undefined;
    _redo_keypress_allKeys = [];
    // keep track of which components have finished
    redo_feedbackComponents = [];
    redo_feedbackComponents.push(out_of_time_2);
    redo_feedbackComponents.push(redo_keypress);
    
    redo_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    if (t >= 0.0 && out_of_time_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      out_of_time_2.tStart = t;  // (not accounting for frame time here)
      out_of_time_2.frameNStart = frameN;  // exact frame index
      
      out_of_time_2.setAutoDraw(true);
    }

    
    // *redo_keypress* updates
    if (t >= 0.0 && redo_keypress.status === PsychoJS.Status.NOT_STARTED) {
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
    redo_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    redo_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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


var rating_scaleComponents;
function rating_scaleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rating_scale' ---
    t = 0;
    rating_scaleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    attractiveness_slider.reset()
    // keep track of which components have finished
    rating_scaleComponents = [];
    rating_scaleComponents.push(attractiveness_slider);
    rating_scaleComponents.push(attractiveness_instr);
    
    rating_scaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rating_scaleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rating_scale' ---
    // get current time
    t = rating_scaleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attractiveness_slider* updates
    if (t >= 0.0 && attractiveness_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attractiveness_slider.tStart = t;  // (not accounting for frame time here)
      attractiveness_slider.frameNStart = frameN;  // exact frame index
      
      attractiveness_slider.setAutoDraw(true);
    }

    
    // Check attractiveness_slider for response to end routine
    if (attractiveness_slider.getRating() !== undefined && attractiveness_slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *attractiveness_instr* updates
    if (t >= 0.0 && attractiveness_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attractiveness_instr.tStart = t;  // (not accounting for frame time here)
      attractiveness_instr.frameNStart = frameN;  // exact frame index
      
      attractiveness_instr.setAutoDraw(true);
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
    rating_scaleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rating_scaleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rating_scale' ---
    rating_scaleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('attractiveness_slider.response', attractiveness_slider.getRating());
    psychoJS.experiment.addData('attractiveness_slider.rt', attractiveness_slider.getRT());
    // the Routine "rating_scale" was not non-slip safe, so reset the non-slip timer
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
    reminder.setText((instr + ". Look at the middle of the screen and press the SPACE BAR to move onto the next trial."));
    contResp.keys = undefined;
    contResp.rt = undefined;
    _contResp_allKeys = [];
    // keep track of which components have finished
    contComponents = [];
    contComponents.push(contPrompt);
    contComponents.push(fixCross_2);
    contComponents.push(reminder);
    contComponents.push(contResp);
    
    contComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    // *contPrompt* updates
    if (t >= 0.0 && contPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contPrompt.tStart = t;  // (not accounting for frame time here)
      contPrompt.frameNStart = frameN;  // exact frame index
      
      contPrompt.setAutoDraw(true);
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
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    contComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    contComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    intro2QuestionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    intro2QuestionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    intro2QuestionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    respQ5.reset()
    respQ6.reset()
    respQ7.reset()
    respQ8.reset()
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
    ambiguity1Components.push(respQ5);
    ambiguity1Components.push(respQ6);
    ambiguity1Components.push(respQ7);
    ambiguity1Components.push(respQ8);
    ambiguity1Components.push(nextButton1);
    ambiguity1Components.push(nextClick1);
    
    ambiguity1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *nextButton1* updates
    if (((((((((respQ1.rating && respQ2.rating) && respQ3.rating) && respQ4.rating) && respQ5.rating) && respQ6.rating) && respQ7.rating) && respQ8.rating)) && nextButton1.status === PsychoJS.Status.NOT_STARTED) {
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
    ambiguity1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    ambiguity1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('respQ1.response', respQ1.getRating());
    psychoJS.experiment.addData('respQ1.rt', respQ1.getRT());
    psychoJS.experiment.addData('respQ2.response', respQ2.getRating());
    psychoJS.experiment.addData('respQ2.rt', respQ2.getRT());
    psychoJS.experiment.addData('respQ3.response', respQ3.getRating());
    psychoJS.experiment.addData('respQ3.rt', respQ3.getRT());
    psychoJS.experiment.addData('respQ4.response', respQ4.getRating());
    psychoJS.experiment.addData('respQ4.rt', respQ4.getRT());
    psychoJS.experiment.addData('respQ5.response', respQ5.getRating());
    psychoJS.experiment.addData('respQ5.rt', respQ5.getRT());
    psychoJS.experiment.addData('respQ6.response', respQ6.getRating());
    psychoJS.experiment.addData('respQ6.rt', respQ6.getRT());
    psychoJS.experiment.addData('respQ7.response', respQ7.getRating());
    psychoJS.experiment.addData('respQ7.rt', respQ7.getRT());
    psychoJS.experiment.addData('respQ8.response', respQ8.getRating());
    psychoJS.experiment.addData('respQ8.rt', respQ8.getRT());
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
    respQ9.reset()
    respQ10.reset()
    respQ11.reset()
    respQ12.reset()
    respQ13.reset()
    respQ14.reset()
    respQ15.reset()
    respQ16.reset()
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
    ambiguity2Components.push(respQ9);
    ambiguity2Components.push(respQ10);
    ambiguity2Components.push(respQ11);
    ambiguity2Components.push(respQ12);
    ambiguity2Components.push(respQ13);
    ambiguity2Components.push(respQ14);
    ambiguity2Components.push(respQ15);
    ambiguity2Components.push(respQ16);
    ambiguity2Components.push(nextButton2);
    ambiguity2Components.push(nextClick2);
    
    ambiguity2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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

    
    // *nextButton2* updates
    if (((((((((respQ9.rating && respQ10.rating) && respQ11.rating) && respQ12.rating) && respQ13.rating) && respQ14.rating) && respQ15.rating) && respQ16.rating)) && nextButton2.status === PsychoJS.Status.NOT_STARTED) {
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
    ambiguity2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    ambiguity2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('respQ9.response', respQ9.getRating());
    psychoJS.experiment.addData('respQ9.rt', respQ9.getRT());
    psychoJS.experiment.addData('respQ10.response', respQ10.getRating());
    psychoJS.experiment.addData('respQ10.rt', respQ10.getRT());
    psychoJS.experiment.addData('respQ11.response', respQ11.getRating());
    psychoJS.experiment.addData('respQ11.rt', respQ11.getRT());
    psychoJS.experiment.addData('respQ12.response', respQ12.getRating());
    psychoJS.experiment.addData('respQ12.rt', respQ12.getRT());
    psychoJS.experiment.addData('respQ13.response', respQ13.getRating());
    psychoJS.experiment.addData('respQ13.rt', respQ13.getRT());
    psychoJS.experiment.addData('respQ14.response', respQ14.getRating());
    psychoJS.experiment.addData('respQ14.rt', respQ14.getRT());
    psychoJS.experiment.addData('respQ15.response', respQ15.getRating());
    psychoJS.experiment.addData('respQ15.rt', respQ15.getRT());
    psychoJS.experiment.addData('respQ16.response', respQ16.getRating());
    psychoJS.experiment.addData('respQ16.rt', respQ16.getRT());
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


var _exitKey_allKeys;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    byeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    exitKey.keys = undefined;
    exitKey.rt = undefined;
    _exitKey_allKeys = [];
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(exitMessage);
    byeComponents.push(exitKey);
    
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exitMessage* updates
    if (t >= 0.0 && exitMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exitMessage.tStart = t;  // (not accounting for frame time here)
      exitMessage.frameNStart = frameN;  // exact frame index
      
      exitMessage.setAutoDraw(true);
    }

    
    // *exitKey* updates
    if (t >= 0.0 && exitKey.status === PsychoJS.Status.NOT_STARTED) {
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
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    byeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    // the Routine "bye" was not non-slip safe, so reset the non-slip timer
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
