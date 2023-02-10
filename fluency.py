#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on February 10, 2023, at 13:25
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
    'participant': '999',
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
    text='Welcome to the study! Please make sure you are in a quiet environment where you will be able to concentrate on the task. Before we begin, you must review the consent form on the following screen. \n\nPress the SPACE BAR whenever you are ready.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
welc_advance = keyboard.Keyboard()

# --- Initialize components for Routine "consent" ---
consentText = visual.TextStim(win=win, name='consentText',
    text='This form will give you information about the study so you can decide about participating in the research. This study is an investigation of visual perception and categorization. The session will last between 20 and 60 minutes in total. You will receive compensation at a rate of 8 per hour for your time. If you are interested in learning more about this study, we will inform you of our hypotheses immediately after you complete the study. We will not contact you again after you complete the study, although you are free to contact us at any time if you have any additional questions or concerns, or if you would like to learn the outcome of this study.\n\nYou can reach the principal investigator, Jeffrey Starns at jstarns@umass.edu or the Psychological and Brain Sciences Department Chair via Laura Wildman Hanlon at (413) 545-2387 or laurawh@umass.edu. If you have any questions concerning your rights as a research subject, you may contact the University of Massachusetts Amherst Human Research Protection Office (HRPO) at (413) 545-3428 or humansubjects@ora.umass.edu.\n\nPURPOSE: In this study, you will view a sequence of images (abstract shapes, objects, faces, or scenes) about which you will be asked to answer questions. The questions will relate either to perception (e.g., "Is this item part of group A or B?), or to your feelings about the item (e.g., "How attractive is the item?"). Your responses will be made by using your computer keyboard. The material will be either abstract shapes with no particular meaning, or everyday objects, faces, or scenes that are not offensive or provocative. You may also be asked to fill out short questionnaires after the main task. The questionnaires will consist of series of statements to which you will rate your agreement to on a numbered scale. The statements will not be offensive in nature.\n\nWe are not interested in how you perform individually, but whether people in general are able to visually identify or discriminate the images presented more effectively in some conditions than in others. The pattern of results will allow us to determine the processes that people use to identify and discriminate between objects, faces and scenes, and how they respond to them afterwards.\nRISKS: There are no expected risks to this study beyond the potential that you may become tired and/or bored with the task. To reduce the possibility that this will occur, the task will be self-paced (you may take breaks when needed). Loss of confidentiality is a risk (i.e., someone may inadvertently gain access to our records).\n\nAt the conclusion of this study, we may publish the results of this study in a scientific journal. Information will be presented in summary format and you will not be identified in any publications or presentations (in fact, we will no longer be able to determine which data files is yours). The data files containing your keyboard responses will be kept for a minimum of 6 years beyond publication of this study. After publication, we may share your data files with other researchers who may wish to re-analyze the results. However, there will no longer be any record of your identity at that time. This disclosure of the data is purely for scientific purposes.\n\nBENEFITS: You may not directly benefit from this research; however, we hope that your participation will provide some educational benefit by experiencing the nature of behavioral research on visual perception and categorization. For this reason, we encourage you to speak with the researcher after conclusion of your participation so that you can learn more about the design and hypotheses of this study. In addition, these results may benefit society in a number of ways, such as by increasing our understanding of how the process of categorization affects the perception of objects.\n\nPARTICIPATION: Your participation in the experiment is voluntary and you can withdraw at any time without penalty. You will still get payment for the time you have spent participating. You do not have to be in this study if you do not want to. If you agree to be in the study, but later change your mind, you may drop out at any time. There are no penalties or consequences of any kind if you decide that you do not want to participate. If you decide to withdraw during today\'s session, you will still receive 2 dollars per 15 minutes of participation, rounded up to the nearest 15 minutes.\n\nSUBJECT STATEMENT OF CONSENT: By clicking “I agree” I am indicating that I am eligible for this study and am agreeing to voluntarily enter this study. I have had a chance to read this consent form, and it was explained to me in a language which I use and understand. I understand that I can withdraw at any time.',
    font='Open Sans',
    pos=(0, 0.05), height=0.02, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
iAgree = visual.TextStim(win=win, name='iAgree',
    text='I Agree',
    font='Open Sans',
    pos=(0, -0.425), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
consentClick = event.Mouse(win=win)
x, y = [None, None]
consentClick.mouseClock = core.Clock()

# --- Initialize components for Routine "general_instr" ---
genInstr = visual.TextStim(win=win, name='genInstr',
    text="Thank you for participating! This experiment has two parts: \n\nIn the first half, you will complete a series of trials in which you will look at the middle of the screen and respond to a photo of a face as soon as it appears. The length of time before the face appears is random, so stay alert! After that, you will rate how attractive you found the face you just saw. By 'attractive', we do not mean in a sexual sense, but simply how pleasant the face was to see/\n\nIn the second half, you will answer a series of questions about yourself. Your inputs in both halves of the experiment are fully confidential.\n\nPress the SPACE BAR to continue.",
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instr_advance = keyboard.Keyboard()
# Run 'Begin Experiment' code from condSelect
#Use if-else flow to choose rows from the main
#file. These rows should be python "lists". 

#I find the easiest way to use the participant number
#for this purpose. 
#use the modulo operator (%) to cycle through

#selected_rows = [1, 2, 3, 4, 5] #for testing
#this line selects the condition based on the number of the participant
# 
#selected_rows = range((expInfo['participant']%110)*2,(expInfo['participant']%110+1)*2)

selected_rows = range((expInfo['participant']%8)*110,(expInfo['participant']%8+1)*110)



# --- Initialize components for Routine "specific_instr" ---
specific_instructions = visual.TextStim(win=win, name='specific_instructions',
    text='',
    font='Open Sans',
    pos=(0, .15), height=0.0425, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
fixCross_3 = visual.TextStim(win=win, name='fixCross_3',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
spec_instr_adv = keyboard.Keyboard()
definition = visual.TextStim(win=win, name='definition',
    text='',
    font='Open Sans',
    pos=(0,-0.15), height=0.0425, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# --- Initialize components for Routine "fixation" ---
fixCross = visual.TextStim(win=win, name='fixCross',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "trial" ---
key_resp = keyboard.Keyboard()
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

# --- Initialize components for Routine "redo_feedback" ---
out_of_time_2 = visual.TextStim(win=win, name='out_of_time_2',
    text='Oops, out of time! Remember to respond as soon as you see a face - you will need to re-try this trial.\n\nPress SPACE to try again.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
redo_keypress = keyboard.Keyboard()

# --- Initialize components for Routine "rating_scale" ---
attractiveness_instr = visual.TextStim(win=win, name='attractiveness_instr',
    text='Rate the attractiveness of the face you just saw on this scale from 1 (not attractive) to 9 (very attractive).',
    font='Open Sans',
    pos=(0, 0.1), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "cont" ---
contPrompt = visual.TextStim(win=win, name='contPrompt',
    text='Well done! Remember:',
    font='Open Sans',
    pos=(0, 0.15), height=0.045, wrapWidth=None, ori=0.0, 
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
    pos=(0, -0.15), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
contResp = keyboard.Keyboard()

# --- Initialize components for Routine "intro2Questions" ---
qsIntro = visual.TextStim(win=win, name='qsIntro',
    text='Good work! You have finished the first part of the study. Now you need to answers a set of questions for us; please do your best to do so honestly.\n\nPress the SPACE BAR to continue when you are ready.',
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
contResp_2 = keyboard.Keyboard()

# --- Initialize components for Routine "ambiguity1" ---
qsInstr = visual.TextStim(win=win, name='qsInstr',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree)',
    font='Open Sans',
    pos=(0, .35), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions1 = visual.TextStim(win=win, name='questions1',
    text="1. An expert who doesn't come up with a definite answer probably doesn't know too much\n\n\n2. There is really no such thing as a problem that can't be solved\n\n\n3. A good job is one where what is to be done and how it is to be done are always clear.\n\n\n4. In the long run it is possible to get more done by tackling small, simple problems rather than large and complicated ones\n\n\n5. What we are used to is always preferable to what is unfamiliar\n\n\n6. A person who leads an even, regular life in which few surprises or unexpected happenings really has a lot to be grateful for\n\n\n7. I like parties where I know most of the people more than ones where all or most of the people are complete strangers\n\n\n8. The sooner we all acquire similar values and ideals the better.",
    font='Open Sans',
    pos=(0, 0.01), height=0.025, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ1 = visual.Slider(win=win, name='respQ1',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.2675), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ2 = visual.Slider(win=win, name='respQ2',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.185), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ3 = visual.Slider(win=win, name='respQ3',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.11), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-4, readOnly=False)
respQ4 = visual.Slider(win=win, name='respQ4',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.0285), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-5, readOnly=False)
respQ5 = visual.Slider(win=win, name='respQ5',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.055), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-6, readOnly=False)
respQ6 = visual.Slider(win=win, name='respQ6',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.145), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-7, readOnly=False)
respQ7 = visual.Slider(win=win, name='respQ7',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.225), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-8, readOnly=False)
respQ8 = visual.Slider(win=win, name='respQ8',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.315), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-9, readOnly=False)
nextButton1 = visual.TextStim(win=win, name='nextButton1',
    text='NEXT',
    font='Open Sans',
    pos=(0, -0.375), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
nextClick1 = event.Mouse(win=win)
x, y = [None, None]
nextClick1.mouseClock = core.Clock()

# --- Initialize components for Routine "ambiguity2" ---
qsInstr_2 = visual.TextStim(win=win, name='qsInstr_2',
    text=' Please rate your agreement with the following statement on a scale from 1 (Strongly Disagree) to 7 (Strongly Agree)',
    font='Open Sans',
    pos=(0, .35), height=0.03, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions2 = visual.TextStim(win=win, name='questions2',
    text="9. I would like to live in a foreign country for a while\n\n\n10. People who fit their lives to a schedule probably miss most of the joy of living\n\n\n11. It is more fun to tackle a complicated problem than to solve a simple one\n\n\n12. Often the most interesting and stimulating people are those who don't mind being different and original\n\n\n13. People who insist upon a yes or no answer just don't know how complicated things really are\n\n\n14. Many of our most important decisions are based upon insufficient information\n\n\n15. Teachers or supervisors who hand out vague assignments give a chance for one to show initiative and originality\n\n\n16. A good teacher is one who makes you wonder about your way of looking at things",
    font='Open Sans',
    pos=(0, 0.01), height=0.025, wrapWidth=1.5, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
respQ9 = visual.Slider(win=win, name='respQ9',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.2675), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-2, readOnly=False)
respQ10 = visual.Slider(win=win, name='respQ10',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.185), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-3, readOnly=False)
respQ11 = visual.Slider(win=win, name='respQ11',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.11), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-4, readOnly=False)
respQ12 = visual.Slider(win=win, name='respQ12',
    startValue=None, size=(0.9, 0.015), pos=(0, 0.0285), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-5, readOnly=False)
respQ13 = visual.Slider(win=win, name='respQ13',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.055), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-6, readOnly=False)
respQ14 = visual.Slider(win=win, name='respQ14',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.145), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-7, readOnly=False)
respQ15 = visual.Slider(win=win, name='respQ15',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.225), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-8, readOnly=False)
respQ16 = visual.Slider(win=win, name='respQ16',
    startValue=None, size=(0.9, 0.015), pos=(0, -0.315), units=None,
    labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.015,
    flip=False, ori=0.0, depth=-9, readOnly=False)
nextButton2 = visual.TextStim(win=win, name='nextButton2',
    text='NEXT',
    font='Open Sans',
    pos=(0, -0.375), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);
nextClick2 = event.Mouse(win=win)
x, y = [None, None]
nextClick2.mouseClock = core.Clock()

# --- Initialize components for Routine "bye" ---
exitMessage = visual.TextStim(win=win, name='exitMessage',
    text='Thanks again for participating in the study! You can now exit this routine by pressing the TAB KEY.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
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
helloComponents = [welcome, welc_advance]
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
    
    # *welc_advance* updates
    waitOnFlip = False
    if welc_advance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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

# --- Prepare to start Routine "consent" ---
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
# keep track of which components have finished
consentComponents = [consentText, iAgree, consentClick]
for thisComponent in consentComponents:
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

# --- Run Routine "consent" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consentText* updates
    if consentText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consentText.frameNStart = frameN  # exact frame index
        consentText.tStart = t  # local t and not account for scr refresh
        consentText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consentText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'consentText.started')
        consentText.setAutoDraw(True)
    
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
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent" ---
for thisComponent in consentComponents:
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
# the Routine "consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "general_instr" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
instr_advance.keys = []
instr_advance.rt = []
_instr_advance_allKeys = []
# keep track of which components have finished
general_instrComponents = [genInstr, instr_advance]
for thisComponent in general_instrComponents:
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

# --- Run Routine "general_instr" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *genInstr* updates
    if genInstr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        genInstr.frameNStart = frameN  # exact frame index
        genInstr.tStart = t  # local t and not account for scr refresh
        genInstr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(genInstr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'genInstr.started')
        genInstr.setAutoDraw(True)
    
    # *instr_advance* updates
    waitOnFlip = False
    if instr_advance.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_advance.frameNStart = frameN  # exact frame index
        instr_advance.tStart = t  # local t and not account for scr refresh
        instr_advance.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_advance, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instr_advance.started')
        instr_advance.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instr_advance.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instr_advance.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_advance.status == STARTED and not waitOnFlip:
        theseKeys = instr_advance.getKeys(keyList=['space'], waitRelease=False)
        _instr_advance_allKeys.extend(theseKeys)
        if len(_instr_advance_allKeys):
            instr_advance.keys = _instr_advance_allKeys[-1].name  # just the last key pressed
            instr_advance.rt = _instr_advance_allKeys[-1].rt
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
    for thisComponent in general_instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "general_instr" ---
for thisComponent in general_instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if instr_advance.keys in ['', [], None]:  # No response was made
    instr_advance.keys = None
thisExp.addData('instr_advance.keys',instr_advance.keys)
if instr_advance.keys != None:  # we had a response
    thisExp.addData('instr_advance.rt', instr_advance.rt)
thisExp.nextEntry()
# the Routine "general_instr" was not non-slip safe, so reset the non-slip timer
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
    specific_instructions.setText(instr + ". A green frame around the image will show that your response was registered. Keep your eyes on the middle of the screen (as marked by the +) during the task. Press the SPACE BAR to begin when you are ready.")
    spec_instr_adv.keys = []
    spec_instr_adv.rt = []
    _spec_instr_adv_allKeys = []
    definition.setText(term)
    # keep track of which components have finished
    specific_instrComponents = [specific_instructions, fixCross_3, spec_instr_adv, definition]
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
        
        # *fixCross_3* updates
        if fixCross_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixCross_3.frameNStart = frameN  # exact frame index
            fixCross_3.tStart = t  # local t and not account for scr refresh
            fixCross_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixCross_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'fixCross_3.started')
            fixCross_3.setAutoDraw(True)
        
        # *spec_instr_adv* updates
        waitOnFlip = False
        if spec_instr_adv.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    # Run 'End Routine' code from isInstrDone
    instr_loop.finished = True
    event.getKeys()
    # the Routine "specific_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'instr_loop'


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
        
        # --- Prepare to start Routine "trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        face_image.setImage(face_file)
        # Run 'Begin Routine' code from respCheck
        redo = 0
        
        # keep track of which components have finished
        trialComponents = [key_resp, respIndicator, face_image]
        for thisComponent in trialComponents:
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
        
        # --- Run Routine "trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp.tStop = t  # not accounting for scr refresh
                    key_resp.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp.stopped')
                    key_resp.status = FINISHED
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['d', 'k'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
            
            # *respIndicator* updates
            if respIndicator.status == NOT_STARTED and key_resp.keys:
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
            if t > 1.999:
                continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        repeat_loop.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            repeat_loop.addData('key_resp.rt', key_resp.rt)
        # Run 'End Routine' code from respCheck
        keys = event.getKeys()
        if len(keys) > 0:
            if 'k' in keys or 'd' in keys:
                repeat_loop.finished = True
                redo = 0
            else:
                redo = 1
        else:
            redo = 1
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
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
            redo_keypress.keys = []
            redo_keypress.rt = []
            _redo_keypress_allKeys = []
            # keep track of which components have finished
            redo_feedbackComponents = [out_of_time_2, redo_keypress]
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
                if out_of_time_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    out_of_time_2.frameNStart = frameN  # exact frame index
                    out_of_time_2.tStart = t  # local t and not account for scr refresh
                    out_of_time_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(out_of_time_2, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'out_of_time_2.started')
                    out_of_time_2.setAutoDraw(True)
                
                # *redo_keypress* updates
                waitOnFlip = False
                if redo_keypress.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    
    
    # --- Prepare to start Routine "rating_scale" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code
    attractiveness_slider = visual.Slider(win=win, name='attractiveness_slider',
        startValue=None, size=(1.0, 0.05), pos=(0, -0.1), units=None,
        labels=["1","2","3","4","5","6","7","8","9"], ticks=(1, 2, 3, 4, 5, 6, 7, 8, 9), granularity=1.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.04,
        flip=False, ori=0.0, depth=0, readOnly=False, noMouse=True, 
        respKeys=('1', '2', '3', '4', '5', '6', '7', '8', '9'))
    # keep track of which components have finished
    rating_scaleComponents = [attractiveness_instr]
    for thisComponent in rating_scaleComponents:
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
    
    # --- Run Routine "rating_scale" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
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
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in rating_scaleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "rating_scale" ---
    for thisComponent in rating_scaleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "rating_scale" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "cont" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    reminder.setText(instr + ". Look at the middle of the screen and press the SPACE BAR to move onto the next trial.")
    contResp.keys = []
    contResp.rt = []
    _contResp_allKeys = []
    # keep track of which components have finished
    contComponents = [contPrompt, fixCross_2, reminder, contResp]
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

# --- Prepare to start Routine "ambiguity1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ1.reset()
respQ2.reset()
respQ3.reset()
respQ4.reset()
respQ5.reset()
respQ6.reset()
respQ7.reset()
respQ8.reset()
# setup some python lists for storing info about the nextClick1
nextClick1.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText1
questions1.alignText='left'
questions1.alignHoriz = 'left'
# keep track of which components have finished
ambiguity1Components = [qsInstr, questions1, respQ1, respQ2, respQ3, respQ4, respQ5, respQ6, respQ7, respQ8, nextButton1, nextClick1]
for thisComponent in ambiguity1Components:
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

# --- Run Routine "ambiguity1" ---
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
    
    # *nextButton1* updates
    if nextButton1.status == NOT_STARTED and respQ1.rating and respQ2.rating and respQ3.rating and respQ4.rating and respQ5.rating and respQ6.rating and respQ7.rating and respQ8.rating:
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
    for thisComponent in ambiguity1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ambiguity1" ---
for thisComponent in ambiguity1Components:
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
thisExp.addData('respQ5.response', respQ5.getRating())
thisExp.addData('respQ5.rt', respQ5.getRT())
thisExp.addData('respQ6.response', respQ6.getRating())
thisExp.addData('respQ6.rt', respQ6.getRT())
thisExp.addData('respQ7.response', respQ7.getRating())
thisExp.addData('respQ7.rt', respQ7.getRT())
thisExp.addData('respQ8.response', respQ8.getRating())
thisExp.addData('respQ8.rt', respQ8.getRT())
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
# the Routine "ambiguity1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ambiguity2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
respQ9.reset()
respQ10.reset()
respQ11.reset()
respQ12.reset()
respQ13.reset()
respQ14.reset()
respQ15.reset()
respQ16.reset()
# setup some python lists for storing info about the nextClick2
nextClick2.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from leftText2
questions2.alignText='left'
questions2.alignHoriz = 'left'
# keep track of which components have finished
ambiguity2Components = [qsInstr_2, questions2, respQ9, respQ10, respQ11, respQ12, respQ13, respQ14, respQ15, respQ16, nextButton2, nextClick2]
for thisComponent in ambiguity2Components:
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

# --- Run Routine "ambiguity2" ---
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
    
    # *respQ16* updates
    if respQ16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        respQ16.frameNStart = frameN  # exact frame index
        respQ16.tStart = t  # local t and not account for scr refresh
        respQ16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(respQ16, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'respQ16.started')
        respQ16.setAutoDraw(True)
    
    # *nextButton2* updates
    if nextButton2.status == NOT_STARTED and respQ9.rating and respQ10.rating and respQ11.rating and respQ12.rating and respQ13.rating and respQ14.rating and respQ15.rating and respQ16.rating:
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
    for thisComponent in ambiguity2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ambiguity2" ---
for thisComponent in ambiguity2Components:
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
thisExp.addData('respQ13.response', respQ13.getRating())
thisExp.addData('respQ13.rt', respQ13.getRT())
thisExp.addData('respQ14.response', respQ14.getRating())
thisExp.addData('respQ14.rt', respQ14.getRT())
thisExp.addData('respQ15.response', respQ15.getRating())
thisExp.addData('respQ15.rt', respQ15.getRT())
thisExp.addData('respQ16.response', respQ16.getRating())
thisExp.addData('respQ16.rt', respQ16.getRT())
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
# the Routine "ambiguity2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "bye" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
exitKey.keys = []
exitKey.rt = []
_exitKey_allKeys = []
# keep track of which components have finished
byeComponents = [exitMessage, exitKey]
for thisComponent in byeComponents:
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

# --- Run Routine "bye" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *exitMessage* updates
    if exitMessage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    if exitKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
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
    for thisComponent in byeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "bye" ---
for thisComponent in byeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if exitKey.keys in ['', [], None]:  # No response was made
    exitKey.keys = None
thisExp.addData('exitKey.keys',exitKey.keys)
if exitKey.keys != None:  # we had a response
    thisExp.addData('exitKey.rt', exitKey.rt)
thisExp.nextEntry()
# the Routine "bye" was not non-slip safe, so reset the non-slip timer
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
