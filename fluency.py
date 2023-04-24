#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on April 21, 2023, at 10:44
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'fluency'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(200, 9999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\marni\\OneDrive\\Desktop\\fluency-master\\fluency.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "hello" ---
welcome = visual.TextStim(win=win, name='welcome',
    text='Welcome to the study! Please make sure you are in a quiet environment where you will be able to concentrate on the task. Before we begin, you must review the consent form on the following three screens. ',
    font='Open Sans',
    pos=(0, 0.1), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
introCont1 = visual.TextStim(win=win, name='introCont1',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
welc_advance = keyboard.Keyboard()

# --- Initialize components for Routine "consent1" ---
consentText_1 = visual.TextStim(win=win, name='consentText_1',
    text='This form will give you information about the study so you can decide about participating in the research. This study is an investigation of visual perception and categorization. The session will last between 20 and 60 minutes in total. You will receive compensation at a rate of 8 dollars per hour for your time. If you are interested in learning more about this study, we will inform you of our hypotheses immediately after you complete the study. We will not contact you again after you complete the study, although you are free to contact us at any time if you have any additional questions or concerns, or if you would like to learn the outcome of this study.\n\nYou can reach the principal investigator, Jeffrey Starns at jstarns@umass.edu or the Psychological and Brain Sciences Department Chair via Laura Wildman Hanlon at (413) 545-2387 or laurawh@umass.edu. If you have any questions concerning your rights as a research subject, you may contact the University of Massachusetts Amherst Human Research Protection Office (HRPO) at (413) 545-3428 or humansubjects@ora.umass.edu.\n\nPURPOSE: In this study, you will view a sequence of images (abstract shapes, objects, faces, or scenes) about which you will be asked to answer questions. The questions will relate either to perception (e.g., "Is this item part of group A or B?), or to your feelings about the item (e.g., "How attractive is the item?"). Your responses will be made by using your computer keyboard. The material will be either abstract shapes with no particular meaning, or everyday objects, faces, or scenes that are not offensive or provocative. You may also be asked to fill out short questionnaires after the main task. The questionnaires will consist of series of statements to which you will rate your agreement to on a numbered scale. The statements will not be offensive in nature.',
    font='Open Sans',
    pos=(0, 0.1), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
introCont2 = visual.TextStim(win=win, name='introCont2',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -.35), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
consent_advance = keyboard.Keyboard()

# --- Initialize components for Routine "consent2" ---
consentText_2 = visual.TextStim(win=win, name='consentText_2',
    text='We are not interested in how you perform individually, but whether people in general are able to visually identify or discriminate the images presented more effectively in some conditions than in others. The pattern of results will allow us to determine the processes that people use to identify and discriminate between objects, faces and scenes, and how they respond to them afterwards.\n\nRISKS: There are no expected risks to this study beyond the potential that you may become tired and/or bored with the task. To reduce the possibility that this will occur, the task will be self-paced (you may take breaks when needed). Loss of confidentiality is a risk (i.e., someone may inadvertently gain access to our records).\n\nAt the conclusion of this study, we may publish the results of this study in a scientific journal. Information will be presented in summary format and you will not be identified in any publications or presentations (in fact, we will no longer be able to determine which data files is yours). The data files containing your keyboard responses will be kept for a minimum of 6 years beyond publication of this study. After publication, we may share your data files with other researchers who may wish to re-analyze the results. However, there will no longer be any record of your identity at that time. This disclosure of the data is purely for scientific purposes.\n\nBENEFITS: You may not directly benefit from this research; however, we hope that your participation will provide some educational benefit by experiencing the nature of behavioral research on visual perception and categorization. For this reason, we encourage you to speak with the researcher after conclusion of your participation so that you can learn more about the design and hypotheses of this study. In addition, these results may benefit society in a number of ways, such as by increasing our understanding of how the process of categorization affects the perception of objects.',
    font='Open Sans',
    pos=(0, 0.05), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
introCont3 = visual.TextStim(win=win, name='introCont3',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -.35), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
consent_advance_2 = keyboard.Keyboard()

# --- Initialize components for Routine "consent3" ---
consentText_3 = visual.TextStim(win=win, name='consentText_3',
    text="PARTICIPATION: Your participation in the experiment is voluntary and you can withdraw at any time without penalty. You will still get payment for the time you have spent participating. You do not have to be in this study if you do not want to. If you agree to be in the study, but later change your mind, you may drop out at any time by pressing the Escape key twice. There are no penalties or consequences of any kind if you decide that you do not want to participate. If you decide to withdraw during today's session, you will still receive 2 dollars per 15 minutes of participation, rounded up to the nearest 15 minutes.\n\nSUBJECT STATEMENT OF CONSENT: By clicking “I agree” I am indicating that I am eligible for this study and am agreeing to voluntarily enter this study. I have had a chance to read this consent form, and it was explained to me in a language which I use and understand. I understand that I can withdraw at any time.",
    font='Open Sans',
    pos=(0, 0.1), height=0.04, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
iAgree = visual.TextStim(win=win, name='iAgree',
    text='I agree \n(click to continue experiment)',
    font='Open Sans',
    pos=(0.3, -0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
iQuit = visual.TextStim(win=win, name='iQuit',
    text='I do not agree \n(click to exit experiment)',
    font='Open Sans',
    pos=(-0.3, -0.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
consentClick = event.Mouse(win=win)
x, y = [None, None]
consentClick.mouseClock = core.Clock()
quitClick = event.Mouse(win=win)
x, y = [None, None]
quitClick.mouseClock = core.Clock()

# --- Initialize components for Routine "instrStart" ---
genInstr1 = visual.TextStim(win=win, name='genInstr1',
    text='We will now explain the task. You will need to accurately answer questions about the task, so be sure to pay attention! This experiment has two phases. Your input in both phases of the experiment are fully confidential.\n\nIn the first phase, you will complete a series of trials in which a face appears on-screen and you use your keyboard to respond to it. After that, you will rate the face on a scale.\n\nIn the second phase, you will complete a short questionnaire. ',
    font='Open Sans',
    pos=(0, 0.05), height=0.045, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
IntroCont4 = visual.TextStim(win=win, name='IntroCont4',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.3), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
instr_advance_3 = keyboard.Keyboard()
# Run 'Begin Experiment' code from condSelect
#Use if-else flow to choose rows from the main
#file. These rows should be python "lists". 

#I find the easiest way to use the participant number
#for this purpose. 
#use the modulo operator (%) to cycle through

#this line selects the condition based on the number of the participant
#selected_rows = range((expInfo['participant']%110)*2,(expInfo['participant']%110+1)*2)

# selects 110 trials of given condition based on number of participants
#selected_rows = range((expInfo['participant']%8)*110,(expInfo['participant']%8+1)*110)

selected_rows=[2,3]

# --- Initialize components for Routine "specific_instr" ---
genInstr2 = visual.TextStim(win=win, name='genInstr2',
    text='At the start of each trial, you will be looking at the middle of the screen (marked by a +). After a short time, a face will appear and you will respond within 2 seconds. The length of time before the face appears is random, so stay alert! To respond:',
    font='Open Sans',
    pos=(0, 0.15), height=0.045, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
specific_instructions = visual.TextStim(win=win, name='specific_instructions',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.0425, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
definition = visual.TextStim(win=win, name='definition',
    text='',
    font='Open Sans',
    pos=(0,-0.1), height=0.0425, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
IntroCont5 = visual.TextStim(win=win, name='IntroCont5',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.3), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
spec_instr_adv = keyboard.Keyboard()

# --- Initialize components for Routine "rateInstr" ---
ratingInstr = visual.TextStim(win=win, name='ratingInstr',
    text='Once the face is gone, you will rate it on a numeric scale going from 1 (not attractive) to 9 (very attractive), also using your keyboard.\n\nBy "attractive", we simply mean how pleasant the face was to see.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
spec_instr_adv2 = keyboard.Keyboard()
IntroCont6 = visual.TextStim(win=win, name='IntroCont6',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "general_instr2" ---
genInstr_2 = visual.TextStim(win=win, name='genInstr_2',
    text='This experiment has two phases. Your inputs in both phases of the experiment are fully confidential.\n\nIn the first phase, you will complete a series of trials in which a face appears onscreen and you use your keyboard to respond to it. After that, you will rate the face on a scale.\n\nIn the second phase, you will complete a short questionnare.',
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instr_advance_2 = keyboard.Keyboard()
IntroCont7 = visual.TextStim(win=win, name='IntroCont7',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.25), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "specific_instr2" ---
specific_instructions_2 = visual.TextStim(win=win, name='specific_instructions_2',
    text='',
    font='Open Sans',
    pos=(0, .15), height=0.0425, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
definition_2 = visual.TextStim(win=win, name='definition_2',
    text='',
    font='Open Sans',
    pos=(0,-.1), height=0.0425, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
spec_instr_adv_2 = keyboard.Keyboard()
IntroCont8 = visual.TextStim(win=win, name='IntroCont8',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.25), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "rateInstr2" ---
ratingInstr_2 = visual.TextStim(win=win, name='ratingInstr_2',
    text='Once the face is gone, you will rate it on a numeric scale going from 1 (not attractive) to 9 (very attractive), also using your keyboard.\n\nBy "attractive", we simply mean how pleasant the face was to see.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.35, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
rate_instr_adv2 = keyboard.Keyboard()
IntroCont9 = visual.TextStim(win=win, name='IntroCont9',
    text='Press the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "attnCheck1" ---
attnQuestion1 = visual.TextStim(win=win, name='attnQuestion1',
    text='Use your keyboard to answer the following question:\n\nWhat will appear at the start of each trial?\n\na) a house\n\nb) a bird\n\nc) a face',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
attnKeyResp1 = keyboard.Keyboard()

# --- Initialize components for Routine "attnCheck2" ---
attnQuestion2 = visual.TextStim(win=win, name='attnQuestion2',
    text='Use your keyboard to answer the following question:\n\nWhich keys will you use to respond to the face?\n\na) J or K\n\nb) F or C\n\nc) A or D',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
attnKeyResp2 = keyboard.Keyboard()

# --- Initialize components for Routine "attnCheck3" ---
attnQuestion3 = visual.TextStim(win=win, name='attnQuestion3',
    text='Use your keyboard to answer the following question:\n\nWhat will you rate afterwards?\n\na) the face, based on familiarity\n\nb) this experiment, based on excitement\n\nc) the face, based on attractiveness',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
attnKeyResp3 = keyboard.Keyboard()

# --- Initialize components for Routine "attnFailed" ---
attnFailure_continue = visual.TextStim(win=win, name='attnFailure_continue',
    text='You answered one of the questions about this task incorrectly and will need to review the instructions. ',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
failureAcknowledged = keyboard.Keyboard()
reviewStart = visual.TextStim(win=win, name='reviewStart',
    text='Press SPACE to repeat instructions.',
    font='Open Sans',
    pos=(0, -0.1), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "attnSuccess" ---
introducePractice = visual.TextStim(win=win, name='introducePractice',
    text='You will now do a practice trial.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
practiceStart = keyboard.Keyboard()
practiceStart_button = visual.TextStim(win=win, name='practiceStart_button',
    text='Press SPACE to begin.',
    font='Open Sans',
    pos=(0, -0.1), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "fixation" ---
fixCross = visual.TextStim(win=win, name='fixCross',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "practiceFace" ---
practiceResp = keyboard.Keyboard()
respIndicator_2 = visual.Rect(
    win=win, name='respIndicator_2',
    width=(0.41,0.61)[0], height=(0.41,0.61)[1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor=[-1.0000, 1.0000, -1.0000],
    opacity=1.0, depth=-1.0, interpolate=True)
practiceImage = visual.ImageStim(
    win=win,
    name='practiceImage', 
    image='img/practice_image.jpg', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.4,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
# Run 'Begin Experiment' code from respCheck_2
timesRedone = 0

# --- Initialize components for Routine "redo_feedback" ---
out_of_time_2 = visual.TextStim(win=win, name='out_of_time_2',
    text='Oops, out of time! Remember to respond within two seconds of seeing the face - you will need to re-try this trial.\n\n\n\n\nPress SPACE to try again.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
timeoutReminder = visual.TextStim(win=win, name='timeoutReminder',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
redo_keypress = keyboard.Keyboard()

# --- Initialize components for Routine "ratingScale" ---
attractiveness_slider = visual.Slider(win=win, name='attractiveness_slider',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.1), units=None,
    labels=["1","2","3","4","5","6","7","8","9"], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=None, lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.04,
    flip=False, ori=0.0, depth=0, readOnly=True)
attractiveness_instr = visual.TextStim(win=win, name='attractiveness_instr',
    text="Use your keyboard's number keys to rate the attractiveness of the face you just saw on this scale from 1 (not attractive) to 9 (very attractive).",
    font='Open Sans',
    pos=(0, 0.1), height=0.04, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
notAttractive = visual.TextStim(win=win, name='notAttractive',
    text='NOT\nATTRACTIVE',
    font='Arial',
    pos=(-0.61, -0.1), height=0.031, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
veryAttractive = visual.TextStim(win=win, name='veryAttractive',
    text='VERY\nATTRACTIVE',
    font='Arial',
    pos=(0.61, -0.1), height=0.031, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
attrRating = keyboard.Keyboard()

# --- Initialize components for Routine "introDone" ---
attnSuccess_continue = visual.TextStim(win=win, name='attnSuccess_continue',
    text='This concludes the introduction! You may now begin the real task.\n\nPress the SPACE BAR to start the first trial. Be ready to respond to the face!',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# --- Initialize components for Routine "fixation" ---
fixCross = visual.TextStim(win=win, name='fixCross',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "faceOnset" ---
catResp = keyboard.Keyboard()
respIndicator = visual.Rect(
    win=win, name='respIndicator',
    width=(0.41,0.61)[0], height=(0.41,0.61)[1],
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor=[-1.0000, 1.0000, -1.0000],
    opacity=1.0, depth=-1.0, interpolate=True)
face_image = visual.ImageStim(
    win=win,
    name='face_image', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.4,0.6),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
# Run 'Begin Experiment' code from respCheck
timesRedone = 0

# --- Initialize components for Routine "redo_feedback" ---
out_of_time_2 = visual.TextStim(win=win, name='out_of_time_2',
    text='Oops, out of time! Remember to respond within two seconds of seeing the face - you will need to re-try this trial.\n\n\n\n\nPress SPACE to try again.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
timeoutReminder = visual.TextStim(win=win, name='timeoutReminder',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
redo_keypress = keyboard.Keyboard()

# --- Initialize components for Routine "ratingScale" ---
attractiveness_slider = visual.Slider(win=win, name='attractiveness_slider',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.1), units=None,
    labels=["1","2","3","4","5","6","7","8","9"], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor=None, lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.04,
    flip=False, ori=0.0, depth=0, readOnly=True)
attractiveness_instr = visual.TextStim(win=win, name='attractiveness_instr',
    text="Use your keyboard's number keys to rate the attractiveness of the face you just saw on this scale from 1 (not attractive) to 9 (very attractive).",
    font='Open Sans',
    pos=(0, 0.1), height=0.04, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
notAttractive = visual.TextStim(win=win, name='notAttractive',
    text='NOT\nATTRACTIVE',
    font='Arial',
    pos=(-0.61, -0.1), height=0.031, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
veryAttractive = visual.TextStim(win=win, name='veryAttractive',
    text='VERY\nATTRACTIVE',
    font='Arial',
    pos=(0.61, -0.1), height=0.031, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
attrRating = keyboard.Keyboard()

# --- Initialize components for Routine "cont" ---
trialPassed = visual.TextStim(win=win, name='trialPassed',
    text='Trial complete! Remember:',
    font='Open Sans',
    pos=(0, 0.175), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
fixCross_2 = visual.TextStim(win=win, name='fixCross_2',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
reminder = visual.TextStim(win=win, name='reminder',
    text='',
    font='Open Sans',
    pos=(0, 0.1), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
contResp = keyboard.Keyboard()
contPrompt = visual.TextStim(win=win, name='contPrompt',
    text='Now, look at the middle of the screen and press the SPACE BAR to move onto the next trial.',
    font='Open Sans',
    pos=(0, -.1), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# --- Initialize components for Routine "intro2Questions" ---
qsIntro = visual.TextStim(win=win, name='qsIntro',
    text='Good work! You have finished the first phase of the study. Now you need to answer a set of questions for us; please do your best to do so honestly. You will be using your mouse for this section.\n\nPress the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
contResp_2 = keyboard.Keyboard()

# --- Initialize components for Routine "closure1" ---
qsInstr = visual.TextStim(win=win, name='qsInstr',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree). If you would prefer not to rate a given statement, select the "prefer not to answer" option on the far left end of the scale.',
    font='Open Sans',
    pos=(0, .32), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions1 = visual.TextStim(win=win, name='questions1',
    text='1. I don’t like situations that are uncertain. \n\n\n\n2. I dislike questions which could be answered in many different ways.\n\n\n\n3. I find that a well ordered life with regular hours suits my temperament.\n\n\n\n4. I feel uncomfortable when I don’t understand the reason why an event occurred in my life.',
    font='Open Sans',
    pos=(0, 0.021), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ1 = visual.Slider(win=win, name='respQ1',
    startValue=None, size=(1, 0.015), pos=(0, 0.175), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ2 = visual.Slider(win=win, name='respQ2',
    startValue=None, size=(1, 0.015), pos=(0, 0.04), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ3 = visual.Slider(win=win, name='respQ3',
    startValue=None, size=(1, 0.015), pos=(0, -.09), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-4, readOnly=False)
respQ4 = visual.Slider(win=win, name='respQ4',
    startValue=None, size=(1, 0.015), pos=(0, -0.22), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-5, readOnly=False)
nextButton1 = visual.TextStim(win=win, name='nextButton1',
    text='CLICK TO CONTINUE',
    font='Open Sans',
    pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
nextClick1 = event.Mouse(win=win)
x, y = [None, None]
nextClick1.mouseClock = core.Clock()

# --- Initialize components for Routine "closure2" ---
qsInstr_2 = visual.TextStim(win=win, name='qsInstr_2',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree). If you would prefer not to rate a given statement, select the "prefer not to answer" option on the far left end of the scale.',
    font='Open Sans',
    pos=(0, .32), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions2 = visual.TextStim(win=win, name='questions2',
    text='5. I feel irritated when one person disagrees with what everyone else in a group believes.\n\n\n\n6. I don’t like to go into a situation without knowing what I can expect from it.\n\n\n\n7. When I have made a decision, I feel relieved.\n\n\n\n8. When I am confronted with a problem, I’m dying to reach a solution very quickly.',
    font='Open Sans',
    pos=(0, 0.015), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ5 = visual.Slider(win=win, name='respQ5',
    startValue=None, size=(1, 0.015), pos=(0, 0.1725), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ6 = visual.Slider(win=win, name='respQ6',
    startValue=None, size=(1, 0.015), pos=(0, 0.04), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ7 = visual.Slider(win=win, name='respQ7',
    startValue=None, size=(1, 0.014), pos=(0, -.095), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-4, readOnly=False)
respQ8 = visual.Slider(win=win, name='respQ8',
    startValue=None, size=(1, 0.015), pos=(0, -0.225), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-5, readOnly=False)
nextButton2 = visual.TextStim(win=win, name='nextButton2',
    text='CLICK TO CONTINUE',
    font='Open Sans',
    pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
nextClick2 = event.Mouse(win=win)
x, y = [None, None]
nextClick2.mouseClock = core.Clock()

# --- Initialize components for Routine "closure3" ---
qsInstr_3 = visual.TextStim(win=win, name='qsInstr_3',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree). If you would prefer not to rate a given statement, select the "prefer not to answer" option on the far left end of the scale.',
    font='Open Sans',
    pos=(0, .32), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions3 = visual.TextStim(win=win, name='questions3',
    text='9. I would quickly become impatient and irritated if I would not find a solution to a problem immediately.\n\n\n\n10. I don’t like to be with people who are capable of unexpected actions.\n\n\n\n11. I dislike it when a person’s statement could mean many different things.\n\n\n\n12. I find that establishing a consistent routine enables me to enjoy life more.',
    font='Open Sans',
    pos=(0, 0.025), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ9 = visual.Slider(win=win, name='respQ9',
    startValue=None, size=(1, 0.015), pos=(0, 0.177), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ10 = visual.Slider(win=win, name='respQ10',
    startValue=None, size=(1, 0.015), pos=(0, 0.05), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ11 = visual.Slider(win=win, name='respQ11',
    startValue=None, size=(1, 0.015), pos=(0, -0.085), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-4, readOnly=False)
respQ12 = visual.Slider(win=win, name='respQ12',
    startValue=None, size=(1, 0.015), pos=(0, -0.22), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-5, readOnly=False)
nextButton3 = visual.TextStim(win=win, name='nextButton3',
    text='CLICK TO CONTINUE',
    font='Open Sans',
    pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
nextClick3 = event.Mouse(win=win)
x, y = [None, None]
nextClick3.mouseClock = core.Clock()

# --- Initialize components for Routine "closure4" ---
qsInstr_4 = visual.TextStim(win=win, name='qsInstr_4',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 5 (Strongly Agree). If you would prefer not to rate a given statement, select the "prefer not to answer" option on the far left end of the scale.',
    font='Open Sans',
    pos=(0, .32), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions4 = visual.TextStim(win=win, name='questions4',
    text='13. I enjoy having a clear and structured mode of life.\n\n\n\n14. I do not usually consult many different opinions before forming my own view.\n\n\n\n15. I dislike unpredictable situations.',
    font='Open Sans',
    pos=(0, 0.087), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ13 = visual.Slider(win=win, name='respQ13',
    startValue=None, size=(1, 0.015), pos=(0, 0.175), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ14 = visual.Slider(win=win, name='respQ14',
    startValue=None, size=(1, 0.015), pos=(0, 0.034), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ15 = visual.Slider(win=win, name='respQ15',
    startValue=None, size=(1, 0.015), pos=(0, -0.093), units=None,
    labels=('PREFER NOT TO SAY', 1, 2, 3, 4, 5), ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.0175,
    flip=False, ori=0.0, depth=-4, readOnly=False)
nextButton4 = visual.TextStim(win=win, name='nextButton4',
    text='CLICK TO CONTINUE',
    font='Open Sans',
    pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
nextClick4 = event.Mouse(win=win)
x, y = [None, None]
nextClick4.mouseClock = core.Clock()

# --- Initialize components for Routine "demographics" ---
demographicsInstr = visual.TextStim(win=win, name='demographicsInstr',
    text='Please select the options that describe you most accurately.',
    font='Open Sans',
    pos=(0, .3), height=0.04, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
age = visual.TextStim(win=win, name='age',
    text='What age group are you in?',
    font='Open Sans',
    pos=(-0.4, 0.225), height=0.035, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respAge = visual.Slider(win=win, name='respAge',
    startValue=None, size=(1, 0.015), pos=(0, 0.15), units=None,
    labels=("Prefer not to say", "18-21", "21-30", "31-40", "41-50", "51-60", "Above 60"), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.025,
    flip=False, ori=0.0, depth=-2, readOnly=False)
gender = visual.TextStim(win=win, name='gender',
    text='What gender do you identify as?',
    font='Open Sans',
    pos=(-0.369, 0.025), height=0.035, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
genderResp1 = visual.Slider(win=win, name='genderResp1',
    startValue=None, size=(0.015, 0.15), pos=(-0.5, -0.1), units=None,
    labels=("Prefer not to say", "Something else (type in textbox)", "Non-binary", "Man", "Woman"), ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.03,
    flip=True, ori=0.0, depth=-4, readOnly=False)
genderResp2 = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0.11, -0.135),     letterHeight=0.025,
     size=(0.425, 0.04), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='center',
     anchor='center-left',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='genderResp2',
     autoLog=True,
)
nextButton5 = visual.TextStim(win=win, name='nextButton5',
    text='CLICK TO CONTINUE',
    font='Open Sans',
    pos=(0, -0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
demographClick = event.Mouse(win=win)
x, y = [None, None]
demographClick.mouseClock = core.Clock()

# --- Initialize components for Routine "openAnswer" ---
openPrompt = visual.TextStim(win=win, name='openPrompt',
    text='When you were responding to the faces, did you find yourself using any kind of strategy to improve your performance on the task? If so, what was it? Please type any thoughts you have about this experiment below:',
    font='Open Sans',
    pos=(0, .2), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, -.05),     letterHeight=0.025,
     size=(1, .25), borderWidth=1.0,
     color='black', colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=0.5,
     padding=None, alignment='center',
     anchor='center',
     fillColor='white', borderColor=None,
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox',
     autoLog=True,
)
openanswerEnd = visual.TextStim(win=win, name='openanswerEnd',
    text='Once you are done, click here to continue!',
    font='Open Sans',
    pos=(0, -0.25), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
openanswerClick = event.Mouse(win=win)
x, y = [None, None]
openanswerClick.mouseClock = core.Clock()

# --- Initialize components for Routine "debrief" ---
debriefText = visual.TextStim(win=win, name='debriefText',
    text="What this experiment was for:\n\nWe are investigating how having to categorize a face will affect its percieved attractiveness. Existing research indicates that the harder it is to process a face, the lower the attractiveness ratings given to it.\n\nIf you had to label the face whenever it appeared using J or K, you were in one of our experimental groups; if you simply had to press one of those keys whenever the face appeared, you were in the control group.\n\nWe are also interested in whether a person's tolerance of ambiguous situations affects how they feel about the faces they had a harder time categorizing. This is why we gave you that questionnaire at the end.",
    font='Open Sans',
    pos=(0, 0.1), height=0.035, wrapWidth=1.4, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
exitMessage = visual.TextStim(win=win, name='exitMessage',
    text='Thanks again for participating in the study! You can now exit this experiment by pressing the TAB KEY.',
    font='Open Sans',
    pos=(0, -0.25), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
exitKey = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "hello" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
welc_advance.keys = []
welc_advance.rt = []
_welc_advance_allKeys = []
# keep track of which components have finished
helloComponents = [welcome, introCont1, welc_advance]
for thisComponent in helloComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "hello" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome* updates
    if welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome.frameNStart = frameN  # exact frame index
        welcome.tStart = t  # local t and not account for scr refresh
        welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welcome.started')
        welcome.setAutoDraw(True)
    
    # *introCont1* updates
    if introCont1.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
        # keep track of start time/frame for later
        introCont1.frameNStart = frameN  # exact frame index
        introCont1.tStart = t  # local t and not account for scr refresh
        introCont1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introCont1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'introCont1.started')
        introCont1.setAutoDraw(True)
    
    # *welc_advance* updates
    waitOnFlip = False
    if welc_advance.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
        # keep track of start time/frame for later
        welc_advance.frameNStart = frameN  # exact frame index
        welc_advance.tStart = t  # local t and not account for scr refresh
        welc_advance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welc_advance, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'welc_advance.started')
        welc_advance.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(welc_advance.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(welc_advance.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if welc_advance.status == STARTED and not waitOnFlip:
        theseKeys = welc_advance.getKeys(keyList=['space'], waitRelease=False)
        _welc_advance_allKeys.extend(theseKeys)
        if len(_welc_advance_allKeys):
            welc_advance.keys = _welc_advance_allKeys[-1].name  # just the last key pressed
            welc_advance.rt = _welc_advance_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in helloComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "hello" ---
for thisComponent in helloComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if welc_advance.keys in ['', [], None]:  # No response was made
    welc_advance.keys = None
thisExp.addData('welc_advance.keys',welc_advance.keys)
if welc_advance.keys != None:  # we had a response
    thisExp.addData('welc_advance.rt', welc_advance.rt)
thisExp.nextEntry()
# the Routine "hello" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
consent_advance.keys = []
consent_advance.rt = []
_consent_advance_allKeys = []
# keep track of which components have finished
consent1Components = [consentText_1, introCont2, consent_advance]
for thisComponent in consent1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consentText_1* updates
    if consentText_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consentText_1.frameNStart = frameN  # exact frame index
        consentText_1.tStart = t  # local t and not account for scr refresh
        consentText_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consentText_1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consentText_1.started')
        consentText_1.setAutoDraw(True)
    
    # *introCont2* updates
    if introCont2.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
        # keep track of start time/frame for later
        introCont2.frameNStart = frameN  # exact frame index
        introCont2.tStart = t  # local t and not account for scr refresh
        introCont2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introCont2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'introCont2.started')
        introCont2.setAutoDraw(True)
    
    # *consent_advance* updates
    waitOnFlip = False
    if consent_advance.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
        # keep track of start time/frame for later
        consent_advance.frameNStart = frameN  # exact frame index
        consent_advance.tStart = t  # local t and not account for scr refresh
        consent_advance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_advance, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consent_advance.started')
        consent_advance.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(consent_advance.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(consent_advance.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if consent_advance.status == STARTED and not waitOnFlip:
        theseKeys = consent_advance.getKeys(keyList=['space'], waitRelease=False)
        _consent_advance_allKeys.extend(theseKeys)
        if len(_consent_advance_allKeys):
            consent_advance.keys = _consent_advance_allKeys[-1].name  # just the last key pressed
            consent_advance.rt = _consent_advance_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent1" ---
for thisComponent in consent1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if consent_advance.keys in ['', [], None]:  # No response was made
    consent_advance.keys = None
thisExp.addData('consent_advance.keys',consent_advance.keys)
if consent_advance.keys != None:  # we had a response
    thisExp.addData('consent_advance.rt', consent_advance.rt)
thisExp.nextEntry()
# the Routine "consent1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
consent_advance_2.keys = []
consent_advance_2.rt = []
_consent_advance_2_allKeys = []
# keep track of which components have finished
consent2Components = [consentText_2, introCont3, consent_advance_2]
for thisComponent in consent2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consentText_2* updates
    if consentText_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consentText_2.frameNStart = frameN  # exact frame index
        consentText_2.tStart = t  # local t and not account for scr refresh
        consentText_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consentText_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consentText_2.started')
        consentText_2.setAutoDraw(True)
    
    # *introCont3* updates
    if introCont3.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        introCont3.frameNStart = frameN  # exact frame index
        introCont3.tStart = t  # local t and not account for scr refresh
        introCont3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(introCont3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'introCont3.started')
        introCont3.setAutoDraw(True)
    
    # *consent_advance_2* updates
    waitOnFlip = False
    if consent_advance_2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
        # keep track of start time/frame for later
        consent_advance_2.frameNStart = frameN  # exact frame index
        consent_advance_2.tStart = t  # local t and not account for scr refresh
        consent_advance_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_advance_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consent_advance_2.started')
        consent_advance_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(consent_advance_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(consent_advance_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if consent_advance_2.status == STARTED and not waitOnFlip:
        theseKeys = consent_advance_2.getKeys(keyList=['space'], waitRelease=False)
        _consent_advance_2_allKeys.extend(theseKeys)
        if len(_consent_advance_2_allKeys):
            consent_advance_2.keys = _consent_advance_2_allKeys[-1].name  # just the last key pressed
            consent_advance_2.rt = _consent_advance_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent2" ---
for thisComponent in consent2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if consent_advance_2.keys in ['', [], None]:  # No response was made
    consent_advance_2.keys = None
thisExp.addData('consent_advance_2.keys',consent_advance_2.keys)
if consent_advance_2.keys != None:  # we had a response
    thisExp.addData('consent_advance_2.rt', consent_advance_2.rt)
thisExp.nextEntry()
# the Routine "consent2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the consentClick
consentClick.x = []
consentClick.y = []
consentClick.leftButton = []
consentClick.midButton = []
consentClick.rightButton = []
consentClick.time = []
consentClick.clicked_name = []
gotValidClick = False  # until a click is received
# setup some python lists for storing info about the quitClick
quitClick.x = []
quitClick.y = []
quitClick.leftButton = []
quitClick.midButton = []
quitClick.rightButton = []
quitClick.time = []
quitClick.clicked_name = []
gotValidClick = False  # until a click is received
quitClick.mouseClock.reset()
# keep track of which components have finished
consent3Components = [consentText_3, iAgree, iQuit, consentClick, quitClick]
for thisComponent in consent3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consentText_3* updates
    if consentText_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consentText_3.frameNStart = frameN  # exact frame index
        consentText_3.tStart = t  # local t and not account for scr refresh
        consentText_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consentText_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consentText_3.started')
        consentText_3.setAutoDraw(True)
    
    # *iAgree* updates
    if iAgree.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        iAgree.frameNStart = frameN  # exact frame index
        iAgree.tStart = t  # local t and not account for scr refresh
        iAgree.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(iAgree, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'iAgree.started')
        iAgree.setAutoDraw(True)
    
    # *iQuit* updates
    if iQuit.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        iQuit.frameNStart = frameN  # exact frame index
        iQuit.tStart = t  # local t and not account for scr refresh
        iQuit.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(iQuit, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'iQuit.started')
        iQuit.setAutoDraw(True)
    # *consentClick* updates
    if consentClick.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consentClick.frameNStart = frameN  # exact frame index
        consentClick.tStart = t  # local t and not account for scr refresh
        consentClick.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consentClick, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('consentClick.started', t)
        consentClick.status = STARTED
        consentClick.mouseClock.reset()
        prevButtonState = consentClick.getPressed()  # if button is down already this ISN'T a new click
    if consentClick.status == STARTED:  # only update if started and not finished!
        buttons = consentClick.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(iAgree)
                    clickableList = iAgree
                except:
                    clickableList = [iAgree]
                for obj in clickableList:
                    if obj.contains(consentClick):
                        gotValidClick = True
                        consentClick.clicked_name.append(obj.name)
                x, y = consentClick.getPos()
                consentClick.x.append(x)
                consentClick.y.append(y)
                buttons = consentClick.getPressed()
                consentClick.leftButton.append(buttons[0])
                consentClick.midButton.append(buttons[1])
                consentClick.rightButton.append(buttons[2])
                consentClick.time.append(consentClick.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    # *quitClick* updates
    if quitClick.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        quitClick.frameNStart = frameN  # exact frame index
        quitClick.tStart = t  # local t and not account for scr refresh
        quitClick.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(quitClick, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('quitClick.started', t)
        quitClick.status = STARTED
        prevButtonState = quitClick.getPressed()  # if button is down already this ISN'T a new click
    if quitClick.status == STARTED:  # only update if started and not finished!
        buttons = quitClick.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(iQuit)
                    clickableList = iQuit
                except:
                    clickableList = [iQuit]
                for obj in clickableList:
                    if obj.contains(quitClick):
                        gotValidClick = True
                        quitClick.clicked_name.append(obj.name)
                x, y = quitClick.getPos()
                quitClick.x.append(x)
                quitClick.y.append(y)
                buttons = quitClick.getPressed()
                quitClick.leftButton.append(buttons[0])
                quitClick.midButton.append(buttons[1])
                quitClick.rightButton.append(buttons[2])
                quitClick.time.append(quitClick.mouseClock.getTime())
    # Run 'Each Frame' code from quitButton
    if quitClick.isPressedIn(iQuit):
        core.quit()
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent3" ---
for thisComponent in consent3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('consentClick.x', consentClick.x)
thisExp.addData('consentClick.y', consentClick.y)
thisExp.addData('consentClick.leftButton', consentClick.leftButton)
thisExp.addData('consentClick.midButton', consentClick.midButton)
thisExp.addData('consentClick.rightButton', consentClick.rightButton)
thisExp.addData('consentClick.time', consentClick.time)
thisExp.addData('consentClick.clicked_name', consentClick.clicked_name)
thisExp.nextEntry()
# store data for thisExp (ExperimentHandler)
thisExp.addData('quitClick.x', quitClick.x)
thisExp.addData('quitClick.y', quitClick.y)
thisExp.addData('quitClick.leftButton', quitClick.leftButton)
thisExp.addData('quitClick.midButton', quitClick.midButton)
thisExp.addData('quitClick.rightButton', quitClick.rightButton)
thisExp.addData('quitClick.time', quitClick.time)
thisExp.addData('quitClick.clicked_name', quitClick.clicked_name)
thisExp.nextEntry()
# the Routine "consent3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instrStart" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
instr_advance_3.keys = []
instr_advance_3.rt = []
_instr_advance_3_allKeys = []
# keep track of which components have finished
instrStartComponents = [genInstr1, IntroCont4, instr_advance_3]
for thisComponent in instrStartComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instrStart" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *genInstr1* updates
    if genInstr1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        genInstr1.frameNStart = frameN  # exact frame index
        genInstr1.tStart = t  # local t and not account for scr refresh
        genInstr1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genInstr1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genInstr1.started')
        genInstr1.setAutoDraw(True)
    
    # *IntroCont4* updates
    if IntroCont4.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
        # keep track of start time/frame for later
        IntroCont4.frameNStart = frameN  # exact frame index
        IntroCont4.tStart = t  # local t and not account for scr refresh
        IntroCont4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(IntroCont4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'IntroCont4.started')
        IntroCont4.setAutoDraw(True)
    
    # *instr_advance_3* updates
    waitOnFlip = False
    if instr_advance_3.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
        # keep track of start time/frame for later
        instr_advance_3.frameNStart = frameN  # exact frame index
        instr_advance_3.tStart = t  # local t and not account for scr refresh
        instr_advance_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_advance_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_advance_3.started')
        instr_advance_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_advance_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_advance_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_advance_3.status == STARTED and not waitOnFlip:
        theseKeys = instr_advance_3.getKeys(keyList=['space'], waitRelease=False)
        _instr_advance_3_allKeys.extend(theseKeys)
        if len(_instr_advance_3_allKeys):
            instr_advance_3.keys = _instr_advance_3_allKeys[-1].name  # just the last key pressed
            instr_advance_3.rt = _instr_advance_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrStartComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instrStart" ---
for thisComponent in instrStartComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_advance_3.keys in ['', [], None]:  # No response was made
    instr_advance_3.keys = None
thisExp.addData('instr_advance_3.keys',instr_advance_3.keys)
if instr_advance_3.keys != None:  # we had a response
    thisExp.addData('instr_advance_3.rt', instr_advance_3.rt)
thisExp.nextEntry()
# the Routine "instrStart" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
instr_loop = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('fluency_conditions.xlsx', selection=selected_rows),
    seed=None, name='instr_loop')
thisExp.addLoop(instr_loop)  # add the loop to the experiment
thisInstr_loop = instr_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstr_loop.rgb)
if thisInstr_loop != None:
    for paramName in thisInstr_loop:
        exec('{} = thisInstr_loop[paramName]'.format(paramName))

for thisInstr_loop in instr_loop:
    currentLoop = instr_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInstr_loop.rgb)
    if thisInstr_loop != None:
        for paramName in thisInstr_loop:
            exec('{} = thisInstr_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "specific_instr" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    specific_instructions.setText(instr)
    definition.setText(term)
    spec_instr_adv.keys = []
    spec_instr_adv.rt = []
    _spec_instr_adv_allKeys = []
    # keep track of which components have finished
    specific_instrComponents = [genInstr2, specific_instructions, definition, IntroCont5, spec_instr_adv]
    for thisComponent in specific_instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "specific_instr" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *genInstr2* updates
        if genInstr2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            genInstr2.frameNStart = frameN  # exact frame index
            genInstr2.tStart = t  # local t and not account for scr refresh
            genInstr2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(genInstr2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'genInstr2.started')
            genInstr2.setAutoDraw(True)
        
        # *specific_instructions* updates
        if specific_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            specific_instructions.frameNStart = frameN  # exact frame index
            specific_instructions.tStart = t  # local t and not account for scr refresh
            specific_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(specific_instructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'specific_instructions.started')
            specific_instructions.setAutoDraw(True)
        
        # *definition* updates
        if definition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            definition.frameNStart = frameN  # exact frame index
            definition.tStart = t  # local t and not account for scr refresh
            definition.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(definition, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'definition.started')
            definition.setAutoDraw(True)
        
        # *IntroCont5* updates
        if IntroCont5.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            IntroCont5.frameNStart = frameN  # exact frame index
            IntroCont5.tStart = t  # local t and not account for scr refresh
            IntroCont5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(IntroCont5, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'IntroCont5.started')
            IntroCont5.setAutoDraw(True)
        
        # *spec_instr_adv* updates
        waitOnFlip = False
        if spec_instr_adv.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            spec_instr_adv.frameNStart = frameN  # exact frame index
            spec_instr_adv.tStart = t  # local t and not account for scr refresh
            spec_instr_adv.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spec_instr_adv, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spec_instr_adv.started')
            spec_instr_adv.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spec_instr_adv.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spec_instr_adv.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spec_instr_adv.status == STARTED and not waitOnFlip:
            theseKeys = spec_instr_adv.getKeys(keyList=['space'], waitRelease=False)
            _spec_instr_adv_allKeys.extend(theseKeys)
            if len(_spec_instr_adv_allKeys):
                spec_instr_adv.keys = _spec_instr_adv_allKeys[-1].name  # just the last key pressed
                spec_instr_adv.rt = _spec_instr_adv_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in specific_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "specific_instr" ---
    for thisComponent in specific_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if spec_instr_adv.keys in ['', [], None]:  # No response was made
        spec_instr_adv.keys = None
    instr_loop.addData('spec_instr_adv.keys',spec_instr_adv.keys)
    if spec_instr_adv.keys != None:  # we had a response
        instr_loop.addData('spec_instr_adv.rt', spec_instr_adv.rt)
    # the Routine "specific_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "rateInstr" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    spec_instr_adv2.keys = []
    spec_instr_adv2.rt = []
    _spec_instr_adv2_allKeys = []
    # keep track of which components have finished
    rateInstrComponents = [ratingInstr, spec_instr_adv2, IntroCont6]
    for thisComponent in rateInstrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "rateInstr" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *ratingInstr* updates
        if ratingInstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ratingInstr.frameNStart = frameN  # exact frame index
            ratingInstr.tStart = t  # local t and not account for scr refresh
            ratingInstr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ratingInstr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ratingInstr.started')
            ratingInstr.setAutoDraw(True)
        
        # *spec_instr_adv2* updates
        waitOnFlip = False
        if spec_instr_adv2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            spec_instr_adv2.frameNStart = frameN  # exact frame index
            spec_instr_adv2.tStart = t  # local t and not account for scr refresh
            spec_instr_adv2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spec_instr_adv2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spec_instr_adv2.started')
            spec_instr_adv2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spec_instr_adv2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spec_instr_adv2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spec_instr_adv2.status == STARTED and not waitOnFlip:
            theseKeys = spec_instr_adv2.getKeys(keyList=['space'], waitRelease=False)
            _spec_instr_adv2_allKeys.extend(theseKeys)
            if len(_spec_instr_adv2_allKeys):
                spec_instr_adv2.keys = _spec_instr_adv2_allKeys[-1].name  # just the last key pressed
                spec_instr_adv2.rt = _spec_instr_adv2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *IntroCont6* updates
        if IntroCont6.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            IntroCont6.frameNStart = frameN  # exact frame index
            IntroCont6.tStart = t  # local t and not account for scr refresh
            IntroCont6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(IntroCont6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'IntroCont6.started')
            IntroCont6.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in rateInstrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rateInstr" ---
    for thisComponent in rateInstrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if spec_instr_adv2.keys in ['', [], None]:  # No response was made
        spec_instr_adv2.keys = None
    instr_loop.addData('spec_instr_adv2.keys',spec_instr_adv2.keys)
    if spec_instr_adv2.keys != None:  # we had a response
        instr_loop.addData('spec_instr_adv2.rt', spec_instr_adv2.rt)
    # Run 'End Routine' code from isInstrDone
    instr_loop.finished = True
    event.getKeys()
    failure = 0
    # the Routine "rateInstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'instr_loop'


# set up handler to look after randomisation of conditions etc
attnChecker = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='attnChecker')
thisExp.addLoop(attnChecker)  # add the loop to the experiment
thisAttnChecker = attnChecker.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisAttnChecker.rgb)
if thisAttnChecker != None:
    for paramName in thisAttnChecker:
        exec('{} = thisAttnChecker[paramName]'.format(paramName))

for thisAttnChecker in attnChecker:
    currentLoop = attnChecker
    # abbreviate parameter names if possible (e.g. rgb = thisAttnChecker.rgb)
    if thisAttnChecker != None:
        for paramName in thisAttnChecker:
            exec('{} = thisAttnChecker[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    attnLoop = data.TrialHandler(nReps=99.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='attnLoop')
    thisExp.addLoop(attnLoop)  # add the loop to the experiment
    thisAttnLoop = attnLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisAttnLoop.rgb)
    if thisAttnLoop != None:
        for paramName in thisAttnLoop:
            exec('{} = thisAttnLoop[paramName]'.format(paramName))
    
    for thisAttnLoop in attnLoop:
        currentLoop = attnLoop
        # abbreviate parameter names if possible (e.g. rgb = thisAttnLoop.rgb)
        if thisAttnLoop != None:
            for paramName in thisAttnLoop:
                exec('{} = thisAttnLoop[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        reshowInstr = data.TrialHandler(nReps=failure, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='reshowInstr')
        thisExp.addLoop(reshowInstr)  # add the loop to the experiment
        thisReshowInstr = reshowInstr.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisReshowInstr.rgb)
        if thisReshowInstr != None:
            for paramName in thisReshowInstr:
                exec('{} = thisReshowInstr[paramName]'.format(paramName))
        
        for thisReshowInstr in reshowInstr:
            currentLoop = reshowInstr
            # abbreviate parameter names if possible (e.g. rgb = thisReshowInstr.rgb)
            if thisReshowInstr != None:
                for paramName in thisReshowInstr:
                    exec('{} = thisReshowInstr[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "general_instr2" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            instr_advance_2.keys = []
            instr_advance_2.rt = []
            _instr_advance_2_allKeys = []
            # keep track of which components have finished
            general_instr2Components = [genInstr_2, instr_advance_2, IntroCont7]
            for thisComponent in general_instr2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "general_instr2" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *genInstr_2* updates
                if genInstr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    genInstr_2.frameNStart = frameN  # exact frame index
                    genInstr_2.tStart = t  # local t and not account for scr refresh
                    genInstr_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(genInstr_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'genInstr_2.started')
                    genInstr_2.setAutoDraw(True)
                
                # *instr_advance_2* updates
                waitOnFlip = False
                if instr_advance_2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    instr_advance_2.frameNStart = frameN  # exact frame index
                    instr_advance_2.tStart = t  # local t and not account for scr refresh
                    instr_advance_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(instr_advance_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'instr_advance_2.started')
                    instr_advance_2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(instr_advance_2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(instr_advance_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if instr_advance_2.status == STARTED and not waitOnFlip:
                    theseKeys = instr_advance_2.getKeys(keyList=['space'], waitRelease=False)
                    _instr_advance_2_allKeys.extend(theseKeys)
                    if len(_instr_advance_2_allKeys):
                        instr_advance_2.keys = _instr_advance_2_allKeys[-1].name  # just the last key pressed
                        instr_advance_2.rt = _instr_advance_2_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *IntroCont7* updates
                if IntroCont7.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    IntroCont7.frameNStart = frameN  # exact frame index
                    IntroCont7.tStart = t  # local t and not account for scr refresh
                    IntroCont7.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(IntroCont7, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'IntroCont7.started')
                    IntroCont7.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in general_instr2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "general_instr2" ---
            for thisComponent in general_instr2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if instr_advance_2.keys in ['', [], None]:  # No response was made
                instr_advance_2.keys = None
            reshowInstr.addData('instr_advance_2.keys',instr_advance_2.keys)
            if instr_advance_2.keys != None:  # we had a response
                reshowInstr.addData('instr_advance_2.rt', instr_advance_2.rt)
            # the Routine "general_instr2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "specific_instr2" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            specific_instructions_2.setText(instr + ". Be sure to respond within 2 seconds; a green frame around the image will show that your response was registered.")
            definition_2.setText(term)
            spec_instr_adv_2.keys = []
            spec_instr_adv_2.rt = []
            _spec_instr_adv_2_allKeys = []
            # keep track of which components have finished
            specific_instr2Components = [specific_instructions_2, definition_2, spec_instr_adv_2, IntroCont8]
            for thisComponent in specific_instr2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "specific_instr2" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *specific_instructions_2* updates
                if specific_instructions_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    specific_instructions_2.frameNStart = frameN  # exact frame index
                    specific_instructions_2.tStart = t  # local t and not account for scr refresh
                    specific_instructions_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(specific_instructions_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'specific_instructions_2.started')
                    specific_instructions_2.setAutoDraw(True)
                
                # *definition_2* updates
                if definition_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    definition_2.frameNStart = frameN  # exact frame index
                    definition_2.tStart = t  # local t and not account for scr refresh
                    definition_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(definition_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'definition_2.started')
                    definition_2.setAutoDraw(True)
                
                # *spec_instr_adv_2* updates
                waitOnFlip = False
                if spec_instr_adv_2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    spec_instr_adv_2.frameNStart = frameN  # exact frame index
                    spec_instr_adv_2.tStart = t  # local t and not account for scr refresh
                    spec_instr_adv_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(spec_instr_adv_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'spec_instr_adv_2.started')
                    spec_instr_adv_2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(spec_instr_adv_2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(spec_instr_adv_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if spec_instr_adv_2.status == STARTED and not waitOnFlip:
                    theseKeys = spec_instr_adv_2.getKeys(keyList=['space'], waitRelease=False)
                    _spec_instr_adv_2_allKeys.extend(theseKeys)
                    if len(_spec_instr_adv_2_allKeys):
                        spec_instr_adv_2.keys = _spec_instr_adv_2_allKeys[-1].name  # just the last key pressed
                        spec_instr_adv_2.rt = _spec_instr_adv_2_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *IntroCont8* updates
                if IntroCont8.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    IntroCont8.frameNStart = frameN  # exact frame index
                    IntroCont8.tStart = t  # local t and not account for scr refresh
                    IntroCont8.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(IntroCont8, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'IntroCont8.started')
                    IntroCont8.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in specific_instr2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "specific_instr2" ---
            for thisComponent in specific_instr2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if spec_instr_adv_2.keys in ['', [], None]:  # No response was made
                spec_instr_adv_2.keys = None
            reshowInstr.addData('spec_instr_adv_2.keys',spec_instr_adv_2.keys)
            if spec_instr_adv_2.keys != None:  # we had a response
                reshowInstr.addData('spec_instr_adv_2.rt', spec_instr_adv_2.rt)
            # the Routine "specific_instr2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "rateInstr2" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            rate_instr_adv2.keys = []
            rate_instr_adv2.rt = []
            _rate_instr_adv2_allKeys = []
            # keep track of which components have finished
            rateInstr2Components = [ratingInstr_2, rate_instr_adv2, IntroCont9]
            for thisComponent in rateInstr2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "rateInstr2" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *ratingInstr_2* updates
                if ratingInstr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ratingInstr_2.frameNStart = frameN  # exact frame index
                    ratingInstr_2.tStart = t  # local t and not account for scr refresh
                    ratingInstr_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ratingInstr_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ratingInstr_2.started')
                    ratingInstr_2.setAutoDraw(True)
                
                # *rate_instr_adv2* updates
                waitOnFlip = False
                if rate_instr_adv2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    rate_instr_adv2.frameNStart = frameN  # exact frame index
                    rate_instr_adv2.tStart = t  # local t and not account for scr refresh
                    rate_instr_adv2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(rate_instr_adv2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'rate_instr_adv2.started')
                    rate_instr_adv2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(rate_instr_adv2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(rate_instr_adv2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if rate_instr_adv2.status == STARTED and not waitOnFlip:
                    theseKeys = rate_instr_adv2.getKeys(keyList=['space'], waitRelease=False)
                    _rate_instr_adv2_allKeys.extend(theseKeys)
                    if len(_rate_instr_adv2_allKeys):
                        rate_instr_adv2.keys = _rate_instr_adv2_allKeys[-1].name  # just the last key pressed
                        rate_instr_adv2.rt = _rate_instr_adv2_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *IntroCont9* updates
                if IntroCont9.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
                    # keep track of start time/frame for later
                    IntroCont9.frameNStart = frameN  # exact frame index
                    IntroCont9.tStart = t  # local t and not account for scr refresh
                    IntroCont9.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(IntroCont9, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'IntroCont9.started')
                    IntroCont9.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in rateInstr2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "rateInstr2" ---
            for thisComponent in rateInstr2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if rate_instr_adv2.keys in ['', [], None]:  # No response was made
                rate_instr_adv2.keys = None
            reshowInstr.addData('rate_instr_adv2.keys',rate_instr_adv2.keys)
            if rate_instr_adv2.keys != None:  # we had a response
                reshowInstr.addData('rate_instr_adv2.rt', rate_instr_adv2.rt)
            # Run 'End Routine' code from isInstrDone_2
            reshowInstr.finished = True
            event.getKeys()
            failure = 0
            # the Routine "rateInstr2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed failure repeats of 'reshowInstr'
        
        
        # set up handler to look after randomisation of conditions etc
        q1 = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='q1')
        thisExp.addLoop(q1)  # add the loop to the experiment
        thisQ1 = q1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisQ1.rgb)
        if thisQ1 != None:
            for paramName in thisQ1:
                exec('{} = thisQ1[paramName]'.format(paramName))
        
        for thisQ1 in q1:
            currentLoop = q1
            # abbreviate parameter names if possible (e.g. rgb = thisQ1.rgb)
            if thisQ1 != None:
                for paramName in thisQ1:
                    exec('{} = thisQ1[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "attnCheck1" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            attnKeyResp1.keys = []
            attnKeyResp1.rt = []
            _attnKeyResp1_allKeys = []
            # Run 'Begin Routine' code from questionsLeft1
            attnQuestion1.alignText='left'
            attnQuestion1.alignHoriz = 'left'
            # keep track of which components have finished
            attnCheck1Components = [attnQuestion1, attnKeyResp1]
            for thisComponent in attnCheck1Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "attnCheck1" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *attnQuestion1* updates
                if attnQuestion1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnQuestion1.frameNStart = frameN  # exact frame index
                    attnQuestion1.tStart = t  # local t and not account for scr refresh
                    attnQuestion1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnQuestion1, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnQuestion1.started')
                    attnQuestion1.setAutoDraw(True)
                
                # *attnKeyResp1* updates
                waitOnFlip = False
                if attnKeyResp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnKeyResp1.frameNStart = frameN  # exact frame index
                    attnKeyResp1.tStart = t  # local t and not account for scr refresh
                    attnKeyResp1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnKeyResp1, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnKeyResp1.started')
                    attnKeyResp1.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(attnKeyResp1.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(attnKeyResp1.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if attnKeyResp1.status == STARTED and not waitOnFlip:
                    theseKeys = attnKeyResp1.getKeys(keyList=['a','b','c'], waitRelease=False)
                    _attnKeyResp1_allKeys.extend(theseKeys)
                    if len(_attnKeyResp1_allKeys):
                        attnKeyResp1.keys = _attnKeyResp1_allKeys[-1].name  # just the last key pressed
                        attnKeyResp1.rt = _attnKeyResp1_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in attnCheck1Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "attnCheck1" ---
            for thisComponent in attnCheck1Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if attnKeyResp1.keys in ['', [], None]:  # No response was made
                attnKeyResp1.keys = None
            q1.addData('attnKeyResp1.keys',attnKeyResp1.keys)
            if attnKeyResp1.keys != None:  # we had a response
                q1.addData('attnKeyResp1.rt', attnKeyResp1.rt)
            # Run 'End Routine' code from attnCheck1_2
            keys = event.getKeys()
            if 'a' in keys or 'b' in keys:
                failure = True
                continueQuestions=0
            else:
                failure = False
                continueQuestions=1
            
            # the Routine "attnCheck1" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'q1'
        
        
        # set up handler to look after randomisation of conditions etc
        q2 = data.TrialHandler(nReps=continueQuestions, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='q2')
        thisExp.addLoop(q2)  # add the loop to the experiment
        thisQ2 = q2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisQ2.rgb)
        if thisQ2 != None:
            for paramName in thisQ2:
                exec('{} = thisQ2[paramName]'.format(paramName))
        
        for thisQ2 in q2:
            currentLoop = q2
            # abbreviate parameter names if possible (e.g. rgb = thisQ2.rgb)
            if thisQ2 != None:
                for paramName in thisQ2:
                    exec('{} = thisQ2[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "attnCheck2" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            attnKeyResp2.keys = []
            attnKeyResp2.rt = []
            _attnKeyResp2_allKeys = []
            # Run 'Begin Routine' code from questionsLeft2
            attnQuestion2.alignText='left'
            attnQuestion2.alignHoriz = 'left'
            # keep track of which components have finished
            attnCheck2Components = [attnQuestion2, attnKeyResp2]
            for thisComponent in attnCheck2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "attnCheck2" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *attnQuestion2* updates
                if attnQuestion2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnQuestion2.frameNStart = frameN  # exact frame index
                    attnQuestion2.tStart = t  # local t and not account for scr refresh
                    attnQuestion2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnQuestion2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnQuestion2.started')
                    attnQuestion2.setAutoDraw(True)
                
                # *attnKeyResp2* updates
                waitOnFlip = False
                if attnKeyResp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnKeyResp2.frameNStart = frameN  # exact frame index
                    attnKeyResp2.tStart = t  # local t and not account for scr refresh
                    attnKeyResp2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnKeyResp2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnKeyResp2.started')
                    attnKeyResp2.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(attnKeyResp2.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(attnKeyResp2.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if attnKeyResp2.status == STARTED and not waitOnFlip:
                    theseKeys = attnKeyResp2.getKeys(keyList=['a','b','c'], waitRelease=False)
                    _attnKeyResp2_allKeys.extend(theseKeys)
                    if len(_attnKeyResp2_allKeys):
                        attnKeyResp2.keys = _attnKeyResp2_allKeys[-1].name  # just the last key pressed
                        attnKeyResp2.rt = _attnKeyResp2_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in attnCheck2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "attnCheck2" ---
            for thisComponent in attnCheck2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if attnKeyResp2.keys in ['', [], None]:  # No response was made
                attnKeyResp2.keys = None
            q2.addData('attnKeyResp2.keys',attnKeyResp2.keys)
            if attnKeyResp2.keys != None:  # we had a response
                q2.addData('attnKeyResp2.rt', attnKeyResp2.rt)
            # Run 'End Routine' code from attnCheck2_2
            keys = event.getKeys()
            if 'b' in keys or 'c' in keys:
                failure = 1
                continueQuestions=0
            else:
                failure = 0
                continueQuestions=1
            # the Routine "attnCheck2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed continueQuestions repeats of 'q2'
        
        
        # set up handler to look after randomisation of conditions etc
        q3 = data.TrialHandler(nReps=continueQuestions, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='q3')
        thisExp.addLoop(q3)  # add the loop to the experiment
        thisQ3 = q3.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisQ3.rgb)
        if thisQ3 != None:
            for paramName in thisQ3:
                exec('{} = thisQ3[paramName]'.format(paramName))
        
        for thisQ3 in q3:
            currentLoop = q3
            # abbreviate parameter names if possible (e.g. rgb = thisQ3.rgb)
            if thisQ3 != None:
                for paramName in thisQ3:
                    exec('{} = thisQ3[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "attnCheck3" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            attnKeyResp3.keys = []
            attnKeyResp3.rt = []
            _attnKeyResp3_allKeys = []
            # Run 'Begin Routine' code from questionsLeft3
            attnQuestion3.alignText='left'
            attnQuestion3.alignHoriz = 'left'
            # keep track of which components have finished
            attnCheck3Components = [attnQuestion3, attnKeyResp3]
            for thisComponent in attnCheck3Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "attnCheck3" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *attnQuestion3* updates
                if attnQuestion3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnQuestion3.frameNStart = frameN  # exact frame index
                    attnQuestion3.tStart = t  # local t and not account for scr refresh
                    attnQuestion3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnQuestion3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnQuestion3.started')
                    attnQuestion3.setAutoDraw(True)
                
                # *attnKeyResp3* updates
                waitOnFlip = False
                if attnKeyResp3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnKeyResp3.frameNStart = frameN  # exact frame index
                    attnKeyResp3.tStart = t  # local t and not account for scr refresh
                    attnKeyResp3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnKeyResp3, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnKeyResp3.started')
                    attnKeyResp3.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(attnKeyResp3.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(attnKeyResp3.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if attnKeyResp3.status == STARTED and not waitOnFlip:
                    theseKeys = attnKeyResp3.getKeys(keyList=['a','b','c'], waitRelease=False)
                    _attnKeyResp3_allKeys.extend(theseKeys)
                    if len(_attnKeyResp3_allKeys):
                        attnKeyResp3.keys = _attnKeyResp3_allKeys[-1].name  # just the last key pressed
                        attnKeyResp3.rt = _attnKeyResp3_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in attnCheck3Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "attnCheck3" ---
            for thisComponent in attnCheck3Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if attnKeyResp3.keys in ['', [], None]:  # No response was made
                attnKeyResp3.keys = None
            q3.addData('attnKeyResp3.keys',attnKeyResp3.keys)
            if attnKeyResp3.keys != None:  # we had a response
                q3.addData('attnKeyResp3.rt', attnKeyResp3.rt)
            # Run 'End Routine' code from attnCheck3_2
            keys = event.getKeys()
            if 'a' in keys or 'b' in keys:
                failure = 1
            else:
                failure = 0
                attnLoop.finished = True
            # the Routine "attnCheck3" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed continueQuestions repeats of 'q3'
        
        
        # set up handler to look after randomisation of conditions etc
        attnFailure = data.TrialHandler(nReps=failure, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='attnFailure')
        thisExp.addLoop(attnFailure)  # add the loop to the experiment
        thisAttnFailure = attnFailure.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAttnFailure.rgb)
        if thisAttnFailure != None:
            for paramName in thisAttnFailure:
                exec('{} = thisAttnFailure[paramName]'.format(paramName))
        
        for thisAttnFailure in attnFailure:
            currentLoop = attnFailure
            # abbreviate parameter names if possible (e.g. rgb = thisAttnFailure.rgb)
            if thisAttnFailure != None:
                for paramName in thisAttnFailure:
                    exec('{} = thisAttnFailure[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "attnFailed" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            failureAcknowledged.keys = []
            failureAcknowledged.rt = []
            _failureAcknowledged_allKeys = []
            # keep track of which components have finished
            attnFailedComponents = [attnFailure_continue, failureAcknowledged, reviewStart]
            for thisComponent in attnFailedComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "attnFailed" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *attnFailure_continue* updates
                if attnFailure_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attnFailure_continue.frameNStart = frameN  # exact frame index
                    attnFailure_continue.tStart = t  # local t and not account for scr refresh
                    attnFailure_continue.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attnFailure_continue, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'attnFailure_continue.started')
                    attnFailure_continue.setAutoDraw(True)
                
                # *failureAcknowledged* updates
                waitOnFlip = False
                if failureAcknowledged.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    failureAcknowledged.frameNStart = frameN  # exact frame index
                    failureAcknowledged.tStart = t  # local t and not account for scr refresh
                    failureAcknowledged.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(failureAcknowledged, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'failureAcknowledged.started')
                    failureAcknowledged.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(failureAcknowledged.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(failureAcknowledged.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if failureAcknowledged.status == STARTED and not waitOnFlip:
                    theseKeys = failureAcknowledged.getKeys(keyList=['space'], waitRelease=False)
                    _failureAcknowledged_allKeys.extend(theseKeys)
                    if len(_failureAcknowledged_allKeys):
                        failureAcknowledged.keys = _failureAcknowledged_allKeys[-1].name  # just the last key pressed
                        failureAcknowledged.rt = _failureAcknowledged_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *reviewStart* updates
                if reviewStart.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
                    # keep track of start time/frame for later
                    reviewStart.frameNStart = frameN  # exact frame index
                    reviewStart.tStart = t  # local t and not account for scr refresh
                    reviewStart.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(reviewStart, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'reviewStart.started')
                    reviewStart.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in attnFailedComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "attnFailed" ---
            for thisComponent in attnFailedComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if failureAcknowledged.keys in ['', [], None]:  # No response was made
                failureAcknowledged.keys = None
            attnFailure.addData('failureAcknowledged.keys',failureAcknowledged.keys)
            if failureAcknowledged.keys != None:  # we had a response
                attnFailure.addData('failureAcknowledged.rt', failureAcknowledged.rt)
            # the Routine "attnFailed" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed failure repeats of 'attnFailure'
        
        thisExp.nextEntry()
        
    # completed 99.0 repeats of 'attnLoop'
    
    
    # --- Prepare to start Routine "attnSuccess" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    practiceStart.keys = []
    practiceStart.rt = []
    _practiceStart_allKeys = []
    # keep track of which components have finished
    attnSuccessComponents = [introducePractice, practiceStart, practiceStart_button]
    for thisComponent in attnSuccessComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "attnSuccess" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *introducePractice* updates
        if introducePractice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            introducePractice.frameNStart = frameN  # exact frame index
            introducePractice.tStart = t  # local t and not account for scr refresh
            introducePractice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(introducePractice, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'introducePractice.started')
            introducePractice.setAutoDraw(True)
        
        # *practiceStart* updates
        waitOnFlip = False
        if practiceStart.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            practiceStart.frameNStart = frameN  # exact frame index
            practiceStart.tStart = t  # local t and not account for scr refresh
            practiceStart.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practiceStart, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practiceStart.started')
            practiceStart.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(practiceStart.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(practiceStart.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if practiceStart.status == STARTED and not waitOnFlip:
            theseKeys = practiceStart.getKeys(keyList=['space'], waitRelease=False)
            _practiceStart_allKeys.extend(theseKeys)
            if len(_practiceStart_allKeys):
                practiceStart.keys = _practiceStart_allKeys[-1].name  # just the last key pressed
                practiceStart.rt = _practiceStart_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *practiceStart_button* updates
        if practiceStart_button.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            practiceStart_button.frameNStart = frameN  # exact frame index
            practiceStart_button.tStart = t  # local t and not account for scr refresh
            practiceStart_button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(practiceStart_button, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'practiceStart_button.started')
            practiceStart_button.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in attnSuccessComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "attnSuccess" ---
    for thisComponent in attnSuccessComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if practiceStart.keys in ['', [], None]:  # No response was made
        practiceStart.keys = None
    attnChecker.addData('practiceStart.keys',practiceStart.keys)
    if practiceStart.keys != None:  # we had a response
        attnChecker.addData('practiceStart.rt', practiceStart.rt)
    # the Routine "attnSuccess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    practiceTrial = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='practiceTrial')
    thisExp.addLoop(practiceTrial)  # add the loop to the experiment
    thisPracticeTrial = practiceTrial.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
    if thisPracticeTrial != None:
        for paramName in thisPracticeTrial:
            exec('{} = thisPracticeTrial[paramName]'.format(paramName))
    
    for thisPracticeTrial in practiceTrial:
        currentLoop = practiceTrial
        # abbreviate parameter names if possible (e.g. rgb = thisPracticeTrial.rgb)
        if thisPracticeTrial != None:
            for paramName in thisPracticeTrial:
                exec('{} = thisPracticeTrial[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        practiceRepeat = data.TrialHandler(nReps=99.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='practiceRepeat')
        thisExp.addLoop(practiceRepeat)  # add the loop to the experiment
        thisPracticeRepeat = practiceRepeat.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisPracticeRepeat.rgb)
        if thisPracticeRepeat != None:
            for paramName in thisPracticeRepeat:
                exec('{} = thisPracticeRepeat[paramName]'.format(paramName))
        
        for thisPracticeRepeat in practiceRepeat:
            currentLoop = practiceRepeat
            # abbreviate parameter names if possible (e.g. rgb = thisPracticeRepeat.rgb)
            if thisPracticeRepeat != None:
                for paramName in thisPracticeRepeat:
                    exec('{} = thisPracticeRepeat[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "fixation" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            # Run 'Begin Routine' code from randDuration
            fixation_duration = np.random.normal(1.5, 1)
            # keep track of which components have finished
            fixationComponents = [fixCross]
            for thisComponent in fixationComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "fixation" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fixCross* updates
                if fixCross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixCross.frameNStart = frameN  # exact frame index
                    fixCross.tStart = t  # local t and not account for scr refresh
                    fixCross.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixCross, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixCross.started')
                    fixCross.setAutoDraw(True)
                if fixCross.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixCross.tStartRefresh + fixation_duration-frameTolerance:
                        # keep track of stop time/frame for later
                        fixCross.tStop = t  # not accounting for scr refresh
                        fixCross.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'fixCross.stopped')
                        fixCross.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in fixationComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "fixation" ---
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # --- Prepare to start Routine "practiceFace" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            practiceResp.keys = []
            practiceResp.rt = []
            _practiceResp_allKeys = []
            # Run 'Begin Routine' code from respCheck_2
            redo = 0
            
            
            # keep track of which components have finished
            practiceFaceComponents = [practiceResp, respIndicator_2, practiceImage]
            for thisComponent in practiceFaceComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "practiceFace" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *practiceResp* updates
                waitOnFlip = False
                if practiceResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    practiceResp.frameNStart = frameN  # exact frame index
                    practiceResp.tStart = t  # local t and not account for scr refresh
                    practiceResp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practiceResp, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practiceResp.started')
                    practiceResp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(practiceResp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(practiceResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if practiceResp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > practiceResp.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        practiceResp.tStop = t  # not accounting for scr refresh
                        practiceResp.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'practiceResp.stopped')
                        practiceResp.status = FINISHED
                if practiceResp.status == STARTED and not waitOnFlip:
                    theseKeys = practiceResp.getKeys(keyList=['j', 'k'], waitRelease=False)
                    _practiceResp_allKeys.extend(theseKeys)
                    if len(_practiceResp_allKeys):
                        practiceResp.keys = _practiceResp_allKeys[-1].name  # just the last key pressed
                        practiceResp.rt = _practiceResp_allKeys[-1].rt
                
                # *respIndicator_2* updates
                if respIndicator_2.status == NOT_STARTED and practiceResp.keys:
                    # keep track of start time/frame for later
                    respIndicator_2.frameNStart = frameN  # exact frame index
                    respIndicator_2.tStart = t  # local t and not account for scr refresh
                    respIndicator_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(respIndicator_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'respIndicator_2.started')
                    respIndicator_2.setAutoDraw(True)
                if respIndicator_2.status == STARTED:
                    if bool(practiceImage.status==FINISHED):
                        # keep track of stop time/frame for later
                        respIndicator_2.tStop = t  # not accounting for scr refresh
                        respIndicator_2.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'respIndicator_2.stopped')
                        respIndicator_2.setAutoDraw(False)
                
                # *practiceImage* updates
                if practiceImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    practiceImage.frameNStart = frameN  # exact frame index
                    practiceImage.tStart = t  # local t and not account for scr refresh
                    practiceImage.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(practiceImage, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'practiceImage.started')
                    practiceImage.setAutoDraw(True)
                # Run 'Each Frame' code from endTrial_2
                if t > 2:
                    continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in practiceFaceComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "practiceFace" ---
            for thisComponent in practiceFaceComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if practiceResp.keys in ['', [], None]:  # No response was made
                practiceResp.keys = None
            practiceRepeat.addData('practiceResp.keys',practiceResp.keys)
            if practiceResp.keys != None:  # we had a response
                practiceRepeat.addData('practiceResp.rt', practiceResp.rt)
            # Run 'End Routine' code from respCheck_2
            keys = event.getKeys()
            if len(keys) > 0:
                if 'k' in keys or 'j' in keys:
                    practiceRepeat.finished = True
                    redo = 0
                else:
                    redo = 1
                    timesRedone = timesRedone +1
            else:
                redo = 1
                timesRedone = timesRedone + 1
                
            thisExp.addData('timesRedone', timesRedone)
            # the Routine "practiceFace" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            practiceFailed = data.TrialHandler(nReps=redo, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=[None],
                seed=None, name='practiceFailed')
            thisExp.addLoop(practiceFailed)  # add the loop to the experiment
            thisPracticeFailed = practiceFailed.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisPracticeFailed.rgb)
            if thisPracticeFailed != None:
                for paramName in thisPracticeFailed:
                    exec('{} = thisPracticeFailed[paramName]'.format(paramName))
            
            for thisPracticeFailed in practiceFailed:
                currentLoop = practiceFailed
                # abbreviate parameter names if possible (e.g. rgb = thisPracticeFailed.rgb)
                if thisPracticeFailed != None:
                    for paramName in thisPracticeFailed:
                        exec('{} = thisPracticeFailed[paramName]'.format(paramName))
                
                # --- Prepare to start Routine "redo_feedback" ---
                continueRoutine = True
                routineForceEnded = False
                # update component parameters for each repeat
                timeoutReminder.setText(instr)
                redo_keypress.keys = []
                redo_keypress.rt = []
                _redo_keypress_allKeys = []
                # keep track of which components have finished
                redo_feedbackComponents = [out_of_time_2, timeoutReminder, redo_keypress]
                for thisComponent in redo_feedbackComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                frameN = -1
                
                # --- Run Routine "redo_feedback" ---
                while continueRoutine:
                    # get current time
                    t = routineTimer.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *out_of_time_2* updates
                    if out_of_time_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        out_of_time_2.frameNStart = frameN  # exact frame index
                        out_of_time_2.tStart = t  # local t and not account for scr refresh
                        out_of_time_2.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(out_of_time_2, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'out_of_time_2.started')
                        out_of_time_2.setAutoDraw(True)
                    
                    # *timeoutReminder* updates
                    if timeoutReminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        timeoutReminder.frameNStart = frameN  # exact frame index
                        timeoutReminder.tStart = t  # local t and not account for scr refresh
                        timeoutReminder.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(timeoutReminder, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'timeoutReminder.started')
                        timeoutReminder.setAutoDraw(True)
                    
                    # *redo_keypress* updates
                    waitOnFlip = False
                    if redo_keypress.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                        # keep track of start time/frame for later
                        redo_keypress.frameNStart = frameN  # exact frame index
                        redo_keypress.tStart = t  # local t and not account for scr refresh
                        redo_keypress.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(redo_keypress, 'tStartRefresh')  # time at next scr refresh
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'redo_keypress.started')
                        redo_keypress.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(redo_keypress.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(redo_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if redo_keypress.status == STARTED and not waitOnFlip:
                        theseKeys = redo_keypress.getKeys(keyList=['space'], waitRelease=False)
                        _redo_keypress_allKeys.extend(theseKeys)
                        if len(_redo_keypress_allKeys):
                            redo_keypress.keys = _redo_keypress_allKeys[-1].name  # just the last key pressed
                            redo_keypress.rt = _redo_keypress_allKeys[-1].rt
                            # a response ends the routine
                            continueRoutine = False
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        routineForceEnded = True
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in redo_feedbackComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # --- Ending Routine "redo_feedback" ---
                for thisComponent in redo_feedbackComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # check responses
                if redo_keypress.keys in ['', [], None]:  # No response was made
                    redo_keypress.keys = None
                practiceFailed.addData('redo_keypress.keys',redo_keypress.keys)
                if redo_keypress.keys != None:  # we had a response
                    practiceFailed.addData('redo_keypress.rt', redo_keypress.rt)
                # Run 'End Routine' code from timeoutResume
                event.getKeys()
                
                # the Routine "redo_feedback" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                thisExp.nextEntry()
                
            # completed redo repeats of 'practiceFailed'
            
            thisExp.nextEntry()
            
        # completed 99.0 repeats of 'practiceRepeat'
        
        
        # --- Prepare to start Routine "ratingScale" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        attractiveness_slider.reset()
        attrRating.keys = []
        attrRating.rt = []
        _attrRating_allKeys = []
        # keep track of which components have finished
        ratingScaleComponents = [attractiveness_slider, attractiveness_instr, notAttractive, veryAttractive, attrRating]
        for thisComponent in ratingScaleComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "ratingScale" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *attractiveness_slider* updates
            if attractiveness_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                attractiveness_slider.frameNStart = frameN  # exact frame index
                attractiveness_slider.tStart = t  # local t and not account for scr refresh
                attractiveness_slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(attractiveness_slider, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'attractiveness_slider.started')
                attractiveness_slider.setAutoDraw(True)
            
            # *attractiveness_instr* updates
            if attractiveness_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                attractiveness_instr.frameNStart = frameN  # exact frame index
                attractiveness_instr.tStart = t  # local t and not account for scr refresh
                attractiveness_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(attractiveness_instr, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'attractiveness_instr.started')
                attractiveness_instr.setAutoDraw(True)
            
            # *notAttractive* updates
            if notAttractive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                notAttractive.frameNStart = frameN  # exact frame index
                notAttractive.tStart = t  # local t and not account for scr refresh
                notAttractive.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(notAttractive, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'notAttractive.started')
                notAttractive.setAutoDraw(True)
            
            # *veryAttractive* updates
            if veryAttractive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                veryAttractive.frameNStart = frameN  # exact frame index
                veryAttractive.tStart = t  # local t and not account for scr refresh
                veryAttractive.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(veryAttractive, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'veryAttractive.started')
                veryAttractive.setAutoDraw(True)
            
            # *attrRating* updates
            waitOnFlip = False
            if attrRating.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                attrRating.frameNStart = frameN  # exact frame index
                attrRating.tStart = t  # local t and not account for scr refresh
                attrRating.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(attrRating, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'attrRating.started')
                attrRating.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(attrRating.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(attrRating.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if attrRating.status == STARTED and not waitOnFlip:
                theseKeys = attrRating.getKeys(keyList=['1','2','3','4','5','6','7','8','9'], waitRelease=False)
                _attrRating_allKeys.extend(theseKeys)
                if len(_attrRating_allKeys):
                    attrRating.keys = _attrRating_allKeys[-1].name  # just the last key pressed
                    attrRating.rt = _attrRating_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ratingScaleComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ratingScale" ---
        for thisComponent in ratingScaleComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if attrRating.keys in ['', [], None]:  # No response was made
            attrRating.keys = None
        practiceTrial.addData('attrRating.keys',attrRating.keys)
        if attrRating.keys != None:  # we had a response
            practiceTrial.addData('attrRating.rt', attrRating.rt)
        # the Routine "ratingScale" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'practiceTrial'
    
    
    # --- Prepare to start Routine "introDone" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # keep track of which components have finished
    introDoneComponents = [attnSuccess_continue, key_resp_3]
    for thisComponent in introDoneComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "introDone" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *attnSuccess_continue* updates
        if attnSuccess_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            attnSuccess_continue.frameNStart = frameN  # exact frame index
            attnSuccess_continue.tStart = t  # local t and not account for scr refresh
            attnSuccess_continue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(attnSuccess_continue, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'attnSuccess_continue.started')
            attnSuccess_continue.setAutoDraw(True)
        
        # *key_resp_3* updates
        waitOnFlip = False
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_3.started')
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in introDoneComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "introDone" ---
    for thisComponent in introDoneComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    attnChecker.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        attnChecker.addData('key_resp_3.rt', key_resp_3.rt)
    # the Routine "introDone" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'attnChecker'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('fluency_conditions.xlsx', selection=selected_rows),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    repeat_loop = data.TrialHandler(nReps=99.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='repeat_loop')
    thisExp.addLoop(repeat_loop)  # add the loop to the experiment
    thisRepeat_loop = repeat_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_loop.rgb)
    if thisRepeat_loop != None:
        for paramName in thisRepeat_loop:
            exec('{} = thisRepeat_loop[paramName]'.format(paramName))
    
    for thisRepeat_loop in repeat_loop:
        currentLoop = repeat_loop
        # abbreviate parameter names if possible (e.g. rgb = thisRepeat_loop.rgb)
        if thisRepeat_loop != None:
            for paramName in thisRepeat_loop:
                exec('{} = thisRepeat_loop[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "fixation" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        # Run 'Begin Routine' code from randDuration
        fixation_duration = np.random.normal(1.5, 1)
        # keep track of which components have finished
        fixationComponents = [fixCross]
        for thisComponent in fixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fixation" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixCross* updates
            if fixCross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixCross.frameNStart = frameN  # exact frame index
                fixCross.tStart = t  # local t and not account for scr refresh
                fixCross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixCross, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fixCross.started')
                fixCross.setAutoDraw(True)
            if fixCross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixCross.tStartRefresh + fixation_duration-frameTolerance:
                    # keep track of stop time/frame for later
                    fixCross.tStop = t  # not accounting for scr refresh
                    fixCross.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fixCross.stopped')
                    fixCross.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fixation" ---
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "fixation" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "faceOnset" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        catResp.keys = []
        catResp.rt = []
        _catResp_allKeys = []
        face_image.setImage(face_file)
        # Run 'Begin Routine' code from respCheck
        redo = 0
        
        
        # keep track of which components have finished
        faceOnsetComponents = [catResp, respIndicator, face_image]
        for thisComponent in faceOnsetComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "faceOnset" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *catResp* updates
            waitOnFlip = False
            if catResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                catResp.frameNStart = frameN  # exact frame index
                catResp.tStart = t  # local t and not account for scr refresh
                catResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(catResp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'catResp.started')
                catResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(catResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(catResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if catResp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > catResp.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    catResp.tStop = t  # not accounting for scr refresh
                    catResp.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'catResp.stopped')
                    catResp.status = FINISHED
            if catResp.status == STARTED and not waitOnFlip:
                theseKeys = catResp.getKeys(keyList=['j', 'k'], waitRelease=False)
                _catResp_allKeys.extend(theseKeys)
                if len(_catResp_allKeys):
                    catResp.keys = _catResp_allKeys[-1].name  # just the last key pressed
                    catResp.rt = _catResp_allKeys[-1].rt
            
            # *respIndicator* updates
            if respIndicator.status == NOT_STARTED and catResp.keys:
                # keep track of start time/frame for later
                respIndicator.frameNStart = frameN  # exact frame index
                respIndicator.tStart = t  # local t and not account for scr refresh
                respIndicator.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(respIndicator, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'respIndicator.started')
                respIndicator.setAutoDraw(True)
            if respIndicator.status == STARTED:
                if bool(face_image.status==FINISHED):
                    # keep track of stop time/frame for later
                    respIndicator.tStop = t  # not accounting for scr refresh
                    respIndicator.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'respIndicator.stopped')
                    respIndicator.setAutoDraw(False)
            
            # *face_image* updates
            if face_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                face_image.frameNStart = frameN  # exact frame index
                face_image.tStart = t  # local t and not account for scr refresh
                face_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(face_image, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'face_image.started')
                face_image.setAutoDraw(True)
            # Run 'Each Frame' code from endTrial
            if t > 2:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in faceOnsetComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "faceOnset" ---
        for thisComponent in faceOnsetComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if catResp.keys in ['', [], None]:  # No response was made
            catResp.keys = None
        repeat_loop.addData('catResp.keys',catResp.keys)
        if catResp.keys != None:  # we had a response
            repeat_loop.addData('catResp.rt', catResp.rt)
        # Run 'End Routine' code from respCheck
        keys = event.getKeys()
        if len(keys) > 0:
            if 'k' in keys or 'j' in keys:
                repeat_loop.finished = True
                redo = 0
            else:
                redo = 1
                timesRedone = timesRedone +1
        else:
            redo = 1
            timesRedone = timesRedone + 1
            
        thisExp.addData('timesRedone', timesRedone)
        thisExp.addData('catTrialResp', keys)
        # the Routine "faceOnset" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        redo_feedback_loop = data.TrialHandler(nReps=redo, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='redo_feedback_loop')
        thisExp.addLoop(redo_feedback_loop)  # add the loop to the experiment
        thisRedo_feedback_loop = redo_feedback_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisRedo_feedback_loop.rgb)
        if thisRedo_feedback_loop != None:
            for paramName in thisRedo_feedback_loop:
                exec('{} = thisRedo_feedback_loop[paramName]'.format(paramName))
        
        for thisRedo_feedback_loop in redo_feedback_loop:
            currentLoop = redo_feedback_loop
            # abbreviate parameter names if possible (e.g. rgb = thisRedo_feedback_loop.rgb)
            if thisRedo_feedback_loop != None:
                for paramName in thisRedo_feedback_loop:
                    exec('{} = thisRedo_feedback_loop[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "redo_feedback" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            timeoutReminder.setText(instr)
            redo_keypress.keys = []
            redo_keypress.rt = []
            _redo_keypress_allKeys = []
            # keep track of which components have finished
            redo_feedbackComponents = [out_of_time_2, timeoutReminder, redo_keypress]
            for thisComponent in redo_feedbackComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "redo_feedback" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *out_of_time_2* updates
                if out_of_time_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    out_of_time_2.frameNStart = frameN  # exact frame index
                    out_of_time_2.tStart = t  # local t and not account for scr refresh
                    out_of_time_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(out_of_time_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'out_of_time_2.started')
                    out_of_time_2.setAutoDraw(True)
                
                # *timeoutReminder* updates
                if timeoutReminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    timeoutReminder.frameNStart = frameN  # exact frame index
                    timeoutReminder.tStart = t  # local t and not account for scr refresh
                    timeoutReminder.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(timeoutReminder, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'timeoutReminder.started')
                    timeoutReminder.setAutoDraw(True)
                
                # *redo_keypress* updates
                waitOnFlip = False
                if redo_keypress.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    redo_keypress.frameNStart = frameN  # exact frame index
                    redo_keypress.tStart = t  # local t and not account for scr refresh
                    redo_keypress.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(redo_keypress, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'redo_keypress.started')
                    redo_keypress.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(redo_keypress.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(redo_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if redo_keypress.status == STARTED and not waitOnFlip:
                    theseKeys = redo_keypress.getKeys(keyList=['space'], waitRelease=False)
                    _redo_keypress_allKeys.extend(theseKeys)
                    if len(_redo_keypress_allKeys):
                        redo_keypress.keys = _redo_keypress_allKeys[-1].name  # just the last key pressed
                        redo_keypress.rt = _redo_keypress_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in redo_feedbackComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "redo_feedback" ---
            for thisComponent in redo_feedbackComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if redo_keypress.keys in ['', [], None]:  # No response was made
                redo_keypress.keys = None
            redo_feedback_loop.addData('redo_keypress.keys',redo_keypress.keys)
            if redo_keypress.keys != None:  # we had a response
                redo_feedback_loop.addData('redo_keypress.rt', redo_keypress.rt)
            # Run 'End Routine' code from timeoutResume
            event.getKeys()
            
            # the Routine "redo_feedback" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed redo repeats of 'redo_feedback_loop'
        
        thisExp.nextEntry()
        
    # completed 99.0 repeats of 'repeat_loop'
    
    
    # --- Prepare to start Routine "ratingScale" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    attractiveness_slider.reset()
    attrRating.keys = []
    attrRating.rt = []
    _attrRating_allKeys = []
    # keep track of which components have finished
    ratingScaleComponents = [attractiveness_slider, attractiveness_instr, notAttractive, veryAttractive, attrRating]
    for thisComponent in ratingScaleComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ratingScale" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *attractiveness_slider* updates
        if attractiveness_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            attractiveness_slider.frameNStart = frameN  # exact frame index
            attractiveness_slider.tStart = t  # local t and not account for scr refresh
            attractiveness_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(attractiveness_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'attractiveness_slider.started')
            attractiveness_slider.setAutoDraw(True)
        
        # *attractiveness_instr* updates
        if attractiveness_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            attractiveness_instr.frameNStart = frameN  # exact frame index
            attractiveness_instr.tStart = t  # local t and not account for scr refresh
            attractiveness_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(attractiveness_instr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'attractiveness_instr.started')
            attractiveness_instr.setAutoDraw(True)
        
        # *notAttractive* updates
        if notAttractive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            notAttractive.frameNStart = frameN  # exact frame index
            notAttractive.tStart = t  # local t and not account for scr refresh
            notAttractive.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(notAttractive, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'notAttractive.started')
            notAttractive.setAutoDraw(True)
        
        # *veryAttractive* updates
        if veryAttractive.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            veryAttractive.frameNStart = frameN  # exact frame index
            veryAttractive.tStart = t  # local t and not account for scr refresh
            veryAttractive.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(veryAttractive, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'veryAttractive.started')
            veryAttractive.setAutoDraw(True)
        
        # *attrRating* updates
        waitOnFlip = False
        if attrRating.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            attrRating.frameNStart = frameN  # exact frame index
            attrRating.tStart = t  # local t and not account for scr refresh
            attrRating.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(attrRating, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'attrRating.started')
            attrRating.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(attrRating.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(attrRating.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if attrRating.status == STARTED and not waitOnFlip:
            theseKeys = attrRating.getKeys(keyList=['1','2','3','4','5','6','7','8','9'], waitRelease=False)
            _attrRating_allKeys.extend(theseKeys)
            if len(_attrRating_allKeys):
                attrRating.keys = _attrRating_allKeys[-1].name  # just the last key pressed
                attrRating.rt = _attrRating_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ratingScaleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ratingScale" ---
    for thisComponent in ratingScaleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if attrRating.keys in ['', [], None]:  # No response was made
        attrRating.keys = None
    trials.addData('attrRating.keys',attrRating.keys)
    if attrRating.keys != None:  # we had a response
        trials.addData('attrRating.rt', attrRating.rt)
    # the Routine "ratingScale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cont" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    reminder.setText(instr)
    contResp.keys = []
    contResp.rt = []
    _contResp_allKeys = []
    # keep track of which components have finished
    contComponents = [trialPassed, fixCross_2, reminder, contResp, contPrompt]
    for thisComponent in contComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "cont" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *trialPassed* updates
        if trialPassed.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialPassed.frameNStart = frameN  # exact frame index
            trialPassed.tStart = t  # local t and not account for scr refresh
            trialPassed.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialPassed, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'trialPassed.started')
            trialPassed.setAutoDraw(True)
        
        # *fixCross_2* updates
        if fixCross_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixCross_2.frameNStart = frameN  # exact frame index
            fixCross_2.tStart = t  # local t and not account for scr refresh
            fixCross_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixCross_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fixCross_2.started')
            fixCross_2.setAutoDraw(True)
        
        # *reminder* updates
        if reminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            reminder.frameNStart = frameN  # exact frame index
            reminder.tStart = t  # local t and not account for scr refresh
            reminder.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reminder, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'reminder.started')
            reminder.setAutoDraw(True)
        
        # *contResp* updates
        waitOnFlip = False
        if contResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            contResp.frameNStart = frameN  # exact frame index
            contResp.tStart = t  # local t and not account for scr refresh
            contResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(contResp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'contResp.started')
            contResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(contResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(contResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if contResp.status == STARTED and not waitOnFlip:
            theseKeys = contResp.getKeys(keyList=['space'], waitRelease=False)
            _contResp_allKeys.extend(theseKeys)
            if len(_contResp_allKeys):
                contResp.keys = _contResp_allKeys[-1].name  # just the last key pressed
                contResp.rt = _contResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *contPrompt* updates
        if contPrompt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            contPrompt.frameNStart = frameN  # exact frame index
            contPrompt.tStart = t  # local t and not account for scr refresh
            contPrompt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(contPrompt, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'contPrompt.started')
            contPrompt.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in contComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "cont" ---
    for thisComponent in contComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if contResp.keys in ['', [], None]:  # No response was made
        contResp.keys = None
    trials.addData('contResp.keys',contResp.keys)
    if contResp.keys != None:  # we had a response
        trials.addData('contResp.rt', contResp.rt)
    # the Routine "cont" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "intro2Questions" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
contResp_2.keys = []
contResp_2.rt = []
_contResp_2_allKeys = []
# keep track of which components have finished
intro2QuestionsComponents = [qsIntro, contResp_2]
for thisComponent in intro2QuestionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "intro2Questions" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *qsIntro* updates
    if qsIntro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        qsIntro.frameNStart = frameN  # exact frame index
        qsIntro.tStart = t  # local t and not account for scr refresh
        qsIntro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(qsIntro, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'qsIntro.started')
        qsIntro.setAutoDraw(True)
    
    # *contResp_2* updates
    waitOnFlip = False
    if contResp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        contResp_2.frameNStart = frameN  # exact frame index
        contResp_2.tStart = t  # local t and not account for scr refresh
        contResp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(contResp_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'contResp_2.started')
        contResp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(contResp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(contResp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if contResp_2.status == STARTED and not waitOnFlip:
        theseKeys = contResp_2.getKeys(keyList=['space'], waitRelease=False)
        _contResp_2_allKeys.extend(theseKeys)
        if len(_contResp_2_allKeys):
            contResp_2.keys = _contResp_2_allKeys[-1].name  # just the last key pressed
            contResp_2.rt = _contResp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro2QuestionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "intro2Questions" ---
for thisComponent in intro2QuestionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if contResp_2.keys in ['', [], None]:  # No response was made
    contResp_2.keys = None
thisExp.addData('contResp_2.keys',contResp_2.keys)
if contResp_2.keys != None:  # we had a response
    thisExp.addData('contResp_2.rt', contResp_2.rt)
thisExp.nextEntry()
# the Routine "intro2Questions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "closure1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ1.reset()
respQ2.reset()
respQ3.reset()
respQ4.reset()
# setup some python lists for storing info about the nextClick1
nextClick1.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText1
questions1.alignText='left'
questions1.alignHoriz = 'left'
# keep track of which components have finished
closure1Components = [qsInstr, questions1, respQ1, respQ2, respQ3, respQ4, nextButton1, nextClick1]
for thisComponent in closure1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "closure1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *qsInstr* updates
    if qsInstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        qsInstr.frameNStart = frameN  # exact frame index
        qsInstr.tStart = t  # local t and not account for scr refresh
        qsInstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(qsInstr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'qsInstr.started')
        qsInstr.setAutoDraw(True)
    
    # *questions1* updates
    if questions1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions1.frameNStart = frameN  # exact frame index
        questions1.tStart = t  # local t and not account for scr refresh
        questions1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'questions1.started')
        questions1.setAutoDraw(True)
    
    # *respQ1* updates
    if respQ1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ1.frameNStart = frameN  # exact frame index
        respQ1.tStart = t  # local t and not account for scr refresh
        respQ1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ1.started')
        respQ1.setAutoDraw(True)
    
    # *respQ2* updates
    if respQ2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ2.frameNStart = frameN  # exact frame index
        respQ2.tStart = t  # local t and not account for scr refresh
        respQ2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ2.started')
        respQ2.setAutoDraw(True)
    
    # *respQ3* updates
    if respQ3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ3.frameNStart = frameN  # exact frame index
        respQ3.tStart = t  # local t and not account for scr refresh
        respQ3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ3.started')
        respQ3.setAutoDraw(True)
    
    # *respQ4* updates
    if respQ4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ4.frameNStart = frameN  # exact frame index
        respQ4.tStart = t  # local t and not account for scr refresh
        respQ4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ4.started')
        respQ4.setAutoDraw(True)
    
    # *nextButton1* updates
    if nextButton1.status == NOT_STARTED and (respQ1.rating + respQ2.rating + respQ3.rating + respQ4.rating) > 0:
        # keep track of start time/frame for later
        nextButton1.frameNStart = frameN  # exact frame index
        nextButton1.tStart = t  # local t and not account for scr refresh
        nextButton1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextButton1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'nextButton1.started')
        nextButton1.setAutoDraw(True)
    # *nextClick1* updates
    if nextClick1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        nextClick1.frameNStart = frameN  # exact frame index
        nextClick1.tStart = t  # local t and not account for scr refresh
        nextClick1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextClick1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('nextClick1.started', t)
        nextClick1.status = STARTED
        nextClick1.mouseClock.reset()
        prevButtonState = nextClick1.getPressed()  # if button is down already this ISN'T a new click
    if nextClick1.status == STARTED:  # only update if started and not finished!
        buttons = nextClick1.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(nextButton1)
                    clickableList = nextButton1
                except:
                    clickableList = [nextButton1]
                for obj in clickableList:
                    if obj.contains(nextClick1):
                        gotValidClick = True
                        nextClick1.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in closure1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "closure1" ---
for thisComponent in closure1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('respQ1.response', respQ1.getRating())
thisExp.addData('respQ1.rt', respQ1.getRT())
thisExp.addData('respQ2.response', respQ2.getRating())
thisExp.addData('respQ2.rt', respQ2.getRT())
thisExp.addData('respQ3.response', respQ3.getRating())
thisExp.addData('respQ3.rt', respQ3.getRT())
thisExp.addData('respQ4.response', respQ4.getRating())
thisExp.addData('respQ4.rt', respQ4.getRT())
# store data for thisExp (ExperimentHandler)
x, y = nextClick1.getPos()
buttons = nextClick1.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(nextButton1)
        clickableList = nextButton1
    except:
        clickableList = [nextButton1]
    for obj in clickableList:
        if obj.contains(nextClick1):
            gotValidClick = True
            nextClick1.clicked_name.append(obj.name)
thisExp.addData('nextClick1.x', x)
thisExp.addData('nextClick1.y', y)
thisExp.addData('nextClick1.leftButton', buttons[0])
thisExp.addData('nextClick1.midButton', buttons[1])
thisExp.addData('nextClick1.rightButton', buttons[2])
if len(nextClick1.clicked_name):
    thisExp.addData('nextClick1.clicked_name', nextClick1.clicked_name[0])
thisExp.nextEntry()
# the Routine "closure1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "closure2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ5.reset()
respQ6.reset()
respQ7.reset()
respQ8.reset()
# setup some python lists for storing info about the nextClick2
nextClick2.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText2
questions2.alignText='left'
questions2.alignHoriz = 'left'
# keep track of which components have finished
closure2Components = [qsInstr_2, questions2, respQ5, respQ6, respQ7, respQ8, nextButton2, nextClick2]
for thisComponent in closure2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "closure2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *qsInstr_2* updates
    if qsInstr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        qsInstr_2.frameNStart = frameN  # exact frame index
        qsInstr_2.tStart = t  # local t and not account for scr refresh
        qsInstr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(qsInstr_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'qsInstr_2.started')
        qsInstr_2.setAutoDraw(True)
    
    # *questions2* updates
    if questions2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions2.frameNStart = frameN  # exact frame index
        questions2.tStart = t  # local t and not account for scr refresh
        questions2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'questions2.started')
        questions2.setAutoDraw(True)
    
    # *respQ5* updates
    if respQ5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ5.frameNStart = frameN  # exact frame index
        respQ5.tStart = t  # local t and not account for scr refresh
        respQ5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ5.started')
        respQ5.setAutoDraw(True)
    
    # *respQ6* updates
    if respQ6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ6.frameNStart = frameN  # exact frame index
        respQ6.tStart = t  # local t and not account for scr refresh
        respQ6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ6.started')
        respQ6.setAutoDraw(True)
    
    # *respQ7* updates
    if respQ7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ7.frameNStart = frameN  # exact frame index
        respQ7.tStart = t  # local t and not account for scr refresh
        respQ7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ7, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ7.started')
        respQ7.setAutoDraw(True)
    
    # *respQ8* updates
    if respQ8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ8.frameNStart = frameN  # exact frame index
        respQ8.tStart = t  # local t and not account for scr refresh
        respQ8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ8, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ8.started')
        respQ8.setAutoDraw(True)
    
    # *nextButton2* updates
    if nextButton2.status == NOT_STARTED and (respQ5.rating + respQ6.rating + respQ7.rating + respQ8.rating) > 0:
        # keep track of start time/frame for later
        nextButton2.frameNStart = frameN  # exact frame index
        nextButton2.tStart = t  # local t and not account for scr refresh
        nextButton2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextButton2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'nextButton2.started')
        nextButton2.setAutoDraw(True)
    # *nextClick2* updates
    if nextClick2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        nextClick2.frameNStart = frameN  # exact frame index
        nextClick2.tStart = t  # local t and not account for scr refresh
        nextClick2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextClick2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('nextClick2.started', t)
        nextClick2.status = STARTED
        nextClick2.mouseClock.reset()
        prevButtonState = nextClick2.getPressed()  # if button is down already this ISN'T a new click
    if nextClick2.status == STARTED:  # only update if started and not finished!
        buttons = nextClick2.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(nextButton2)
                    clickableList = nextButton2
                except:
                    clickableList = [nextButton2]
                for obj in clickableList:
                    if obj.contains(nextClick2):
                        gotValidClick = True
                        nextClick2.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in closure2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "closure2" ---
for thisComponent in closure2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('respQ5.response', respQ5.getRating())
thisExp.addData('respQ5.rt', respQ5.getRT())
thisExp.addData('respQ6.response', respQ6.getRating())
thisExp.addData('respQ6.rt', respQ6.getRT())
thisExp.addData('respQ7.response', respQ7.getRating())
thisExp.addData('respQ7.rt', respQ7.getRT())
thisExp.addData('respQ8.response', respQ8.getRating())
thisExp.addData('respQ8.rt', respQ8.getRT())
# store data for thisExp (ExperimentHandler)
x, y = nextClick2.getPos()
buttons = nextClick2.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(nextButton2)
        clickableList = nextButton2
    except:
        clickableList = [nextButton2]
    for obj in clickableList:
        if obj.contains(nextClick2):
            gotValidClick = True
            nextClick2.clicked_name.append(obj.name)
thisExp.addData('nextClick2.x', x)
thisExp.addData('nextClick2.y', y)
thisExp.addData('nextClick2.leftButton', buttons[0])
thisExp.addData('nextClick2.midButton', buttons[1])
thisExp.addData('nextClick2.rightButton', buttons[2])
if len(nextClick2.clicked_name):
    thisExp.addData('nextClick2.clicked_name', nextClick2.clicked_name[0])
thisExp.nextEntry()
# the Routine "closure2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "closure3" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ9.reset()
respQ10.reset()
respQ11.reset()
respQ12.reset()
# setup some python lists for storing info about the nextClick3
nextClick3.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText3
questions3.alignText='left'
questions3.alignHoriz = 'left'
# keep track of which components have finished
closure3Components = [qsInstr_3, questions3, respQ9, respQ10, respQ11, respQ12, nextButton3, nextClick3]
for thisComponent in closure3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "closure3" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *qsInstr_3* updates
    if qsInstr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        qsInstr_3.frameNStart = frameN  # exact frame index
        qsInstr_3.tStart = t  # local t and not account for scr refresh
        qsInstr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(qsInstr_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'qsInstr_3.started')
        qsInstr_3.setAutoDraw(True)
    
    # *questions3* updates
    if questions3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions3.frameNStart = frameN  # exact frame index
        questions3.tStart = t  # local t and not account for scr refresh
        questions3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'questions3.started')
        questions3.setAutoDraw(True)
    
    # *respQ9* updates
    if respQ9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ9.frameNStart = frameN  # exact frame index
        respQ9.tStart = t  # local t and not account for scr refresh
        respQ9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ9, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ9.started')
        respQ9.setAutoDraw(True)
    
    # *respQ10* updates
    if respQ10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ10.frameNStart = frameN  # exact frame index
        respQ10.tStart = t  # local t and not account for scr refresh
        respQ10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ10, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ10.started')
        respQ10.setAutoDraw(True)
    
    # *respQ11* updates
    if respQ11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ11.frameNStart = frameN  # exact frame index
        respQ11.tStart = t  # local t and not account for scr refresh
        respQ11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ11, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ11.started')
        respQ11.setAutoDraw(True)
    
    # *respQ12* updates
    if respQ12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ12.frameNStart = frameN  # exact frame index
        respQ12.tStart = t  # local t and not account for scr refresh
        respQ12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ12, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ12.started')
        respQ12.setAutoDraw(True)
    
    # *nextButton3* updates
    if nextButton3.status == NOT_STARTED and (respQ9.rating + respQ10.rating + respQ11.rating + respQ12.rating) > 0:
        # keep track of start time/frame for later
        nextButton3.frameNStart = frameN  # exact frame index
        nextButton3.tStart = t  # local t and not account for scr refresh
        nextButton3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextButton3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'nextButton3.started')
        nextButton3.setAutoDraw(True)
    # *nextClick3* updates
    if nextClick3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        nextClick3.frameNStart = frameN  # exact frame index
        nextClick3.tStart = t  # local t and not account for scr refresh
        nextClick3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextClick3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('nextClick3.started', t)
        nextClick3.status = STARTED
        nextClick3.mouseClock.reset()
        prevButtonState = nextClick3.getPressed()  # if button is down already this ISN'T a new click
    if nextClick3.status == STARTED:  # only update if started and not finished!
        buttons = nextClick3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(nextButton3)
                    clickableList = nextButton3
                except:
                    clickableList = [nextButton3]
                for obj in clickableList:
                    if obj.contains(nextClick3):
                        gotValidClick = True
                        nextClick3.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in closure3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "closure3" ---
for thisComponent in closure3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('respQ9.response', respQ9.getRating())
thisExp.addData('respQ9.rt', respQ9.getRT())
thisExp.addData('respQ10.response', respQ10.getRating())
thisExp.addData('respQ10.rt', respQ10.getRT())
thisExp.addData('respQ11.response', respQ11.getRating())
thisExp.addData('respQ11.rt', respQ11.getRT())
thisExp.addData('respQ12.response', respQ12.getRating())
thisExp.addData('respQ12.rt', respQ12.getRT())
# store data for thisExp (ExperimentHandler)
x, y = nextClick3.getPos()
buttons = nextClick3.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(nextButton3)
        clickableList = nextButton3
    except:
        clickableList = [nextButton3]
    for obj in clickableList:
        if obj.contains(nextClick3):
            gotValidClick = True
            nextClick3.clicked_name.append(obj.name)
thisExp.addData('nextClick3.x', x)
thisExp.addData('nextClick3.y', y)
thisExp.addData('nextClick3.leftButton', buttons[0])
thisExp.addData('nextClick3.midButton', buttons[1])
thisExp.addData('nextClick3.rightButton', buttons[2])
if len(nextClick3.clicked_name):
    thisExp.addData('nextClick3.clicked_name', nextClick3.clicked_name[0])
thisExp.nextEntry()
# the Routine "closure3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "closure4" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ13.reset()
respQ14.reset()
respQ15.reset()
# setup some python lists for storing info about the nextClick4
nextClick4.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText4
questions4.alignText ='left'
questions4.alignHoriz = 'left'
# keep track of which components have finished
closure4Components = [qsInstr_4, questions4, respQ13, respQ14, respQ15, nextButton4, nextClick4]
for thisComponent in closure4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "closure4" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *qsInstr_4* updates
    if qsInstr_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        qsInstr_4.frameNStart = frameN  # exact frame index
        qsInstr_4.tStart = t  # local t and not account for scr refresh
        qsInstr_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(qsInstr_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'qsInstr_4.started')
        qsInstr_4.setAutoDraw(True)
    
    # *questions4* updates
    if questions4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions4.frameNStart = frameN  # exact frame index
        questions4.tStart = t  # local t and not account for scr refresh
        questions4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'questions4.started')
        questions4.setAutoDraw(True)
    
    # *respQ13* updates
    if respQ13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ13.frameNStart = frameN  # exact frame index
        respQ13.tStart = t  # local t and not account for scr refresh
        respQ13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ13, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ13.started')
        respQ13.setAutoDraw(True)
    
    # *respQ14* updates
    if respQ14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ14.frameNStart = frameN  # exact frame index
        respQ14.tStart = t  # local t and not account for scr refresh
        respQ14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ14, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ14.started')
        respQ14.setAutoDraw(True)
    
    # *respQ15* updates
    if respQ15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ15.frameNStart = frameN  # exact frame index
        respQ15.tStart = t  # local t and not account for scr refresh
        respQ15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ15, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ15.started')
        respQ15.setAutoDraw(True)
    
    # *nextButton4* updates
    if nextButton4.status == NOT_STARTED and (respQ13.rating + respQ14.rating + respQ15.rating) > 0:
        # keep track of start time/frame for later
        nextButton4.frameNStart = frameN  # exact frame index
        nextButton4.tStart = t  # local t and not account for scr refresh
        nextButton4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextButton4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'nextButton4.started')
        nextButton4.setAutoDraw(True)
    # *nextClick4* updates
    if nextClick4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        nextClick4.frameNStart = frameN  # exact frame index
        nextClick4.tStart = t  # local t and not account for scr refresh
        nextClick4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextClick4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('nextClick4.started', t)
        nextClick4.status = STARTED
        nextClick4.mouseClock.reset()
        prevButtonState = nextClick4.getPressed()  # if button is down already this ISN'T a new click
    if nextClick4.status == STARTED:  # only update if started and not finished!
        buttons = nextClick4.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(nextButton4)
                    clickableList = nextButton4
                except:
                    clickableList = [nextButton4]
                for obj in clickableList:
                    if obj.contains(nextClick4):
                        gotValidClick = True
                        nextClick4.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in closure4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "closure4" ---
for thisComponent in closure4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('respQ13.response', respQ13.getRating())
thisExp.addData('respQ13.rt', respQ13.getRT())
thisExp.addData('respQ14.response', respQ14.getRating())
thisExp.addData('respQ14.rt', respQ14.getRT())
thisExp.addData('respQ15.response', respQ15.getRating())
thisExp.addData('respQ15.rt', respQ15.getRT())
# store data for thisExp (ExperimentHandler)
x, y = nextClick4.getPos()
buttons = nextClick4.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(nextButton4)
        clickableList = nextButton4
    except:
        clickableList = [nextButton4]
    for obj in clickableList:
        if obj.contains(nextClick4):
            gotValidClick = True
            nextClick4.clicked_name.append(obj.name)
thisExp.addData('nextClick4.x', x)
thisExp.addData('nextClick4.y', y)
thisExp.addData('nextClick4.leftButton', buttons[0])
thisExp.addData('nextClick4.midButton', buttons[1])
thisExp.addData('nextClick4.rightButton', buttons[2])
if len(nextClick4.clicked_name):
    thisExp.addData('nextClick4.clicked_name', nextClick4.clicked_name[0])
thisExp.nextEntry()
# the Routine "closure4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "demographics" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respAge.reset()
genderResp1.reset()
genderResp2.reset()
# setup some python lists for storing info about the demographClick
demographClick.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from demogLeft
age.alignText='left'
age.alignHoriz = 'left'

gender.alignText='left'
gender.alignHoriz = 'left'
# keep track of which components have finished
demographicsComponents = [demographicsInstr, age, respAge, gender, genderResp1, genderResp2, nextButton5, demographClick]
for thisComponent in demographicsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "demographics" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *demographicsInstr* updates
    if demographicsInstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        demographicsInstr.frameNStart = frameN  # exact frame index
        demographicsInstr.tStart = t  # local t and not account for scr refresh
        demographicsInstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(demographicsInstr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'demographicsInstr.started')
        demographicsInstr.setAutoDraw(True)
    
    # *age* updates
    if age.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age.frameNStart = frameN  # exact frame index
        age.tStart = t  # local t and not account for scr refresh
        age.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'age.started')
        age.setAutoDraw(True)
    
    # *respAge* updates
    if respAge.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respAge.frameNStart = frameN  # exact frame index
        respAge.tStart = t  # local t and not account for scr refresh
        respAge.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respAge, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respAge.started')
        respAge.setAutoDraw(True)
    
    # *gender* updates
    if gender.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender.frameNStart = frameN  # exact frame index
        gender.tStart = t  # local t and not account for scr refresh
        gender.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'gender.started')
        gender.setAutoDraw(True)
    
    # *genderResp1* updates
    if genderResp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        genderResp1.frameNStart = frameN  # exact frame index
        genderResp1.tStart = t  # local t and not account for scr refresh
        genderResp1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genderResp1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genderResp1.started')
        genderResp1.setAutoDraw(True)
    
    # *genderResp2* updates
    if genderResp2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        genderResp2.frameNStart = frameN  # exact frame index
        genderResp2.tStart = t  # local t and not account for scr refresh
        genderResp2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genderResp2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genderResp2.started')
        genderResp2.setAutoDraw(True)
    
    # *nextButton5* updates
    if nextButton5.status == NOT_STARTED and respAge.rating and genderResp1.rating:
        # keep track of start time/frame for later
        nextButton5.frameNStart = frameN  # exact frame index
        nextButton5.tStart = t  # local t and not account for scr refresh
        nextButton5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(nextButton5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'nextButton5.started')
        nextButton5.setAutoDraw(True)
    # *demographClick* updates
    if demographClick.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        demographClick.frameNStart = frameN  # exact frame index
        demographClick.tStart = t  # local t and not account for scr refresh
        demographClick.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(demographClick, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('demographClick.started', t)
        demographClick.status = STARTED
        demographClick.mouseClock.reset()
        prevButtonState = demographClick.getPressed()  # if button is down already this ISN'T a new click
    if demographClick.status == STARTED:  # only update if started and not finished!
        buttons = demographClick.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(nextButton5)
                    clickableList = nextButton5
                except:
                    clickableList = [nextButton5]
                for obj in clickableList:
                    if obj.contains(demographClick):
                        gotValidClick = True
                        demographClick.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in demographicsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "demographics" ---
for thisComponent in demographicsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('respAge.response', respAge.getRating())
thisExp.addData('respAge.rt', respAge.getRT())
thisExp.addData('genderResp1.response', genderResp1.getRating())
thisExp.addData('genderResp1.rt', genderResp1.getRT())
thisExp.addData('genderResp2.text',genderResp2.text)
# store data for thisExp (ExperimentHandler)
x, y = demographClick.getPos()
buttons = demographClick.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(nextButton5)
        clickableList = nextButton5
    except:
        clickableList = [nextButton5]
    for obj in clickableList:
        if obj.contains(demographClick):
            gotValidClick = True
            demographClick.clicked_name.append(obj.name)
thisExp.addData('demographClick.x', x)
thisExp.addData('demographClick.y', y)
thisExp.addData('demographClick.leftButton', buttons[0])
thisExp.addData('demographClick.midButton', buttons[1])
thisExp.addData('demographClick.rightButton', buttons[2])
if len(demographClick.clicked_name):
    thisExp.addData('demographClick.clicked_name', demographClick.clicked_name[0])
thisExp.nextEntry()
# the Routine "demographics" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "openAnswer" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
textbox.reset()
# setup some python lists for storing info about the openanswerClick
openanswerClick.x = []
openanswerClick.y = []
openanswerClick.leftButton = []
openanswerClick.midButton = []
openanswerClick.rightButton = []
openanswerClick.time = []
openanswerClick.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
openAnswerComponents = [openPrompt, textbox, openanswerEnd, openanswerClick]
for thisComponent in openAnswerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "openAnswer" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *openPrompt* updates
    if openPrompt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        openPrompt.frameNStart = frameN  # exact frame index
        openPrompt.tStart = t  # local t and not account for scr refresh
        openPrompt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(openPrompt, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'openPrompt.started')
        openPrompt.setAutoDraw(True)
    
    # *textbox* updates
    if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox.frameNStart = frameN  # exact frame index
        textbox.tStart = t  # local t and not account for scr refresh
        textbox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'textbox.started')
        textbox.setAutoDraw(True)
    
    # *openanswerEnd* updates
    if openanswerEnd.status == NOT_STARTED and tThisFlip >= 3-frameTolerance:
        # keep track of start time/frame for later
        openanswerEnd.frameNStart = frameN  # exact frame index
        openanswerEnd.tStart = t  # local t and not account for scr refresh
        openanswerEnd.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(openanswerEnd, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'openanswerEnd.started')
        openanswerEnd.setAutoDraw(True)
    # *openanswerClick* updates
    if openanswerClick.status == NOT_STARTED and t >= 3-frameTolerance:
        # keep track of start time/frame for later
        openanswerClick.frameNStart = frameN  # exact frame index
        openanswerClick.tStart = t  # local t and not account for scr refresh
        openanswerClick.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(openanswerClick, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('openanswerClick.started', t)
        openanswerClick.status = STARTED
        openanswerClick.mouseClock.reset()
        prevButtonState = openanswerClick.getPressed()  # if button is down already this ISN'T a new click
    if openanswerClick.status == STARTED:  # only update if started and not finished!
        buttons = openanswerClick.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(openanswerEnd)
                    clickableList = openanswerEnd
                except:
                    clickableList = [openanswerEnd]
                for obj in clickableList:
                    if obj.contains(openanswerClick):
                        gotValidClick = True
                        openanswerClick.clicked_name.append(obj.name)
                x, y = openanswerClick.getPos()
                openanswerClick.x.append(x)
                openanswerClick.y.append(y)
                buttons = openanswerClick.getPressed()
                openanswerClick.leftButton.append(buttons[0])
                openanswerClick.midButton.append(buttons[1])
                openanswerClick.rightButton.append(buttons[2])
                openanswerClick.time.append(openanswerClick.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in openAnswerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "openAnswer" ---
for thisComponent in openAnswerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox.text',textbox.text)
# store data for thisExp (ExperimentHandler)
thisExp.addData('openanswerClick.x', openanswerClick.x)
thisExp.addData('openanswerClick.y', openanswerClick.y)
thisExp.addData('openanswerClick.leftButton', openanswerClick.leftButton)
thisExp.addData('openanswerClick.midButton', openanswerClick.midButton)
thisExp.addData('openanswerClick.rightButton', openanswerClick.rightButton)
thisExp.addData('openanswerClick.time', openanswerClick.time)
thisExp.addData('openanswerClick.clicked_name', openanswerClick.clicked_name)
thisExp.nextEntry()
# the Routine "openAnswer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "debrief" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
exitKey.keys = []
exitKey.rt = []
_exitKey_allKeys = []
# keep track of which components have finished
debriefComponents = [debriefText, exitMessage, exitKey]
for thisComponent in debriefComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "debrief" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *debriefText* updates
    if debriefText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        debriefText.frameNStart = frameN  # exact frame index
        debriefText.tStart = t  # local t and not account for scr refresh
        debriefText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(debriefText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'debriefText.started')
        debriefText.setAutoDraw(True)
    
    # *exitMessage* updates
    if exitMessage.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        exitMessage.frameNStart = frameN  # exact frame index
        exitMessage.tStart = t  # local t and not account for scr refresh
        exitMessage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exitMessage, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'exitMessage.started')
        exitMessage.setAutoDraw(True)
    
    # *exitKey* updates
    waitOnFlip = False
    if exitKey.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        exitKey.frameNStart = frameN  # exact frame index
        exitKey.tStart = t  # local t and not account for scr refresh
        exitKey.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(exitKey, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'exitKey.started')
        exitKey.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(exitKey.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(exitKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if exitKey.status == STARTED and not waitOnFlip:
        theseKeys = exitKey.getKeys(keyList=['tab'], waitRelease=False)
        _exitKey_allKeys.extend(theseKeys)
        if len(_exitKey_allKeys):
            exitKey.keys = _exitKey_allKeys[-1].name  # just the last key pressed
            exitKey.rt = _exitKey_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in debriefComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "debrief" ---
for thisComponent in debriefComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if exitKey.keys in ['', [], None]:  # No response was made
    exitKey.keys = None
thisExp.addData('exitKey.keys',exitKey.keys)
if exitKey.keys != None:  # we had a response
    thisExp.addData('exitKey.rt', exitKey.rt)
thisExp.nextEntry()
# the Routine "debrief" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
